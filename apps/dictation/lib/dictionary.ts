import 'server-only';
import { type Locale, mergeDictionaries, type Dictionary } from '@repo/i18n';
import commonEn from '@repo/i18n/locales/en/common.json';
import commonHe from '@repo/i18n/locales/he/common.json';

const dictionaries = {
    en: async () => {
        const local = await import('../messages/en.json');
        return mergeDictionaries(commonEn, local.default);
    },
    he: async () => {
        const local = await import('../messages/he.json');
        return mergeDictionaries(commonHe, local.default);
    },
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return dictionaries[locale]?.() ?? dictionaries.en();
};
