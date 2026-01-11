export * from "./global";

// Chapter questions are imported dynamically in pages via:
// import(`@/lib/constants/${subjectId}_${chapterId}`)
// Re-exporting individual question arrays for direct use when needed
export {
  CHAPTER_QUESTIONS as CHAPTER1_QUESTIONS,
} from "./science_chapter1";

export {
  CHAPTER_QUESTIONS as CHAPTER2_QUESTIONS,
} from "./science_chapter2";

export {
  CHAPTER_QUESTIONS as CHAPTER3_QUESTIONS,
} from "./science_chapter3";

export {
  CHAPTER_QUESTIONS as CHAPTER4_QUESTIONS,
} from "./science_chapter4";

