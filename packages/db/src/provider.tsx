"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function SharedAuthProvider({ children }: { children: ReactNode }) {
    const isProduction = process.env.NODE_ENV === "production";
    const domain = process.env.NEXT_PUBLIC_CLERK_COOKIE_DOMAIN ||
        (isProduction ? "acedzn.dev" : undefined);

    // Use satellite mode in production to ensure cookies are shared across all subdomains
    const isSatellite = isProduction;

    // Debugging auth configuration
    if (typeof window !== "undefined") {
        console.log("SharedAuthProvider Config:", {
            domain,
            isSatellite,
            envVar: process.env.NEXT_PUBLIC_CLERK_COOKIE_DOMAIN,
            nodeEnv: process.env.NODE_ENV,
            host: window.location.hostname
        });
    }

    return (
        // @ts-expect-error - isSatellite and domain trigger strict type requirements for router functions
        <ClerkProvider
            domain={domain}
            isSatellite={isSatellite}
        >
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
