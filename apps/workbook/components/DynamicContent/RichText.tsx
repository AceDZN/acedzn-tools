"use client";

import React from "react";
import { parseMergeTags, SpanBlock as SpanBlockType } from "@/utils/MergeTagParser";
import { ContentBlock } from "@/lib/types";
import { getTextSize, getTextAlign } from "@/lib/ThemeRegistry";

// =============================================================================
// SpanRenderer - Renders parsed merge tag segments
// =============================================================================

interface SpanRendererProps {
    segment: SpanBlockType;
}

function SpanRenderer({ segment }: SpanRendererProps) {
    const { style, content } = segment;

    if (!style || Object.keys(style).length === 0) {
        return <>{content}</>;
    }

    const classes = [
        style.bold && "font-bold",
        style.italic && "italic",
        style.underline && "underline",
        style.strikethrough && "line-through",
        style.code && "font-mono bg-slate-100 px-1.5 py-0.5 rounded text-red-600 text-[0.9em]",
        style.color && getColorClass(style.color),
        style.highlight && getHighlightClass(style.highlight)
    ].filter(Boolean).join(" ");

    if (!classes) {
        return <>{content}</>;
    }

    return <span className={classes}>{content}</span>;
}

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
// RichText - Main component for rendering text with merge tags
// =============================================================================

export interface RichTextProps {
    /** Text content with optional merge tags like {b}bold{/b} */
    children: string;
    /** Text size (xs, sm, base, md, lg, xl, 2xl) */
    size?: string;
    /** Text alignment (left, center, right) */
    align?: string;
    /** Additional CSS classes */
    className?: string;
    /** Render as specific element (default: span for inline, p for block) */
    as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4";
}

/**
 * Renders text with merge tag support.
 * Use this for any text content that may contain formatting like {b}bold{/b}.
 */
export function RichText({
    children,
    size,
    align,
    className = "",
    as: Element = "span"
}: RichTextProps) {
    // Check for legacy HTML (for backwards compatibility during migration)
    const hasLegacyHTML = /<[a-z][\s\S]*>/i.test(children);

    if (hasLegacyHTML) {
        // Legacy fallback - will be removed once all content is migrated
        return (
            <Element
                className={`${getTextSize(size)} ${getTextAlign(align)} ${className}`.trim()}
                dangerouslySetInnerHTML={{ __html: children }}
            />
        );
    }

    const sizeClass = getTextSize(size);
    const alignClass = getTextAlign(align);
    const combinedClasses = `${sizeClass} ${alignClass} ${className}`.trim();

    // Split by newlines and render each line with <br> between them
    const lines = children.split('\n');

    return (
        <Element className={combinedClasses || undefined}>
            {lines.map((line, lineIdx) => (
                <React.Fragment key={lineIdx}>
                    {lineIdx > 0 && <br />}
                    {parseMergeTags(line).map((seg, segIdx) => (
                        <SpanRenderer key={segIdx} segment={seg} />
                    ))}
                </React.Fragment>
            ))}
        </Element>
    );
}

// =============================================================================
// ContentRenderer - Renders content that can be string OR ContentBlock[]
// =============================================================================

export interface ContentRendererProps {
    /** Content - can be string with merge tags OR array of ContentBlocks */
    content: string | ContentBlock[];
    /** Function to render blocks (from BlockRenderer) */
    renderBlock: (block: ContentBlock, index: number) => React.ReactNode;
    /** Text size for string content */
    size?: string;
    /** Text alignment for string content */
    align?: string;
    /** Additional CSS classes for string content wrapper */
    className?: string;
    /** Wrapper element for string content */
    as?: "span" | "p" | "div";
}

/**
 * Unified content renderer that handles both string and block array content.
 * Use this in any component that accepts flexible content.
 */
export function ContentRenderer({
    content,
    renderBlock,
    size,
    align,
    className = "",
    as = "div"
}: ContentRendererProps) {
    // If content is an array of blocks, render each recursively
    if (Array.isArray(content)) {
        return (
            <div className="space-y-3">
                {content.map((block, idx) => renderBlock(block, idx))}
            </div>
        );
    }

    // If content is a string, render with merge tag support
    return (
        <RichText size={size} align={align} className={className} as={as}>
            {content}
        </RichText>
    );
}

// =============================================================================
// Icon Component - Renders emoji icons from Iconify
// =============================================================================

export interface IconProps {
    /** Icon name (from fluent-emoji set) */
    name: string;
    /** Icon size (default: md) */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /** Additional CSS classes */
    className?: string;
}

const ICON_SIZES = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
    "2xl": "w-12 h-12"
};

/**
 * Renders an emoji icon from Iconify.
 * Standardizes icon rendering across all blocks.
 */
import { SmartIcon } from "@/components/smart-icon";

export function Icon({ name, size = "md", className = "" }: IconProps) {
    const sizeClass = ICON_SIZES[size];

    return (
        <SmartIcon
            name={name}
            className={`${sizeClass} ${className}`.trim()}
        />
    );
}

// =============================================================================
// Exports
// =============================================================================

export default RichText;
