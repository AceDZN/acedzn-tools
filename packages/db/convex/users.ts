import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const current = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            return null;
        }
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();
        return user;
    },
});

export const store = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Called storeUser without authentication present");
        }

        // Check if we've already stored this identity before.
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();

        if (user !== null) {
            // If we've seen this identity before but the name/email has changed, patch the value.
            if (user.name !== identity.name || user.email !== identity.email || user.pictureUrl !== identity.pictureUrl) {
                // Only patch if values are different to avoid unnecessary writes
                await ctx.db.patch(user._id, {
                    name: identity.name,
                    email: identity.email,
                    pictureUrl: identity.pictureUrl,
                });
            }
            return user._id;
        }
        // If it's a new identity, create a new `User`.
        return await ctx.db.insert("users", {
            name: identity.name,
            email: identity.email!,
            pictureUrl: identity.pictureUrl,
            clerkId: identity.subject,
        });
    },
});

export const update = mutation({
    args: {
        name: v.optional(v.string()),
        description: v.optional(v.string()),
        imageId: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Unauthenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();

        if (!user) throw new Error("User not found");

        await ctx.db.patch(user._id, args);
    }
});

export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});

export const getImageUrl = query({
    args: { storageId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.storage.getUrl(args.storageId);
    }
});
