"use client";

import React, { useState } from "react";

export const VolumeSimulation: React.FC = () => {
  const [l, setL] = useState(5);
  const [w, setW] = useState(4);
  const [h, setH] = useState(3);

  const volume = l * w * h;

  return (
    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-10 items-center shadow-sm">
      <div className="flex-1 space-y-6 w-full">
        <h4 className="font-black text-2xl mb-4 text-blue-900">
          חישוב נפח תיבה הנדסית
        </h4>
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-blue-200 shadow-inner">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-900 font-bold">אורך (ס"מ)</label>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-black">
                {l}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={l}
              onChange={(e) => setL(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-900 font-bold">רוחב (ס"מ)</label>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-black">
                {w}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={w}
              onChange={(e) => setW(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-900 font-bold">גובה (ס"מ)</label>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-black">
                {h}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={h}
              onChange={(e) => setH(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
        <div className="mt-6 p-6 bg-blue-600 text-white rounded-2xl shadow-lg border-b-4 border-blue-800 text-center">
          <p className="text-2xl font-black">
            נפח כולל: {l} × {w} × {h} = {volume} סמ"ק (מ"ל)
          </p>
        </div>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center border-4 border-dashed border-blue-200 rounded-3xl bg-white shadow-xl overflow-hidden">
        <div
          className="bg-blue-500 opacity-80 transition-all duration-300 rounded shadow-2xl relative"
          style={{
            width: l * 15,
            height: h * 15,
            transform: `perspective(500px) rotateX(15deg) rotateY(-15deg)`,
            borderBottom: `${w * 4}px solid #1e40af`,
            borderRight: `${w * 2}px solid #1e3a8a`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xs opacity-50">
            תיבה
          </div>
        </div>
      </div>
    </div>
  );
};

