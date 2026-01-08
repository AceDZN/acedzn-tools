import React from "react";
import {
  IntroductionBlock as IntroductionBlockType,
  InnerTextBlock,
  InnerListBlock,
  InnerCardsBlock
} from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

// Theme maps
const THEME_STYLES = {
  "primary-orange": {
    container: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100",
    title: "text-orange-900",
    listMarker: "bg-orange-600",
    cardBorder: "border-orange-200"
  },
  "primary-blue": {
    container: "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100",
    title: "text-indigo-900",
    listMarker: "bg-indigo-600",
    cardBorder: "border-indigo-200"
  },
  "primary-purple": {
    container: "bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-100",
    title: "text-purple-900",
    listMarker: "bg-purple-600",
    cardBorder: "border-purple-200"
  },
  "primary-emerald": {
    container: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100",
    title: "text-emerald-900",
    listMarker: "bg-emerald-600",
    cardBorder: "border-emerald-200"
  },
  default: {
    container: "bg-slate-50 border-slate-100",
    title: "text-slate-900",
    listMarker: "bg-slate-600",
    cardBorder: "border-slate-200"
  }
};

const getTheme = (themeName?: string) => {
  return THEME_STYLES[themeName as keyof typeof THEME_STYLES] || THEME_STYLES.default;
};

// Inner content renderers for introduction block specific content
const InnerText = ({ block }: { block: InnerTextBlock }) => {
  const sizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl"
  };
  const className = `leading-relaxed text-slate-700 ${sizeClasses[block.size || "md"]}`;
  
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: block.content }}
    />
  );
};

const InnerList = ({ block, themeName }: { block: InnerListBlock; themeName?: string }) => {
  const theme = getTheme(themeName);

  return (
    <div className="grid gap-4 mt-4">
      {block.content.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
        >
          {block.theme === "circular" && (
            <span
              className={`shrink-0 w-10 h-10 ${theme.listMarker} text-white rounded-full flex items-center justify-center font-black text-lg`}
            >
              {idx + 1}
            </span>
          )}
          <div className="flex-1">
            {item.title && (
              <strong className={`block text-lg mb-1 ${theme.title}`}>
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
  const theme = getTheme(themeName);
  const gridCols = block.content.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4 mt-6`}>
      {block.content.map((card, idx) => (
        <div
          key={idx}
          className={`bg-white p-4 rounded-xl border ${theme.cardBorder} shadow-sm text-center`}
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
            <h4 className={`font-bold text-lg mb-2 ${theme.title}`}>
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
  const theme = getTheme(block.theme);

  return (
    <div className={`${theme.container} p-8 rounded-3xl border shadow-sm mb-8`}>
      <h3 className={`text-2xl font-black ${theme.title} mb-6 text-center`}>
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

