"use client";

import React from "react";
import { ContentBlock } from "@/lib/types";

// Import all block components
import {
  TextBlock,
  SectionBlock,
  HeadingBlock,
  HeroBlock,
  GridCardsBlock,
  IntroductionBlock,
  SimulationBlock,
  QuizBlock,
  EnrichmentBlock,
  ScientificTableBlock,
  // Primitives
  IconFlowBlock,
  ParagraphBlock,
  HighlightBoxBlock
} from "./blocks";

// Block registry - maps type to component
const BLOCK_REGISTRY: Record<
  string,
  React.ComponentType<{ block: any; renderBlock: RenderBlockFn }>
> = {
  text: TextBlock,
  section: SectionBlock,
  h3: HeadingBlock,
  hero: HeroBlock,
  grid_cards: GridCardsBlock,
  introduction_block: IntroductionBlock,
  simulation: SimulationBlock,
  quiz: QuizBlock,
  enrichment: EnrichmentBlock,
  scientific_table: ScientificTableBlock,
  // Primitives
  icon_flow: IconFlowBlock,
  p: ParagraphBlock,
  highlight_box: HighlightBoxBlock
};

// Type for the render function that gets passed to child components
export type RenderBlockFn = (
  block: ContentBlock,
  index: number
) => React.ReactNode;

/**
 * Renders a single block by type
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
      key={block.id || index}
      block={block}
      renderBlock={renderBlock}
    />
  );
};

/**
 * Main BlockRenderer component - renders an array of blocks
 */
export const BlockRenderer = ({
  blocks,
  onQuizComplete
}: {
  blocks: ContentBlock[];
  onQuizComplete?: (score: number) => void;
}) => {
  return (
    <div className="space-y-8">
      {blocks.map((block, idx) => {
        // Special handling for quiz to pass onQuizComplete
        if (block.type === "quiz") {
          return (
            <QuizBlock
              key={block.id || idx}
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
