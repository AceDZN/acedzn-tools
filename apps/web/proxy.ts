import { clerkMiddleware } from "@clerk/nextjs/server";


export const proxy = clerkMiddleware({
    domain: process.env.CLERK_COOKIE_DOMAIN || (process.env.NODE_ENV === "production" ? "acedzn.dev" : undefined),
    isSatellite: process.env.NODE_ENV === "production",
    signInUrl: process.env.NODE_ENV === "production" ? "https://accounts.acedzn.dev/sign-in" : "/sign-in",
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
