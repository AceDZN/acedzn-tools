import React from "react";
import { EnrichmentBlock as EnrichmentBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { Enrichment } from "@/components/Enrichment";

interface Props {
  block: EnrichmentBlockType;
  renderBlock: RenderBlockFn;
}

export const EnrichmentBlock = ({ block }: Props) => {
  return (
    <Enrichment title={block.title} icon={block.icon}>
      <div dangerouslySetInnerHTML={{ __html: block.content }} />
    </Enrichment>
  );
};

