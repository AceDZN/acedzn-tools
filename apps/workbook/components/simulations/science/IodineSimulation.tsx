"use client";

import React, { useState } from "react";

/**
 * IodineSimulation - Interactive demonstration of iodine sublimation
 * Shows the direct transition from solid iodine crystals to purple gas (sublimation)
 * and the reverse process (deposition) when cooled
 */
export const IodineSimulation: React.FC = () => {
  const [temperature, setTemperature] = useState(25);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate stable particles for gas phase
  const gasParticles = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      top: 10 + Math.random() * 70,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
      size: 3 + Math.random() * 4,
    }));
  }, []);

  // Crystal positions for solid phase
  const crystals = React.useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: 15 + (i % 4) * 20,
      bottom: 5 + Math.floor(i / 4) * 15,
      size: 8 + Math.random() * 6,
      rotation: Math.random() * 45,
    }));
  }, []);

  const getState = () => {
    if (temperature < 50) return "solid";
    if (temperature >= 50 && temperature < 80) return "sublimating";
    return "gas";
  };

  const state = getState();

  const animate = (direction: "heat" | "cool") => {
    setIsAnimating(true);
    const target = direction === "heat" ? 100 : 25;
    const step = direction === "heat" ? 1.5 : -1.5;

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
    }, 40);
  };

  // Calculate gas opacity based on temperature
  const gasOpacity = Math.min(1, Math.max(0, (temperature - 50) / 50));
  const solidOpacity = Math.min(1, Math.max(0, (80 - temperature) / 30));

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-200 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-purple-900">
        המראת יוד: מוצק → גז סגול
      </h4>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => animate("cool")}
          disabled={isAnimating}
          className="px-6 py-3 rounded-xl font-bold bg-cyan-500 text-white hover:bg-cyan-600 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/snowflake.svg"
            alt="snowflake"
            className="w-5 h-5"
          />
          קרר (ריבוץ)
        </button>
        <button
          onClick={() => animate("heat")}
          disabled={isAnimating}
          className="px-6 py-3 rounded-xl font-bold bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/fire.svg"
            alt="fire"
            className="w-5 h-5"
          />
          חמם (המראה)
        </button>
      </div>

      {/* Flask container */}
      <div className="relative">
        {/* Flask body */}
        <div className="relative w-48 h-56 bg-gradient-to-b from-slate-100 to-slate-200 rounded-b-[50%] border-4 border-slate-300 overflow-hidden shadow-inner">
          {/* Purple gas filling the flask */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-purple-400 via-purple-300 to-transparent transition-opacity duration-500"
            style={{ opacity: gasOpacity * 0.7 }}
          >
            {/* Animated gas particles */}
            {gasParticles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-purple-600 transition-opacity duration-500"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  opacity: gasOpacity * 0.8,
                  animation: `iodineFloat ${p.duration}s ease-in-out infinite`,
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Solid iodine crystals at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 transition-opacity duration-500"
            style={{ opacity: solidOpacity }}
          >
            {crystals.map((c) => (
              <div
                key={c.id}
                className="absolute bg-gradient-to-br from-slate-600 to-slate-800 shadow-md"
                style={{
                  left: `${c.left}%`,
                  bottom: `${c.bottom}px`,
                  width: `${c.size}px`,
                  height: `${c.size * 0.7}px`,
                  transform: `rotate(${c.rotation}deg)`,
                  clipPath: "polygon(50% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
                }}
              />
            ))}
          </div>

          {/* Glass reflection effect */}
          <div className="absolute top-4 left-4 w-2 h-20 bg-white opacity-30 rounded-full blur-sm" />
        </div>

        {/* Flask neck */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-10 bg-gradient-to-b from-slate-200 to-slate-100 border-x-4 border-t-4 border-slate-300 rounded-t-lg" />

        {/* Heat source indicator */}
        {temperature > 40 && (
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <div
              className="text-2xl transition-opacity duration-300"
              style={{ opacity: Math.min(1, (temperature - 40) / 60) }}
            >
              🔥
            </div>
          </div>
        )}
      </div>

      {/* Temperature display */}
      <div className="text-center">
        <p className="text-3xl font-black text-slate-800">
          {Math.round(temperature)}°C
        </p>
        <p className="text-lg font-bold mt-2 flex items-center justify-center gap-2">
          {state === "solid" && (
            <span className="text-slate-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/gem-stone.svg"
                alt="crystal"
                className="w-6 h-6"
              />
              גבישי יוד (מוצק)
            </span>
          )}
          {state === "sublimating" && (
            <span className="text-purple-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/sparkles.svg"
                alt="sparkles"
                className="w-6 h-6"
              />
              המראה מתרחשת...
            </span>
          )}
          {state === "gas" && (
            <span className="text-purple-700 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/cloud.svg"
                alt="gas"
                className="w-6 h-6"
              />
              גז יוד סגול
            </span>
          )}
        </p>
      </div>

      {/* Temperature slider */}
      <div className="w-full max-w-sm">
        <input
          type="range"
          min="25"
          max="100"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          disabled={isAnimating}
          className="w-full accent-purple-600"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>25°C (חדר)</span>
          <span className="text-purple-500 font-bold">50°C (מתחיל)</span>
          <span className="text-purple-700 font-bold">100°C (גז מלא)</span>
        </div>
      </div>

      {/* Info box */}
      <div
        className={`p-4 rounded-xl text-center max-w-md transition-colors duration-300 ${
          state === "solid"
            ? "bg-slate-100 text-slate-700"
            : state === "sublimating"
            ? "bg-purple-100 text-purple-800"
            : "bg-purple-200 text-purple-900"
        }`}
      >
        {state === "solid" && (
          <p>
            גבישי היוד אפורים-כהים ומנצנצים. בטמפרטורת החדר הם יציבים כמוצק.
          </p>
        )}
        {state === "sublimating" && (
          <p>
            <strong>המראה מתרחשת!</strong> הגבישים עוברים ישירות לגז סגול—בלי
            להפוך קודם לנוזל.
          </p>
        )}
        {state === "gas" && (
          <p>
            <strong>גז יוד סגול!</strong> זו אחת הפעמים הנדירות שרואים גז צבעוני.
            קירור יגרום לריבוץ—חזרה לגבישים.
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes iodineFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(-8px) translateX(-5px);
          }
          75% {
            transform: translateY(-20px) translateX(3px);
          }
        }
      `}</style>
    </div>
  );
};
