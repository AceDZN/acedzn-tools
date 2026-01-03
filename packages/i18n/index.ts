export const SUPPORTED_LOCALES = ['en', 'he'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface Dictionary {
    [key: string]: string | Dictionary;
}

export * from './utils';
