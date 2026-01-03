import type { Metadata } from "next";
import { SharedAuthProvider } from "@repo/db";
import { PostHogProvider } from "@repo/analytics";
import "./globals.css";
import { AdminGuard } from "../components/admin-guard";

export const metadata: Metadata = {
    title: "AceDZN Admin",
    description: "Admin panel for AceDZN Tools",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-gray-900 text-white">
                <SharedAuthProvider>
                    <PostHogProvider>
                        <AdminGuard>
                            {children}
                        </AdminGuard>
                    </PostHogProvider>
                </SharedAuthProvider>
            </body>
        </html>
    );
}
