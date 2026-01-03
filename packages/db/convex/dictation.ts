import { mutation, action, query, internalAction } from "./_generated/server";

import { v } from "convex/values";
import OpenAI from "openai";

// Initialize OpenAI client
// OpenAI client initialized lazily


const LANGUAGE_VOICE_MAP: Record<string, { voice: string }> = {
    en: { voice: 'alloy' },
    english: { voice: 'alloy' },
    es: { voice: 'ballad' },
    spanish: { voice: 'ballad' },
    fr: { voice: 'verse' },
    french: { voice: 'verse' },
    de: { voice: 'nova' },
    german: { voice: 'nova' },
    it: { voice: 'ash' },
    italian: { voice: 'ash' },
    pt: { voice: 'coral' },
    portuguese: { voice: 'coral' },
    ru: { voice: 'onyx' },
    russian: { voice: 'onyx' },
    ja: { voice: 'marin' },
    japanese: { voice: 'marin' },
    ko: { voice: 'sage' },
    korean: { voice: 'sage' },
    he: { voice: 'alloy' },
    hebrew: { voice: 'alloy' },
    ar: { voice: 'echo' },
    arabic: { voice: 'echo' },
    zh: { voice: 'cedar' },
    chinese: { voice: 'cedar' },
};

const DEFAULT_VOICE = 'alloy';

const normalizeLanguage = (language?: string): string => {
    if (!language) return 'en';
    const lower = language.toLowerCase();
    if (LANGUAGE_VOICE_MAP[lower]) {
        return lower;
    }
    const base = lower?.split(/[-_]/)[0] || 'en';
    return LANGUAGE_VOICE_MAP[base] ? base : 'en';
};

const selectVoice = (language: string) => {
    return LANGUAGE_VOICE_MAP[language]?.voice ?? DEFAULT_VOICE;
};

export const generateAudioAction = internalAction({
    args: {
        word: v.string(),
        language: v.string(),
    },
    handler: async (ctx, args) => {
        const normalizedLanguage = normalizeLanguage(args.language);
        const voice = selectVoice(normalizedLanguage);

        try {
            const apiKey = process.env.OPENAI_API_KEY;
            if (!apiKey) {
                console.error("Missing OPENAI_API_KEY environment variable");
                return null;
            }
            const openai = new OpenAI({ apiKey });

            const mp3 = await openai.audio.speech.create({
                model: "tts-1",
                voice: voice as any,
                input: args.word,
            });

            const arrayBuffer = await mp3.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
            const storageId = await ctx.storage.store(blob);

            return storageId;
        } catch (error) {
            console.error("Error generating audio:", error);
            return null;
        }
    },
});
// Define the arguments for creating a dictation
const createDictationArgs = {
    title: v.string(),
    description: v.optional(v.string()),
    sourceLanguage: v.string(),
    targetLanguage: v.string(),
    wordPairs: v.array(v.object({
        first: v.string(),
        second: v.string(),
        firstSentence: v.optional(v.string()),
        secondSentence: v.optional(v.string()),
        sentence: v.optional(v.string()),
        firstAudioUrl: v.optional(v.string()),
        secondAudioUrl: v.optional(v.string()),
        firstStorageId: v.optional(v.string()),
        secondStorageId: v.optional(v.string()),
    })),
    quizParameters: v.object({
        globalTimeLimit: v.number(),
        globalLivesLimit: v.number(),
        activityTimeLimit: v.number(),
        quizModeEnabled: v.boolean(),
    }),
    isPublic: v.boolean(),
};

