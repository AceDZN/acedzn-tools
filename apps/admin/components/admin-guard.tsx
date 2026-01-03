"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AdminGuard({ children }: { children: React.ReactNode }) {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded) {
            if (isSignedIn) {
                const email = user?.primaryEmailAddress?.emailAddress;
                // Hardcoded admin email check as requested
                if (email !== "alex@acedzn.com") {
                    // Redirect to main site if not admin
                    // Using window.location to force full navigation out of admin subdomain if needed, 
                    // or just router.push to a safe page.
                    // For now, let's just show Access Denied to verify logic, or redirect to landing.
                    // router.push("https://www.acedzn.dev"); 
                }
            }
        }
    }, [isLoaded, isSignedIn, user, router]);

    if (!isLoaded) return <div className="flex h-screen items-center justify-center">Loading...</div>;

    if (!isSignedIn) {
        // SharedAuthProvider + Clerk should handle redirect to sign-in, 
        // but if we are here, we can render a message or null.
        return <div className="flex h-screen items-center justify-center">Please sign in</div>;
    }

    if (user?.primaryEmailAddress?.emailAddress !== "alex@acedzn.com") {
        return (
            <div className="flex h-screen items-center justify-center flex-col gap-4">
                <h1 className="text-2xl font-bold">Access Denied</h1>
                <p>You are not authorized to view this page.</p>
                <p className="text-sm text-gray-500">Logged in as: {user?.primaryEmailAddress?.emailAddress}</p>
            </div>
        );
    }

    return <>{children}</>;
}
