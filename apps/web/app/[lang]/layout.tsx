import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "../../components/providers";
import { PostHogProvider } from "@repo/analytics";
import "../globals.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { UserSync } from "../../components/user-sync";
import { getDictionary } from "../../lib/dictionary";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const getSeo = async (locale: "en" | "he") => {
  const dictionary = await import(`../../dictionaries/seo-${locale}.json`)
  return dictionary.default
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const seo = await getSeo(lang as "en" | "he")

  return {
    title: {
      default: seo.title,
      template: seo.titleTemplate,
    },
    description: seo.description,
    keywords: seo.keywords ? seo.keywords.split(',') : [],
    openGraph: {
      siteName: seo.og.siteName,
      title: seo.title,
      description: seo.description,
      type: 'website',
    },
  }
}

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
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <Providers>
          <PostHogProvider>
            <UserSync />
            {/* Pass dictionary to Header if needed, currently Header imports are client components likely */}
            {/* For now just resolving paths */}
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
