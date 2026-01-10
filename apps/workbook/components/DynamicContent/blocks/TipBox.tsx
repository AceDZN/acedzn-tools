"use client";

import React from "react";
import { TipBoxBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Theme Styles
// =============================================================================

const VARIANTS = {
    warning: {
        container: "bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-300",
        title: "text-amber-900",
        icon: "warning",
    },
    info: {
        container: "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200",
        title: "text-cyan-900",
        icon: "information",
    },
    tip: {
        container: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200",
        title: "text-emerald-900",
        icon: "light-bulb",
    },
    note: {
        container: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
        title: "text-purple-900",
        icon: "memo",
    },
};

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: TipBoxBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * TipBox - Warning/tip/note boxes with optional numbered steps.
 *
 * Great for special notes, warnings, or step-by-step instructions.
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "tip_box",
 *   "title": "מדידת נפח של גוף צף",
 *   "icon": "warning",
 *   "variant": "warning",
 *   "content": "מה עושים כשהגוף צף ולא שוקע במים?",
 *   "steps": [
 *     "מחברים משקולת לגוף הצף",
 *     "מודדים את הנפח הכולל",
 *     "מודדים בנפרד את נפח המשקולת"
 *   ]
 * }
 * ```
 */
export const TipBox = ({ block }: Props) => {
    const variant = block.variant || "tip";
    const styles = VARIANTS[variant] || VARIANTS["tip"];
    const iconName = block.icon || styles.icon;

    return (
        <div className={`${styles.container} p-6 rounded-3xl border-2 my-8`}>
            {/* Header with icon and title */}
            <h4 className={`text-xl font-black ${styles.title} mb-4 flex items-center gap-3`}>
                <Icon name={iconName} size="lg" />
                {block.title}
            </h4>

            {/* Main content */}
            <p className="text-slate-700 mb-4">
                <RichText>{block.content}</RichText>
            </p>

            {/* Optional numbered steps */}
            {block.steps && block.steps.length > 0 && (
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <ol className="list-decimal list-inside space-y-2 text-slate-600">
                        {block.steps.map((step, idx) => (
                            <li key={idx}>
                                <RichText>{step}</RichText>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default TipBox;
