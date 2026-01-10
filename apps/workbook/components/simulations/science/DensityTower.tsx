"use client";

import React, { useState } from "react";

/**
 * DensityTower - Interactive demonstration of liquid density layers
 * Shows how liquids of different densities arrange in layers
 */

interface Liquid {
  id: string;
  name: string;
  density: number;
  color: string;
  gradient: string;
}

const LIQUIDS: Liquid[] = [
  { id: "honey", name: "דבש", density: 1.42, color: "amber", gradient: "from-amber-500 to-amber-700" },
  { id: "syrup", name: "סירופ", density: 1.33, color: "orange", gradient: "from-orange-400 to-orange-600" },
  { id: "milk", name: "חלב", density: 1.03, color: "white", gradient: "from-slate-100 to-slate-200" },
  { id: "water", name: "מים (צבועים)", density: 1.00, color: "blue", gradient: "from-blue-400 to-blue-500" },
  { id: "oil", name: "שמן", density: 0.92, color: "yellow", gradient: "from-yellow-300 to-yellow-400" },
  { id: "alcohol", name: "כוהל", density: 0.79, color: "purple", gradient: "from-purple-300 to-purple-400" },
];

export const DensityTower: React.FC = () => {
  const [addedLiquids, setAddedLiquids] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sort added liquids by density (heaviest at bottom)
  const sortedLiquids = [...addedLiquids]
    .map(id => LIQUIDS.find(l => l.id === id)!)
    .sort((a, b) => b.density - a.density);

  const addLiquid = (id: string) => {
    if (addedLiquids.includes(id) || isAnimating) return;

    setIsAnimating(true);
    setAddedLiquids([...addedLiquids, id]);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const reset = () => {
    setAddedLiquids([]);
  };

  const layerHeight = 100 / Math.max(sortedLiquids.length, 1);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border border-indigo-200 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-indigo-900">
        מגדל הצפיפות
      </h4>

      <p className="text-slate-600 text-center max-w-md">
        הוסיפו נוזלים שונים לכלי וראו כיצד הם מסתדרים בשכבות לפי הצפיפות שלהם!
      </p>

      <div className="flex gap-8 items-start">
        {/* Liquid buttons */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-slate-700 text-sm mb-2">נוזלים זמינים:</p>
          {LIQUIDS.map((liquid) => (
            <button
              key={liquid.id}
              onClick={() => addLiquid(liquid.id)}
              disabled={addedLiquids.includes(liquid.id) || isAnimating}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-between gap-3 min-w-[160px] ${
                addedLiquids.includes(liquid.id)
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : `bg-gradient-to-r ${liquid.gradient} text-white hover:scale-105`
              }`}
            >
              <span>{liquid.name}</span>
              <span className="text-xs opacity-80">{liquid.density} g/ml</span>
            </button>
          ))}
        </div>

        {/* Glass container */}
        <div className="relative">
          <div className="relative w-32 h-64 bg-gradient-to-b from-slate-100/50 to-slate-200/50 border-4 border-slate-300 rounded-b-2xl overflow-hidden shadow-inner">
            {/* Liquid layers */}
            {sortedLiquids.map((liquid, index) => (
              <div
                key={liquid.id}
                className={`absolute left-0 right-0 bg-gradient-to-b ${liquid.gradient} transition-all duration-500 ease-out`}
                style={{
                  bottom: `${index * layerHeight}%`,
                  height: `${layerHeight}%`,
                  animation: addedLiquids[addedLiquids.length - 1] === liquid.id
                    ? "dropIn 0.5s ease-out"
                    : undefined,
                }}
              >
                {/* Liquid label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    liquid.color === "white" ? "text-slate-700 bg-white/50" : "text-white/90"
                  }`}>
                    {liquid.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Empty state */}
            {sortedLiquids.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                הכלי ריק
              </div>
            )}

            {/* Glass reflection */}
            <div className="absolute top-4 left-2 w-1 h-20 bg-white opacity-40 rounded-full" />
          </div>

          {/* Base */}
          <div className="w-40 h-3 bg-slate-400 rounded-b-lg -ml-4" />
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-slate-700 text-sm mb-2">סדר בכלי (מלמעלה):</p>
          {sortedLiquids.length === 0 ? (
            <p className="text-slate-400 text-sm">טרם נוספו נוזלים</p>
          ) : (
            [...sortedLiquids].reverse().map((liquid, index) => (
              <div key={liquid.id} className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">{index + 1}.</span>
                <div className={`w-4 h-4 rounded bg-gradient-to-br ${liquid.gradient}`} />
                <span className="text-slate-700">{liquid.name}</span>
                <span className="text-slate-400">({liquid.density})</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={reset}
        className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all"
      >
        נקה והתחל מחדש
      </button>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-indigo-100 text-indigo-800 text-center max-w-md">
        {sortedLiquids.length === 0 && (
          <p>הוסיפו נוזלים לכלי כדי לראות כיצד הם מסתדרים לפי צפיפותם.</p>
        )}
        {sortedLiquids.length > 0 && sortedLiquids.length < 3 && (
          <p>נוזל עם צפיפות גבוהה יותר <strong>שוקע למטה</strong>. הוסיפו עוד נוזלים!</p>
        )}
        {sortedLiquids.length >= 3 && sortedLiquids[0] && (
          <p><strong>כלל הזהב:</strong> נוזל בעל צפיפות גבוהה יותר תמיד ישקע מתחת לנוזל בעל צפיפות נמוכה יותר. הדבש ({sortedLiquids[0].density} g/ml) הכבד ביותר תמיד בתחתית!</p>
        )}
      </div>

      <style jsx>{`
        @keyframes dropIn {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
