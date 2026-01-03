import deepmerge from 'deepmerge';
import type { Dictionary } from './index';

export function mergeDictionaries(base: Dictionary, override: Dictionary): Dictionary {
    return deepmerge(base, override);
}
