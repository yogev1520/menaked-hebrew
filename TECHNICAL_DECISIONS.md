# Initial Technical Decisions

[עברית – החלטות טכנולוגיות ראשוניות](TECHNICAL_DECISIONS_HE.md)

**Date:** 26 November 2026  
**Status:** Initial implementation baseline. Decisions marked as provisional must be validated by the prototype and feasibility tests.

## Product constraints
- Public, community-visible project; maintainers retain review and merge authority.
- Desktop first: Google Chrome and Opera Desktop.
- Mobile feasibility from day one: Android first, iPhone next.
- Local processing is the target. No page text may be sent to a remote service without a separate, explicit product and privacy decision.
- Preserve page structure and provide exact restoration of original text.

## Decisions for the first desktop prototype

| Area | Decision | Rationale / boundary |
|---|---|---|
| Language | TypeScript | Shared types and logic across extension contexts and future platform adapters. |
| Extension build framework | WXT | TypeScript-first extension framework with Chromium and other browser targets. It reduces build/configuration work but does not remove the need to test Chrome and Opera separately. |
| Extension standard | Manifest V3 | Current target for Chrome and Chromium-based desktop browsers. |
| Initial permission model | `activeTab` + `scripting` only where needed | Inject or activate processing only after an explicit user action; avoid broad `<all_urls>` host access in the first prototype. |
| UI | Minimal extension popup/action | One clear action to apply the mock transformation and one to restore the original. |
| Page processing | Text-node traversal and reversible text-node updates | Do not replace containers with HTML or rebuild page elements. |
| Engine boundary | Platform-neutral `NiqqudEngine` interface | Prototype with a deterministic mock engine first; model integration remains replaceable. |
| Runtime candidate | ONNX Runtime Web | Evaluate browser-side inference; not yet approved for production. |
| Initial execution provider | WASM | Establish a portable CPU baseline. Evaluate WebGPU as an optional optimization after correctness and compatibility checks. |
| Model choice | Not selected | Compare DictaBERT/Phonikud ONNX with Interscript heb-diac-plane-2.0 on the same Menaked corpus. |

## Important implementation constraints

1. Do not run large-model inference in the extension service worker by default. MV3 service workers are event-driven and have runtime restrictions; validate an extension-owned inference context (for example, an extension page/worker or a platform-specific offscreen context) before choosing the final design.
2. Bundle runtime assets locally where required by extension Content Security Policy. Do not rely on a remote CDN for executable code or WASM binaries.
3. Keep the model outside the initial prototype. A mock engine allows us to validate DOM safety, state management, restoration, and browser compatibility independently of model quality.
4. Never overwrite the original text with a transformed version as the only copy. Store exact originals per text node and make repeated activation idempotent.
5. Exclude editable controls, `contenteditable`, scripts, styles, templates, code/preformatted regions, and extension-owned UI.
6. Treat cross-origin iframes, shadow DOM, browser-internal pages, and dynamically inserted content as explicit later test cases. Do not silently claim support.

## Niqqud engine evaluation decision

The first comparison will include:
- **DictaBERT-large-char-menaked through an ONNX implementation** — strong candidate for modern Hebrew prose, but the published full model is about 1.22GB and the model card explicitly excludes Biblical, Rabbinic, premodern Hebrew, and poetry. Its handling of matres lectionis must be tested carefully.
- **Interscript heb-diac-plane-2.0** — ONNX INT8 artifact listed at about 416MB; model card reports 8.18% DER on its Nakdimon test protocol and describes preservation of supplied diacritics. These are model-card claims, not Menaked test results.
- **Phonikud / dicta-onnx** may be evaluated as an implementation path for DictaBERT, but must not be treated as an independent model unless its underlying weights and processing differ.

No model is selected until the same versioned test corpus and protocol have been used for every candidate. Do not compare DER values from different datasets or protocols.

## Quality and performance gates

Measure at minimum:
- Diacritic Error Rate (DER), with a documented alignment and normalization policy.
- Word-level and sentence-level exact match.
- Error rate on ambiguous words, names, numbers, abbreviations, slang, mixed Hebrew/Latin, and existing niqqud.
- Preservation of whitespace, punctuation, numerals, and existing user-supplied marks.
- Model download size, cold-start time, warm latency, throughput, peak memory, CPU/GPU use, and page responsiveness.
- Offline behavior after assets are cached.
- Chrome and Opera compatibility; Android and iPhone feasibility measured separately.

## Sources

- WXT framework and browser targets: https://wxt.dev/ and https://wxt.dev/guide/introduction.html
- Chrome activeTab + scripting pattern: https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab
- MDN activeTab permission: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission
- ONNX Runtime Web supported browsers/providers: https://onnxruntime.ai/docs/get-started/with-javascript/web.html
- ONNX Runtime Web deployment/CSP considerations: https://onnxruntime.ai/docs/tutorials/web/deploy.html
- DictaBERT model card: https://huggingface.co/dicta-il/dictabert-large-char-menaked
- Interscript model card: https://huggingface.co/Interscript/heb-diac-plane-2.0
