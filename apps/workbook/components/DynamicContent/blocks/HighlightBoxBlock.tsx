import React from "react";
import {
  HighlightBoxBlock as HighlightBoxBlockType,
  ContentBlock
} from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { cn } from "@/lib/utils";

interface Props {
  block: HighlightBoxBlockType;
  renderBlock: RenderBlockFn;
}

const VARIANT_STYLES = {
  default: "bg-white/20 p-3 rounded-xl",
  info: "bg-white/20 p-3 rounded-xl",
  example: "bg-white/30 p-2 rounded-lg",
  warning: "bg-amber-100/50 p-3 rounded-xl"
};

export const HighlightBoxBlock = ({ block, renderBlock }: Props) => {
  const variantClass = VARIANT_STYLES[block.variant || "default"];

  return (
    <div className={cn(variantClass, block.className)}>
      {block.content.map((childBlock: ContentBlock, idx: number) =>
        renderBlock(childBlock, idx)
      )}
    </div>
  );
};
