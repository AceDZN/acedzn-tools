import React from "react";
import { SUBJECTS, SITE_NAME } from "@/lib/constants";
import { HeroSection } from "@/components/home/HeroSection";
import { SubjectCard } from "@/components/home/SubjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE_NAME} - לומדים הכל בדרך חווייתית`,
  description:
    "פלטפורמה לימודית אינטראקטיבית. גלו עולמות ידע חדשים דרך סימולציות, ניסויים ומבחנים חכמים.",
  keywords: [
    "למידה",
    "מדעים",
    "מתמטיקה",
    "היסטוריה",
    "למידה מקוונת",
    "סימולציות"
  ]
};

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#f8fafc] p-4 md:p-6 text-slate-900"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
        <HeroSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {SUBJECTS.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </main>
  );
}
