"use client";

import React from "react";
import {
  GridCardsBlock as GridCardsBlockType,
  ContentBlock
} from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { cn } from "@/lib/utils";
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";
import { SmartIcon } from "@/components/smart-icon";

// =============================================================================
// Variant Styles - Rich color palette for cards
// =============================================================================

const VARIANT_STYLES = {
  // Solid colors
  blue: {
    container: "bg-blue-50 border-blue-100",
    title: "text-blue-900",
    text: "text-blue-800"
  },
  indigo: {
    container: "bg-indigo-100 border-indigo-100",
    title: "text-indigo-900",
    text: "text-indigo-800"
  },
  emerald: {
    container: "bg-emerald-50 border-emerald-100",
    title: "text-emerald-900",
    text: "text-emerald-800"
  },
  amber: {
    container: "bg-amber-50 border-amber-100",
    title: "text-amber-900",
    text: "text-amber-800"
  },
  slate: {
    container: "bg-slate-50 border-slate-100",
    title: "text-slate-900",
    text: "text-slate-800"
  },
  orange: {
    container: "bg-orange-100 border-orange-400",
    title: "text-orange-900",
    text: "text-orange-800"
  },
  purple: {
    container: "bg-purple-100 border-purple-100",
    title: "text-purple-900",
    text: "text-purple-800"
  },
  pink: {
    container: "bg-pink-100 border-pink-100",
    title: "text-pink-900",
    text: "text-pink-800"
  },
  white: {
    container: "bg-white border-slate-200",
    title: "text-slate-900",
    text: "text-slate-700"
  },
  cyan: {
    container: "bg-cyan-50 border-cyan-200",
    title: "text-cyan-900",
    text: "text-cyan-800"
  },
  // Gradients
  "blue-gradient": {
    container: "bg-gradient-to-br from-blue-500 to-cyan-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  "indigo-gradient": {
    container: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white",
    title: "text-white",
    text: "text-white"
  },
  "slate-gradient": {
    container: "bg-gradient-to-br from-gray-600 to-slate-700 text-white",
    title: "text-white",
    text: "text-white"
  },
  "orange-gradient": {
    container: "bg-gradient-to-br from-orange-500 to-red-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  "purple-gradient": {
    container: "bg-gradient-to-br from-purple-400 to-pink-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  "pink-gradient": {
    container: "bg-gradient-to-br from-pink-500 to-red-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  "cyan-gradient": {
    container: "bg-gradient-to-br from-cyan-500 to-teal-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  "teal-gradient": {
    container: "bg-gradient-to-br from-teal-500 to-emerald-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  // Transparent
  transparent: {
    container: "bg-transparent border-transparent shadow-none",
    title: "text-slate-900",
    text: "text-slate-800"
  }
};

// =============================================================================
// Types
// =============================================================================

interface Props {
  block: GridCardsBlockType;
  renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

export const GridCardsBlock = ({ block, renderBlock }: Props) => {
  // Determine grid columns
  const cols = block.cols || 2;
  const gridColsClass =
    cols === 1 ? "md:grid-cols-1" :
      cols === 3 ? "md:grid-cols-3" :
        cols === 4 ? "md:grid-cols-4" :
          "md:grid-cols-2";

  return (
    <div
      className={`grid grid-cols-1 ${gridColsClass} gap-4 md:gap-6 lg:gap-8 text-right mb-6 md:mb-8`}
    >
      {block.cards.map((card, idx) => {
        const variantKey =
          card.variant && card.variant in VARIANT_STYLES
            ? card.variant
            : "slate";
        const styles =
          VARIANT_STYLES[variantKey as keyof typeof VARIANT_STYLES];

        // Check if content is structured (array) or legacy HTML/string
        const isStructuredContent = Array.isArray(card.content);

        return (
          <div
            key={idx}
            className={cn(
              "p-4 md:p-5 rounded-xl md:rounded-2xl border-2 border-transparent shadow-md",
              styles.container
            )}
          >
            <div className="text-center">
              {/* Icon */}
              {card.icon && (
                <SmartIcon
                  name={card.icon}
                  size={card?.iconSize ? Number(card?.iconSize) : 32}
                  className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4"
                />
              )}

              {/* Title */}
              <h3
                className={`text-lg md:text-xl lg:text-2xl font-black ${styles.title} mb-2 md:mb-3`}
              >
                {card.title}
              </h3>

              {/* Subtitle */}
              {card.subtitle && (
                <p className={`text-sm ${styles.text} opacity-80 mb-2`}>
                  {card.subtitle}
                </p>
              )}

              {/* Content */}
              {card.content && (
                <div className={`text-sm md:text-base lg:text-lg leading-relaxed ${styles.text}`}>
                  {isStructuredContent ? (
                    // Structured content - render as blocks
                    (card.content as ContentBlock[]).map(
                      (childBlock, childIdx) => renderBlock(childBlock, childIdx)
                    )
                  ) : (
                    // String content - check for HTML vs MergeTags
                    (card.content as string).match(/<[a-z][\s\S]*>/i) ? (
                      <div dangerouslySetInnerHTML={{ __html: card.content as string }} />
                    ) : (
                      parseMergeTags(card.content as string).map((seg, segIdx) => (
                        <SpanBlock key={segIdx} block={seg} />
                      ))
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridCardsBlock;
