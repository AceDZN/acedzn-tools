"use client";

import React from "react";
import { FeatureGridBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Theme Styles
// =============================================================================

const VARIANTS = {
    emerald: {
        container: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200",
        title: "text-emerald-900",
    },
    blue: {
        container: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
        title: "text-blue-900",
    },
    purple: {
        container: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
        title: "text-purple-900",
    },
    amber: {
        container: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200",
        title: "text-amber-900",
    },
    cyan: {
        container: "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200",
        title: "text-cyan-900",
    },
};

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: FeatureGridBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * FeatureGrid - Centered icon cards for features/characteristics.
 *
 * Perfect for displaying a list of properties or features with icons.
 * Each feature has an icon, title, and description.
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "feature_grid",
 *   "title": "מאפיינים של גוף",
 *   "variant": "emerald",
 *   "features": [
 *     { "icon": "triangular-ruler", "title": "צורה", "description": "לכל גוף יש צורה..." }
 *   ]
 * }
 * ```
 */
export const FeatureGrid = ({ block }: Props) => {
    const variant = block.variant || "emerald";
    const styles = VARIANTS[variant] || VARIANTS["emerald"];
    const cols = block.cols || 3;

    const gridColsClass =
        cols === 2 ? "md:grid-cols-2" :
            cols === 4 ? "md:grid-cols-4" :
                "md:grid-cols-3";

    return (
        <div className={`${styles.container} p-6 rounded-3xl border my-8`}>
            {/* Optional title */}
            {block.title && (
                <h4 className={`text-xl font-black ${styles.title} mb-4`}>
                    {block.title}
                </h4>
            )}

            {/* Grid of feature cards */}
            <div className={`grid grid-cols-1 ${gridColsClass} gap-4`}>
                {block.features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded-xl shadow-sm text-center"
                    >
                        <Icon
                            name={feature.icon}
                            size="xl"
                            className="mx-auto mb-2"
                        />
                        <h5 className="font-bold text-slate-800">
                            {feature.title}
                        </h5>
                        <p className="text-sm text-slate-600">
                            <RichText>{feature.description}</RichText>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureGrid;
