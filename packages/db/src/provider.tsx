"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function SharedAuthProvider({ children }: { children: ReactNode }) {
    const domain = process.env.NEXT_PUBLIC_CLERK_COOKIE_DOMAIN ||
        (process.env.NODE_ENV === "production" ? "acedzn.dev" : undefined);

    return (
        // @ts-expect-error - domain triggering satellite types but we are using it for cookie hoisting
        <ClerkProvider domain={domain} isSatellite={false}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
