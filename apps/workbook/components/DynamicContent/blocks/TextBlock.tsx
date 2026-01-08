import React from "react";
import { TextBlock as TextBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

interface Props {
  block: TextBlockType;
  renderBlock: RenderBlockFn;
}

export const TextBlock = ({ block }: Props) => {
  return (
    <div
      className={`bg-white p-8 rounded-[2rem] border border-slate-200 text-right ${block.className || ""}`}
    >
      <div
        className="text-xl leading-relaxed text-slate-700 font-medium"
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    </div>
  );
};

