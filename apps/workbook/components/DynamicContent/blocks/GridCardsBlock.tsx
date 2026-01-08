import React from "react";
import {
  GridCardsBlock as GridCardsBlockType,
  ContentBlock
} from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { cn } from "@/lib/utils";

const VARIANT_STYLES = {
  blue: {
    container: "bg-blue-50 border-blue-100",
    title: "text-blue-900",
    text: "text-blue-800"
  },
  "blue-gradient": {
    container: "bg-gradient-to-br from-blue-500 to-cyan-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  indigo: {
    container: "bg-indigo-100 border-indigo-100",
    title: "text-indigo-900",
    text: "text-indigo-800"
  },
  "indigo-gradient": {
    container: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white",
    title: "text-white",
    text: "text-white"
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
  "slate-gradient": {
    container: "bg-gradient-to-br from-gray-600 to-slate-700 text-white",
    title: "text-white",
    text: "text-white"
  },
  orange: {
    container: "bg-orange-100 border-orange-400",
    title: "text-orange-900",
    text: "text-orange-800"
  },
  "orange-gradient": {
    container: "bg-gradient-to-br from-orange-500 to-red-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  purple: {
    container: "bg-purple-100 border-purple-100",
    title: "text-purple-900",
    text: "text-purple-800"
  },
  "purple-gradient": {
    container: "bg-gradient-to-br from-purple-400 to-pink-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  pink: {
    container: "bg-pink-100 border-pink-100",
    title: "text-pink-900",
    text: "text-pink-800"
  },
  "pink-gradient": {
    container: "bg-gradient-to-br from-pink-500 to-red-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  cyan: {
    container: "bg-gradient-to-br from-cyan-500 to-teal-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  teal: {
    container: "bg-gradient-to-br from-teal-500 to-emerald-500 text-white",
    title: "text-white",
    text: "text-white"
  },
  transparent: {
    container: "bg-transparent border-transparent shadow-none",
    title: "text-slate-900",
    text: "text-slate-800"
  }
};

interface Props {
  block: GridCardsBlockType;
  renderBlock: RenderBlockFn;
}

export const GridCardsBlock = ({ block, renderBlock }: Props) => {
  const gridColsClass = block.cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

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

        // Check if content is structured (array) or legacy HTML string
        const isStructuredContent = Array.isArray(card.content);

        return (
          <div
            key={idx}
            className={cn(
              `p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border-2 border-transparent shadow-md`,
              styles.container,
              card.className
            )}
          >
            <div className="text-center">
              {card.icon && (
                <img
                  src={`https://api.iconify.design/fluent-emoji/${card.icon}.svg`}
                  alt={card.icon}
                  className="w-16 h-16 mx-auto mb-4"
                />
              )}
              <h3
                className={`text-xl md:text-2xl font-black ${styles.title} mb-3 md:mb-4`}
              >
                {card.title}
              </h3>
              {isStructuredContent ? (
                <div
                  className={`text-base md:text-lg leading-relaxed ${styles.text}`}
                >
                  {(card.content as ContentBlock[]).map(
                    (childBlock, childIdx) => renderBlock(childBlock, childIdx)
                  )}
                </div>
              ) : (
                <div
                  className={`text-base md:text-lg font-bold leading-relaxed ${styles.text}`}
                  dangerouslySetInnerHTML={{ __html: card.content as string }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
