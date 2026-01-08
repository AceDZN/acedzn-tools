import React from "react";
import { SUBJECTS, SITE_NAME } from "@/lib/constants";
import { ChapterSidebar } from "@/components/chapter/ChapterSidebar";
import { ChapterId } from "@/lib/types";
import type { Metadata } from "next";

interface ChapterLayoutProps {
  children: React.ReactNode;
  params: Promise<{ subject: string; chapterId: string }>;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ subject: string; chapterId: string }>;
}): Promise<Metadata> {
  const { subject: subjectId, chapterId } = await params;
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);
  const chapterName = chapter?.title || "";

  return {
    title: `${SITE_NAME} - ${chapterName}`,
    description: chapter?.description || SITE_NAME
  };
}

export default async function ChapterLayout({
  children,
  params
}: ChapterLayoutProps) {
  const resolvedParams = await params;
  const { subject: subjectId, chapterId: rawChapterId } = resolvedParams;
  const chapterId = rawChapterId as ChapterId;

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-slate-900 mb-4">
            פרק לא נמצא
          </h1>
          <a href={`/${subjectId || ''}`} className="text-blue-600 font-bold">
            חזרה לנושא
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900" dir="rtl">
      <ChapterSidebar chapter={chapter} chapterId={chapterId} subjectId={subjectId} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
