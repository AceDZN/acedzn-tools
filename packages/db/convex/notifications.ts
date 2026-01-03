import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const send = mutation({
    args: {
        title: v.string(),
        message: v.string(),
        targetApp: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Admin check - simple hardcoded check for now
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthenticated");
        }
        // Hardcoded allowed admin email for MVP
        if (identity.email !== "alex@acedzn.com") {
            throw new Error("Unauthorized: Admin access required");
        }

        await ctx.db.insert("notifications", {
            title: args.title,
            message: args.message,
            targetApp: args.targetApp,
            createdAt: Date.now(),
        });
    },
});

export const list = query({
    args: {
        targetApp: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const notifications = await ctx.db
            .query("notifications")
            .withIndex("by_createdAt")
            .order("desc")
            .take(20);

        // Filter by targetApp if necessary
        // Note: Filtering in memory for now as we don't have a complex index for "by_targetApp_and_createdAt" yet
        // and volume is low.
        return notifications.filter((n) => !n.targetApp || n.targetApp === args.targetApp || !args.targetApp);
    },
});

export const markAsRead = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            // If not logged in, we can't mark as read permanently.
            // Client side will handle this for guests if needed, or we just ignore.
            return;
        }

        // Find the user in our DB
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .first();

        if (user) {
            await ctx.db.patch(user._id, {
                lastNotificationReadTime: Date.now(),
            });
        }
    },
});

export const deleteNotification = mutation({
    args: {
        id: v.id("notifications"),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Unauthenticated");
        }
        if (identity.email !== "alex@acedzn.com") {
            throw new Error("Unauthorized: Admin access required");
        }

        await ctx.db.delete(args.id);
    },
});
