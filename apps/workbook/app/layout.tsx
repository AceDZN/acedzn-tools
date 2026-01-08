import type { Metadata } from "next";
import { Alef } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const alef = Alef({
  weight: ["400", "700"],
  subsets: ["hebrew"],
  variable: "--font-alef",
});

export const metadata: Metadata = {
  title: "מדעים - לומדים בכיף",
  description: "אפליקציית למידה אינטראקטיבית למדעים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${alef.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
