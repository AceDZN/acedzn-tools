import type { Metadata } from "next";
import { Providers } from "../../components/providers";
import { PostHogProvider } from "@repo/analytics";
import "../globals.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { UserSync } from "../../components/user-sync";
import { getDictionary } from "../../lib/dictionary";

export const metadata: Metadata = {
    title: "AceDZN Dictation",
    description: "Master your languages with AI dictations.",
};

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
        <html lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'}>
            <body className="flex flex-col min-h-screen">
                <Providers>
                    <PostHogProvider>
                        <UserSync />
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </PostHogProvider>
                </Providers>
            </body>
        </html>
    );
}
