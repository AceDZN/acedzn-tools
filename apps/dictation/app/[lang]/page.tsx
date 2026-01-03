import Link from "next/link";
import { DOCS_URL } from "../../lib/constants";
import { getDictionary } from "../../lib/dictionary";
import { LanguageSelector } from "../../components/language-selector";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    // Helper to safely access dictionary
    const t = (key: string) => {
        const keys = key.split('.');
        let current: any = dict;
        for (const k of keys) {
            if (current[k] === undefined) return key;
            current = current[k];
        }
        return current;
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {t('home.title')}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {t('home.subtitle')}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href={`/${lang}/dashboard`}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {t('home.cta.start')}
                            </Link>
                            <Link href={DOCS_URL} className="text-sm font-semibold leading-6 text-gray-900">
                                {t('home.cta.docs')} <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <LanguageSelector currentLang={lang as any} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
