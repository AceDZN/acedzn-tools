import React from "react";
import { HeroBlock as HeroBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

interface Props {
  block: HeroBlockType;
  renderBlock: RenderBlockFn;
}

export const HeroBlock = ({ block }: Props) => {
  return (
    <div className="bg-white p-4 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-200 mb-6 md:mb-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 md:mb-6 lg:mb-8 tracking-tight text-right">
        {block.title}
      </h2>
      {block.subtitle && (
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-600 font-medium text-right">
          {block.subtitle}
        </p>
      )}
    </div>
  );
};

