"use client";

import React, { useState } from "react";

export const DiffusionSimulation: React.FC = () => {
  const [active, setActive] = useState(false);
  const [temperature, setTemperature] = useState(25);

  const speed = temperature / 25;

  return (
    <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-purple-900">
        פעפוע (דיפוזיה) בתוך גז
      </h4>

      <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow-inner mb-2">
        <label className="block text-slate-700 font-bold mb-2 text-center flex items-center justify-center gap-2">
          <img
            src="https://api.iconify.design/fluent-emoji/thermometer.svg"
            alt="thermometer"
            className="w-5 h-5"
          />{" "}
          טמפרטורה: {temperature}°C
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-full accent-purple-600"
        />
        <p className="text-center text-sm text-slate-500 mt-1">
          {temperature < 25
            ? "קר - פעפוע איטי"
            : temperature > 50
            ? "חם - פעפוע מהיר!"
            : "רגיל"}
        </p>
      </div>

      <div className="relative w-full max-w-md h-[200px] bg-white border-2 border-purple-200 rounded-2xl overflow-hidden shadow-inner">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`a-${i}`}
            className="absolute w-3 h-3 bg-red-500 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: active
                ? `${Math.random() * 80 + 10}%`
                : `${Math.random() * 30 + 5}%`,
              transition: `all ${3 / speed}s ease-in-out`
            }}
          ></div>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`b-${i}`}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: active
                ? `${Math.random() * 80 + 10}%`
                : `${Math.random() * 30 + 65}%`,
              transition: `all ${3 / speed}s ease-in-out`
            }}
          ></div>
        ))}
        {!active && (
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-300"></div>
        )}
      </div>

      <button
        onClick={() => setActive(!active)}
        className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all"
      >
        {active ? "אפס ניסוי" : "הסר את המחיצה"}
      </button>

      <p className="text-purple-800 font-medium italic text-center">
        החלקיקים מתערבבים מעצמם בגלל תנועתם המתמדת.
        <br />
        <span className="text-sm">
          ככל שהטמפרטורה גבוהה יותר - הפעפוע מהיר יותר!
        </span>
      </p>
    </div>
  );
};

