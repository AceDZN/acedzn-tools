"use client";

import React from "react";
import { MethodCardsBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Theme Styles
// =============================================================================

const VARIANTS = {
    emerald: "bg-gradient-to-br from-emerald-500 to-teal-500",
    blue: "bg-gradient-to-br from-blue-500 to-indigo-500",
    amber: "bg-gradient-to-br from-amber-500 to-orange-500",
    purple: "bg-gradient-to-br from-purple-500 to-pink-500",
    cyan: "bg-gradient-to-br from-cyan-500 to-blue-500",
    orange: "bg-gradient-to-br from-orange-500 to-red-500",
};

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: MethodCardsBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * MethodCards - Grid of method/technique cards with bold gradient backgrounds.
 *
 * Perfect for showing different methods or approaches side by side,
 * each with its own vibrant gradient background.
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "method_cards",
 *   "title": "שיטות מדידת נפח",
 *   "icon": "straight-ruler",
 *   "methods": [
 *     {
 *       "title": "מוצק הנדסי",
 *       "icon": "brown-square",
 *       "subtitle": "קוביה, תיבה, גליל",
 *       "variant": "emerald",
 *       "details": [
 *         "{b}שיטה:{/b} מדידה בסרגל + חישוב",
 *         "{b}נוסחאות:{/b}",
 *         "תיבה: אורך × רוחב × גובה"
 *       ]
 *     }
 *   ]
 * }
 * ```
 */
export const MethodCards = ({ block }: Props) => {
    const cols = block.cols || 2;
    const gridColsClass =
        cols === 3 ? "md:grid-cols-3" :
            cols === 4 ? "md:grid-cols-4" :
                "md:grid-cols-2";

    return (
        <div className="my-6">
            {/* Optional title */}
            {block.title && (
                <h3 className="text-2xl font-black text-center text-slate-800 my-8 flex items-center justify-center gap-3">
                    {block.icon && <Icon name={block.icon} size="lg" />}
                    {block.title}
                </h3>
            )}

            {/* Methods grid */}
            <div className={`grid grid-cols-1 ${gridColsClass} gap-6`}>
                {block.methods.map((method, idx) => (
                    <div
                        key={idx}
                        className={`${VARIANTS[method.variant] || VARIANTS["emerald"]} p-6 rounded-3xl text-white shadow-xl`}
                    >
                        <div className="text-center">
                            {/* Icon */}
                            <Icon
                                name={method.icon}
                                size="2xl"
                                className="mx-auto mb-4"
                            />

                            {/* Title */}
                            <h4 className="text-xl font-black mb-2">
                                {method.title}
                            </h4>

                            {/* Subtitle */}
                            {method.subtitle && (
                                <p className="text-sm opacity-90 mb-4">
                                    {method.subtitle}
                                </p>
                            )}

                            {/* Details box */}
                            <div className="bg-white/20 p-4 rounded-xl text-sm text-right">
                                {method.details.map((detail, detailIdx) => (
                                    <p key={detailIdx} className={detailIdx > 0 ? "mt-1" : ""}>
                                        <RichText>{detail}</RichText>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MethodCards;
