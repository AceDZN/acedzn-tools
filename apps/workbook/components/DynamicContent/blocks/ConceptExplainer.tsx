"use client";

import React from "react";
import { ConceptExplainerBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Theme Styles
// =============================================================================

const VARIANTS = {
    purple: {
        container: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
        title: "text-purple-900",
        formula: "text-purple-700",
    },
    cyan: {
        container: "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200",
        title: "text-cyan-900",
        formula: "text-cyan-700",
    },
    emerald: {
        container: "bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-300",
        title: "text-emerald-900",
        formula: "text-emerald-700",
    },
    amber: {
        container: "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300",
        title: "text-amber-900",
        formula: "text-amber-700",
    },
    blue: {
        container: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
        title: "text-blue-900",
        formula: "text-blue-700",
    },
};

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: ConceptExplainerBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ConceptExplainer - Themed explanation box with optional formula highlight.
 *
 * Great for explaining concepts like "Why does an iron ship float?"
 * Includes intro text, explanation in highlight box, optional formula, and conclusion.
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "concept_explainer",
 *   "title": "מדוע אוניית ברזל צפה?",
 *   "icon": "ship",
 *   "variant": "purple",
 *   "intro": "הרי ברזל שוקע במים...",
 *   "explanation": "{b}הסוד:{/b} האוניה היא לא גוש מלא...",
 *   "formula": "צפיפות ממוצעת = ...",
 *   "conclusion": "התוצאה קטנה מ-1, ולכן האוניה צפה!"
 * }
 * ```
 */
export const ConceptExplainer = ({ block }: Props) => {
    const variant = block.variant || "purple";
    const styles = VARIANTS[variant];

    return (
        <div className={`${styles.container} p-6 rounded-3xl border my-8`}>
            {/* Header with icon and title */}
            <h4 className={`text-xl font-black ${styles.title} mb-4 flex items-center gap-3`}>
                {block.icon && <Icon name={block.icon} size="lg" />}
                {block.title}
            </h4>

            {/* Intro text */}
            <p className="text-slate-700 mb-4">
                <RichText>{block.intro}</RichText>
            </p>

            {/* Explanation box */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-slate-600">
                    <RichText>{block.explanation}</RichText>
                </p>

                {/* Optional formula */}
                {block.formula && (
                    <p className={`text-lg font-bold ${styles.formula} mt-3 text-center`}>
                        <RichText>{block.formula}</RichText>
                    </p>
                )}

                {/* Optional conclusion */}
                {block.conclusion && (
                    <p className="text-slate-600 mt-3">
                        <RichText>{block.conclusion}</RichText>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ConceptExplainer;
