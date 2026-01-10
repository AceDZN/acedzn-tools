/**
 * Type definitions for Workbook content system.
 *
 * Content is structured as blocks that can be nested recursively.
 * Each block has a type and type-specific properties.
 */

import { ThemeVariant } from "./ThemeRegistry";

// =============================================================================
// Identifiers
// =============================================================================

export enum ChapterId {
    Chapter1 = "chapter1",
    Chapter2 = "chapter2",
    Chapter3 = "chapter3",
    Chapter4 = "chapter4"
}

export enum ModuleId {
    // Chapter 1: Introduction to Matter & Particle Model
    MatterIntro = "matter-intro",
    ParticleModel = "particle-model",
    Compression = "compression",
    Diffusion = "diffusion",
    SurfaceTension = "surface-tension",
    VolumeBasics = "volume-basics",
    PhaseTransitions = "phase-transitions",
    EngineeringMaterials = "engineering-materials",

    // Chapter 2: Body and Matter
    Intro = "intro",
    Volume = "volume",
    MassWeight = "mass-weight",
    Density = "density",
    AirComposition = "air-composition",
    Sublimation = "sublimation",

    // Chapter 3: Physical Measurements
    Chapter3Intro = "intro",
    VolumeMeasurement = "volume-measurement",
    DisplacementMethod = "displacement-method",
    MassIntro = "mass-intro",
    MassVsWeight = "mass-vs-weight",
    AirHasMass = "air-has-mass",
    DensityDeep = "density-deep",
    Buoyancy = "buoyancy",
    DensityTower = "density-tower",

    // Chapter 4: Energy
    EnergyIntro = "intro",
    KineticEnergy = "kinetic-energy",
    PotentialEnergy = "potential-energy",
    ElasticEnergy = "elastic-energy",
    ElectricalEnergy = "electrical-energy",
    ChemicalEnergy = "chemical-energy",
    ThermalEnergy = "thermal-energy",
    EnergyTransformations = "energy-transformations",
    RubberBandCaseStudy = "rubber-band-case-study",
    ConservationLaw = "conservation-law",

    // Shared
    Summary = "summary"
}

// =============================================================================
// Quiz & Learning Types
// =============================================================================

export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category?: ModuleId;
}

export interface ModuleData {
    id: ModuleId;
    title: string;
    description: string;
    icon: string;
}

export interface Chapter {
    id: ChapterId;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    modules: ModuleData[];
}

export interface Subject {
    id: string;
    title: string;
    description: string;
    icon: string;
    chapters: Chapter[];
}

export interface LearningState {
    currentChapter: ChapterId | null;
    currentModule: ModuleId;
    completedModules: Record<ChapterId, ModuleId[]>;
    quizScores: Record<string, number>;
    examActive: boolean;
}

// =============================================================================
// Block Types
// =============================================================================

/**
 * All possible block type identifiers.
 * New block types should be added here.
 */
export type ContentBlockType =
    // Primitives
    | "p"
    | "paragraph"
    | "span"
    | "list"
    // Containers
    | "box"
    | "card"
    | "section"
    | "callout"
    | "highlight_box"
    // Grids
    | "grid_cards"
    // Content
    | "text"
    | "hero"
    | "h3"
    | "heading"
    | "introduction_block"
    // Case-specific educational blocks
    | "examples_box"
    | "feature_grid"
    | "thinking_question"
    | "concept_explainer"
    | "comparison_cards"
    | "tip_box"
    | "method_cards"
    // Interactive
    | "simulation"
    | "quiz"
    | "enrichment"
    | "scientific_table"
    // Decorative
    | "icon_flow";

// =============================================================================
// Base Block
// =============================================================================

export interface BaseContentBlock {
    type: ContentBlockType;
    id?: string;
}

// =============================================================================
// Primitive Blocks
// =============================================================================

/** Paragraph block - renders text with merge tag support */
export interface ParagraphBlock extends BaseContentBlock {
    type: "p" | "paragraph";
    content: string | ContentBlock[];
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "left" | "center" | "right";
}

/** Span block - inline styled text (usually internal, from merge tag parser) */
export interface SpanBlock extends BaseContentBlock {
    type: "span";
    content: string;
    style?: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
        code?: boolean;
        color?: string;
        highlight?: string;
    };
}

/** List block - ordered or unordered lists */
export interface ListBlock extends BaseContentBlock {
    type: "list";
    listType?: "ordered" | "unordered";
    items: string[];
    size?: string;
}

// =============================================================================
// Container Blocks
// =============================================================================

