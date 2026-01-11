import type { Metadata } from "next";
import { Alef } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { BASE_SEO, SITE_NAME, SITE_URL } from "@/lib/seo";

const alef = Alef({
  weight: ["400", "700"],
  subsets: ["hebrew"],
  variable: "--font-alef",
});

export const metadata: Metadata = {
  ...BASE_SEO,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// JSON-LD structured data for the website
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: "פלטפורמת למידה אינטראקטיבית למדעים לכיתה ז'",
  inLanguage: "he",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  description: "פלטפורמת למידה אינטראקטיבית למדעים",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${alef.variable} font-sans antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
