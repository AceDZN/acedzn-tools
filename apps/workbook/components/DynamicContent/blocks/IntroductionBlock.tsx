"use client";

import React from "react";
import {
    IntroductionBlock as IntroductionBlockType,
    InnerTextBlock,
    InnerListBlock,
    InnerCardsBlock
} from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { getThemeClasses } from "@/lib/ThemeRegistry";
import { Icon, RichText } from "../RichText";

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: IntroductionBlockType;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Inner Content Components
// =============================================================================

function InnerText({ block }: { block: InnerTextBlock }) {
    const sizeClasses: Record<string, string> = {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl"
    };
    const className = `leading-relaxed text-slate-700 ${sizeClasses[block.size || "md"]}`;

    return (
        <div className={className}>
            <RichText>{block.content}</RichText>
        </div>
    );
}

function InnerList({ block, themeName }: { block: InnerListBlock; themeName?: string }) {
    const theme = getThemeClasses(themeName);

    return (
        <div className="grid gap-4 mt-4">
            {block.content.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
                >
                    {block.theme === "circular" && (
                        <span
                            className={`shrink-0 w-10 h-10 ${theme.bg} ${theme.text} rounded-full flex items-center justify-center font-black text-lg`}
                        >
                            {idx + 1}
                        </span>
                    )}
                    <div className="flex-1">
                        {item.title && (
                            <strong className={`block text-lg mb-1 ${theme.text}`}>
                                {item.title}
                            </strong>
                        )}
                        {item.content.map((subBlock, subIdx) => (
                            <InnerText key={subIdx} block={subBlock} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function InnerCards({ block, themeName }: { block: InnerCardsBlock; themeName?: string }) {
    const theme = getThemeClasses(themeName);
    const gridCols = block.content.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2";

    return (
        <div className={`grid grid-cols-1 ${gridCols} gap-4 mt-6`}>
            {block.content.map((card, idx) => (
                <div
                    key={idx}
                    className={`bg-white p-4 rounded-xl border ${theme.border} shadow-sm text-center`}
                >
                    {card.icon && (
                        <div className="mb-3 flex justify-center">
                            <Icon name={card.icon} size="xl" />
                        </div>
                    )}
                    {card.title && (
                        <h4 className={`font-bold text-lg mb-2 ${theme.text}`}>
                            {card.title}
                        </h4>
                    )}
                    {card.content.map((subBlock, subIdx) => (
                        <div key={subIdx} className="text-sm">
                            <InnerText block={{ ...subBlock, size: "sm" }} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

// =============================================================================
// Main Component
// =============================================================================

/**
 * IntroductionBlock - Themed intro section with structured inner content.
 *
 * Supports three inner content types:
 * - text: Simple text paragraphs
 * - list_items: Numbered/bulleted list with titles
 * - cards: Grid of info cards
 */
export const IntroductionBlock = ({ block }: Props) => {
    const theme = getThemeClasses(block.theme);

    return (
        <div className={`${theme.bg} p-8 rounded-3xl border ${theme.border} shadow-sm mb-8`}>
            <h3 className={`text-2xl font-black ${theme.text} mb-6 text-center flex items-center justify-center gap-3`}>
                {block.icon && <Icon name={block.icon} size="lg" />}
                {block.title}
            </h3>

            <div className="space-y-4 text-center">
                {block.content.map((innerBlock, idx) => {
                    if (innerBlock.type === "text") {
                        return (
                            <div key={idx}>
                                <InnerText block={innerBlock} />
                            </div>
                        );
                    }
                    if (innerBlock.type === "list_items") {
                        return (
                            <div key={idx} className="text-right">
                                <InnerList block={innerBlock} themeName={block.theme} />
                            </div>
                        );
                    }
                    if (innerBlock.type === "cards") {
                        return (
                            <div key={idx}>
                                <InnerCards block={innerBlock} themeName={block.theme} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default IntroductionBlock;
