import React from "react";
import { ChapterId, ModuleId, Question } from "@/lib/types";
import SummaryClient from "./SummaryClient";
import type { Metadata } from "next";
import { SUBJECTS } from "@/lib/constants";
import { CHAPTER_SEO, SITE_URL, SITE_NAME, generateEducationalContentSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    subject: string;
    chapterId: string;
  }>;
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { subject: subjectId, chapterId } = await params;
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);
  const chapterName = chapter?.title || "";
  const chapterSeo = CHAPTER_SEO[chapterId];

  const title = `מבחן מסכם - ${chapterName}`;
  const description = `בחן את הידע שלך ב${chapterName}. מבחן מסכם אינטראקטיבי הכולל שאלות על כל נושאי הפרק עם הסברים מפורטים.`;
  const url = `${SITE_URL}/${subjectId}/${chapterId}/summary`;

  return {
    title,
    description,
    keywords: [...(chapterSeo?.keywords || []), "מבחן מסכם", "חידון", "בחינה", "תרגול"],
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
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
      canonical: url,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.chapterId as ChapterId;
  const subjectId = resolvedParams.subject;

  // Dynamically load questions and chapter data for the specific chapter on the server
  let questions: Question[] = [];
  let chapterTitle = "";
  let subjectTitle = "";

  try {
    const { SUBJECTS } = await import("@/lib/constants/global");
    const subject = SUBJECTS.find((s) => s.id === subjectId);
    const chapter = subject?.chapters.find((c) => c.id === chapterId);

    chapterTitle = chapter?.title || "";
    subjectTitle = subject?.title || "";
    const { CHAPTER_QUESTIONS } = await import(
      `@/lib/constants/${subjectId}_${chapterId}`
    );
    questions = CHAPTER_QUESTIONS[ModuleId.Summary] || [];
  } catch (error) {
    console.error("Error loading summary data:", error);
  }

  // Generate structured data for SEO
  const summaryUrl = `${SITE_URL}/${subjectId}/${chapterId}/summary`;
  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: `מבחן מסכם - ${chapterTitle}`,
    description: `מבחן מסכם אינטראקטיבי על ${chapterTitle}`,
    educationalLevel: "7th grade",
    inLanguage: "he",
    url: summaryUrl,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    numberOfQuestions: questions.length,
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: SITE_NAME, url: SITE_URL },
    { name: subjectTitle || "מדעים", url: `${SITE_URL}/${subjectId}` },
    { name: chapterTitle, url: `${SITE_URL}/${subjectId}/${chapterId}/summary` },
    { name: "מבחן מסכם", url: summaryUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="animate-in fade-in duration-700">
        <SummaryClient
          chapterId={chapterId}
          questions={questions}
          chapterTitle={chapterTitle}
        />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const { SUBJECTS } = await import("@/lib/constants");

  return SUBJECTS.flatMap((subject) =>
    subject.chapters.map((chapter) => ({
      subject: subject.id,
      chapterId: chapter.id
    }))
  );
}
