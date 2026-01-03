import Link from "next/link";
import { getDictionary } from "../../lib/dictionary";
import { LanguageSelector } from "../../components/language-selector";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const nav = (dict as any).nav;

    return (
        <div className="flex h-screen">
            {/* Sidebar - Fix border-r for RTL */}
            <aside className="w-64 bg-gray-800 border-e border-gray-700 p-6 flex flex-col">
                <h1 className="text-2xl font-bold mb-8 text-white">{nav.title}</h1>
                <nav className="flex-1 space-y-2">
                    <Link href={`/${lang}`} className="block px-4 py-2 rounded bg-gray-700 text-white font-medium">
                        {nav.overview}
                    </Link>
                    <Link href={`/${lang}/notifications`} className="block px-4 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        {nav.notifications}
                    </Link>
                </nav>
                <div className="mt-auto pt-6 border-t border-gray-700">
                    <span className="text-xs text-gray-500">v0.1.0</span>
                    <div className="mt-2">
                        <LanguageSelector currentLang={lang} />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                    <h3 className="text-xl font-bold mb-4">{(dict.home as any).recent_activity}</h3>
                    <div className="space-y-4">
                        <p className="text-gray-400">{(dict.home as any).activity_placeholder}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
