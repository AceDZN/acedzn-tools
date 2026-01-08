import fs from "fs/promises";
import path from "path";
import { ChapterId, ModuleId, DynamicModuleData, Question } from "@/lib/types";
// Client component for interactive module content
import ModuleClient from "./module-client";
import type { Metadata, ResolvingMetadata } from "next";
import { SITE_NAME, SUBJECTS } from "@/lib/constants";

type SubjectId = "science" | "math" | "history";

interface PageProps {
  params: Promise<{
    subject: SubjectId;
    chapterId: string;
    moduleId: string;
  }>;
}

async function getModuleData(
  subjectId: SubjectId,
  chapterId: string,
  moduleId: string
): Promise<DynamicModuleData | null> {
  const filePath = path.join(
    process.cwd(),
    "Data",
    "Modules",
    subjectId,
    chapterId,
    `${moduleId}.json`
  );
  try {
    await fs.access(filePath);
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (e) {
    return null;
  }
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { subject: subjectId, chapterId, moduleId } = await params;
  const dynamicData = await getModuleData(subjectId, chapterId, moduleId);

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  const chapterName = chapter?.title || "";
  const moduleName = dynamicData?.title || "";

  return {
    title: `${SITE_NAME} - ${chapterName} - ${moduleName}`,
    description:
      dynamicData?.metadata?.description || chapter?.description || SITE_NAME,
    keywords: dynamicData?.metadata?.keywords || [
      chapterName,
      moduleName,
      SITE_NAME
    ]
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.chapterId as ChapterId;
  const moduleId = resolvedParams.moduleId as ModuleId;
  const subjectId = resolvedParams.subject as SubjectId;

  const dynamicData = await getModuleData(subjectId, chapterId, moduleId);

  // Dynamically load questions for the specific chapter on the server
  let questions: Question[] = [];
  try {
    if (chapterId === ChapterId.Chapter1) {
      const { CHAPTER1_QUESTIONS } = await import(
        "@/lib/constants/science_chapter_1"
      );
      questions = CHAPTER1_QUESTIONS[moduleId] || [];
    } else if (chapterId === ChapterId.Chapter2) {
      const { CHAPTER2_QUESTIONS } = await import(
        "@/lib/constants/science_chapter_2"
      );
      questions = CHAPTER2_QUESTIONS[moduleId] || [];
    }
  } catch (error) {
    console.error("Error loading questions:", error);
  }

  return (
    <div className="animate-in fade-in duration-700">
      <ModuleClient
        chapterId={chapterId}
        moduleId={moduleId}
        dynamicData={dynamicData}
        questions={questions}
      />
    </div>
  );
}

// Optimization: Pre-generate static paths for all chapters and modules
export async function generateStaticParams() {
  const { SUBJECTS } = await import("@/lib/constants");

  const paths = SUBJECTS.flatMap((subject) =>
    subject.chapters.flatMap((chapter) =>
      chapter.modules.map((module) => ({
        subject: subject.id,
        chapterId: chapter.id,
        moduleId: module.id
      }))
    )
  );

  return paths;
}
