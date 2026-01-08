"use client";

import React from "react";
import { ChapterId, ModuleId, DynamicModuleData, Question } from "@/lib/types";
import { ContentRenderer } from "@/components/DynamicContent/ContentRenderer";

interface ModuleClientProps {
  chapterId: ChapterId;
  moduleId: ModuleId;
  dynamicData?: DynamicModuleData | null;
  questions: Question[];
}

export default function ModuleClient({
  chapterId,
  moduleId,
  dynamicData,
  questions
}: ModuleClientProps) {
  const handleQuizComplete = (score: number) => {
    const saved = localStorage.getItem(`completed_${chapterId}`);
    const completed = saved ? JSON.parse(saved) : [];
    if (!completed.includes(moduleId)) {
      completed.push(moduleId);
      localStorage.setItem(`completed_${chapterId}`, JSON.stringify(completed));
      // Refresh to update sidebar (in a more complex app, we'd use a context/store)
      window.dispatchEvent(new Event("storage"));
    }
  };

  if (dynamicData) {
    // Inject questions into quiz blocks
    const processedBlocks = dynamicData.blocks.map((block) => {
      if (block.type === "quiz") {
        return { ...block, questions: questions };
      }
      return block;
    });

    return (
      <ContentRenderer
        blocks={processedBlocks}
        onQuizComplete={handleQuizComplete}
      />
    );
  }

  // Fallback if data is missing or loading failed
  return (
    <div className="p-10 text-center text-slate-400 font-bold">
      <p>טוען תוכן...</p>
      <p className="text-sm font-normal mt-2 opacity-70">
        אם התוכן לא מופיע, ייתכן שיש בעיה בטעינת הנתונים.
      </p>
    </div>
  );
}
