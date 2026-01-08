import React from "react";
import { SUBJECTS, SITE_NAME } from "@/lib/constants";
import { ChapterCard } from "@/components/home/ChapterCard";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface SubjectPageProps {
  params: Promise<{ subject: string }>;
}

export async function generateMetadata({
  params
}: SubjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const subject = SUBJECTS.find((s) => s.id === resolvedParams.subject);

  if (!subject) {
    return {
      title: "Subject Not Found"
    };
  }

  return {
    title: `${SITE_NAME} - ${subject.title}`,
    description: subject.description
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const resolvedParams = await params;
  const subject = SUBJECTS.find((s) => s.id === resolvedParams.subject);

  if (!subject) {
    notFound();
  }

  return (
    <main
      className="min-h-screen bg-[#f8fafc] p-4 md:p-6 text-slate-900"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {subject.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {subject.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {subject.chapters.length > 0 ? (
            subject.chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                subjectId={subject.id}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500">
              <p className="text-xl">בקרוב יעלו תכנים חדשים בנושא זה.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

