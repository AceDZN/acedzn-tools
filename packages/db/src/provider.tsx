"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

// Only use the shared domain in production.
// In development (localhost), we want each app to function independently or use localhost cookies.
// Forcing a domain like "acedzn.dev" on localhost causing auth to fail.
const domain = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_CLERK_DOMAIN : undefined;

export function SharedAuthProvider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider domain={domain}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
