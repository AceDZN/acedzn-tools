"use client";

import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText } from "../RichText";

// =============================================================================
// Types
// =============================================================================

export interface TextBlockType {
    type: "text";
    id?: string;
    /** Text content with optional merge tags or legacy HTML */
    content: string;
    /** Text size */
    size?: string;
    /** Text alignment */
    align?: string;
}

interface Props {
    block: TextBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * TextBlock - Simple text rendering block.
 *
 * NOTE: For new content, prefer using:
 * - "p" / "paragraph" for simple text
 * - "box" for styled containers with content
 * - "callout" for callout-style boxes
 *
 * TextBlock exists mainly for backwards compatibility with existing content.
 * It renders text with merge tag support in a styled container.
 */
export const TextBlock = ({ block }: Props) => {
    // Check for legacy HTML
    const hasLegacyHTML = /<[a-z][\s\S]*>/i.test(block.content);

    if (hasLegacyHTML) {
        // Legacy HTML - render as-is in a container
        // This will be phased out as content is migrated
        return (
            <div
                className="text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.content }}
            />
        );
    }

    // Modern content with merge tags
    return (
        <div className="text-xl leading-relaxed text-slate-700">
            <RichText size={block.size || "xl"} align={block.align}>
                {block.content}
            </RichText>
        </div>
    );
};

export default TextBlock;
