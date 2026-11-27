import type { NiqqudEngine, NiqqudOptions } from "./niqqud-engine";
import { getUnambiguousVocalization } from "../dictionary/lexicon";

/**
 * Deterministic prototype adapter over the shared rich lexicon.
 * Ambiguous spellings are left unchanged; this is not a production model.
 */
export class MockNiqqudEngine implements NiqqudEngine {
  readonly id = "mock-rich-lexicon-v1";

  async vocalize(text: string, options: NiqqudOptions = {}): Promise<string> {
    if (options.preserveExistingNiqqud && /[\u05B0-\u05C7]/.test(text)) {
      return text;
    }

    return text.replace(/[\u05D0-\u05EA]+/g, (word) =>
      getUnambiguousVocalization(word) ?? word,
    );
  }
}
