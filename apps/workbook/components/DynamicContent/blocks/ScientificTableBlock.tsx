import React from "react";
import { ScientificTableBlock as ScientificTableBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { ScientificTable } from "@/components/ScientificTable";

interface Props {
  block: ScientificTableBlockType;
  renderBlock: RenderBlockFn;
}

export const ScientificTableBlock = ({ block }: Props) => {
  return (
    <div className="bg-white p-0 rounded-[2.5rem] border-slate-200 mb-8">
      <ScientificTable
        title={block.title}
        headers={block.headers}
        rows={block.rows}
        variant={block.variant}
        note={block.note}
      />
    </div>
  );
};

