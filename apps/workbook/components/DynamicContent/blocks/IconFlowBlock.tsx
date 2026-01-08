import React from "react";
import { IconFlowBlock as IconFlowBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";

interface Props {
  block: IconFlowBlockType;
  renderBlock: RenderBlockFn;
}

const SIZE_MAP = {
  sm: { icon: "w-6 h-6", arrow: "text-base" },
  md: { icon: "w-8 h-8", arrow: "text-xl" },
  lg: { icon: "w-12 h-12", arrow: "text-2xl" }
};

export const IconFlowBlock = ({ block }: Props) => {
  const size = block.size || "md";
  const styles = SIZE_MAP[size];

  return (
    <div className="flex justify-center items-center gap-2 mb-4">
      {block.icons.map((icon, idx) => (
        <React.Fragment key={idx}>
          <img
            src={`https://api.iconify.design/fluent-emoji/${icon}.svg`}
            alt={icon}
            className={styles.icon}
          />
          {idx < block.icons.length - 1 && (
            <span className={styles.arrow}>
              {block?.direction === "right" ? "→" : "←"}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
