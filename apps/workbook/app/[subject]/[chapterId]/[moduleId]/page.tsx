import fs from "fs/promises";
import path from "path";
import { ChapterId, ModuleId, DynamicModuleData, Question } from "@/lib/types";
// Client component for interactive module content
import ModuleClient from "./module-client";
import type { Metadata, ResolvingMetadata } from "next";
import { SUBJECTS } from "@/lib/constants";
import { generateModuleMetadata, generateEducationalContentSchema, generateBreadcrumbSchema, SITE_URL, SITE_NAME } from "@/lib/seo";

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

  const moduleName = dynamicData?.title || "";
  const moduleDescription = dynamicData?.metadata?.description || chapter?.description;
  const moduleKeywords = dynamicData?.metadata?.keywords;

  return generateModuleMetadata(
    chapterId,
    moduleId,
    moduleName,
    moduleDescription,
    moduleKeywords
  );
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.chapterId as ChapterId;
  const moduleId = resolvedParams.moduleId as ModuleId;
  const subjectId = resolvedParams.subject as SubjectId;

  const dynamicData = await getModuleData(subjectId, chapterId, moduleId);

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  // Dynamically load questions for the specific chapter on the server
  let questions: Question[] = [];
  try {

    const { CHAPTER_QUESTIONS } = await import(
      `@/lib/constants/${subjectId}_${chapterId}`
    );
    questions = CHAPTER_QUESTIONS[moduleId] || [];


  } catch (error) {
    console.error("Error loading questions:", error);
  }

  // Generate structured data for SEO
  const moduleUrl = `${SITE_URL}/${subjectId}/${chapterId}/${moduleId}`;
  const educationalSchema = generateEducationalContentSchema({
    title: dynamicData?.title || "",
    description: dynamicData?.metadata?.description || chapter?.description || "",
    url: moduleUrl,
    chapterName: chapter?.title,
    moduleName: dynamicData?.title,
    keywords: dynamicData?.metadata?.keywords,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: SITE_NAME, url: SITE_URL },
    { name: subject?.title || "מדעים", url: `${SITE_URL}/${subjectId}` },
    { name: chapter?.title || "", url: `${SITE_URL}/${subjectId}/${chapterId}/summary` },
    { name: dynamicData?.title || "", url: moduleUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="animate-in fade-in duration-700">
        <ModuleClient
          chapterId={chapterId}
          moduleId={moduleId}
          dynamicData={dynamicData}
          questions={questions}
        />
      </div>
    </>
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
