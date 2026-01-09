import React from "react";
import { SectionBlock as SectionBlockType, ContentBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

interface Props {
  block: SectionBlockType;
  renderBlock: RenderBlockFn;
}

export const SectionBlock = ({ block, renderBlock }: Props) => {
  // Support both className and ClassName (legacy)
  const className = block.className || block.ClassName || "";

  // Default to space-y-4 unless disableSpacing is true (if we add that prop) or className overrides it?
  // Actually, let's keep it simple: if the user passes specific content, maybe they don't want vertical spacing.
  // For now, we keep space-y-4 as default but allow override via a specific prop if needed.
  // Assuming 'className' is applied to the outer div.

  return (
    <div className={className}>
      <div className="space-y-4">
        {block.content.map((childBlock: ContentBlock, idx: number) =>
          renderBlock(childBlock, idx)
        )}
      </div>
    </div>
  );
};

