"use client";

import React, { useState, useEffect } from "react";

/**
 * RubberBandGun - Interactive demonstration of energy transformations
 * Shows the conversion from chemical energy → elastic energy → kinetic energy
 */

type Phase = "rest" | "stretching" | "stretched" | "flying" | "landed";

export const RubberBandGun: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("rest");
  const [stretchAmount, setStretchAmount] = useState(0);
  const [bandPosition, setBandPosition] = useState(0);
  const [energyDisplay, setEnergyDisplay] = useState<string[]>([]);

  const startStretching = () => {
    if (phase !== "rest") return;
    setPhase("stretching");
    setEnergyDisplay(["כימית → אלסטית"]);
  };

  const updateStretch = (e: React.MouseEvent | React.TouchEvent) => {
    if (phase !== "stretching") return;
    // Calculate stretch based on mouse/touch position
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clientX = "touches" in e ? (e.touches[0]?.clientX ?? 0) : e.clientX;
    const relativeX = (clientX - rect.left) / rect.width;
    setStretchAmount(Math.max(0, Math.min(1, 1 - relativeX)));
  };

  const release = () => {
    if (phase !== "stretching" || stretchAmount < 0.2) {
      setPhase("rest");
      setStretchAmount(0);
      setEnergyDisplay([]);
      return;
    }

    setPhase("stretched");
    setEnergyDisplay(["אלסטית → קינטית"]);

    // Start flying animation
    setTimeout(() => {
      setPhase("flying");
      const flyDistance = stretchAmount * 100;

      let pos = 0;
      const flyInterval = setInterval(() => {
        pos += flyDistance / 20;
        setBandPosition(pos);

        if (pos >= flyDistance) {
          clearInterval(flyInterval);
          setPhase("landed");
          setEnergyDisplay(["קינטית → חום + קול"]);

          // Reset after landing
          setTimeout(() => {
            setPhase("rest");
            setStretchAmount(0);
            setBandPosition(0);
            setEnergyDisplay([]);
          }, 2000);
        }
      }, 50);
    }, 100);
  };

  const getEnergyBarWidth = (type: "chemical" | "elastic" | "kinetic" | "heat") => {
    switch (type) {
      case "chemical":
        return phase === "rest" ? 100 : phase === "stretching" ? 100 - stretchAmount * 100 : 0;
      case "elastic":
        return phase === "stretching" || phase === "stretched" ? stretchAmount * 100 : 0;
      case "kinetic":
        return phase === "flying" ? 100 - (bandPosition / (stretchAmount * 100)) * 100 : 0;
      case "heat":
        return phase === "landed" ? 100 : 0;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl border border-orange-200 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-orange-900">
        רובה הגומיות - המרות אנרגיה
      </h4>

      <p className="text-slate-600 text-center max-w-md">
        גררו את הגומייה לאחור ושחררו! צפו בהמרות האנרגיה.
      </p>

      {/* Main demonstration area */}
      <div
        className="relative w-full max-w-lg h-40 bg-gradient-to-b from-sky-100 to-sky-200 rounded-2xl overflow-hidden cursor-pointer select-none"
        onMouseDown={startStretching}
        onMouseMove={updateStretch}
        onMouseUp={release}
        onMouseLeave={release}
        onTouchStart={startStretching}
        onTouchMove={updateStretch}
        onTouchEnd={release}
      >
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-green-400 to-green-600" />

        {/* Hand/launcher on left */}
        <div className="absolute left-4 bottom-8 w-12 h-20">
          <div className="w-full h-full bg-gradient-to-b from-amber-200 to-amber-400 rounded-t-full" />
          {/* Fingers */}
          <div className="absolute top-0 left-1 w-2 h-6 bg-amber-300 rounded-t-full" />
          <div className="absolute top-0 left-4 w-2 h-8 bg-amber-300 rounded-t-full" />
          <div className="absolute top-0 left-7 w-2 h-6 bg-amber-300 rounded-t-full" />
        </div>

        {/* Rubber band */}
        {phase !== "flying" && phase !== "landed" && (
          <div
            className="absolute bottom-16 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-75 shadow-md"
            style={{
              left: `${64 - stretchAmount * 40}px`,
              width: `${40 + stretchAmount * 100}px`,
              transform: `scaleY(${1 + stretchAmount * 0.5})`,
            }}
          />
        )}

        {/* Flying rubber band */}
        {(phase === "flying" || phase === "landed") && (
          <div
            className="absolute bottom-16 w-8 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-md transition-all"
            style={{
              left: `${64 + bandPosition * 3}px`,
              transform: phase === "landed" ? "rotate(15deg)" : `rotate(${bandPosition}deg)`,
            }}
          />
        )}

        {/* Instructions overlay */}
        {phase === "rest" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/80 px-4 py-2 rounded-xl text-slate-700 font-bold">
              👆 לחצו וגררו שמאלה
            </div>
          </div>
        )}

        {/* Phase indicator */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-full text-sm font-bold">
          {phase === "rest" && "🖐️ מנוחה"}
          {phase === "stretching" && "💪 מותחים..."}
          {phase === "stretched" && "🎯 משחררים!"}
          {phase === "flying" && "🚀 טסה!"}
          {phase === "landed" && "🎉 נחתה!"}
        </div>
      </div>

      {/* Energy transformation display */}
      {energyDisplay.length > 0 && (
        <div className="text-xl font-black text-orange-700 animate-pulse">
          {energyDisplay[energyDisplay.length - 1]}
        </div>
      )}

      {/* Energy bars */}
      <div className="w-full max-w-lg space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-24 text-sm font-bold text-slate-700">אנרגיה כימית:</span>
          <div className="flex-1 h-6 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-200 rounded-full"
              style={{ width: `${getEnergyBarWidth("chemical")}%` }}
            />
          </div>
          <span className="text-xs text-slate-500">שרירים</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-24 text-sm font-bold text-slate-700">אנרגיה אלסטית:</span>
          <div className="flex-1 h-6 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-200 rounded-full"
              style={{ width: `${getEnergyBarWidth("elastic")}%` }}
            />
          </div>
          <span className="text-xs text-slate-500">גומייה</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-24 text-sm font-bold text-slate-700">אנרגיה קינטית:</span>
          <div className="flex-1 h-6 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-200 rounded-full"
              style={{ width: `${getEnergyBarWidth("kinetic")}%` }}
            />
          </div>
          <span className="text-xs text-slate-500">תנועה</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-24 text-sm font-bold text-slate-700">חום + קול:</span>
          <div className="flex-1 h-6 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-200 rounded-full"
              style={{ width: `${getEnergyBarWidth("heat")}%` }}
            />
          </div>
          <span className="text-xs text-slate-500">פיזור</span>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-orange-100 text-orange-800 text-center max-w-md">
        <p>
          <strong>חוק שימור האנרגיה:</strong> האנרגיה לא נעלמת—היא רק עוברת מצורה לצורה!
          מהשרירים → לגומייה → לתנועה → לחום וקול.
        </p>
      </div>
    </div>
  );
};
