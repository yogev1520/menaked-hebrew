/**
 * Platform-neutral contract for Hebrew vocalization engines.
 * Production adapters must document model, tokenizer, runtime and licenses.
 */
export interface NiqqudEngine {
  readonly id: string;

  vocalize(text: string, options?: NiqqudOptions): Promise<string>;
}

export interface NiqqudOptions {
  preserveExistingNiqqud?: boolean;
  mode?: "full" | "reduced";
}
