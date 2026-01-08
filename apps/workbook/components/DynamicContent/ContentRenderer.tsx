"use client";

import React from "react";
import { ContentBlock } from "@/lib/types";
import { BlockRenderer } from "./BlockRenderer";

/**
 * ContentRenderer - Main entry point for rendering dynamic content blocks
 * 
 * Uses the BlockRenderer which provides a recursive renderBlock function
 * that can handle nested components of any depth.
 */
export const ContentRenderer = ({
  blocks,
  onQuizComplete
}: {
  blocks: ContentBlock[];
  onQuizComplete?: (score: number) => void;
}) => {
  return <BlockRenderer blocks={blocks} onQuizComplete={onQuizComplete} />;
};
