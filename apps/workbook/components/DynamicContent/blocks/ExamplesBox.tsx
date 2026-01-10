"use client";

import React from "react";
import { ExamplesBoxBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Theme Styles
// =============================================================================

const VARIANTS = {
    amber: {
        container: "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300",
        title: "text-amber-900",
    },
    emerald: {
        container: "bg-gradient-to-br from-emerald-100 to-teal-100 border-emerald-300",
        title: "text-emerald-900",
    },
    blue: {
        container: "bg-gradient-to-r from-blue-100 to-cyan-100 border-blue-300",
        title: "text-blue-900",
    },
    purple: {
        container: "bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300",
        title: "text-purple-900",
    },
    cyan: {
        container: "bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-300",
        title: "text-cyan-900",
    },
};

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: ExamplesBoxBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ExamplesBox - Gradient container with grid of example cards.
 *
 * Perfect for showing multiple examples in a visually appealing layout.
 * Each example has a title and content (supports merge tags).
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "examples_box",
 *   "title": "דוגמאות להבהרה",
 *   "icon": "light-bulb",
 *   "variant": "amber",
 *   "examples": [
 *     { "title": "שולחן עץ", "content": "{b}הגוף:{/b} השולחן..." }
 *   ]
 * }
 * ```
 */
export const ExamplesBox = ({ block }: Props) => {
    const variant = block.variant || "amber";
    const styles = VARIANTS[variant] || VARIANTS["amber"];
    const cols = block.cols || 2;

    const gridColsClass =
        cols === 3 ? "md:grid-cols-3" :
            cols === 4 ? "md:grid-cols-4" :
                "md:grid-cols-2";

    return (
        <div className={`${styles.container} p-6 rounded-3xl border-2 my-8`}>
            {/* Header with icon and title */}
            <h4 className={`text-xl font-black ${styles.title} mb-4 flex items-center gap-3`}>
                {block.icon && <Icon name={block.icon} size="lg" />}
                {block.title}
            </h4>

            {/* Grid of example cards */}
            <div className={`grid grid-cols-1 ${gridColsClass} gap-4`}>
                {block.examples.map((example, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded-xl shadow-sm"
                    >
                        <h5 className="font-bold text-slate-800 mb-2">
                            {example.title}
                        </h5>
                        <div className="text-slate-600">
                            <RichText as="p">{example.content}</RichText>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamplesBox;
