import type { Metadata } from "next";
import localFont from "next/font/local";
import { SharedAuthProvider } from "@repo/db";
import "./globals.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { UserSync } from "../components/user-sync";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AceDZN Tools",
  description: "A collection of powerful tools for developers.",
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
          <UserSync />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SharedAuthProvider>
      </body>
    </html>
  );
}
