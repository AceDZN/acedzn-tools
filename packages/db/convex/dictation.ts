import { mutation, action, query, internalAction } from "./_generated/server";

import { v } from "convex/values";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
// Helper to retry Gemini calls on 500 errors
async function retryGeminiCall(callFn: () => Promise<any>, retries = 3, delay = 1000): Promise<any> {
    for (let i = 0; i < retries; i++) {
        try {
            return await callFn();
        } catch (e: any) {
            console.warn(`Gemini call failed (attempt ${i + 1}/${retries}):`, e.message);
            // Retry only on 500 or 503
            if (i < retries - 1 && (e.message?.includes("500") || e.message?.includes("503"))) {
                await new Promise(resolve => setTimeout(resolve, delay * (i + 1))); // Linear backoff
                continue;
            }
            throw e;
        }
    }
}

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

export const generateFromText = action({
    args: {
        text: v.string(),
        sourceLanguage: v.string(),
        targetLanguage: v.string(),
    },
    handler: async (ctx, args) => {
        // console.log("generateFromText called", { textLength: args.text.length });
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        const apiKey = process.env.GOOGLE_AI_API_KEY;
        if (!apiKey) {
            throw new Error("Missing GOOGLE_AI_API_KEY");
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `
            Analyze the following text and use it to create a list of word pairs for a language learning dictation game.
            Source Language: ${args.sourceLanguage}
            Target Language: ${args.targetLanguage}
            
            Text: "${args.text}"
            
            Return ONLY a valid JSON object with the following structure:
            {
                "title": "A short, catchy title for this dictation based on the text content",
                "description": "A brief 1-sentence description of what this content covers",
                "wordPairs": [
                    {
                        "first": "word in source language",
                        "second": "word in target language",
                        "firstSentence": "example sentence provided in the text or generated in source language", 
                        "secondSentence": "translation of example sentence in target language" 
                    }
                ]
            }
        `;

        // console.log("Calling Gemini...");

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            // console.log("Gemini response content:", text);

            // Clean up code blocks if present
            const cleanText = text.replace(/```json\n?|\n?```/g, "").trim();

            const parsed = JSON.parse(cleanText);
            // Support both old array format (fallback, though unlikely with new prompt) and new object format
            if (Array.isArray(parsed)) {
                return { title: "", description: "", wordPairs: parsed };
            }
            return {
                title: parsed.title || "",
                description: parsed.description || "",
                wordPairs: parsed.wordPairs || parsed.pairs || []
            };
        } catch (e) {
            console.error("Failed to generate/parse Gemini response", e);
            return [];
        }
    },
});

export const generateFromPrompt = action({
    args: {
        prompt: v.string(),
        sourceLanguage: v.string(),
        targetLanguage: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        const apiKey = process.env.GOOGLE_AI_API_KEY;
        if (!apiKey) {
            throw new Error("Missing GOOGLE_AI_API_KEY");
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `
            You are a language teacher creating a dictation list.
            Topic: ${args.prompt}
            Source Language: ${args.sourceLanguage}
            Target Language: ${args.targetLanguage}
            
            Generate 10-15 relevant word pairs related to the topic.
            Return ONLY a valid JSON object with the following structure:
            {
                "title": "A short, catchy title for this dictation list",
                "description": "A brief description of this vocabulary set",
                "wordPairs": [
                    {
                        "first": "word in source language",
                        "second": "word in target language",
                        "firstSentence": "simple example sentence in source language", 
                        "secondSentence": "translation of example sentence in target language" 
                    }
                ]
            }
        `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const cleanText = text.replace(/```json\n?|\n?```/g, "").trim();

            const parsed = JSON.parse(cleanText);
            if (Array.isArray(parsed)) {
                return { title: args.prompt, description: "", wordPairs: parsed };
            }
            return {
                title: parsed.title || args.prompt,
                description: parsed.description || "",
                wordPairs: parsed.wordPairs || parsed.pairs || []
            };
        } catch (e) {
            console.error("Failed to generate/parse Gemini response", e);
            return [];
        }
    },
});
export const generateFromImage = action({
    args: {
        storageId: v.id("_storage"),
        sourceLanguage: v.string(),
        targetLanguage: v.string(),
        mimeType: v.string(),
    },
    handler: async (ctx, args) => {
        console.log("generateFromImage called", { storageId: args.storageId, mimeType: args.mimeType });
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthorized");
        }

        const apiKey = process.env.GOOGLE_AI_API_KEY;
        if (!apiKey) {
            throw new Error("Missing GOOGLE_AI_API_KEY");
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const imageUrl = await ctx.storage.getUrl(args.storageId);
        console.log("Got image URL:", imageUrl);

        if (!imageUrl) {
            throw new Error("Failed to get image URL");
        }

        // Fetch the image data to convert to base64
        // Google Generative AI requires inline data for images in Node
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.arrayBuffer();

        // Convert ArrayBuffer to base64 without Node Data Buffer
        let binary = '';
        const bytes = new Uint8Array(imageBuffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]!);
        }
        const base64Image = btoa(binary);

        const prompt = `
            Analyze the following image and use it to create a list of word pairs for a language learning dictation game.
            Source Language: ${args.sourceLanguage}
            Target Language: ${args.targetLanguage}
            
            Return ONLY a valid JSON object with the following structure:
            {
                "title": "A creative title for this image-based dictation",
                "description": "A brief description of the scene or context",
                "wordPairs": [
                    {
                        "first": "word in source language",
                        "second": "word in target language",
                        "firstSentence": "example sentence related to the image context in source language", 
                        "secondSentence": "translation of example sentence in target language" 
                    }
                ]
            }
        `;

        // console.log("Calling Gemini for image...");

        try {
            const result = await retryGeminiCall(() => model.generateContent([
                prompt,
                {
                    inlineData: {
                        data: base64Image,
                        mimeType: args.mimeType
                    }
                }
            ]));
            const response = await result.response;
            const text = response.text();

            // console.log("Gemini image response:", text);

            const cleanText = text.replace(/```json\n?|\n?```/g, "").trim();

            const parsed = JSON.parse(cleanText);

            if (Array.isArray(parsed)) {
                return { title: "Image Dictation", description: "", wordPairs: parsed };
            }
            return {
                title: parsed.title || "Image Dictation",
                description: parsed.description || "",
                wordPairs: parsed.wordPairs || parsed.pairs || []
            };
        } catch (e) {
            console.error("Failed to generate/parse Gemini response", e);
            return [];
        } finally {
            // Clean up the uploaded image
            try {
                if (args.storageId) {
                    await ctx.runMutation("dictation:deleteStorageFile" as any, {
                        storageId: args.storageId,
                    });
                }
            } catch (cleanupError) {
                console.error("Failed to delete processed image:", cleanupError);
            }
        }
    },
});

export const deleteStorageFile = mutation({
    args: { storageId: v.id("_storage") },
    handler: async (ctx, args) => {
        await ctx.storage.delete(args.storageId);
    },
});

export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});
