"use client";

import React, { useState } from "react";

/**
 * AirMassDemo - Interactive demonstration that air has mass
 * Shows a balance scale with inflated vs deflated balloons
 */
export const AirMassDemo: React.FC = () => {
  const [leftInflated, setLeftInflated] = useState(false);
  const [rightInflated, setRightInflated] = useState(false);

  // Calculate tilt based on which balloons are inflated
  const getTilt = () => {
    if (leftInflated && !rightInflated) return -8;
    if (!leftInflated && rightInflated) return 8;
    return 0;
  };

  const tilt = getTilt();

  const toggleBalloon = (side: "left" | "right") => {
    if (side === "left") {
      setLeftInflated(!leftInflated);
    } else {
      setRightInflated(!rightInflated);
    }
  };

  const reset = () => {
    setLeftInflated(false);
    setRightInflated(false);
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl border border-sky-200 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-sky-900">
        הוכחה: לאוויר יש מסה!
      </h4>

      <p className="text-slate-600 text-center max-w-md">
        לחצו על הבלונים כדי לנפח או לרוקן אותם. צפו במאזניים!
      </p>

      {/* Balance scale */}
      <div className="relative w-80 h-64">
        {/* Base/Stand */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-amber-900 rounded-lg" />

        {/* Pivot point */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-amber-700 z-10" />

        {/* Balance beam */}
        <div
          className="absolute bottom-[140px] left-1/2 w-72 h-3 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full origin-center transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-50%) rotate(${tilt}deg)`,
          }}
        >
          {/* Left pan holder */}
          <div className="absolute left-2 top-2 w-1 h-16 bg-amber-700" />
          {/* Right pan holder */}
          <div className="absolute right-2 top-2 w-1 h-16 bg-amber-700" />

          {/* Left pan */}
          <div
            className="absolute -left-4 top-[72px] w-24 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-full border-2 border-slate-500 cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
            onClick={() => toggleBalloon("left")}
          >
            {/* Left balloon */}
            <div
              className={`transition-all duration-300 ${
                leftInflated
                  ? "w-14 h-16 -mt-20"
                  : "w-6 h-4 -mt-6"
              }`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg transition-all duration-300 ${
                  leftInflated ? "opacity-100" : "opacity-70"
                }`}
                style={{
                  borderRadius: leftInflated ? "50% 50% 50% 50% / 40% 40% 60% 60%" : "50%"
                }}
              />
              {/* Balloon knot */}
              <div className="w-2 h-2 bg-red-700 mx-auto -mt-1 rounded-b-full" />
            </div>
          </div>

          {/* Right pan */}
          <div
            className="absolute -right-4 top-[72px] w-24 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-full border-2 border-slate-500 cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
            onClick={() => toggleBalloon("right")}
          >
            {/* Right balloon */}
            <div
              className={`transition-all duration-300 ${
                rightInflated
                  ? "w-14 h-16 -mt-20"
                  : "w-6 h-4 -mt-6"
              }`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg transition-all duration-300 ${
                  rightInflated ? "opacity-100" : "opacity-70"
                }`}
                style={{
                  borderRadius: rightInflated ? "50% 50% 50% 50% / 40% 40% 60% 60%" : "50%"
                }}
              />
              {/* Balloon knot */}
              <div className="w-2 h-2 bg-blue-700 mx-auto -mt-1 rounded-b-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={() => toggleBalloon("left")}
          className={`px-4 py-2 rounded-xl font-bold transition-all shadow-lg ${
            leftInflated
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
        >
          {leftInflated ? "רוקן" : "נפח"} בלון אדום
        </button>
        <button
          onClick={() => toggleBalloon("right")}
          className={`px-4 py-2 rounded-xl font-bold transition-all shadow-lg ${
            rightInflated
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          {rightInflated ? "רוקן" : "נפח"} בלון כחול
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-xl font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all"
        >
          איפוס
        </button>
      </div>

      {/* Explanation */}
      <div className={`p-4 rounded-xl text-center max-w-md transition-colors duration-300 ${
        tilt === 0
          ? "bg-slate-100 text-slate-700"
          : "bg-sky-100 text-sky-800"
      }`}>
        {tilt === 0 && !leftInflated && !rightInflated && (
          <p>שני הבלונים ריקים והמאזניים מאוזנים. נפחו בלון אחד וראו מה קורה!</p>
        )}
        {tilt === 0 && leftInflated && rightInflated && (
          <p>שני הבלונים מנופחים באופן שווה, לכן המאזניים מאוזנים. שניהם מכילים אותה כמות אוויר.</p>
        )}
        {tilt < 0 && (
          <p><strong>הבלון האדום יורד!</strong> המסה שלו גדולה יותר כי הוא מכיל אוויר. זו הוכחה ש<strong>לאוויר יש מסה!</strong></p>
        )}
        {tilt > 0 && (
          <p><strong>הבלון הכחול יורד!</strong> המסה שלו גדולה יותר כי הוא מכיל אוויר. זו הוכחה ש<strong>לאוויר יש מסה!</strong></p>
        )}
      </div>
    </div>
  );
};
