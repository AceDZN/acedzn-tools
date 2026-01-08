"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-block bg-blue-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-black mb-3 md:mb-4"
      >
        ברוכים הבאים לעתיד הלימוד
      </motion.div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
        מסע אל עולם <span className="text-blue-600 italic">הידע</span>
      </h1>
      <p className="text-base md:text-lg lg:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed px-4">
        גלו עולמות חדשים דרך חוויה אינטראקטיבית, חכמה ומרהיבה.
      </p>
    </header>
  );
};

