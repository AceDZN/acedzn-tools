import { mutation, action, query } from "./_generated/server";
import { v } from "convex/values";


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
    args: {
        ...createDictationArgs,
        wordPairs: v.array(v.object({
            first: v.string(),
            second: v.string(),
            firstSentence: v.optional(v.string()),
            secondSentence: v.optional(v.string()),
            sentence: v.optional(v.string()),
            firstAudioUrl: v.optional(v.string()),
            secondAudioUrl: v.optional(v.string()),
        })),
    },
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

        // 2. Generate TTS (Mock logic for now or call external API)
        // NOTE: This usually requires setting up OpenAI secret in Convex Dashboard.
        // For now we will return empty URLs or implementing the fetch call if secrets allow.

        // We can call the same logic as the original route if we port it here.
        // However, for brevity in this step, I'll pass through empty URLs and marking as TODO.
        // Ideally user sets environment variables in Convex.

        // const sourceAudioUrls = ...
        // const targetAudioUrls = ...

        const wordPairsWithAudio = args.wordPairs.map(pair => ({
            ...pair,
            firstAudioUrl: "", // TODO: Implement TTS generation
            secondAudioUrl: "",
        }));

        // 3. Call mutation to save
        const gameId = await ctx.runMutation("dictation:insertDictation" as any, {
            ...args,
            wordPairs: wordPairsWithAudio,
        });

        return gameId;
    },
});

export const getDictation = query({
    args: { dictationId: v.id("dictation_games") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.dictationId);
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

export const updateDictation = mutation({
    args: {
        id: v.id("dictation_games"),
        ...createDictationArgs
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

        const wordPairsWithAudio = args.wordPairs.map(pair => ({
            ...pair,
            firstAudioUrl: "", // TODO: Maintain existing or regenerate
            secondAudioUrl: "",
        }));

        await ctx.db.patch(args.id, {
            ...args,
            wordPairs: wordPairsWithAudio,
            updatedAt: Date.now(),
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
