"use client";

import React from "react";

/**
 * MeniscusIllustration - Visual illustration of how to read liquid volume
 * Shows a beaker with water and the meniscus curve with reading line
 */
export const MeniscusIllustration = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
      <div className="w-20 h-40 mx-auto bg-blue-100 rounded-b-xl border-2 border-blue-300 relative overflow-hidden">
        {/* Water */}
        <div className="absolute bottom-0 w-full h-1/2 bg-blue-400">
          {/* Meniscus curve */}
          <div 
            className="absolute top-0 w-full h-4 bg-blue-100" 
            style={{ borderRadius: "0 0 50% 50%" }}
          />
        </div>
        {/* Reading line */}
        <div 
          className="absolute top-1/2 left-0 w-full border-t-2 border-red-500 border-dashed"
          style={{ transform: "translateY(16px)" }}
        />
      </div>
      <p className="mt-2 text-sm text-slate-600">הקו האדום מראה היכן לקרוא</p>
    </div>
  );
};

