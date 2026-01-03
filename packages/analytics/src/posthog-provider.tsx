'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, type ReactNode } from 'react';

export function PostHogProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        if (typeof window !== 'undefined') { // Check if window is available
            const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
            const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

            if (key && host) {
                posthog.init(key, {
                    api_host: host,
                    person_profiles: 'identified_only',
                    capture_pageview: false, // Start false, manually capture in page view if needed, or true if we want auto
                    // for Next.js app directory usually we want to handle pageviews carefully, but basic auto capture is fine for now
                });
            }
        }
    }, []);

    return <PHProvider client={posthog}>{children}</PHProvider>;
}
