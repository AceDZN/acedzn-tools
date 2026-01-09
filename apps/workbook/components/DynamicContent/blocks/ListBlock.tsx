import React from "react";
import { ListBlock as ListBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";

interface Props {
  block: ListBlockType;
  renderBlock: RenderBlockFn;
}

export const ListBlock = ({ block }: Props) => {
  const isOrdered = block.listType === "ordered";
  const ListTag = isOrdered ? "ol" : "ul";
  const styles = isOrdered ? "list-decimal" : "list-disc";

  return (
    <ListTag className={`${styles} pl-5 space-y-2 my-4 text-slate-700 marker:text-slate-400 ${block.className || ""}`}>
      {block.items.map((item, idx) => (
        <li key={idx} className="pl-2">
          {parseMergeTags(item).map((seg, sIdx) => (
             <SpanBlock key={sIdx} block={seg} />
          ))}
        </li>
      ))}
    </ListTag>
  );
};
