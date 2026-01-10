"use client";

import React, { useState } from "react";

/**
 * EnergyConverter - Interactive energy type explorer
 * Shows the 6 main energy types and their real-world examples and transformations
 */

interface EnergyType {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  examples: string[];
  transforms: { to: string; example: string }[];
}

const ENERGY_TYPES: EnergyType[] = [
  {
    id: "kinetic",
    name: "אנרגיית תנועה",
    icon: "https://api.iconify.design/fluent-emoji/person-running.svg",
    color: "blue",
    gradient: "from-blue-400 to-blue-600",
    description: "אנרגיה שיש לכל גוף הנמצא בתנועה. תלויה במסה ובמהירות.",
    examples: ["מכונית נוסעת", "כדור מתגלגל", "רוח נושבת", "אופניים"],
    transforms: [
      { to: "heat", example: "בלימת מכונית → חום בבלמים" },
      { to: "electrical", example: "טורבינת רוח → חשמל" },
    ],
  },
  {
    id: "potential",
    name: "אנרגיית גובה",
    icon: "https://api.iconify.design/fluent-emoji/mountain.svg",
    color: "green",
    gradient: "from-green-400 to-green-600",
    description: "אנרגיה אגורה בגוף עקב מיקומו בגובה. ככל שהגוף גבוה יותר וכבד יותר—יותר אנרגיה.",
    examples: ["מים במאגר גבוה", "ספר על מדף", "רכבת הרים בפסגה", "מטוס בשמיים"],
    transforms: [
      { to: "kinetic", example: "נפילת חפץ → תנועה" },
      { to: "electrical", example: "סכר מים → חשמל" },
    ],
  },
  {
    id: "elastic",
    name: "אנרגיה אלסטית",
    icon: "https://api.iconify.design/fluent-emoji/bow-and-arrow.svg",
    color: "red",
    gradient: "from-red-400 to-red-600",
    description: "אנרגיה אגורה בגוף גמיש שעבר עיוות (מתיחה, כיווץ, פיתול).",
    examples: ["גומייה מתוחה", "קפיץ דחוס", "קשת דרוכה", "כדור טניס מכווץ"],
    transforms: [
      { to: "kinetic", example: "שחרור קפיץ → תנועה" },
      { to: "sound", example: "מיתר גיטרה → צליל" },
    ],
  },
  {
    id: "chemical",
    name: "אנרגיה כימית",
    icon: "https://api.iconify.design/fluent-emoji/battery.svg",
    color: "yellow",
    gradient: "from-yellow-400 to-yellow-600",
    description: "אנרגיה אגורה בקשרים בין אטומים במולקולות. משתחררת בתגובות כימיות.",
    examples: ["מזון", "דלק (בנזין)", "סוללות", "גז בישול"],
    transforms: [
      { to: "heat", example: "שריפת עץ → חום" },
      { to: "kinetic", example: "מזון בגוף → תנועת שרירים" },
      { to: "electrical", example: "סוללה → חשמל" },
    ],
  },
  {
    id: "electrical",
    name: "אנרגיה חשמלית",
    icon: "https://api.iconify.design/fluent-emoji/high-voltage.svg",
    color: "purple",
    gradient: "from-purple-400 to-purple-600",
    description: "אנרגיה הנישאת על ידי זרם חשמלי. קלה מאוד להמרה לסוגים אחרים.",
    examples: ["חשמל בבית", "ברקים", "סוללה מחוברת", "חשמל סטטי"],
    transforms: [
      { to: "light", example: "נורה → אור" },
      { to: "heat", example: "תנור חשמלי → חום" },
      { to: "kinetic", example: "מנוע חשמלי → תנועה" },
      { to: "sound", example: "רמקול → צליל" },
    ],
  },
  {
    id: "heat",
    name: "אנרגיית חום",
    icon: "https://api.iconify.design/fluent-emoji/fire.svg",
    color: "orange",
    gradient: "from-orange-400 to-orange-600",
    description: "סך האנרגיה הקינטית של חלקיקי החומר. עוברת מחם לקר.",
    examples: ["אש בוערת", "מים רותחים", "שמש מחממת", "גוף אדם"],
    transforms: [
      { to: "kinetic", example: "קיטור → תנועת טורבינה" },
      { to: "light", example: "מתכת לוהטת → אור" },
    ],
  },
];

export const EnergyConverter: React.FC = () => {
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyType | null>(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-3xl border border-slate-200 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-slate-900">
        סוגי אנרגיה והמרות
      </h4>

      <p className="text-slate-600 text-center max-w-md">
        לחצו על סוג אנרגיה כדי ללמוד עליו ולראות דוגמאות והמרות!
      </p>

      {/* Energy type buttons */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
        {ENERGY_TYPES.map((energy) => (
          <button
            key={energy.id}
            onClick={() => setSelectedEnergy(selectedEnergy?.id === energy.id ? null : energy)}
            className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center gap-2 ${
              selectedEnergy?.id === energy.id
                ? `bg-gradient-to-br ${energy.gradient} text-white shadow-lg scale-105`
                : "bg-white hover:bg-slate-50 text-slate-700 shadow-md hover:shadow-lg hover:scale-102"
            }`}
          >
            <img src={energy.icon} alt={energy.name} className="w-10 h-10" />
            <span className="font-bold text-sm text-center">{energy.name}</span>
          </button>
        ))}
      </div>

      {/* Selected energy details */}
      {selectedEnergy && (
        <div className={`w-full max-w-lg p-6 rounded-2xl bg-gradient-to-br ${selectedEnergy.gradient} text-white shadow-xl animate-fadeIn`}>
          <div className="flex items-center gap-4 mb-4">
            <img src={selectedEnergy.icon} alt={selectedEnergy.name} className="w-12 h-12" />
            <h5 className="text-xl font-black">{selectedEnergy.name}</h5>
          </div>

          <p className="mb-4 opacity-90">{selectedEnergy.description}</p>

          <div className="mb-4">
            <h6 className="font-bold mb-2">📌 דוגמאות:</h6>
            <div className="flex flex-wrap gap-2">
              {selectedEnergy.examples.map((example, i) => (
                <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {example}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-bold mb-2">🔄 המרות אפשריות:</h6>
            <div className="space-y-2">
              {selectedEnergy.transforms.map((transform, i) => {
                const targetEnergy = ENERGY_TYPES.find(e => e.id === transform.to);
                return (
                  <div key={i} className="flex items-center gap-2 bg-white/10 p-2 rounded-xl text-sm">
                    <span className="font-bold">{selectedEnergy.name}</span>
                    <span>→</span>
                    <span className="font-bold">{targetEnergy?.name || transform.to}</span>
                    <span className="opacity-75 text-xs">({transform.example})</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Law of conservation */}
      <div className="p-4 rounded-xl bg-slate-200 text-slate-700 text-center max-w-md">
        <p className="font-bold mb-1">⚖️ חוק שימור האנרגיה</p>
        <p className="text-sm">
          אנרגיה אינה נוצרת ואינה נעלמת—היא רק <strong>עוברת מצורה לצורה</strong>.
          סך האנרגיה במערכת סגורה תמיד נשמר!
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
