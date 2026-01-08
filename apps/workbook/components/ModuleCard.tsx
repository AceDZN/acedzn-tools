import React from "react";
import { ModuleData } from "@/lib/types";

interface ModuleCardProps {
  module: ModuleData;
  isActive: boolean;
  isCompleted: boolean;
  onClick?: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  isActive,
  isCompleted,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-right p-2 rounded-2xl transition-all border-2 cursor-pointer ${
        isActive
          ? "bg-blue-600 border-blue-700 shadow-lg translate-x-1"
          : "bg-white border-slate-100 hover:border-blue-200 shadow-sm"
      } ${isCompleted && !isActive ? "bg-emerald-50 border-emerald-100" : ""}`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`p-2 rounded-xl shadow-sm ${
            isActive ? "bg-blue-500" : "bg-slate-50"
          }`}
        >
          <img
            src={`https://api.iconify.design/fluent-emoji/${module.icon}.svg`}
            alt={module.icon}
            className="w-8 h-8"
          />
        </span>
        <div className="flex-1">
          <h3
            className={`font-bold text-lg leading-tight ${
              isActive ? "text-white" : "text-slate-900"
            }`}
          >
            {module.title}
          </h3>
          <p
            className={`text-xs mt-1 font-medium ${
              isActive ? "text-blue-100" : "text-slate-500"
            }`}
          >
            {isCompleted ? "✓ הושלם בהצלחה" : module.description}
          </p>
        </div>
      </div>
    </button>
  );
};
