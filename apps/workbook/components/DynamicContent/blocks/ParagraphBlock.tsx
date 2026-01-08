import React from "react";
import { ParagraphBlock as ParagraphBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

interface Props {
  block: ParagraphBlockType;
  renderBlock: RenderBlockFn;
}

const SIZE_MAP = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
};

const ALIGN_MAP = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};

export const ParagraphBlock = ({ block }: Props) => {
  const sizeClass = SIZE_MAP[block.size || "md"];
  const alignClass = ALIGN_MAP[block.align || "center"];
  
  return (
    <p
      className={`${sizeClass} ${alignClass} ${block.className || ""}`}
      dangerouslySetInnerHTML={{ __html: block.content }}
    />
  );
};

