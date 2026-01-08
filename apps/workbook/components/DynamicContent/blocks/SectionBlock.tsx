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

