"use client";

import React from "react";
import { ContentBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText } from "../RichText";
import { getTextSize, getTextAlign } from "@/lib/ThemeRegistry";

// =============================================================================
// Types
// =============================================================================

export interface ParagraphBlockType {
    type: "p" | "paragraph";
    id?: string;
    /** Text content with optional merge tags */
    content: string | ContentBlock[];
    /** Text size (xs, sm, md, lg, xl) */
    size?: string;
    /** Text alignment (left, center, right) */
    align?: string;
}

interface Props {
    block: ParagraphBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ParagraphBlock - Renders a paragraph with merge tag support.
 *
 * The most common primitive block for text content.
 * Supports merge tags like {b}bold{/b}, {i}italic{/i}, etc.
 *
 * Examples:
 * - Simple text: { "type": "p", "content": "Hello world" }
 * - With formatting: { "type": "p", "content": "This is {b}important{/b}" }
 * - Centered: { "type": "p", "content": "...", "align": "center" }
 */
export const ParagraphBlock = ({ block, renderBlock }: Props) => {
    // If content is an array of blocks, render recursively
    if (Array.isArray(block.content)) {
        const sizeClass = getTextSize(block.size);
        const alignClass = getTextAlign(block.align);

        return (
            <p className={`${sizeClass} ${alignClass} leading-relaxed`}>
                {block.content.map((childBlock, idx) => renderBlock(childBlock, idx))}
            </p>
        );
    }

    // String content - use RichText for merge tag parsing
    return (
        <RichText
            as="p"
            size={block.size}
            align={block.align}
            className="leading-relaxed"
        >
            {block.content}
        </RichText>
    );
};

export default ParagraphBlock;
