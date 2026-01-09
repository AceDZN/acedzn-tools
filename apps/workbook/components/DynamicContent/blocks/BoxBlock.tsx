"use client";

import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { ContentBlock } from "@/lib/types";
import {
    getThemeClasses,
    getSpacing,
    getRadius,
    ThemeVariant
} from "@/lib/ThemeRegistry";
import { Icon, ContentRenderer } from "../RichText";

// =============================================================================
// Types
// =============================================================================

export interface BoxBlockType {
    type: "box";
    id?: string;
    /** Theme variant (blue, emerald-gradient, warning, etc.) */
    variant?: ThemeVariant | string;
    /** Optional title */
    title?: string;
    /** Optional icon (emoji name from fluent-emoji set) */
    icon?: string;
    /** Content - string with merge tags OR array of blocks */
    content: string | ContentBlock[];
    /** Padding size (xs, sm, md, lg, xl) - default: md */
    padding?: string;
    /** Border radius (sm, md, lg, xl) - default: xl */
    radius?: string;
    /** Show border (default: true) */
    border?: boolean;
    /** Show shadow (default: false) */
    shadow?: boolean;
    /** Text alignment for content */
    align?: "left" | "center" | "right";
}

interface Props {
    block: BoxBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * BoxBlock - A flexible themed container for content.
 *
 * Replaces the old pattern of using "text" blocks with HTML.
 * Use this for any styled section: callouts, info boxes, warnings, etc.
 *
 * Examples:
 * - Simple info box: variant="info", title="Note", content="..."
 * - Gradient card: variant="blue-gradient", icon="rocket", content=[...]
 * - Warning callout: variant="warning", icon="warning", title="Important", content=[...]
 */
export const BoxBlock = ({ block, renderBlock }: Props) => {
    const theme = getThemeClasses(block.variant);
    const paddingClass = getSpacing(block.padding);
    const radiusClass = getRadius(block.radius);
    const showBorder = block.border !== false;
    const showShadow = block.shadow === true;

    // Build container classes
    const containerClasses = [
        theme.bg,
        paddingClass,
        radiusClass,
        showBorder && `border ${theme.border}`,
        showShadow && "shadow-lg",
        block.align === "center" && "text-center",
        block.align === "left" && "text-left",
        block.align === "right" && "text-right"
    ].filter(Boolean).join(" ");

    // Determine text color for title based on theme
    const titleColorClass = theme.text;
    const contentColorClass = theme.isGradient ? "text-white/90" : "text-slate-700";

    return (
        <div className={containerClasses}>
            {/* Title with optional icon */}
            {block.title && (
                <div className={`flex items-center gap-3 mb-4 ${block.align === "center" ? "justify-center" : ""}`}>
                    {block.icon && <Icon name={block.icon} size="lg" />}
                    <h4 className={`text-xl font-black ${titleColorClass}`}>
                        {block.title}
                    </h4>
                </div>
            )}

            {/* Icon only (no title) */}
            {block.icon && !block.title && (
                <div className={`mb-4 ${block.align === "center" ? "flex justify-center" : ""}`}>
                    <Icon name={block.icon} size="xl" />
                </div>
            )}

            {/* Content */}
            <div className={contentColorClass}>
                <ContentRenderer
                    content={block.content}
                    renderBlock={renderBlock}
                    size="base"
                />
            </div>
        </div>
    );
};

export default BoxBlock;
