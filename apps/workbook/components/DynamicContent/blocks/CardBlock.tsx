"use client";

import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { ContentBlock } from "@/lib/types";
import { getThemeClasses, ThemeVariant } from "@/lib/ThemeRegistry";
import { Icon, ContentRenderer } from "../RichText";

// =============================================================================
// Types
// =============================================================================

export interface CardBlockType {
    type: "card";
    id?: string;
    /** Card title */
    title: string;
    /** Theme variant */
    variant?: ThemeVariant | string;
    /** Optional icon (emoji name) */
    icon?: string;
    /** Optional subtitle */
    subtitle?: string;
    /** Content - string with merge tags OR array of blocks */
    content?: string | ContentBlock[];
    /** Card layout style */
    layout?: "default" | "centered" | "compact";
}

interface Props {
    block: CardBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * CardBlock - A themed card with icon, title, and content.
 *
 * Use for individual cards or as items within a grid.
 */
export const CardBlock = ({ block, renderBlock }: Props) => {
    const theme = getThemeClasses(block.variant || "slate");
    const layout = block.layout || "centered";
    const isCentered = layout === "centered";
    const isCompact = layout === "compact";

    // Container classes
    const containerClasses = [
        theme.bg,
        isCompact ? "p-4" : "p-5 md:p-6",
        "rounded-xl md:rounded-2xl",
        "border",
        theme.border,
        "shadow-md",
        isCentered && "text-center"
    ].filter(Boolean).join(" ");

    // Text colors based on theme
    const titleColor = theme.text;
    const subtitleColor = theme.isGradient ? "text-white/80" : "text-slate-500";
    const contentColor = theme.isGradient ? "text-white/90" : "text-slate-700";

    return (
        <div className={containerClasses}>
            {/* Icon */}
            {block.icon && (
                <div className={`${isCentered ? "flex justify-center" : ""} mb-3 md:mb-4`}>
                    <Icon name={block.icon} size={isCompact ? "lg" : "xl"} />
                </div>
            )}

            {/* Title */}
            <h3 className={`${isCompact ? "text-lg" : "text-xl md:text-2xl"} font-black ${titleColor} mb-2`}>
                {block.title}
            </h3>

            {/* Subtitle */}
            {block.subtitle && (
                <p className={`${isCompact ? "text-xs" : "text-sm"} ${subtitleColor} mb-3`}>
                    {block.subtitle}
                </p>
            )}

            {/* Content */}
            {block.content && (
                <div className={`${isCompact ? "text-sm" : "text-base"} leading-relaxed ${contentColor}`}>
                    <ContentRenderer
                        content={block.content}
                        renderBlock={renderBlock}
                    />
                </div>
            )}
        </div>
    );
};

export default CardBlock;
