import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnrichmentProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
}

export const Enrichment: React.FC<EnrichmentProps> = ({
  title,
  children,
  icon = "light-bulb"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-right p-6 rounded-[2rem] border-2 transition-all flex items-center justify-between gap-4 ${
          isOpen
            ? "bg-amber-50 border-amber-300 shadow-inner"
            : "bg-white border-slate-200 hover:border-amber-300 shadow-sm"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl">
            <img
              src={`https://api.iconify.design/fluent-emoji/${icon}.svg`}
              alt={icon}
              className="w-10 h-10 inline mr-2"
            />
          </span>
          <div>
            <h4 className="text-xl font-black text-slate-900">{title}</h4>
            <p className="text-slate-500 font-medium">
              {isOpen ? "סגור הרחבה" : "לחץ להרחבה למתקדמים"}
            </p>
          </div>
        </div>
        <span
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="bg-amber-50/50 p-8 rounded-b-[2rem] border-x-2 border-b-2 border-amber-200 mt-[-2rem] pt-12 text-lg text-slate-800 leading-relaxed shadow-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
