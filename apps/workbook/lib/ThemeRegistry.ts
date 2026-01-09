// Theme Registry for Workbook Content
// Maps abstract variant names to concrete Tailwind classes

export const THEME_COLORS = {
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
    "info": {
        bg: "bg-sky-50",
        text: "text-sky-800",
        border: "border-sky-200",
        icon: "text-sky-500"
    },
    "warning": {
        bg: "bg-amber-50",
        text: "text-amber-900",
        border: "border-amber-200",
        icon: "text-amber-500"
    },
    "danger": {
        bg: "bg-red-50",
        text: "text-red-900",
        border: "border-red-200",
        icon: "text-red-500"
    },
    "success": {
        bg: "bg-emerald-50",
        text: "text-emerald-900",
        border: "border-emerald-200",
        icon: "text-emerald-500"
    },
    "gray": {
        bg: "bg-slate-50",
        text: "text-slate-900",
        border: "border-slate-200",
        icon: "text-slate-500"
    }
} as const;

export type ThemeVariant = keyof typeof THEME_COLORS;

export const TEXT_SIZES = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
} as const;

export const TEXT_ALIGN = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
} as const;

// Helper to get theme classes safely
export function getThemeClasses(variant: string | undefined): typeof THEME_COLORS["primary-blue"] {
    // @ts-ignore
    return THEME_COLORS[variant] || THEME_COLORS["gray"];
}
