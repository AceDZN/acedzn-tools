"use client";

import React, { useState, useEffect } from "react";

export const ParticleModelSimulation: React.FC = () => {
  const [state, setState] = useState<"solid" | "liquid" | "gas">("solid");
  const [particles, setParticles] = useState<
    { x: number; y: number; vx: number; vy: number }[]
  >([]);

  useEffect(() => {
    const count = state === "gas" ? 20 : state === "liquid" ? 30 : 36;
    const newParticles = [];

    if (state === "solid") {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
          newParticles.push({
            x: 30 + col * 25,
            y: 30 + row * 25,
            vx: 0,
            vy: 0
          });
        }
      }
    } else {
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * 160 + 20,
          y:
            state === "gas"
              ? Math.random() * 160 + 20
              : Math.random() * 80 + 100,
          vx: (Math.random() - 0.5) * (state === "gas" ? 4 : 2),
          vy: (Math.random() - 0.5) * (state === "gas" ? 4 : 2)
        });
      }
    }
    setParticles(newParticles);
  }, [state]);

  useEffect(() => {
    if (state === "solid") return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newVx = p.vx;
          let newVy = p.vy;

          if (newX < 10 || newX > 190) newVx = -newVx;
          if (newY < 10 || newY > 190) newVy = -newVy;

          if (state === "liquid" && newY < 90) {
            newY = 90;
            newVy = Math.abs(newVy);
          }

          return {
            x: Math.max(10, Math.min(190, newX)),
            y: Math.max(10, Math.min(190, newY)),
            vx: newVx,
            vy: newVy
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [state]);

  return (
    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-indigo-900">
        סידור החלקיקים במצבי צבירה שונים
      </h4>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => setState("solid")}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
            state === "solid"
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
        <button
          onClick={() => setState("liquid")}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
            state === "liquid"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          נוזל
        </button>
        <button
          onClick={() => setState("gas")}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
            state === "gas"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 border border-purple-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
            alt="gas"
            className="w-5 h-5"
          />{" "}
          גז
        </button>
      </div>

      <div className="relative w-[200px] h-[200px] bg-white border-4 border-slate-300 rounded-xl overflow-hidden shadow-inner">
        {state === "liquid" && (
          <div className="absolute bottom-0 w-full h-[55%] bg-blue-100 opacity-50"></div>
        )}
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full transition-all ${
              state === "solid"
                ? "bg-slate-500 animate-pulse"
                : state === "liquid"
                ? "bg-blue-500"
                : "bg-purple-500"
            }`}
            style={{
              left: p.x - 8,
              top: p.y - 8,
              transition:
                state === "solid"
                  ? "none"
                  : "left 0.05s linear, top 0.05s linear"
            }}
          ></div>
        ))}
      </div>

      <div
        className={`p-4 rounded-xl text-center max-w-md ${
          state === "solid"
            ? "bg-slate-100 text-slate-800"
            : state === "liquid"
            ? "bg-blue-100 text-blue-800"
            : "bg-purple-100 text-purple-800"
        }`}
      >
        {state === "solid" && (
          <p>
            <strong>מוצק:</strong> החלקיקים מסודרים בצורה קבועה, צמודים זה לזה,
            ורק רוטטים במקומם. כוחות המשיכה חזקים מאוד.
          </p>
        )}
        {state === "liquid" && (
          <p>
            <strong>נוזל:</strong> החלקיקים קרובים אך לא מסודרים, מחליקים זה על
            זה ומחליפים מקומות. כוחות המשיכה בינוניים.
          </p>
        )}
        {state === "gas" && (
          <p>
            <strong>גז:</strong> החלקיקים מרוחקים מאוד, נעים בחופשיות ובמהירות
            לכל הכיוונים. כוחות המשיכה חלשים מאוד.
          </p>
        )}
      </div>
    </div>
  );
};

