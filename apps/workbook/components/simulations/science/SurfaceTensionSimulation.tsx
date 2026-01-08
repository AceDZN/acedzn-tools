"use client";

import React, { useState } from "react";

export const SurfaceTensionSimulation: React.FC = () => {
  const [dropCount, setDropCount] = useState(0);
  const [hasSoap, setHasSoap] = useState(false);
  const maxDrops = hasSoap ? 8 : 25;

  const addDrop = () => {
    if (dropCount < maxDrops) {
      setDropCount((prev) => prev + 1);
    }
  };

  const reset = () => {
    setDropCount(0);
  };

  const toggleSoap = () => {
    setHasSoap(!hasSoap);
    setDropCount(0);
  };

  const domeHeight = Math.min(dropCount * (hasSoap ? 2 : 4), hasSoap ? 15 : 80);

  return (
    <div className="bg-cyan-50 p-8 rounded-3xl border border-cyan-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-cyan-900">
        ניסוי מתח פנים: טיפות על מטבע
      </h4>

      <div className="flex gap-4 mb-2">
        <button
          onClick={toggleSoap}
          className={`px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            !hasSoap
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          מים רגילים
        </button>
        <button
          onClick={toggleSoap}
          className={`px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            hasSoap
              ? "bg-pink-600 text-white"
              : "bg-white text-pink-600 border border-pink-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/soap.svg"
            alt="soap"
            className="w-5 h-5"
          />{" "}
          מים + סבון
        </button>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-amber-900 font-bold text-xs">מטבע</span>

          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 bg-blue-400 rounded-t-full transition-all duration-300"
            style={{
              width: `${60 + dropCount * 2}px`,
              height: `${domeHeight}px`,
              opacity: dropCount > 0 ? 0.8 : 0
            }}
          ></div>
        </div>

        <p className="mt-4 text-lg font-bold text-cyan-800">
          טיפות: {dropCount} / {maxDrops}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={addDrop}
          disabled={dropCount >= maxDrops}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            dropCount >= maxDrops
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          הוסף טיפה
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/counterclockwise-arrows-button.svg"
            alt="reset"
            className="w-5 h-5"
          />{" "}
          אפס
        </button>
      </div>

      <div
        className={`p-4 rounded-xl text-center max-w-md ${
          hasSoap ? "bg-pink-100 text-pink-800" : "bg-cyan-100 text-cyan-800"
        }`}
      >
        {!hasSoap ? (
          dropCount >= maxDrops ? (
            <p>
              <strong>מדהים!</strong> מתח הפנים של המים יצר "כיפה" גבוהה על
              המטבע. הטיפות החזיקו הרבה זמן בלי להישפך!
            </p>
          ) : (
            <p>
              הוסיפו טיפות וראו כיצד מתח הפנים מחזיק את המים על המטבע בצורת
              כיפה.
            </p>
          )
        ) : dropCount >= maxDrops ? (
          <p>
            <strong>הסבון הוריד את מתח הפנים!</strong> המים נשפכו מהר יותר כי
            כוחות המשיכה בין החלקיקים נחלשו.
          </p>
        ) : (
          <p>
            שימו לב: עם סבון, המים יישפכו מהר יותר! הסבון מחליש את מתח הפנים.
          </p>
        )}
      </div>
    </div>
  );
};
