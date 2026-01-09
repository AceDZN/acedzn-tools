"use client";

import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { ContentBlock } from "@/lib/types";
import { Enrichment } from "@/components/Enrichment";
import { ContentRenderer } from "../RichText";

// =============================================================================
// Types
// =============================================================================

export interface EnrichmentBlockType {
    type: "enrichment";
    id?: string;
    /** Title for the enrichment section */
    title: string;
    /** Icon name (emoji) */
    icon: string;
    /** Content - string with merge tags OR array of blocks */
    content: string | ContentBlock[];
}

interface Props {
    block: EnrichmentBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * EnrichmentBlock - "Learn More" / "For Advanced Students" sections.
 *
 * Renders content in an expandable/collapsible enrichment container.
 * Supports both string content (with merge tags) and block arrays.
 */
export const EnrichmentBlock = ({ block, renderBlock }: Props) => {
    return (
        <Enrichment title={block.title} icon={block.icon}>
            <ContentRenderer
                content={block.content}
                renderBlock={renderBlock}
            />
        </Enrichment>
    );
};

export default EnrichmentBlock;
