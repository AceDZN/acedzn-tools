"use client";

import React from "react";
import { ContentBlock } from "@/lib/types";

// Import all block components
import {
    // Primitives
    ParagraphBlock,
    SpanBlock,
    ListBlock,
    // Containers
    BoxBlock,
    CardBlock,
    SectionBlock,
    CalloutBlock,
    HighlightBoxBlock,
    // Grids
    GridCardsBlock,
    // Content
    TextBlock,
    HeroBlock,
    HeadingBlock,
    IntroductionBlock,
    // Case-specific educational blocks
    ExamplesBox,
    FeatureGrid,
    ThinkingQuestion,
    ConceptExplainer,
    ComparisonCards,
    TipBox,
    MethodCards,
    // Interactive
    SimulationBlock,
    QuizBlock,
    EnrichmentBlock,
    ScientificTableBlock,
    // Decorative
    IconFlowBlock
} from "./blocks";

// =============================================================================
// Types
// =============================================================================

/** Function type for rendering a single block */
export type RenderBlockFn = (
    block: ContentBlock,
    index: number
) => React.ReactNode;

// =============================================================================
// Block Registry
// =============================================================================

/**
 * Maps block type names to their React components.
 * Add new block types here to register them.
 */
const BLOCK_REGISTRY: Record<
    string,
    React.ComponentType<{ block: any; renderBlock: RenderBlockFn; onQuizComplete?: (score: number) => void }>
> = {
    // Primitives
    p: ParagraphBlock,
    paragraph: ParagraphBlock,
    span: SpanBlock,
    list: ListBlock,

    // Container blocks
    box: BoxBlock,
    card: CardBlock,
    section: SectionBlock,
    callout: CalloutBlock,
    highlight_box: HighlightBoxBlock,

    // Grid layouts
    grid_cards: GridCardsBlock,

    // Content blocks
    text: TextBlock,
    hero: HeroBlock,
    h3: HeadingBlock,
    heading: HeadingBlock,
    introduction_block: IntroductionBlock,

    // Case-specific educational blocks
    examples_box: ExamplesBox,
    feature_grid: FeatureGrid,
    thinking_question: ThinkingQuestion,
    concept_explainer: ConceptExplainer,
    comparison_cards: ComparisonCards,
    tip_box: TipBox,
    method_cards: MethodCards,

    // Interactive blocks
    simulation: SimulationBlock,
    quiz: QuizBlock,
    enrichment: EnrichmentBlock,
    scientific_table: ScientificTableBlock,

    // Decorative
    icon_flow: IconFlowBlock
};

// =============================================================================
// Render Function
// =============================================================================

/**
 * Renders a single block by looking up its type in the registry.
 * Passed to child components for recursive rendering.
 */
export const renderBlock: RenderBlockFn = (
    block: ContentBlock,
    index: number
) => {
    const Component = BLOCK_REGISTRY[block.type];

    if (!Component) {
        console.warn(`Unknown block type: ${block.type}`);
        return null;
    }

    return (
        <Component
            key={block.id || `block-${index}`}
            block={block}
            renderBlock={renderBlock}
        />
    );
};

// =============================================================================
// Main Component
// =============================================================================

interface BlockRendererProps {
    /** Array of content blocks to render */
    blocks: ContentBlock[];
    /** Callback when quiz is completed (optional) */
    onQuizComplete?: (score: number) => void;
}

/**
 * BlockRenderer - Main component for rendering an array of content blocks.
 *
 * This is the entry point for rendering dynamic content.
 * It iterates through blocks and renders each using the block registry.
 *
 * Usage:
 * ```tsx
 * <BlockRenderer blocks={moduleData.blocks} />
 * ```
 */
export const BlockRenderer = ({
    blocks,
    onQuizComplete
}: BlockRendererProps) => {
    return (
        <div className="space-y-8">
            {blocks.map((block, idx) => {
                // Special handling for quiz to pass onQuizComplete callback
                if (block.type === "quiz") {
                    return (
                        <QuizBlock
                            key={block.id || `quiz-${idx}`}
                            block={block}
                            renderBlock={renderBlock}
                            onQuizComplete={onQuizComplete}
                        />
                    );
                }
                return renderBlock(block, idx);
            })}
        </div>
    );
};

export default BlockRenderer;
