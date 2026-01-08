"use client";

import React, { useState } from "react";

export const FloatingExperiment: React.FC = () => {
  const [density, setDensity] = useState(0.8);
  const waterDensity = 1.0;

  return (
    <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 shadow-sm flex flex-col items-center">
      <h4 className="font-black text-2xl mb-6 text-sky-900">
        ניסוי: מי יצוף ומי ישקע?
      </h4>
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl mb-8 shadow-inner">
        <label className="block text-slate-700 font-bold mb-2">
          צפיפות החומר (גרם/סמ"ק):
        </label>
        <input
          type="range"
          min="0.1"
          max="2.0"
          step="0.1"
          value={density}
          onChange={(e) => setDensity(Number(e.target.value))}
          className="w-full accent-sky-600"
        />
        <p className="text-center text-2xl font-black text-sky-700 mt-2">
          {density} גרם/סמ"ק
        </p>
      </div>

      <div className="relative w-full h-48 bg-blue-100 rounded-2xl border-b-8 border-blue-300 overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-amber-600 rounded-lg flex items-center justify-center text-white font-black transition-all duration-700 border-2 border-amber-800 shadow-lg"
          style={{ top: density > waterDensity ? "100px" : "10px" }}
        >
          {density > waterDensity ? "שוקע" : "צף"}
        </div>
        <div className="absolute bottom-0 w-full h-2/3 bg-blue-400 opacity-40"></div>
      </div>
    </div>
  );
};

