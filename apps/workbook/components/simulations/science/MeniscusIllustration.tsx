"use client";

import React from "react";

/**
 * MeniscusIllustration - Visual illustration of how to read liquid volume
 * Shows a graduated cylinder with water and the meniscus curve with reading line
 */
export const MeniscusIllustration = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
      <svg
        viewBox="0 0 180 220"
        className="w-44 h-56 mx-auto"
        aria-label="איור מניסקוס - קריאה נכונה של נפח נוזל"
      >
        {/* Definitions */}
        <defs>
          {/* Glass gradient for realistic look */}
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="20%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* Water gradient */}
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>

          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
          >
            <polygon points="0 0, 10 5, 0 10" fill="#dc2626" />
          </marker>
        </defs>

        {/* Graduated cylinder - outer glass */}
        <rect
          x="55"
          y="20"
          width="70"
          height="160"
          rx="3"
          fill="url(#glassGradient)"
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Inner cylinder area */}
        <rect
          x="60"
          y="25"
          width="60"
          height="150"
          rx="1"
          fill="white"
        />

        {/* Cylinder base/foot */}
        <rect
          x="45"
          y="180"
          width="90"
          height="15"
          rx="2"
          fill="#e2e8f0"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />

        {/* Base shadow */}
        <rect
          x="50"
          y="192"
          width="80"
          height="3"
          rx="1"
          fill="#cbd5e1"
        />

        {/* Graduation marks - left side (short) */}
        {[45, 65, 85, 105, 125, 145, 165].map((y, i) => (
          <line
            key={`left-short-${y}`}
            x1="60"
            y1={y}
            x2="68"
            y2={y}
            stroke="#94a3b8"
            strokeWidth="1"
          />
        ))}

        {/* Graduation marks - left side (long with numbers) */}
        {[45, 85, 125, 165].map((y, i) => (
          <g key={`left-long-${y}`}>
            <line x1="60" y1={y} x2="75" y2={y} stroke="#64748b" strokeWidth="1.5" />
          </g>
        ))}

        {/* Graduation marks - right side (short) */}
        {[45, 65, 85, 105, 125, 145, 165].map((y, i) => (
          <line
            key={`right-short-${y}`}
            x1="112"
            y1={y}
            x2="120"
            y2={y}
            stroke="#94a3b8"
            strokeWidth="1"
          />
        ))}

        {/* Graduation marks - right side (long with numbers) */}
        {[45, 85, 125, 165].map((y, i) => (
          <g key={`right-long-${y}`}>
            <line x1="105" y1={y} x2="120" y2={y} stroke="#64748b" strokeWidth="1.5" />
            <text x="128" y={y + 4} fontSize="12" fill="#475569" fontWeight="500">
              {60 - i * 20}
            </text>
          </g>
        ))}

        {/* Water fill - with concave top (meniscus) */}
        {/* Water fills from x=60 to x=120 (full inner width) */}
        {/* Meniscus: edges at y=100, bottom dips to y=110 */}
        <path
          d="M60 175 L60 100 Q90 110 120 100 L120 175 Z"
          fill="url(#waterGradient)"
        />

        {/* Meniscus curve highlight - the curved water surface */}
        <path
          d="M60 100 Q90 110 120 100"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.5"
        />

        {/* Correct reading line - at bottom of meniscus (y=105 is actual curve bottom for Q with control at 110) */}
        <line
          x1="20"
          y1="105"
          x2="120"
          y2="105"
          stroke="#dc2626"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Eye icon - simplified human eye looking at the meniscus */}
        <g transform="translate(8, 93)">
          {/* Eye white */}
          <ellipse cx="12" cy="12" rx="11" ry="8" fill="white" stroke="#475569" strokeWidth="1.5" />
          {/* Iris */}
          <circle cx="12" cy="12" r="5" fill="#3b82f6" />
          {/* Pupil */}
          <circle cx="12" cy="12" r="2.5" fill="#1e293b" />
          {/* Eye highlight */}
          <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.8" />
        </g>

        {/* Arrow from eye to reading line */}
        <line
          x1="30"
          y1="105"
          x2="58"
          y2="105"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Label showing "30 מ"ל" at the reading point */}
        <text x="90" y="145" fontSize="13" fill="#1e40af" textAnchor="middle" fontWeight="bold">
          מים
        </text>
      </svg>

      <div className="mt-3 space-y-1">
        <p className="text-sm text-slate-700 font-medium">
          קראו בגובה העיניים!
        </p>
        <p className="text-xs text-red-600 font-medium">
          הקו האדום = תחתית המניסקוס (הקריאה הנכונה)
        </p>
      </div>
    </div>
  );
};

