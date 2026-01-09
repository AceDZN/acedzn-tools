"use client";

import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText } from "../RichText";

// =============================================================================
// Types
// =============================================================================

export interface ListBlockType {
    type: "list";
    id?: string;
    /** List type (ordered or unordered) */
    listType?: "ordered" | "unordered";
    /** Array of items - strings with optional merge tags */
    items: string[];
    /** Text size for items */
    size?: string;
}

interface Props {
    block: ListBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ListBlock - Renders ordered or unordered lists.
 *
 * Each item can contain merge tags for formatting.
 *
 * Examples:
 * - Bullet list: { "type": "list", "items": ["Item 1", "Item 2"] }
 * - Numbered: { "type": "list", "listType": "ordered", "items": [...] }
 * - With formatting: { "type": "list", "items": ["{b}Bold{/b} item", "Normal item"] }
 */
export const ListBlock = ({ block }: Props) => {
    const isOrdered = block.listType === "ordered";
    const ListTag = isOrdered ? "ol" : "ul";
    const listStyle = isOrdered ? "list-decimal" : "list-disc";

    return (
        <ListTag className={`${listStyle} pr-5 space-y-2 my-4 text-slate-700 marker:text-slate-400`}>
            {block.items.map((item, idx) => (
                <li key={idx} className="pr-2">
                    <RichText as="span" size={block.size}>
                        {item}
                    </RichText>
                </li>
            ))}
        </ListTag>
    );
};

export default ListBlock;
