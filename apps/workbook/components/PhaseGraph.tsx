import React from 'react';
import { motion } from 'framer-motion';

export const PhaseGraph: React.FC = () => {
  // Simple representation of a heating curve
  const points = [
    { x: 0, y: 100, label: 'מוצק', temp: '-20°C', active: false },
    { x: 20, y: 80, label: 'היתוך', temp: '0°C', active: true },
    { x: 40, y: 80, label: 'נוזל', temp: '0°C-100°C', active: false },
    { x: 60, y: 60, label: 'רתיחה', temp: '100°C', active: true },
    { x: 80, y: 40, label: 'גז', temp: '>100°C', active: false },
  ];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm my-10">
      <h4 className="text-2xl font-black text-slate-900 mb-8 text-center italic">עקומת חימום של מים</h4>
      <div className="relative h-64 border-l-4 border-b-4 border-slate-200 ml-10 mb-10">
        {/* Y-Axis Label */}
        <div className="absolute -left-12 top-0 -rotate-90 origin-top-left text-sm font-black text-slate-400">
          טמפרטורה
        </div>
        {/* X-Axis Label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-black text-slate-400">
          זמן (תוספת אנרגיה)
        </div>

        {/* The Graph Line */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 0 95 L 20 80 L 40 80 L 60 50 L 80 50 L 100 20"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Points/Labels */}
          <circle cx="20" cy="80" r="4" fill="#3b82f6" />
          <circle cx="40" cy="80" r="4" fill="#3b82f6" />
          <circle cx="60" cy="50" r="4" fill="#3b82f6" />
          <circle cx="80" cy="50" r="4" fill="#3b82f6" />
        </svg>

        {/* Annotations */}
        <div className="absolute top-[75%] left-[20%] text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
          מעבר פאזה (היתוך)
        </div>
        <div className="absolute top-[45%] left-[60%] text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
          מעבר פאזה (רתיחה)
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
        <p className="text-sm font-bold text-blue-800 leading-relaxed">
          שימו לב: בזמן מעבר פאזה (הקווים האופקיים), הטמפרטורה לא עולה למרות שממשיכים לחמם! 
          האנרגיה המושקעת משמשת לניתוק הקשרים בין החלקיקים ולא להעלאת המהירות שלהם.
        </p>
      </div>
    </div>
  );
};
