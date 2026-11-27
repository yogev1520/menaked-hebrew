import { describe, expect, it } from "vitest";
import { MockNiqqudEngine } from "./mock-niqqud-engine";

describe("MockNiqqudEngine", () => {
  const engine = new MockNiqqudEngine();

  it("vocalizes known unambiguous words and preserves punctuation", async () => {
    await expect(engine.vocalize("שלום, עולם!")).resolves.toBe("שָׁלוֹם, עוֹלָם!");
  });

  it("uses the shared rich lexicon", async () => {
    await expect(engine.vocalize("מילה")).resolves.toBe("מִלָּה");
  });

  it("leaves ambiguous spellings unchanged", async () => {
    await expect(engine.vocalize("ספר מלך דרך חדש")).resolves.toBe("ספר מלך דרך חדש");
  });

  it("leaves unknown words unchanged", async () => {
    await expect(engine.vocalize("פוטוסינתזה")).resolves.toBe("פוטוסינתזה");
  });

  it("can preserve text that already contains niqqud", async () => {
    await expect(
      engine.vocalize("שָׁלוֹם", { preserveExistingNiqqud: true }),
    ).resolves.toBe("שָׁלוֹם");
  });
});
