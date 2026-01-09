/**
 * Unified Theme Registry for Workbook Content
 *
 * This is the SINGLE SOURCE OF TRUTH for all visual theming.
 * Components should reference themes by variant name, never raw Tailwind classes.
 * This allows us to change styling framework in the future without touching content.
 */

// =============================================================================
// Theme Types
// =============================================================================

export interface ThemeColors {
    /** Background color/gradient */
    bg: string;
    /** Primary text color */
    text: string;
    /** Border color */
    border: string;
    /** Icon color */
    icon: string;
    /** Optional accent background (for nested elements) */
    accent?: string;
    /** Whether this is a gradient theme (affects text readability) */
    isGradient?: boolean;
}

export type ThemeVariant = keyof typeof THEME_COLORS;
export type TextSize = keyof typeof TEXT_SIZES;
export type TextAlign = keyof typeof TEXT_ALIGN;
export type SpacingSize = keyof typeof SPACING;
export type RadiusSize = keyof typeof RADIUS;

// =============================================================================
// Color Themes
// =============================================================================

export const THEME_COLORS = {
    // -------------------------------------------------------------------------
    // Solid Colors (Light backgrounds, dark text)
    // -------------------------------------------------------------------------
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-900",
        border: "border-blue-200",
        icon: "text-blue-600",
        accent: "bg-blue-100"
    },
    indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-900",
        border: "border-indigo-200",
        icon: "text-indigo-600",
        accent: "bg-indigo-100"
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-900",
        border: "border-purple-200",
        icon: "text-purple-600",
        accent: "bg-purple-100"
    },
    pink: {
        bg: "bg-pink-50",
        text: "text-pink-900",
        border: "border-pink-200",
        icon: "text-pink-600",
        accent: "bg-pink-100"
    },
    red: {
        bg: "bg-red-50",
        text: "text-red-900",
        border: "border-red-200",
        icon: "text-red-600",
        accent: "bg-red-100"
    },
    orange: {
        bg: "bg-orange-50",
        text: "text-orange-900",
        border: "border-orange-200",
        icon: "text-orange-600",
        accent: "bg-orange-100"
    },
    amber: {
        bg: "bg-amber-50",
        text: "text-amber-900",
        border: "border-amber-200",
        icon: "text-amber-600",
        accent: "bg-amber-100"
    },
    yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-900",
        border: "border-yellow-200",
        icon: "text-yellow-600",
        accent: "bg-yellow-100"
    },
    emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-900",
        border: "border-emerald-200",
        icon: "text-emerald-600",
        accent: "bg-emerald-100"
    },
    green: {
        bg: "bg-green-50",
        text: "text-green-900",
        border: "border-green-200",
        icon: "text-green-600",
        accent: "bg-green-100"
    },
    teal: {
        bg: "bg-teal-50",
        text: "text-teal-900",
        border: "border-teal-200",
        icon: "text-teal-600",
        accent: "bg-teal-100"
    },
    cyan: {
        bg: "bg-cyan-50",
        text: "text-cyan-900",
        border: "border-cyan-200",
        icon: "text-cyan-600",
        accent: "bg-cyan-100"
    },
    slate: {
        bg: "bg-slate-50",
        text: "text-slate-900",
        border: "border-slate-200",
        icon: "text-slate-500",
        accent: "bg-slate-100"
    },
    gray: {
        bg: "bg-gray-50",
        text: "text-gray-900",
        border: "border-gray-200",
        icon: "text-gray-500",
        accent: "bg-gray-100"
    },

    // -------------------------------------------------------------------------
    // Gradient Themes (Gradient backgrounds, white text)
    // -------------------------------------------------------------------------
    "blue-gradient": {
        bg: "bg-gradient-to-br from-blue-500 to-cyan-500",
        text: "text-white",
        border: "border-blue-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "indigo-gradient": {
        bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
        text: "text-white",
        border: "border-indigo-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "purple-gradient": {
        bg: "bg-gradient-to-br from-purple-500 to-pink-500",
        text: "text-white",
        border: "border-purple-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "pink-gradient": {
        bg: "bg-gradient-to-br from-pink-500 to-rose-500",
        text: "text-white",
        border: "border-pink-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "red-gradient": {
        bg: "bg-gradient-to-br from-red-500 to-orange-500",
        text: "text-white",
        border: "border-red-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "orange-gradient": {
        bg: "bg-gradient-to-br from-orange-500 to-amber-500",
        text: "text-white",
        border: "border-orange-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "amber-gradient": {
        bg: "bg-gradient-to-br from-amber-500 to-yellow-500",
        text: "text-white",
        border: "border-amber-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "emerald-gradient": {
        bg: "bg-gradient-to-br from-emerald-500 to-teal-500",
        text: "text-white",
        border: "border-emerald-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "teal-gradient": {
        bg: "bg-gradient-to-br from-teal-500 to-cyan-500",
        text: "text-white",
        border: "border-teal-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "cyan-gradient": {
        bg: "bg-gradient-to-br from-cyan-500 to-blue-500",
        text: "text-white",
        border: "border-cyan-400",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },
    "slate-gradient": {
        bg: "bg-gradient-to-br from-slate-600 to-slate-800",
        text: "text-white",
        border: "border-slate-500",
        icon: "text-white",
        accent: "bg-white/20",
        isGradient: true
    },

    // -------------------------------------------------------------------------
    // Soft Gradient Themes (Light gradients, dark text)
    // -------------------------------------------------------------------------
    "blue-soft": {
        bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
        text: "text-blue-900",
        border: "border-blue-200",
        icon: "text-blue-600",
        accent: "bg-white"
    },
    "purple-soft": {
        bg: "bg-gradient-to-br from-purple-50 to-pink-50",
        text: "text-purple-900",
        border: "border-purple-200",
        icon: "text-purple-600",
        accent: "bg-white"
    },
    "amber-soft": {
        bg: "bg-gradient-to-br from-amber-50 to-orange-50",
        text: "text-amber-900",
        border: "border-amber-200",
        icon: "text-amber-600",
        accent: "bg-white"
    },
    "emerald-soft": {
        bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
        text: "text-emerald-900",
        border: "border-emerald-200",
        icon: "text-emerald-600",
        accent: "bg-white"
    },
    "cyan-soft": {
        bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
        text: "text-cyan-900",
        border: "border-cyan-200",
        icon: "text-cyan-600",
        accent: "bg-white"
    },

    // -------------------------------------------------------------------------
    // Semantic Themes (For specific use cases)
    // -------------------------------------------------------------------------
    info: {
        bg: "bg-sky-50",
        text: "text-sky-900",
        border: "border-sky-200",
        icon: "text-sky-500",
        accent: "bg-sky-100"
    },
    success: {
        bg: "bg-emerald-50",
        text: "text-emerald-900",
        border: "border-emerald-200",
        icon: "text-emerald-500",
        accent: "bg-emerald-100"
    },
    warning: {
        bg: "bg-amber-50",
        text: "text-amber-900",
        border: "border-amber-300",
        icon: "text-amber-500",
        accent: "bg-amber-100"
    },
    danger: {
        bg: "bg-red-50",
        text: "text-red-900",
        border: "border-red-200",
        icon: "text-red-500",
        accent: "bg-red-100"
    },

    // -------------------------------------------------------------------------
    // Utility Themes
    // -------------------------------------------------------------------------
    white: {
        bg: "bg-white",
        text: "text-slate-900",
        border: "border-slate-200",
        icon: "text-slate-600",
        accent: "bg-slate-50"
    },
    transparent: {
        bg: "bg-transparent",
        text: "text-slate-900",
        border: "border-transparent",
        icon: "text-slate-600",
        accent: "bg-transparent"
    },
    "white-glass": {
        bg: "bg-white/80 backdrop-blur-sm",
        text: "text-slate-900",
        border: "border-white/50",
        icon: "text-slate-600",
        accent: "bg-white/50"
    },

    // -------------------------------------------------------------------------
    // Legacy aliases (for backwards compatibility)
    // -------------------------------------------------------------------------
    "primary-blue": {
        bg: "bg-blue-50",
        text: "text-blue-900",
        border: "border-blue-200",
        icon: "text-blue-600",
        accent: "bg-blue-100"
    },
    "primary-green": {
        bg: "bg-green-50",
        text: "text-green-900",
        border: "border-green-200",
        icon: "text-green-600",
        accent: "bg-green-100"
    },
    "primary-purple": {
        bg: "bg-purple-50",
        text: "text-purple-900",
        border: "border-purple-200",
        icon: "text-purple-600",
        accent: "bg-purple-100"
    },
    "primary-orange": {
        bg: "bg-orange-50",
        text: "text-orange-900",
        border: "border-orange-200",
        icon: "text-orange-600",
        accent: "bg-orange-100"
    },
    "primary-emerald": {
        bg: "bg-emerald-50",
        text: "text-emerald-900",
        border: "border-emerald-200",
        icon: "text-emerald-600",
        accent: "bg-emerald-100"
    }
} as const;

