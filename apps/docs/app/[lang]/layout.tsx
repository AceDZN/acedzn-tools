import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { Providers } from "../../components/providers";
import { PostHogProvider } from "@repo/analytics";
import { getDictionary } from "../../lib/dictionary";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Sidebar } from "../../components/sidebar";

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

export const metadata: Metadata = {
  title: "AceDZN Docs",
  description: "Documentation for AceDZN Tools.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <PostHogProvider>
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-6 bg-gray-50">
                {children}
              </main>
            </div>
            <Footer />
          </PostHogProvider>
        </Providers>
      </body>
    </html>
  );
}