// Internal mutation to store the game in DB after action
export const insertDictation = mutation({
    args: createDictationArgs,
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        const gameId = await ctx.db.insert("dictation_games", {
            ...args,
            userId: identity.subject, // Clerk ID
            playCount: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        return gameId;
    },
});

export const createDictation = action({
    args: createDictationArgs,
    handler: async (ctx, args) => {
        // 1. Check Auth (user needs to be logged in)
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        // 2. Generate TTS for all words
        const processedWordPairs = await Promise.all(args.wordPairs.map(async (pair) => {
            const [firstStorageId, secondStorageId] = await Promise.all([
                ctx.runAction("dictation:generateAudioAction" as any, {
                    word: pair.first,
                    language: args.sourceLanguage,
                }),
                ctx.runAction("dictation:generateAudioAction" as any, {
                    word: pair.second,
                    language: args.targetLanguage,
                }),
            ]);

            return {
                ...pair,
                firstStorageId: firstStorageId ?? undefined,
                secondStorageId: secondStorageId ?? undefined,
                firstAudioUrl: "", // Legacy field, kept empty
                secondAudioUrl: "",
            };
        }));

        // 3. Call mutation to save
        const gameId = await ctx.runMutation("dictation:insertDictation" as any, {
            ...args,
            wordPairs: processedWordPairs,
        });

        return gameId;
    },
});

export const getDictation = query({
    args: { dictationId: v.id("dictation_games") },
    handler: async (ctx, args) => {
        const game = await ctx.db.get(args.dictationId);
        if (!game) {
            return null;
        }

        // Map storage IDs to URLs
        const wordPairsWithUrls = await Promise.all(game.wordPairs.map(async (pair) => {
            let firstAudioUrl = pair.firstAudioUrl || "";
            let secondAudioUrl = pair.secondAudioUrl || "";

            if (pair.firstStorageId) {
                firstAudioUrl = await ctx.storage.getUrl(pair.firstStorageId) || "";
            }
            if (pair.secondStorageId) {
                secondAudioUrl = await ctx.storage.getUrl(pair.secondStorageId) || "";
            }

            return {
                ...pair,
                firstAudioUrl,
                secondAudioUrl,
            };
        }));

        return {
            ...game,
            wordPairs: wordPairsWithUrls,
        };
    },
});

export const listDictations = query({
    args: {},
    handler: async (ctx) => {
        // Check auth if needed, or filter by public
        // Listing logic needs refinement (user's games vs public games)
        // For now, return public games
        return await ctx.db
            .query("dictation_games")
            .withIndex("by_isPublic", (q) => q.eq("isPublic", true))
            .take(20);
    },
});

export const myDictations = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            return [];
        }
        return await ctx.db
            .query("dictation_games")
            .withIndex("by_userId", (q) => q.eq("userId", identity.subject))
            .order("desc")
            .take(50);
    },
});


export const deleteDictation = mutation({
    args: { dictationId: v.id("dictation_games") },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        const game = await ctx.db.get(args.dictationId);
        if (!game) {
            throw new Error("Game not found");
        }

        if (game.userId !== identity.subject) {
            throw new Error("Unauthorized");
        }

        await ctx.db.delete(args.dictationId);
        return true;
    },
});

export const internalUpdateDictation = mutation({
    args: {
        id: v.id("dictation_games"),
        ...createDictationArgs,
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        const game = await ctx.db.get(args.id);
        if (!game) {
            throw new Error("Game not found");
        }

        if (game.userId !== identity.subject) {
            throw new Error("Unauthorized");
        }

        const { id, ...fieldsToUpdate } = args;

        await ctx.db.patch(id, {
            ...fieldsToUpdate,
            updatedAt: Date.now(),
        });

        return args.id;
    },
});

export const updateDictation = action({
    args: {
        id: v.id("dictation_games"),
        ...createDictationArgs
    },
    handler: async (ctx, args) => {
        // 1. Check Auth 
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        // 2. Fetch existing to compare and avoid re-generating unchanged words
        const existingGame = await ctx.runQuery("dictation:getDictation" as any, { dictationId: args.id });

        // 3. Process words
        const processedWordPairs = await Promise.all(args.wordPairs.map(async (pair) => {
            // Find comparable existing pair (simple matching by index for now, or text content?)
            // If words are reordered, index matching might fail to reuse audio.
            // Better: find by (first, second) text tuple.
            const existingPair = existingGame?.wordPairs.find((p: any) => p.first === pair.first && p.second === pair.second);

            let firstStorageId = existingPair?.firstStorageId;
            let secondStorageId = existingPair?.secondStorageId;

            // Generate if missing or new
            if (!firstStorageId) {
                firstStorageId = await ctx.runAction("dictation:generateAudioAction" as any, {
                    word: pair.first,
                    language: args.sourceLanguage,
                }) ?? undefined;
            }

            if (!secondStorageId) {
                secondStorageId = await ctx.runAction("dictation:generateAudioAction" as any, {
                    word: pair.second,
                    language: args.targetLanguage,
                }) ?? undefined;
            }

            return {
                ...pair,
                firstStorageId: firstStorageId,
                secondStorageId: secondStorageId,
                firstAudioUrl: "",
                secondAudioUrl: "",
            };
        }));

        // 4. Call internal mutation
        await ctx.runMutation("dictation:internalUpdateDictation" as any, {
            ...args,
            wordPairs: processedWordPairs,
        });

        return args.id;
    },
});



export const incrementPlayCount = mutation({
    args: { dictationId: v.id("dictation_games") },
    handler: async (ctx, args) => {
        const game = await ctx.db.get(args.dictationId);
        if (!game) {
            throw new Error("Game not found");
        }

        await ctx.db.patch(args.dictationId, {
            playCount: (game.playCount || 0) + 1,
        });
    },
});
