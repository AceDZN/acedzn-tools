import React from "react";
import { HeadingBlock as HeadingBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

interface Props {
  block: HeadingBlockType;
  renderBlock: RenderBlockFn;
}

export const HeadingBlock = ({ block }: Props) => {
  const defaultClassName = "text-2xl font-black text-center text-slate-800 mb-6";
  
  return (
    <h3 className={block.className || defaultClassName}>
      {block.icon && (
        <img
          src={`https://api.iconify.design/fluent-emoji/${block.icon}.svg`}
          alt={block.icon}
          className="w-8 h-8 inline ml-2"
        />
      )}
      {block.content}
    </h3>
  );
};

