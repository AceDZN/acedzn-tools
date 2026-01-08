"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Subject } from "@/lib/types";

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <Link href={`/${subject.id}`}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all overflow-hidden h-full flex flex-col justify-between"
      >
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-50 rounded-bl-full opacity-50 group-hover:bg-blue-600 transition-colors" />

        <div>
          <div className="mb-4 md:mb-6 relative z-10">
            <img
              src={`https://api.iconify.design/fluent-emoji/${subject.icon}.svg`}
              alt={subject.icon}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 md:mb-4">
            {subject.title}
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
            {subject.description}
          </p>
        </div>

        <div className="mt-6 md:mt-8 flex items-center gap-2 text-blue-600 font-extrabold group-hover:gap-4 transition-all">
          <span>התחל ללמוד</span>
          <span className="text-xl md:text-2xl">←</span>
        </div>
      </motion.div>
    </Link>
  );
};

