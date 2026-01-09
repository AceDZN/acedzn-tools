import React from "react";
import { EnrichmentBlock as EnrichmentBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { Enrichment } from "@/components/Enrichment";

interface Props {
  block: EnrichmentBlockType;
  renderBlock: RenderBlockFn;
}

export const EnrichmentBlock = ({ block, renderBlock }: Props) => {
  // "content" in JSON might be string (legacy) or potentially array (future/migrated)
  // The type def says string, but we can treat it flexibly
  const content = block.content as any;
  const isArray = Array.isArray(content);

  return (
    <Enrichment title={block.title} icon={block.icon}>
      {isArray ? (
        <div className="space-y-4">
          {content.map((child: any, idx: number) => renderBlock(child, idx))}
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </Enrichment>
  );
};

