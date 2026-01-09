import React from "react";
import {
  IntroductionBlock as IntroductionBlockType,
  InnerTextBlock,
  InnerListBlock,
  InnerCardsBlock
} from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { getThemeClasses } from "@/lib/ThemeRegistry";
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";

// Local theme helper mapping legacy internal names to ThemeRegistry names if needed
// Or directly using ThemeRegistry. 
// ThemeRegistry uses "primary-orange" keys too, so we can map directly.


// Inner content renderers for introduction block specific content
const InnerText = ({ block }: { block: InnerTextBlock }) => {
  const sizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl"
  };
  const className = `leading-relaxed text-slate-700 ${sizeClasses[block.size || "md"]}`;

  // Check for legacy HTML
  const hasLegacyHTML = /<[a-z][\s\S]*>/i.test(block.content);

  if (hasLegacyHTML) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    );
  }

  const segments = parseMergeTags(block.content);

  return (
    <div className={className}>
      {segments.map((seg, idx) => (
        <SpanBlock key={idx} block={seg} />
      ))}
    </div>
  );
};

const InnerList = ({ block, themeName }: { block: InnerListBlock; themeName?: string }) => {
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
};

const InnerCards = ({ block, themeName }: { block: InnerCardsBlock; themeName?: string }) => {
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
            <div className="mb-3">
              <img
                src={`https://api.iconify.design/fluent-emoji/${card.icon}.svg`}
                alt={card.icon}
                className="w-12 h-12 mx-auto"
              />
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
};

interface Props {
  block: IntroductionBlockType;
  renderBlock: RenderBlockFn;
}

export const IntroductionBlock = ({ block }: Props) => {
  const theme = getThemeClasses(block.theme);

  return (
    <div className={`${theme.bg} p-8 rounded-3xl border ${theme.border} shadow-sm mb-8`}>
      <h3 className={`text-2xl font-black ${theme.text} mb-6 text-center`}>
        {block.icon && (
          <img
            src={`https://api.iconify.design/fluent-emoji/${block.icon}.svg`}
            alt={block.icon}
            className="w-8 h-8 inline ml-2"
          />
        )}
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

