"use client";

import React from "react";
import { ChapterId, Question } from "@/lib/types";
import { Quiz } from "@/components/Quiz";
import Link from "next/link";

interface SummaryClientProps {
  chapterId: ChapterId;
  questions: Question[];
  chapterTitle: string;
}

export default function SummaryClient({ 
  chapterId, 
  questions,
  chapterTitle 
}: SummaryClientProps) {
  const handleComplete = (score: number) => {
    console.log(`Summary exam completed with score: ${score}`);
    localStorage.setItem(`exam_score_${chapterId}`, score.toString());
  };

  return (
    <div className="space-y-12 text-right">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10">
          <h2 className="text-5xl font-black mb-4 tracking-tight">
            סיכום ומבחן: {chapterTitle}
          </h2>
          <p className="text-xl font-medium opacity-90 max-w-2xl">
            הגעת לסוף הפרק! זה הזמן לבדוק את הידע שלך על כל מה שלמדנו.{" "}
            <img
              src="https://api.iconify.design/fluent-emoji/graduation-cap.svg"
              alt="graduation"
              className="w-6 h-6 inline"
            />
          </p>
        </div>
      </header>

      <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
        <Quiz questions={questions} onComplete={handleComplete} />
      </div>

      <footer className="flex justify-center">
        <Link
          href="/"
          className="bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-black hover:bg-blue-600 transition-all hover:scale-105 shadow-lg"
        >
          חזרה לתפריט הראשי
        </Link>
      </footer>
    </div>
  );
}
