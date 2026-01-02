"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function SharedAuthProvider({ children }: { children: ReactNode }) {
    const domain = process.env.NODE_ENV === "production" ? "acedzn.dev" : undefined;

    // Debugging auth configuration
    if (typeof window !== "undefined") {
        console.log("SharedAuthProvider Config:", {
            domain,
            nodeEnv: process.env.NODE_ENV,
            host: window.location.hostname
        });
    }

    return (
        // @ts-expect-error - domain prop triggers satellite mode types, but we just want cookie domain scope
        <ClerkProvider domain={domain} isSatellite={false}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
