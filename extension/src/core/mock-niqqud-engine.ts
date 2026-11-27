import type { NiqqudEngine, NiqqudOptions } from "./niqqud-engine";
import { basicDictionary } from "../dictionary/basic";

/**
 * Small deterministic adapter over the shared basic dictionary.
 * This is for UI and integration tests only, not a production niqqud model.
 */
export class MockNiqqudEngine implements NiqqudEngine {
  readonly id = "mock-dictionary-v1";

  private readonly dictionary = basicDictionary;

  async vocalize(text: string, options: NiqqudOptions = {}): Promise<string> {
    if (options.preserveExistingNiqqud && /[\u05B0-\u05C7]/.test(text)) {
      return text;
    }

    return text.replace(/[\u05D0-\u05EA]+/g, (word) => this.dictionary[word] ?? word);
  }
}
