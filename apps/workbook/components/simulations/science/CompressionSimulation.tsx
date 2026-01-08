"use client";

import React, { useState } from "react";

export const CompressionSimulation: React.FC = () => {
  const [pressure, setPressure] = useState(0);
  const [matterState, setMatterState] = useState<"gas" | "liquid" | "solid">(
    "gas"
  );

  const [particles, setParticles] = useState<{ top: number; left: number }[]>(
    []
  );

  // Generate stable particles when matter state changes to gas
  React.useEffect(() => {
    if (matterState === "gas") {
      const newParticles = Array.from({ length: 20 }).map(() => ({
        top: Math.random() * 80 + 10,
        left: Math.random() * 90 + 5
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [matterState]);

  const getVolume = () => {
    switch (matterState) {
      case "gas":
        return 100 - pressure * 0.7;
      case "liquid":
        return 100 - pressure * 0.05;
      case "solid":
        return 100 - pressure * 0.01;
    }
  };

  const volume = getVolume();

  return (
    <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-orange-900">ניסוי דחיסה במזרק</h4>
      <div className="flex gap-3 mb-4 flex-wrap justify-center">
        <button
          onClick={() => {
            setMatterState("gas");
            setPressure(0);
          }}
          className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            matterState === "gas"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 border border-purple-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
            alt="gas"
            className="w-5 h-5"
          />{" "}
          גז (אוויר)
        </button>
        <button
          onClick={() => {
            setMatterState("liquid");
            setPressure(0);
          }}
          className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            matterState === "liquid"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          נוזל (מים)
        </button>
        <button
          onClick={() => {
            setMatterState("solid");
            setPressure(0);
          }}
          className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            matterState === "solid"
              ? "bg-slate-600 text-white"
              : "bg-white text-slate-600 border border-slate-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/ice.svg"
            alt="ice"
            className="w-5 h-5"
          />{" "}
          מוצק
        </button>
      </div>

      <div className="relative w-80 h-32 bg-slate-200 rounded-r-lg border-y-4 border-r-4 border-slate-400 flex items-center justify-end overflow-visible">
        <div className="absolute left-0 w-full h-full bg-white opacity-40 rounded-r-sm"></div>

        {/* Piston */}
        <div
          className="absolute h-full bg-slate-500 w-4 transition-all duration-300 z-20"
          style={{ right: `${volume}%` }}
        >
          {/* Rod */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 w-20 h-4 bg-slate-400"></div>
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 right-24 w-4 h-16 bg-slate-600 rounded-l-lg"></div>
        </div>

        {/* Matter Content */}
        <div
          className={`h-full transition-all duration-300 absolute right-0 top-0 rounded-r-sm ${
            matterState === "gas"
              ? "bg-purple-100"
              : matterState === "liquid"
              ? "bg-blue-400"
              : "bg-slate-500"
          }`}
          style={{ width: `${volume}%` }}
        >
          {matterState === "gas" &&
            particles.map((p, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-500 rounded-full"
                style={{
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  transition: "left 0.3s ease-out, top 0.3s ease-out"
                }}
              ></div>
            ))}
          {matterState === "liquid" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold opacity-60">
                נוזל
              </span>
            </div>
          )}
          {matterState === "solid" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold opacity-60">
                מוצק
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-sm">
        <label className="block text-slate-700 font-bold mb-2 text-center">
          הפעל לחץ על הבוכנה
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={pressure}
          onChange={(e) => setPressure(Number(e.target.value))}
          className="w-full accent-orange-600"
        />
      </div>

      <div
        className={`p-4 rounded-xl text-center ${
          matterState === "gas"
            ? "bg-purple-100 text-purple-800"
            : matterState === "liquid"
            ? "bg-blue-100 text-blue-800"
            : "bg-slate-200 text-slate-800"
        }`}
      >
        {matterState === "gas" && (
          <p className="font-bold flex items-center justify-center gap-2">
            {pressure > 50 ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
                  alt="gas"
                  className="w-5 h-5"
                />{" "}
                הגז נדחס בקלות! המרווחים בין החלקיקים קטנים.
              </>
            ) : (
              "הפעל לחץ כדי לראות את הגז נדחס"
            )}
          </p>
        )}
        {matterState === "liquid" && (
          <p className="font-bold flex items-center justify-center gap-2">
            {pressure > 50 ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/droplet.svg"
                  alt="droplet"
                  className="w-5 h-5"
                />{" "}
                הנוזל כמעט לא נדחס! אין מספיק מרווחים בין החלקיקים.
              </>
            ) : (
              "נסה להפעיל לחץ - הנוזל לא יידחס!"
            )}
          </p>
        )}
        {matterState === "solid" && (
          <p className="font-bold flex items-center justify-center gap-2">
            {pressure > 50 ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/ice.svg"
                  alt="ice"
                  className="w-5 h-5"
                />{" "}
                המוצק לא נדחס כלל! החלקיקים כבר צמודים לחלוטין.
              </>
            ) : (
              "נסה להפעיל לחץ - המוצק לא יידחס!"
            )}
          </p>
        )}
      </div>
    </div>
  );
};
