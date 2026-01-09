import React from "react";
import { ParagraphBlock as ParagraphBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";

interface Props {
  block: ParagraphBlockType;
  renderBlock: RenderBlockFn;
}

const SIZE_MAP = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
};

const ALIGN_MAP = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};

export const ParagraphBlock = ({ block, renderBlock }: Props) => {
  const sizeClass = SIZE_MAP[block.size || "md"];
  const alignClass = ALIGN_MAP[block.align || "center"];

  // 1. If content is already an array, render recursively
  if (Array.isArray(block.content)) {
    return (
      <p className={`${sizeClass} ${alignClass} ${block.className || ""}`}>
        {block.content.map((childBlock, idx) => renderBlock(childBlock, idx))}
      </p>
    );
  }

  // 2. If content is a string string, parse it for merge tags
  // This enables "Migration Mode": legacy HTML strings will still work via dangerouslySetInnerHTML if they contain tags we don't parse (like <br>), 
  // but if they contain {b} tags we render them as strict SpanBlocks.

  // Check if string contains ANY legacy HTML tags (simple heuristic)
  const hasLegacyHTML = /<[a-z][\s\S]*>/i.test(block.content);

  if (hasLegacyHTML) {
    // Legacy fallback
    return (
      <p
        className={`${sizeClass} ${alignClass} ${block.className || ""}`}
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    );
  }

  // Parse custom merge tags
  // "This is {b}bold{/b}" -> [SpanBlock, SpanBlock]
  const segments = parseMergeTags(block.content);

  return (
    <p className={`${sizeClass} ${alignClass} ${block.className || ""}`}>
      {segments.map((seg, idx) => (
        // We can render SpanBlock directly since it's a primitive import
        // or use renderBlock if we registered it.
        // Let's use the component directly for performance/simplicity here,
        // but strictly we should structure 'seg' as a full block if we pass to renderBlock.
        // parseMergeTags returns objects that MATCH SpanBlock type.
        <SpanBlock key={idx} block={seg} />
      ))}
    </p>
  );
};

