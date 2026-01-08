"use client";

import React, { useState } from "react";

export const DensityCalculator: React.FC = () => {
  const [mass, setMass] = useState(100);
  const [volume, setVolume] = useState(50);

  const density = volume > 0 ? (mass / volume).toFixed(2) : 0;
  const floats = Number(density) < 1;

  const getMaterialGuess = () => {
    const d = Number(density);
    if (d < 0.1) return { name: "קלקר", icon: "package" };
    if (d < 0.6) return { name: "עץ", icon: "wood" };
    if (d < 0.95) return { name: "שמן/פלסטיק", icon: "oil-drum" };
    if (d >= 0.95 && d <= 1.05) return { name: "מים", icon: "droplet" };
    if (d < 2.8) return { name: "אלומיניום/זכוכית", icon: "window" };
    if (d < 8) return { name: "ברזל/פלדה", icon: "gear" };
    if (d < 11) return { name: "כסף/נחושת", icon: "2nd-place-medal" };
    return { name: "זהב/עופרת", icon: "1st-place-medal" };
  };

  const material = getMaterialGuess();

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl border border-sky-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-sky-900">מחשבון צפיפות</h4>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <label className="block text-slate-700 font-bold mb-2">
            <img
              src="https://api.iconify.design/fluent-emoji/balance-scale.svg"
              alt="scale"
              className="w-6 h-6 inline mr-2"
            />
            מסה (גרם)
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <p className="text-center text-2xl font-black text-sky-700 mt-2">
            {mass} גרם
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <label className="block text-slate-700 font-bold mb-2">
            <img
              src="https://api.iconify.design/fluent-emoji/package.svg"
              alt="package"
              className="w-6 h-6 inline mr-2"
            />
            נפח (סמ"ק)
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <p className="text-center text-2xl font-black text-sky-700 mt-2">
            {volume} סמ"ק
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-md">
        <p className="text-slate-600 mb-2">צפיפות = מסה ÷ נפח</p>
        <p className="text-3xl font-black text-sky-800">
          {mass} ÷ {volume} = <span className="text-sky-600">{density}</span>{" "}
          גר'/סמ"ק
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
        <div
          className={`p-5 rounded-2xl text-center ${
            floats
              ? "bg-emerald-100 text-emerald-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <p className="text-lg font-bold mb-2">
            {floats ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/up-arrow.svg"
                  alt="up"
                  className="w-8 h-8 inline"
                />
                יצוף במים!
              </>
            ) : (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/down-arrow.svg"
                  alt="down"
                  className="w-8 h-8 inline"
                />
                ישקע במים!
              </>
            )}
          </p>
          <p className="text-sm opacity-80">(צפיפות המים = 1 גר'/סמ"ק)</p>
        </div>

        <div className="bg-purple-100 p-5 rounded-2xl text-center text-purple-800">
          <p className="text-lg font-bold mb-2">
            <img
              src={`https://api.iconify.design/fluent-emoji/${material.icon}.svg`}
              alt={material.icon}
              className="w-8 h-8 inline mr-1"
            />{" "}
            ניחוש חומר:
          </p>
          <p className="text-xl font-black">{material.name}</p>
        </div>
      </div>
    </div>
  );
};