// =============================================================================
// Typography
// =============================================================================

export const TEXT_SIZES = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl"
} as const;

export const TEXT_WEIGHTS = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black"
} as const;

export const TEXT_ALIGN = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
} as const;

// =============================================================================
// Spacing & Layout
// =============================================================================

export const SPACING = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10"
} as const;

export const RADIUS = {
    none: "rounded-none",
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full"
} as const;

export const SHADOW = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
} as const;

// =============================================================================
// Grid Layouts
// =============================================================================

export const GRID_COLS = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
} as const;

export const GAP_SIZES = {
    sm: "gap-2 md:gap-3",
    md: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8"
} as const;

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get theme colors safely with fallback
 */
export function getThemeClasses(variant: string | undefined): ThemeColors {
    if (!variant) return THEME_COLORS.slate;
    return (THEME_COLORS as Record<string, ThemeColors>)[variant] || THEME_COLORS.slate;
}

/**
 * Get text size class
 */
export function getTextSize(size: string | undefined): string {
    if (!size) return TEXT_SIZES.base;
    return (TEXT_SIZES as Record<string, string>)[size] || TEXT_SIZES.base;
}

/**
 * Get text alignment class
 */
export function getTextAlign(align: string | undefined): string {
    if (!align) return "";
    return (TEXT_ALIGN as Record<string, string>)[align] || "";
}

/**
 * Get spacing class
 */
export function getSpacing(size: string | undefined): string {
    if (!size) return SPACING.md;
    return (SPACING as Record<string, string>)[size] || SPACING.md;
}

/**
 * Get border radius class
 */
export function getRadius(size: string | undefined): string {
    if (!size) return RADIUS.xl;
    return (RADIUS as Record<string, string>)[size] || RADIUS.xl;
}

/**
 * Get grid columns class
 */
export function getGridCols(cols: number | undefined): string {
    if (!cols) return GRID_COLS[2];
    return GRID_COLS[cols as keyof typeof GRID_COLS] || GRID_COLS[2];
}

/**
 * Check if a theme is a gradient (has white text)
 */
export function isGradientTheme(variant: string | undefined): boolean {
    if (!variant) return false;
    const theme = getThemeClasses(variant);
    return theme.isGradient === true;
}
