import { clerkMiddleware } from "@clerk/nextjs/server";

export const proxy = clerkMiddleware({
    // Enable cross-subdomain session sharing by targeting the root domain
    domain: process.env.CLERK_DOMAIN || (process.env.NODE_ENV === "production" ? "acedzn.dev" : undefined),
});

export const config = {
    matcher: [
        '/((?!_next|ingest|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|glb|gltf)).*)',
        '/(api|trpc)(.*)',
    ],
};
