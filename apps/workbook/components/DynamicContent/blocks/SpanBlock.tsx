import React from "react";
import { SpanBlock as SpanBlockType } from "@/utils/MergeTagParser";

interface Props {
    block: SpanBlockType;
}

export const SpanBlock = ({ block }: Props) => {
    const { style, content } = block;

    if (!style) {
        return <>{content}</>;
    }

    const classes = [
        style.bold && "font-bold",
        style.italic && "italic",
        style.underline && "underline",
        style.strikethrough && "line-through",
        style.code && "font-mono bg-slate-100 px-1 py-0.5 rounded text-red-500 text-sm",
        style.color && getColorClass(style.color),
        style.highlight && getHighlightClass(style.highlight)
    ].filter(Boolean).join(" ");

    if (!classes) {
        return <>{content}</>;
    }

    return <span className={classes}>{content}</span>;
};

// Helper to map simple color names to tailwind classes
// In a real app this might be in ThemeRegistry too, but keeping it simple here
function getColorClass(color: string) {
    const map: Record<string, string> = {
        red: "text-red-600",
        blue: "text-blue-600",
        green: "text-green-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
        gray: "text-slate-500"
    };
    return map[color] || ""; // If not in map, assume it's a custom class or ignored for now
}

function getHighlightClass(color: string) {
    const map: Record<string, string> = {
        yellow: "bg-yellow-100",
        blue: "bg-blue-100",
        green: "bg-green-100",
        red: "bg-red-100"
    };
    return map[color] || "bg-yellow-100";
}
