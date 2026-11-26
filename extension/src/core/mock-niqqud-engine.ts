import type { NiqqudEngine, NiqqudOptions } from "./niqqud-engine";

/**
 * Small deterministic dictionary for UI and integration tests only.
 * This is intentionally not presented as an actual Hebrew niqqud model.
 */
export class MockNiqqudEngine implements NiqqudEngine {
  readonly id = "mock-dictionary-v1";

  private readonly dictionary: Readonly<Record<string, string>> = {
    "שלום": "שָׁלוֹם",
    "עולם": "עוֹלָם",
    "עברית": "עִבְרִית",
    "מנקד": "מְנַקֵּד",
    "ספר": "סֵפֶר",
    "ילדים": "יְלָדִים",
  };

  async vocalize(text: string, options: NiqqudOptions = {}): Promise<string> {
    if (options.preserveExistingNiqqud && /[\u05B0-\u05C7]/.test(text)) {
      return text;
    }

    return text.replace(/[\u05D0-\u05EA]+/g, (word) => this.dictionary[word] ?? word);
  }
}
