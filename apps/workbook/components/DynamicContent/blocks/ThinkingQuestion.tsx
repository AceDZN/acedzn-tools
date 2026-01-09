"use client";

import React from "react";
import { ThinkingQuestionBlock } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import { RichText, Icon } from "../RichText";

// =============================================================================
// Types
// =============================================================================

interface Props {
    block: ThinkingQuestionBlock;
    renderBlock: RenderBlockFn;
}

// =============================================================================
// Component
// =============================================================================

/**
 * ThinkingQuestion - Q&A box with question and answer.
 *
 * Purple-themed box for presenting thought-provoking questions
 * with answers in a highlighted container.
 *
 * Usage in JSON:
 * ```json
 * {
 *   "type": "thinking_question",
 *   "question": "האם {b}אוויר{/b} הוא גוף או חומר?",
 *   "answer": "{b}תשובה:{/b} אוויר הוא {b}חומר{/b}...",
 *   "note": "אוויר הוא חומר כי יש לו מסה..."
 * }
 * ```
 */
export const ThinkingQuestion = ({ block }: Props) => {
    return (
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-3xl border-2 border-purple-300 my-8">
            {/* Header */}
            <h4 className="text-xl font-black text-purple-900 mb-4 flex items-center gap-3">
                <Icon name="thinking-face" size="lg" />
                שאלה לחשיבה
            </h4>

            {/* Question */}
            <p className="text-slate-700 mb-4">
                <RichText>{block.question}</RichText>
            </p>

            {/* Answer box */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-slate-600">
                    <RichText>{block.answer}</RichText>
                </p>

                {/* Optional note */}
                {block.note && (
                    <p className="text-sm text-slate-500 mt-2">
                        <RichText>{block.note}</RichText>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ThinkingQuestion;
