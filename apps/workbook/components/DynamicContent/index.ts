// =============================================================================
// Dynamic Content System - Main Exports
// =============================================================================

// Core rendering components
export { ContentRenderer } from "./ContentRenderer";
export { BlockRenderer, renderBlock } from "./BlockRenderer";
export type { RenderBlockFn } from "./BlockRenderer";

// Rich text utilities
export {
    RichText,
    ContentRenderer as ContentRendererUtil,
    Icon
} from "./RichText";
export type { RichTextProps, ContentRendererProps, IconProps } from "./RichText";

// Re-export all blocks for direct access if needed
export * from "./blocks";
