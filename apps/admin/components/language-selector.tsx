"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const COOKIE_NAME = 'NEXT_LOCALE';

export function LanguageSelector({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = useCallback((newLang: string) => {
        // Set cookie for 1 year
        document.cookie = `${COOKIE_NAME}=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

        // Redirect to new locale
        const segments = pathname.split('/');
        // segments[0] is empty, segments[1] is the locale (e.g., 'en' or 'he')
        if (segments.length > 1) {
            segments[1] = newLang;
            const newPath = segments.join('/');
            router.push(newPath);
            router.refresh();
        }
    }, [pathname, router]);

    return (
        <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-1">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentLang === 'en'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
            >
                English
            </button>
            <button
                onClick={() => switchLanguage('he')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentLang === 'he'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
            >
                עברית
            </button>
        </div>
    );
}
