'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, Suspense, type ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';

function PostHogPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const posthog = usePostHog();

    useEffect(() => {
        if (pathname && posthog) {
            let url = window.origin + pathname;
            if (searchParams && searchParams.toString()) {
                url = url + `?${searchParams.toString()}`;
            }
            posthog.capture('$pageview', {
                '$current_url': url,
            });
        }
    }, [pathname, searchParams, posthog]);

    return null;
}

if (typeof window !== 'undefined') {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (key && host) {
        posthog.init(key, {
            api_host: host,
            person_profiles: 'identified_only',
            capture_pageview: false, // Start false, manually capture in page view if needed, or true if we want auto
            capture_pageleave: true, // Enable pageleave capture explicitly since pageview is manual
            // for Next.js app directory usually we want to handle pageviews carefully, but basic auto capture is fine for now
        });
    }
}

export function PostHogProvider({ children }: { children: ReactNode }) {
    return (
        <PHProvider client={posthog}>
            <Suspense>
                <PostHogPageView />
            </Suspense>
            {children}
        </PHProvider>
    );
}

export { usePostHog };
