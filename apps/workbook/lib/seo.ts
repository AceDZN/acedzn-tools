import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://workbook.acedzn.com";
export const SITE_NAME = "עולם הידע";
export const SITE_TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

// Base SEO configuration for the entire site
export const BASE_SEO: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - לימודי מדעים אינטראקטיביים לכיתה ז'`,
    template: SITE_TITLE_TEMPLATE,
  },
  description: "פלטפורמת למידה אינטראקטיבית למדעים לכיתה ז'. לומדים פיזיקה, כימיה וביולוגיה עם סימולציות, חידונים ותכנים מעשירים בעברית.",
  keywords: [
    "מדעים כיתה ז",
    "לימודי מדעים",
    "פיזיקה לכיתה ז",
    "כימיה לכיתה ז",
    "למידה אינטראקטיבית",
    "חומר לימוד מדעים",
    "סימולציות מדעיות",
    "חידונים מדעים",
    "עולם הידע",
    "לימודים בעברית",
    "חומר למידה חינם",
    "תרגול מדעים",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - לימודי מדעים אינטראקטיביים`,
    description: "פלטפורמת למידה אינטראקטיבית למדעים לכיתה ז'. סימולציות, חידונים ותכנים מעשירים.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "עולם הידע - לימודי מדעים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - לימודי מדעים אינטראקטיביים`,
    description: "פלטפורמת למידה אינטראקטיבית למדעים לכיתה ז'.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
};

// Chapter-specific SEO data
export const CHAPTER_SEO: Record<string, {
  title: string;
  description: string;
  keywords: string[];
}> = {
  chapter1: {
    title: "עולם החומר - תכונות חומרים ואפיונם",
    description: "לומדים על תכונות החומר: מוליכות חשמל וחום, קשיות, שקיפות ומסיסות. מבינים איך בוחרים חומרים להנדסה ובנייה. תרגול אינטראקטיבי עם סימולציות.",
    keywords: [
      "תכונות חומרים",
      "מוליכות חשמל",
      "מוליכות חום",
      "קשיות חומרים",
      "שקיפות",
      "מסיסות",
      "חומרי בנייה",
      "הנדסת חומרים",
      "גוף וחומר",
      "מדעים כיתה ז פרק 1",
    ],
  },
  chapter2: {
    title: "המודל החלקיקי - מבנה החומר ומצבי צבירה",
    description: "מודל החלקיקים מסביר איך בנוי החומר. לומדים על מצבי צבירה (מוצק, נוזל, גז), מעברי פאזה, דיפוזיה, מתח פנים והרכב האוויר. סימולציות אינטראקטיביות.",
    keywords: [
      "מודל החלקיקים",
      "מצבי צבירה",
      "מוצק נוזל גז",
      "מעברי פאזה",
      "דיפוזיה",
      "מתח פנים",
      "הרכב האוויר",
      "סובלימציה",
      "התכה והתאדות",
      "מדעים כיתה ז פרק 2",
    ],
  },
  chapter3: {
    title: "מדידות פיזיקליות - נפח, מסה וצפיפות",
    description: "לומדים למדוד נפח ומסה, מחשבים צפיפות ומבינים מתי גופים צפים או שוקעים. שיטת דחיקת המים, ההבדל בין מסה למשקל, ומגדל הצפיפות.",
    keywords: [
      "מדידת נפח",
      "מדידת מסה",
      "צפיפות",
      "ציפה ושקיעה",
      "שיטת דחיקת המים",
      "מסה ומשקל",
      "יחידות מידה פיזיקה",
      "מגדל צפיפות",
      "גדלים פיזיקליים",
      "מדעים כיתה ז פרק 3",
    ],
  },
  chapter4: {
    title: "אנרגיה - סוגי אנרגיה והמרות",
    description: "מהי אנרגיה ומהם סוגיה: קינטית, פוטנציאלית, אלסטית, חשמלית, כימית ותרמית. לומדים על המרות אנרגיה וחוק שימור האנרגיה. סימולציות אינטראקטיביות.",
    keywords: [
      "אנרגיה",
      "אנרגיה קינטית",
      "אנרגיה פוטנציאלית",
      "אנרגיה אלסטית",
      "אנרגיה כימית",
      "אנרגיה חשמלית",
      "אנרגיה תרמית",
      "המרות אנרגיה",
      "חוק שימור האנרגיה",
      "מדעים כיתה ז פרק 4",
    ],
  },
};

// Generate chapter metadata
export function generateChapterMetadata(
  chapterId: string,
  chapterTitle: string,
  chapterDescription?: string
): Metadata {
  const seoData = CHAPTER_SEO[chapterId];
  const title = seoData?.title || chapterTitle;
  const description = seoData?.description || chapterDescription || "";
  const keywords = seoData?.keywords || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/science/${chapterId}`,
      type: "article",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/science/${chapterId}`,
    },
  };
}

// Generate module metadata
export function generateModuleMetadata(
  chapterId: string,
  moduleId: string,
  moduleTitle: string,
  moduleDescription?: string,
  moduleKeywords?: string[]
): Metadata {
  const chapterSeo = CHAPTER_SEO[chapterId];
  const title = moduleTitle;
  const description = moduleDescription || chapterSeo?.description || "";
  const keywords = [
    ...(moduleKeywords || []),
    ...(chapterSeo?.keywords?.slice(0, 5) || []),
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/science/${chapterId}/${moduleId}`,
      type: "article",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/science/${chapterId}/${moduleId}`,
    },
  };
}

// Generate JSON-LD structured data for educational content
export function generateEducationalContentSchema(params: {
  title: string;
  description: string;
  url: string;
  chapterName?: string;
  moduleName?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: params.title,
    description: params.description,
    url: params.url,
    inLanguage: "he",
    learningResourceType: "lesson",
    educationalLevel: "7th grade",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(params.chapterName && {
      isPartOf: {
        "@type": "Course",
        name: params.chapterName,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
    }),
    ...(params.keywords && {
      keywords: params.keywords.join(", "),
    }),
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
