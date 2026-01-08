import React from "react";
import { ChapterId, ModuleId, Question } from "@/lib/types";
import SummaryClient from "./SummaryClient";
import type { Metadata } from "next";
import { SITE_NAME, SUBJECTS } from "@/lib/constants";

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

  return {
    title: `${SITE_NAME} - ${chapterName} - מבחן מסכם`,
    description: `בחן את הידע שלך ב${chapterName}. מבחן מסכם הכולל שאלות על כל נושאי הפרק.`
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.chapterId as ChapterId;

  // Dynamically load questions and chapter data for the specific chapter on the server
  let questions: Question[] = [];
  let chapterTitle = "";

  try {
    const { SUBJECTS } = await import("@/lib/constants/global");
    // We can't easily find the chapter without subjectId if we don't have it in resolvedParams or if we search all.
    // But since we have SUBJECTS, we can find the chapter across all subjects or if we passed subjectId.
    // resolvedParams has subject too.
    const subjectId = resolvedParams.subject;
    const subject = SUBJECTS.find((s) => s.id === subjectId);
    const chapter = subject?.chapters.find((c) => c.id === chapterId);

    chapterTitle = chapter?.title || "";

    if (chapterId === ChapterId.Chapter1) {
      const { CHAPTER1_QUESTIONS } = await import(
        "@/lib/constants/science_chapter_1"
      );
      questions = CHAPTER1_QUESTIONS[ModuleId.Summary] || [];
    } else if (chapterId === ChapterId.Chapter2) {
      const { CHAPTER2_QUESTIONS } = await import(
        "@/lib/constants/science_chapter_2"
      );
      questions = CHAPTER2_QUESTIONS[ModuleId.Summary] || [];
    }
  } catch (error) {
    console.error("Error loading summary data:", error);
  }

  return (
    <div className="animate-in fade-in duration-700">
      <SummaryClient
        chapterId={chapterId}
        questions={questions}
        chapterTitle={chapterTitle}
      />
    </div>
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
