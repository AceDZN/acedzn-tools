import React from "react";
import { HeadingBlock as HeadingBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
// Use parseMergeTags for rich text in headings
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";
import { SmartIcon } from "@/components/smart-icon";

interface Props {
  block: HeadingBlockType;
  renderBlock: RenderBlockFn;
}

export const HeadingBlock = ({ block }: Props) => {
  const defaultClassName = "text-2xl font-black text-center text-slate-800 mb-6";

  return (
    <h3 className={block.className || defaultClassName}>
      {block.icon && (
        <SmartIcon
          name={block.icon}
          className="w-8 h-8 inline ml-2"
        />
      )}
      {/* Parse content for merge tags */}
      {parseMergeTags(block.content).map((seg, idx) => (
        <SpanBlock key={idx} block={seg} />
      ))}
    </h3>
  );
};
