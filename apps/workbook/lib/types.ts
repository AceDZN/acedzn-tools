export enum ChapterId {
  Chapter1 = "chapter1",
  Chapter2 = "chapter2"
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

  // Chapter 2: Body and Matter (Existing)
  Intro = "intro",
  Volume = "volume",
  MassWeight = "mass-weight",
  Density = "density",

  // Shared
  Summary = "summary"
}

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

export type ContentBlockType =
  | "text"
  | "hero"
  | "grid_cards"
  | "quiz"
  | "simulation"
  | "enrichment"
  | "scientific_table"
  | "introduction_block"
  | "section"
  | "h3"
  // Primitives (can be nested inside other blocks)
  | "icon_flow"
  | "p"
  | "highlight_box";

export interface BaseContentBlock {
  type: ContentBlockType;
  id?: string;
}

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

export interface SectionBlock extends BaseContentBlock {
  type: "section";
  className?: string;
  ClassName?: string; // Alias for className (used in some JSON files)
  content: ContentBlock[];
}

export interface HeadingBlock extends BaseContentBlock {
  type: "h3";
  className?: string;
  icon?: string;
  content: string;
}

// Primitive blocks - can be nested inside other components
export interface IconFlowBlock extends BaseContentBlock {
  type: "icon_flow";
  icons: string[]; // Array of icon names, will be rendered with arrows between them
  size?: "sm" | "md" | "lg";
  direction?: "left" | "right";
}

export interface ParagraphBlock extends BaseContentBlock {
  type: "p";
  content: string; // Can include HTML for bold, etc.
  size?: "xs" | "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  className?: string;
}

export interface HighlightBoxBlock extends BaseContentBlock {
  type: "highlight_box";
  variant?: "info" | "example" | "warning" | "default";
  className?: string;
  content: ContentBlock[]; // Can contain nested blocks
}

export interface IntroductionBlock extends BaseContentBlock {
  type: "introduction_block";
  title: string;
  icon?: string;
  theme?:
    | "primary-orange"
    | "primary-blue"
    | "primary-purple"
    | "primary-emerald";
  content: InnerContentBlock[];
}

export interface TextBlock extends BaseContentBlock {
  type: "text";
  content: string; // HTML allowed
  className?: string; // Optional tailwind classes
}

export interface HeroBlock extends BaseContentBlock {
  type: "hero";
  title: string;
  subtitle?: string;
}

export type GridCardVariant =
  | "blue"
  | "blue-gradient"
  | "indigo"
  | "indigo-gradient"
  | "emerald"
  | "slate"
  | "slate-gradient"
  | "amber"
  | "orange"
  | "orange-gradient"
  | "purple"
  | "purple-gradient"
  | "pink"
  | "pink-gradient"
  | "cyan"
  | "teal";

export interface GridCard {
  title: string;
  icon?: string;
  content: string | ContentBlock[]; // HTML string OR structured content blocks
  variant?: GridCardVariant;
  className?: string;
}

export interface GridCardsBlock extends BaseContentBlock {
  type: "grid_cards";
  cards: GridCard[];
  cols?: 1 | 2 | 3 | 4;
}

export interface QuizBlock extends BaseContentBlock {
  type: "quiz";
  questions?: Question[];
}

export interface SimulationBlock extends BaseContentBlock {
  type: "simulation";
  componentName: string; // 'VolumeSimulation', etc.
}

export interface EnrichmentBlock extends BaseContentBlock {
  type: "enrichment";
  title: string;
  icon: string;
  content: string;
}

export interface ScientificTableBlock extends BaseContentBlock {
  type: "scientific_table";
  title: string;
  headers: string[];
  rows: any[];
  variant?: "emerald" | "blue";
  note?: string;
}

export type ContentBlock =
  | TextBlock
  | HeroBlock
  | GridCardsBlock
  | QuizBlock
  | SimulationBlock
  | EnrichmentBlock
  | ScientificTableBlock
  | IntroductionBlock
  | SectionBlock
  | HeadingBlock
  // Primitives
  | IconFlowBlock
  | ParagraphBlock
  | HighlightBoxBlock;

export interface DynamicModuleData {
  id: string;
  title: string;
  metadata?: {
    description: string;
    keywords?: string[];
  };
  blocks: ContentBlock[];
}
