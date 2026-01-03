import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SharedAuthProvider } from "@repo/db";
import { PostHogProvider } from "@repo/analytics";

import { Header } from "../components/header";

import { Footer } from "../components/footer";
import { Sidebar } from "../components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AceDZN Docs",
  description: "Documentation for AceDZN Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <SharedAuthProvider>
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
        </SharedAuthProvider>
      </body>
    </html>
  );
}
