"use client";

import React from "react";
import { QuizBlock as QuizBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { Quiz } from "@/components/Quiz";

interface Props {
  block: QuizBlockType;
  renderBlock: RenderBlockFn;
  onQuizComplete?: (score: number) => void;
}

export const QuizBlock = ({ block, onQuizComplete }: Props) => {
  return (
    <div className="bg-slate-50 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-slate-200">
      <Quiz
        questions={block.questions || []}
        onComplete={onQuizComplete || (() => {})}
      />
    </div>
  );
};