/** Box block - flexible themed container */
export interface BoxBlock extends BaseContentBlock {
    type: "box";
    variant?: ThemeVariant | string;
    title?: string;
    icon?: string;
    content: string | ContentBlock[];
    padding?: "xs" | "sm" | "md" | "lg" | "xl";
    radius?: "sm" | "md" | "lg" | "xl";
    border?: boolean;
    shadow?: boolean;
    align?: "left" | "center" | "right";
}

/** Card block - themed card with icon/title/content */
export interface CardBlock extends BaseContentBlock {
    type: "card";
    title: string;
    variant?: ThemeVariant | string;
    icon?: string;
    subtitle?: string;
    content?: string | ContentBlock[];
    layout?: "default" | "centered" | "compact";
}

/** Section block - generic grouping wrapper */
export interface SectionBlock extends BaseContentBlock {
    type: "section";
    className?: string;
    ClassName?: string; // Legacy alias
    content: ContentBlock[];
}

/** Callout block - styled callout/note container */
export interface CalloutBlock extends BaseContentBlock {
    type: "callout";
    variant?: ThemeVariant | string;
    title?: string;
    icon?: string;
    content: string | ContentBlock[];
}

/** Highlight box block - for nested emphasis */
export interface HighlightBoxBlock extends BaseContentBlock {
    type: "highlight_box";
    variant?: "default" | "info" | "example" | "warning";
    content: ContentBlock[];
    className?: string;
}

// =============================================================================
// Grid Blocks
// =============================================================================

/** Single card within a grid */
export interface GridCard {
    title: string;
    variant?: ThemeVariant | string;
    icon?: string;
    subtitle?: string;
    content?: string | ContentBlock[];
}

/** Grid cards block - responsive card grid */
export interface GridCardsBlock extends BaseContentBlock {
    type: "grid_cards";
    cards: GridCard[];
    cols?: 1 | 2 | 3 | 4;
    gap?: "sm" | "md" | "lg";
}

// =============================================================================
// Content Blocks
// =============================================================================

/** Text block - simple text rendering (legacy, prefer p/box) */
export interface TextBlock extends BaseContentBlock {
    type: "text";
    content: string;
    size?: string;
    align?: string;
}

/** Hero block - page hero section */
export interface HeroBlock extends BaseContentBlock {
    type: "hero";
    title: string;
    subtitle?: string;
}

/** Heading block - section headings */
export interface HeadingBlock extends BaseContentBlock {
    type: "h3" | "heading";
    content: string;
    icon?: string;
    className?: string;
}

/** Introduction block - themed intro section with inner content */
export interface IntroductionBlock extends BaseContentBlock {
    type: "introduction_block";
    title: string;
    icon?: string;
    theme?: ThemeVariant | string;
    content: InnerContentBlock[];
}

// Inner content types for IntroductionBlock
export type InnerContentType = "text" | "list_items" | "cards";

export interface InnerTextBlock {
    type: "text";
    content: string;
    size?: "sm" | "md" | "lg";
}

export interface InnerListItem {
    title?: string;
    content: InnerTextBlock[];
}

export interface InnerListBlock {
    type: "list_items";
    theme?: "circular" | "numeric";
    content: InnerListItem[];
}

export interface InnerCardItem {
    title: string;
    icon?: string;
    content: InnerTextBlock[];
}

export interface InnerCardsBlock {
    type: "cards";
    content: InnerCardItem[];
}

export type InnerContentBlock =
    | InnerTextBlock
    | InnerListBlock
    | InnerCardsBlock;

// =============================================================================
// Interactive Blocks
// =============================================================================

/** Simulation block - embeds interactive simulation component */
export interface SimulationBlock extends BaseContentBlock {
    type: "simulation";
    componentName: string;
}

/** Quiz block - quiz questions */
export interface QuizBlock extends BaseContentBlock {
    type: "quiz";
    questions?: Question[];
}

/** Enrichment block - expandable "learn more" section */
export interface EnrichmentBlock extends BaseContentBlock {
    type: "enrichment";
    title: string;
    icon: string;
    content: string | ContentBlock[];
}

/** Scientific table block - data tables */
export interface ScientificTableBlock extends BaseContentBlock {
    type: "scientific_table";
    title: string;
    headers: string[];
    rows: (string | number)[][];
    variant?: "emerald" | "blue";
    note?: string;
}

// =============================================================================
// Decorative Blocks
// =============================================================================

