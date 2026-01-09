import React from "react";
import { RenderBlockFn } from "../BlockRenderer";
import { ContentBlock } from "@/lib/types";
import { getThemeClasses, ThemeVariant } from "@/lib/ThemeRegistry";
import { Icon } from "@iconify/react";

// Flexible container block
export interface CalloutBlockType {
    type: "callout";
    title?: string;
    icon?: string;
    variant?: ThemeVariant;
    content: ContentBlock[] | string; // Helper: support string for quick migration
    className?: string; // escape hatch
}

interface Props {
    block: CalloutBlockType;
    renderBlock: RenderBlockFn;
}

export const CalloutBlock = ({ block, renderBlock }: Props) => {
    const theme = getThemeClasses(block.variant);

    return (
        <div className={`p-6 rounded-3xl border ${theme.bg} ${theme.border} my-8 ${block.className || ""}`}>
            {block.title && (
                <h4 className={`text-xl font-black ${theme.text} mb-4 flex items-center gap-3`}>
                    {block.icon && <Icon icon={block.icon} className="w-8 h-8" />}
                    {block.title}
                </h4>
            )}

            <div className="space-y-4">
                {Array.isArray(block.content) ? (
                    block.content.map((child, idx) => renderBlock(child, idx))
                ) : (
                    /* Fallback/Legacy support for string content in callout */
                    <div dangerouslySetInnerHTML={{ __html: block.content }} />
                )}
            </div>
        </div>
    );
};
