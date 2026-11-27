import { describe, expect, it } from "vitest";
import { getLexiconEntry, getUnambiguousVocalization } from "./lexicon";

describe("rich Hebrew lexicon", () => {
  it("returns a single reading for an unambiguous prototype entry", () => {
    expect(getUnambiguousVocalization("שלום")).toBe("שָׁלוֹם");
  });

  it("exposes all readings for an ambiguous spelling", () => {
    expect(getLexiconEntry("ספר")?.readings.map((reading) => reading.vocalized))
      .toEqual(["סֵפֶר", "סָפַר", "סַפָּר"]);
  });

  it.each(["ספר", "מלך", "דרך", "חדש"])(
    "does not choose an arbitrary reading for %s",
    (surface) => {
      expect(getUnambiguousVocalization(surface)).toBeUndefined();
    },
  );

  it("keeps existing basic vocabulary available", () => {
    expect(getUnambiguousVocalization("מילה")).toBe("מִלָּה");
    expect(getUnambiguousVocalization("עברית")).toBe("עִבְרִית");
  });

  it("normalizes lookup keys to NFC", () => {
    expect(getUnambiguousVocalization("שלום".normalize("NFD"))).toBe("שָׁלוֹם");
  });
});
