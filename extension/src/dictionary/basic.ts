/**
 * Backward-compatible export for the page transformer.
 * The dictionary is derived from the rich lexicon and excludes ambiguous spellings.
 */
import { unambiguousDictionary } from "./lexicon";

export const basicDictionary: Readonly<Record<string, string>> = unambiguousDictionary;
