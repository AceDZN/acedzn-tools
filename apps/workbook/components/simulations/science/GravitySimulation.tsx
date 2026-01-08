"use client";

import React, { useState } from "react";

export const GravitySimulation: React.FC = () => {
  const [mass, setMass] = useState(60);
  const factors = { earth: 1, moon: 0.165, mars: 0.377, jupiter: 2.528 };

  return (
    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
      <h4 className="font-black text-2xl mb-6 text-indigo-900 text-center">
        סימולטור משקל בפלנטות שונות
      </h4>
      <div className="max-w-md mx-auto mb-8">
        <label className="block text-slate-700 font-bold mb-2">
          בחר מסה של הגוף (ק"ג):
        </label>
        <input
          type="range"
          min="1"
          max="200"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <p className="text-center text-2xl font-black text-indigo-700 mt-2">
          {mass} ק"ג
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(factors).map(([planet, factor]) => (
          <div
            key={planet}
            className="bg-white p-4 rounded-2xl text-center shadow-sm border border-indigo-50"
          >
            <span className="mb-2 block">
              <img
                src={`https://api.iconify.design/fluent-emoji/${
                  planet === "earth"
                    ? "globe-showing-americas"
                    : planet === "moon"
                    ? "first-quarter-moon"
                    : planet === "mars"
                    ? "red-circle"
                    : "ringed-planet"
                }.svg`}
                alt={planet}
                className="w-10 h-10 mx-auto"
              />
            </span>
            <p className="font-bold text-slate-500 capitalize">
              {planet === "earth"
                ? "כדור הארץ"
                : planet === "moon"
                ? "ירח"
                : planet === "mars"
                ? "מאדים"
                : "צדק"}
            </p>
            <p className="text-xl font-black text-indigo-900">
              {(mass * 10 * factor).toFixed(1)} N
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

