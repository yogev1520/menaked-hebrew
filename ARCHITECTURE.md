# Proposed Architecture

[עברית – ארכיטקטורה מוצעת](ARCHITECTURE_HE.md)

> Status: approved product direction and initial desktop implementation baseline. Model selection and mobile delivery routes remain open pending tests.

## Product architecture principle
Menaked uses a platform-independent core with platform-specific adapters. Desktop is the first delivery target; mobile feasibility is tested from day one (Android first, iPhone next). A shared core does not imply one extension package will run unchanged on every platform.

## Initial technology baseline
- **Language:** TypeScript.
- **Extension build framework:** WXT.
- **Desktop extension standard:** Manifest V3.
- **Initial browser targets:** Google Chrome and Opera Desktop, tested separately.
- **Initial permissions:** prefer `activeTab` and `scripting` for user-initiated page processing; avoid broad host permissions in the first prototype.
- **Engine contract:** replaceable, platform-neutral `NiqqudEngine`.
- **Prototype engine:** deterministic mock implementation; no real model in the first DOM-safety milestone.
- **Inference candidate:** ONNX Runtime Web, WASM baseline, WebGPU optional after compatibility testing.
- **Model:** not selected. Compare DictaBERT/Phonikud ONNX and Interscript heb-diac-plane-2.0 on the same corpus.

See [Initial Technical Decisions](TECHNICAL_DECISIONS.md) and [Niqqud Evaluation Protocol](docs/NIQQUD_EVALUATION_PROTOCOL.md).

## Proposed layers
### 1. Shared Menaked Core
- Hebrew text normalization and eligibility rules.
- Text segmentation and batching.
- Replaceable NiqqudEngine interface.
- Model/runtime adapter.
- Reversible transformation data model.
- Shared quality fixtures and regression tests.
- Platform-neutral processing state and configuration where practical.

### 2. Platform adapters
- **Desktop:** WXT-built Chrome/Opera extension lifecycle, permissions, toolbar action, content scripts, and page messaging.
- **Android:** choose after feasibility testing; candidates include a compatible mobile WebExtension and a dedicated Android app workflow.
- **iOS:** evaluate Safari Web Extension packaged with a containing iOS app, plus a companion-app workflow.

### 3. User interfaces
Each platform may need its own popup, settings, onboarding, permissions flow, and text-sharing interaction. Reuse design tokens and interaction patterns where practical, while respecting platform conventions.

## Desktop page-processing flow
1. User explicitly activates Menaked from the browser toolbar.
2. The platform adapter requests access to the active page using the least-privilege permission model.
3. A content script discovers eligible text nodes.
4. The filtering layer excludes editable fields, code, scripts, styles, templates, and unsuitable regions.
5. The shared core segments text and calls the selected engine adapter.
6. Results are applied to text nodes without rebuilding surrounding elements.
7. Exact original text is retained for restoration.
8. The user can toggle back to the original text.

## Engineering constraints
### DOM safety and reversibility
Prefer updating text-node values rather than rebuilding page elements. Never replace whole containers with HTML strings. Preserve event listeners and element identity. Keep an exact mapping between original and processed text; repeated activation must not add duplicate niqqud or overwrite the source.

### Dynamic pages
Mutation observation is a later milestone. Avoid feedback loops caused by Menaked's own changes.

### Hebrew quality
Niqqud is context-sensitive. Evaluate ambiguous words, names, quotations, punctuation, abbreviations, mixed-language text, and already-vocalized content. Never imply perfect accuracy.

### Inference context and security
Do not assume a large model can run inside an MV3 service worker. Validate an extension-owned inference context and bundle runtime/WASM assets in a way compatible with extension Content Security Policy. Do not load executable runtime code from a remote CDN.

### Privacy and network use
Local processing and offline use after any required model download are product goals, not yet verified properties. Any telemetry, remote inference, or network requests require explicit review and disclosure.

### Resource budgets
Measure model download size, persistent storage, cold start, warm latency, peak memory, throughput, CPU/GPU use, and page responsiveness on desktop and representative mobile devices.

## Open decisions
- Niqqud model, weights, tokenizer, data dependencies, licenses, and distribution.
- Final ONNX Runtime execution context and provider.
- Android delivery route and supported browser/device matrix.
- iOS Safari extension and containing-app structure.
- Shadow DOM, cross-origin iframe, and restricted-page behavior.
- Original-text storage and user-preference persistence.
- Performance thresholds, fallback behavior, and release support matrix.

See [MOBILE_STRATEGY.md](MOBILE_STRATEGY.md) for mobile feasibility and acceptance gates.
