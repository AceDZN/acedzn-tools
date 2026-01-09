import React from "react";
import { TextBlock as TextBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";

interface Props {
  block: TextBlockType;
  renderBlock: RenderBlockFn;
}

export const TextBlock = ({ block }: Props) => {
  // Parse content to check for legacy HTML or use merge parser
  const hasLegacyHTML = /<[a-z][\s\S]*>/i.test(block.content);

  let content: React.ReactNode;

  if (hasLegacyHTML) {
    content = <div dangerouslySetInnerHTML={{ __html: block.content }} />;
  } else {
    // Reuse ParagraphBlock logic or similar - here we manually map spans
    // Note: TextBlock usually wraps a whole paragraph block style, so we render spans directly inside
    const segments = parseMergeTags(block.content);
    content = (
      <>
        {segments.map((seg, idx) => (
          <SpanBlock key={idx} block={seg} />
        ))}
      </>
    );
  }

  return (
    <div
      className={`bg-white p-8 rounded-[2rem] border border-slate-200 text-right ${block.className || ""}`}
    >
      <div className="text-xl leading-relaxed text-slate-700 font-medium">
        {content}
      </div>
    </div>
  );
};

