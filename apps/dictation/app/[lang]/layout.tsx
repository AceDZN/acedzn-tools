import type { Metadata } from "next";
import { Providers } from "../../components/providers";
import { PostHogProvider } from "@repo/analytics";
import "../globals.css";
import { BackgroundGradient } from "@repo/ui/components/ui/background-gradient";
import { DictionaryProvider } from "../../components/dictionary-provider";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { UserSync } from "../../components/user-sync";
import { getDictionary } from "../../lib/dictionary";

export const metadata: Metadata = {
    title: "AceDZN Dictation",
    description: "Master your languages with AI dictations.",
};

import { Alef } from "next/font/google";

const alef = Alef({
    subsets: ["hebrew"],
    weight: ["400", "700"],
    variable: "--font-alef",
});

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'he' }]
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <html lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'} className={`${lang === 'he' ? alef.variable : ''}`}>
            <body className="flex flex-col min-h-screen">
                <Providers>
                    <PostHogProvider>
                        <DictionaryProvider dictionary={dict}>
                            <UserSync />
                            <div className="flex flex-col min-h-screen">
                                <Header />
                                <main className="flex-grow">
                                    <div className="container mx-auto px-0">
                                        <div className="relative isolate py-0 md:py-6 lg:py-12 px-0 md:px-4">
                                            {/* Decorative blurred circles */}
                                            <div className="absolute top-40 z-0  user-select-none pointer-events-none left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
                                            <div className="absolute bottom-20 z-0  user-select-none pointer-events-none right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

                                            {/* Dot pattern decoration */}
                                            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                                                <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                                                    <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] dark:bg-grid-slate-100/[0.03]" style={{
                                                        maskSize: '100%',
                                                        backgroundPosition: 'calc(100% - 0px) calc(100% - 0px)',
                                                        backgroundSize: '40px 40px',
                                                        backgroundImage:
                                                            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42 / 0.1)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
                                                    }} />
                                                </div>
                                            </div>
                                            {/* Top background gradient */}
                                            <BackgroundGradient position="top" />

                                            {children}

                                            {/* Bottom background gradient */}
                                            <BackgroundGradient position="bottom" />
                                        </div>
                                    </div>
                                </main>
                                <Footer />
                            </div>
                        </DictionaryProvider>
                    </PostHogProvider>
                </Providers>
            </body>
        </html>
    );
}
