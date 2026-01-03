import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Shared tables can be defined here.
    // For now, we will leave it extensible.
    users: defineTable({
        clerkId: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        description: v.optional(v.string()),
        imageId: v.optional(v.string()),
    }).index("by_clerkId", ["clerkId"]),
    dictation_games: defineTable({
        userId: v.string(), // Clerk ID
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
            firstStorageId: v.optional(v.string()), // Convex storage ID
            secondStorageId: v.optional(v.string()),
        })),
        quizParameters: v.object({
            globalTimeLimit: v.number(),
            globalLivesLimit: v.number(),
            activityTimeLimit: v.number(),
            quizModeEnabled: v.boolean(),
        }),
        isPublic: v.boolean(),
        playCount: v.number(),
        createdAt: v.number(), // timestamp
        updatedAt: v.number(),
    }).index("by_userId", ["userId"])
        .index("by_isPublic", ["isPublic"]),
});
