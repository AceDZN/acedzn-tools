"use client";

import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { ContentBlock } from "@/lib/types";
import { getThemeClasses, ThemeVariant } from "@/lib/ThemeRegistry";
import { Icon, ContentRenderer } from "../RichText";

// =============================================================================
// Types
// =============================================================================

export interface CalloutBlockType {
    type: "callout";
    id?: string;
    /** Theme variant (blue, warning, info, emerald-gradient, etc.) */
    variant?: ThemeVariant | string;
    /** Optional title */
    title?: string;
    /** Optional icon (emoji name) */
    icon?: string;
    /** Content - string with merge tags OR array of blocks */
    content: string | ContentBlock[];
}

interface Props {
    block: CalloutBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * CalloutBlock - A styled container for callouts, notes, warnings, etc.
 *
 * Similar to BoxBlock but with callout-specific styling defaults.
 * Use semantic variants like "info", "warning", "success", "danger"
 * or color variants like "blue", "amber-gradient", etc.
 */
export const CalloutBlock = ({ block, renderBlock }: Props) => {
    const theme = getThemeClasses(block.variant || "slate");

    // Container classes
    const containerClasses = [
        theme.bg,
        "p-6",
        "rounded-3xl",
        "border",
        theme.border,
        "my-6"
    ].join(" ");

    // Text colors
    const titleColor = theme.text;
    const contentColor = theme.isGradient ? "text-white/90" : "text-slate-700";

    return (
        <div className={containerClasses}>
            {/* Title with optional icon */}
            {block.title && (
                <h4 className={`text-xl font-black ${titleColor} mb-4 flex items-center gap-3`}>
                    {block.icon && <Icon name={block.icon} size="lg" />}
                    {block.title}
                </h4>
            )}

            {/* Icon only (no title) - rare case */}
            {block.icon && !block.title && (
                <div className="mb-4">
                    <Icon name={block.icon} size="lg" />
                </div>
            )}

            {/* Content */}
            <div className={`space-y-4 ${contentColor}`}>
                <ContentRenderer
                    content={block.content}
                    renderBlock={renderBlock}
                />
            </div>
        </div>
    );
};

export default CalloutBlock;
