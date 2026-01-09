"use client";

import React from "react";
import { ComparisonCardsBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Theme Styles
// =============================================================================

const VARIANTS = {
    blue: {
        container: "bg-gradient-to-r from-blue-600 to-cyan-500",
    },
    purple: {
        container: "bg-gradient-to-r from-purple-600 to-pink-500",
    },
    emerald: {
        container: "bg-gradient-to-r from-emerald-600 to-teal-500",
    },
    amber: {
        container: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
};

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: ComparisonCardsBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ComparisonCards - Side-by-side comparison with bold gradient background.
 *
 * Perfect for comparing two or more concepts (like float vs sink).
 * Uses a vibrant gradient with semi-transparent cards.
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "comparison_cards",
 *   "title": "חוק הציפה",
 *   "icon": "ship",
 *   "variant": "blue",
 *   "items": [
 *     { "title": "יצוף!", "icon": "up-arrow", "content": "גוף שצפיפותו {b}קטנה{/b}...", "example": "עץ במים" }
 *   ],
 *   "footer": "צפיפות המים = 1 גרם/סמ\"ק"
 * }
 * ```
 */
export const ComparisonCards = ({ block }: Props) => {
    const variant = block.variant || "blue";
    const styles = VARIANTS[variant];

    const gridColsClass = block.items.length === 2
        ? "md:grid-cols-2"
        : block.items.length === 3
            ? "md:grid-cols-3"
            : "md:grid-cols-2";

    return (
        <div className={`${styles.container} p-8 rounded-3xl text-white shadow-xl mb-8`}>
            {/* Header */}
            <h3 className="text-2xl font-black mb-6 text-center flex items-center justify-center gap-3">
                {block.icon && <Icon name={block.icon} size="xl" />}
                {block.title}
            </h3>

            {/* Comparison cards grid */}
            <div className={`grid grid-cols-1 ${gridColsClass} gap-6`}>
                {block.items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white/20 p-5 rounded-2xl"
                    >
                        {/* Card title with optional icon */}
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            {item.icon && <Icon name={item.icon} size="md" />}
                            {item.title}
                        </h4>

                        {/* Content */}
                        <p className="opacity-90">
                            <RichText>{item.content}</RichText>
                        </p>

                        {/* Optional example */}
                        {item.example && (
                            <p className="mt-2 text-sm bg-white/20 p-2 rounded-lg">
                                דוגמה: {item.example}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Optional footer */}
            {block.footer && (
                <p className="mt-6 text-center p-3 bg-white/30 rounded-xl font-medium">
                    <RichText>{block.footer}</RichText>
                </p>
            )}
        </div>
    );
};

export default ComparisonCards;