/** Icon flow block - icons with arrows between them */
export interface IconFlowBlock extends BaseContentBlock {
    type: "icon_flow";
    icons: string[];
    size?: "sm" | "md" | "lg";
    direction?: "left" | "right";
}

// =============================================================================
// Case-Specific Educational Blocks
// =============================================================================

/** Example item for ExamplesBox */
export interface ExampleItem {
    title: string;
    content: string; // supports merge tags
}

/** ExamplesBox block - gradient container with grid of example cards */
export interface ExamplesBoxBlock extends BaseContentBlock {
    type: "examples_box";
    title: string;
    icon?: string;
    variant?: "amber" | "emerald" | "blue" | "purple" | "cyan";
    examples: ExampleItem[];
    cols?: 2 | 3 | 4;
}

/** Feature item for FeatureGrid */
export interface FeatureItem {
    title: string;
    icon: string;
    description: string; // supports merge tags
}

/** FeatureGrid block - centered icon cards for features/characteristics */
export interface FeatureGridBlock extends BaseContentBlock {
    type: "feature_grid";
    title?: string;
    variant?: "emerald" | "blue" | "purple" | "amber" | "cyan";
    features: FeatureItem[];
    cols?: 2 | 3 | 4;
}

/** ThinkingQuestion block - Q&A box with question and answer */
export interface ThinkingQuestionBlock extends BaseContentBlock {
    type: "thinking_question";
    question: string; // supports merge tags
    answer: string; // supports merge tags
    note?: string; // optional additional note
}

/** ConceptExplainer block - themed explanation box with highlight */
export interface ConceptExplainerBlock extends BaseContentBlock {
    type: "concept_explainer";
    title: string;
    icon?: string;
    variant?: "purple" | "cyan" | "emerald" | "amber" | "blue";
    intro: string; // supports merge tags
    explanation: string; // supports merge tags - goes in highlight box
    formula?: string; // optional formula to highlight
    conclusion?: string; // optional conclusion text
    illustration?: string; // optional simulation component name to render
}

/** Comparison item for ComparisonCards */
export interface ComparisonItem {
    title: string;
    icon?: string;
    content: string; // supports merge tags
    example?: string;
}

/** ComparisonCards block - side-by-side comparison with gradient background */
export interface ComparisonCardsBlock extends BaseContentBlock {
    type: "comparison_cards";
    title: string;
    icon?: string;
    variant?: "blue" | "purple" | "emerald" | "amber";
    items: ComparisonItem[];
    footer?: string; // optional footer note
}

/** TipBox block - warning/tip/note boxes */
export interface TipBoxBlock extends BaseContentBlock {
    type: "tip_box";
    title: string;
    icon?: string;
    variant?: "warning" | "info" | "tip" | "note";
    content: string; // supports merge tags
    steps?: string[]; // optional numbered steps
}

/** Method item for MethodCards */
export interface MethodItem {
    title: string;
    icon: string;
    subtitle?: string;
    variant: "emerald" | "blue" | "amber" | "purple" | "cyan" | "orange";
    details: string[]; // Array of detail lines (supports merge tags)
}

/** MethodCards block - grid of method/technique cards with gradient backgrounds */
export interface MethodCardsBlock extends BaseContentBlock {
    type: "method_cards";
    title?: string;
    icon?: string;
    methods: MethodItem[];
    cols?: 2 | 3 | 4;
}

// =============================================================================
// Union Type
// =============================================================================

/**
 * Union of all content block types.
 * Used for recursive content rendering.
 */
export type ContentBlock =
    // Primitives
    | ParagraphBlock
    | SpanBlock
    | ListBlock
    // Containers
    | BoxBlock
    | CardBlock
    | SectionBlock
    | CalloutBlock
    | HighlightBoxBlock
    // Grids
    | GridCardsBlock
    // Content
    | TextBlock
    | HeroBlock
    | HeadingBlock
    | IntroductionBlock
    // Case-specific educational blocks
    | ExamplesBoxBlock
    | FeatureGridBlock
    | ThinkingQuestionBlock
    | ConceptExplainerBlock
    | ComparisonCardsBlock
    | TipBoxBlock
    | MethodCardsBlock
    // Interactive
    | SimulationBlock
    | QuizBlock
    | EnrichmentBlock
    | ScientificTableBlock
    // Decorative
    | IconFlowBlock;

// =============================================================================
// Module Data Types
// =============================================================================

/** Dynamic module data structure (loaded from JSON) */
export interface DynamicModuleData {
    id: string;
    title: string;
    metadata?: {
        description: string;
        keywords?: string[];
    };
    blocks: ContentBlock[];
}
