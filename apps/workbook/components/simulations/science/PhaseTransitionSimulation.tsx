"use client";

import React, { useState } from "react";

export const PhaseTransitionSimulation: React.FC = () => {
  const [temperature, setTemperature] = useState(25);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate stable particles for each state
  const particles = React.useMemo(() => {
    return {
      solid: Array.from({ length: 16 }).map((_, i) => i),
      liquid: Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: 20 + Math.random() * 60,
        top: 30 + Math.random() * 60,
        duration: 1 + Math.random(),
      })),
      gas: Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 80,
        duration: 1.5 + Math.random(),
      })),
    };
  }, []);

  const getState = () => {
    if (temperature <= 0) return "solid";
    if (temperature >= 100) return "gas";
    return "liquid";
  };

  const state = getState();

  const animate = (direction: "heat" | "cool") => {
    setIsAnimating(true);
    const target = direction === "heat" ? 120 : -20;
    const step = direction === "heat" ? 2 : -2;

    const interval = setInterval(() => {
      setTemperature((prev) => {
        const next = prev + step;
        if (
          (direction === "heat" && next >= target) ||
          (direction === "cool" && next <= target)
        ) {
          clearInterval(interval);
          setIsAnimating(false);
          return target;
        }
        return next;
      });
    }, 50);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-orange-900">מעברי פאזה של מים</h4>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => animate("cool")}
          disabled={isAnimating}
          className="px-6 py-3 rounded-xl font-bold bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/snowflake.svg"
            alt="snowflake"
            className="w-5 h-5"
          />{" "}
          קרר
        </button>
        <button
          onClick={() => animate("heat")}
          disabled={isAnimating}
          className="px-6 py-3 rounded-xl font-bold bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/fire.svg"
            alt="fire"
            className="w-5 h-5"
          />{" "}
          חמם
        </button>
      </div>

      <div className="relative w-40 h-48 bg-slate-200 rounded-b-3xl border-4 border-slate-400 overflow-hidden shadow-inner">
        {state === "solid" && (
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-cyan-400 to-cyan-200 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-1">
              {particles.solid.map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-cyan-600 rounded-sm animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        )}
        {state === "liquid" && (
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-blue-500 to-blue-300">
            <div className="absolute inset-0 flex items-center justify-center">
              {particles.liquid.map((p) => (
                <div
                  key={p.id}
                  className="absolute w-2 h-2 bg-blue-700 rounded-full"
                  style={{
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    animation: `float ${p.duration}s ease-in-out infinite`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
        {state === "gas" && (
          <div className="absolute inset-0">
            {particles.gas.map((p) => (
              <div
                key={p.id}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  animation: `bubble ${p.duration}s ease-in-out infinite`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-3xl font-black text-slate-800">{temperature}°C</p>
        <p className="text-lg font-bold mt-2 flex items-center justify-center gap-2">
          {state === "solid" && (
            <span className="text-cyan-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/ice.svg"
                alt="ice"
                className="w-6 h-6"
              />{" "}
              קרח (מוצק)
            </span>
          )}
          {state === "liquid" && (
            <span className="text-blue-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/droplet.svg"
                alt="droplet"
                className="w-6 h-6"
              />{" "}
              מים (נוזל)
            </span>
          )}
          {state === "gas" && (
            <span className="text-purple-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
                alt="gas"
                className="w-6 h-6"
              />{" "}
              אדים (גז)
            </span>
          )}
        </p>
      </div>

      <div className="w-full max-w-sm">
        <input
          type="range"
          min="-20"
          max="120"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          disabled={isAnimating}
          className="w-full accent-orange-600"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>-20°C</span>
          <span className="text-blue-500 font-bold">0°C (קפיאה)</span>
          <span className="text-red-500 font-bold">100°C (רתיחה)</span>
          <span>120°C</span>
        </div>
      </div>

      <div
        className={`p-4 rounded-xl text-center max-w-md ${
          state === "solid"
            ? "bg-cyan-100 text-cyan-800"
            : state === "liquid"
            ? "bg-blue-100 text-blue-800"
            : "bg-purple-100 text-purple-800"
        }`}
      >
        {state === "solid" && (
          <p>
            ב-0°C ומטה, המים הופכים לקרח. החלקיקים מסודרים ורק רוטטים במקומם.
          </p>
        )}
        {state === "liquid" && (
          <p>
            בין 0°C ל-100°C, המים נמצאים במצב נוזלי. החלקיקים מחליקים זה על זה.
          </p>
        )}
        {state === "gas" && (
          <p>
            ב-100°C ומעלה, המים הופכים לאדים. החלקיקים נעים בחופשיות בכל
            הכיוונים.
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes bubble {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

