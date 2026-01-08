"use client";

import React, { useState } from "react";

export const DisplacementSimulation: React.FC = () => {
  const [isInside, setIsInside] = useState(false);
  const initialWater = 50;
  const objectVolume = 15;

  return (
    <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col items-center gap-8 shadow-sm">
      <h4 className="font-black text-2xl text-emerald-900">
        מדידת נפח בשיטת דחיקת המים
      </h4>
      <div className="flex flex-col md:flex-row gap-16 items-center h-full w-full justify-center py-8">
        <div className="relative w-28 h-72 bg-white border-x-8 border-b-8 border-slate-300 rounded-b-3xl overflow-hidden flex flex-col justify-end shadow-inner">
          <div
            className="w-full bg-blue-400 transition-all duration-1000 relative"
            style={{
              height: `${initialWater + (isInside ? objectVolume : 0)}%`
            }}
          >
            {isInside && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-sm font-black text-white shadow-lg animate-bounce">
                אבן
              </div>
            )}
          </div>
          <div className="absolute inset-0 flex flex-col justify-between py-4 pr-3 pointer-events-none">
            {[100, 80, 60, 40, 20, 0].map((v) => (
              <div key={v} className="flex items-center gap-2">
                <div className={`h-0.5 bg-slate-400 w-5`}></div>
                <span className="text-[12px] font-black text-slate-600">
                  {v} מ"ל
                </span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsInside(!isInside)}
          className={`text-white font-black py-5 px-8 rounded-2xl shadow-xl transition-all text-xl ${
            isInside ? "bg-red-500" : "bg-emerald-600"
          }`}
        >
          {isInside ? "הוצא את האבן" : "הטבל את האבן"}
        </button>
      </div>
    </div>
  );
};

