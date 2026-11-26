import { describe, expect, it } from "vitest";
import { MockNiqqudEngine } from "./mock-niqqud-engine";

describe("MockNiqqudEngine", () => {
  const engine = new MockNiqqudEngine();

  it("vocalizes known sample words and preserves punctuation", async () => {
    await expect(engine.vocalize("שלום, עולם!")).resolves.toBe("שָׁלוֹם, עוֹלָם!");
  });

  it("leaves unknown words unchanged", async () => {
    await expect(engine.vocalize("מילה לא מוכרת")).resolves.toBe("מילה לא מוכרת");
  });

  it("can preserve text that already contains niqqud", async () => {
    await expect(
      engine.vocalize("שָׁלוֹם", { preserveExistingNiqqud: true }),
    ).resolves.toBe("שָׁלוֹם");
  });
});
