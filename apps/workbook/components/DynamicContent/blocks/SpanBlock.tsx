"use client";

import React from "react";
import { SpanBlock as SpanBlockType } from "@/utils/MergeTagParser";

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: SpanBlockType;
}

// =============================================================================
// Helper Functions
// =============================================================================

function getColorClass(color: string): string {
    const colorMap: Record<string, string> = {
        red: "text-red-600",
        blue: "text-blue-600",
        green: "text-green-600",
        emerald: "text-emerald-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
        amber: "text-amber-600",
        cyan: "text-cyan-600",
        pink: "text-pink-600",
        gray: "text-slate-500",
        slate: "text-slate-500"
    };
    return colorMap[color] || "";
}

function getHighlightClass(color: string): string {
    const highlightMap: Record<string, string> = {
        yellow: "bg-yellow-100 px-1 rounded",
        blue: "bg-blue-100 px-1 rounded",
        green: "bg-green-100 px-1 rounded",
        red: "bg-red-100 px-1 rounded",
        purple: "bg-purple-100 px-1 rounded",
        amber: "bg-amber-100 px-1 rounded"
    };
    return highlightMap[color] || "bg-yellow-100 px-1 rounded";
}

// =============================================================================
// Component
// =============================================================================

/**
 * SpanBlock - Renders inline styled text.
 *
 * Primarily used internally by the merge tag parser, but can also be
 * used directly in JSON content for explicit span styling.
 *
 * Note: This component should NOT be used directly in JSON content.
 * Instead, use merge tags in paragraph content: "This is {b}bold{/b} text"
 */
export const SpanBlock = ({ block }: Props) => {
    const { style, content } = block;

    // No style - render plain text
    if (!style || Object.keys(style).length === 0) {
        return <>{content}</>;
    }

    // Build class list from style properties
    const classes = [
        style.bold && "font-bold",
        style.italic && "italic",
        style.underline && "underline",
        style.strikethrough && "line-through",
        style.code && "font-mono bg-slate-100 px-1.5 py-0.5 rounded text-red-600 text-[0.9em]",
        style.color && getColorClass(style.color),
        style.highlight && getHighlightClass(style.highlight)
    ].filter(Boolean).join(" ");

    // No classes generated - render plain text
    if (!classes) {
        return <>{content}</>;
    }

    return <span className={classes}>{content}</span>;
};

export default SpanBlock;
