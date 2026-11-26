# Proposed Architecture

[עברית – ארכיטקטורה מוצעת](ARCHITECTURE_HE.md)

> Status: proposal for investigation and prototyping. Platform strategy is approved; implementation details and model/runtime choices are not final.

## Product architecture principle
Menaked will have a platform-independent core and platform-specific adapters. The desktop extension is the first delivery target, while mobile feasibility is tested from the first development phase (Android first, iPhone next). Do not assume one extension package or browser API works unchanged across all platforms.

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
- **Desktop extension:** Chrome and Opera extension lifecycle, permissions, toolbar action, content scripts, and page messaging.
- **Android:** select after feasibility testing; candidates include a compatible mobile WebExtension and a dedicated Android app workflow.
- **iOS:** Safari Web Extension packaged with a containing iOS app, with a companion-app workflow evaluated as a fallback or complement.

### 3. User interfaces
Each platform may need its own popup, settings, onboarding, permissions flow, and text-sharing interaction. Reuse design tokens and interaction patterns where practical, but respect platform conventions.

## Desktop page-processing flow
1. User activates Menaked from the browser toolbar.
2. The platform adapter requests access to the active page under declared permissions.
3. A content script discovers eligible text nodes.
4. The filtering layer excludes editable fields, code, scripts, styles, and unsuitable regions.
5. The shared core segments text and sends it to the selected engine adapter.
6. Results are applied to text nodes without rebuilding surrounding elements.
7. Exact original text is retained for restoration.
8. The user can toggle back to the original text.

## Mobile flow
The mobile adapter must use capabilities actually available on the selected platform. Depending on restrictions, the user may process a page through a WebExtension, Safari Web Extension, share sheet, or dedicated app. The exact flow remains open until tested.

## Engineering constraints
### DOM safety and reversibility
Prefer updating text-node values rather than rebuilding page elements. Never replace whole containers with HTML strings. Preserve event listeners and element identity. Keep an exact mapping between original and processed text; repeated activation must not add duplicate niqqud or overwrite the source.

### Dynamic pages
A later iteration may observe DOM mutations and process newly inserted text nodes. Avoid feedback loops caused by Menaked's own changes.

### Hebrew quality
Niqqud is context-sensitive. Evaluate ambiguous words, names, quotations, punctuation, abbreviations, mixed-language text, and already-vocalized content. Never imply perfect accuracy.

### Runtime portability
ONNX Runtime Web is a candidate, not a commitment. Verify model format, tokenizer/preprocessing requirements, execution providers, browser-extension constraints, and mobile support separately. Keep the engine behind an adapter so the model or runtime can be replaced.

### Privacy and network use
The target is local processing, including offline use after any required one-time model download. This is a design goal, not a verified property. Any telemetry, remote inference, or network requests require explicit review and disclosure.

### Resource budgets
Measure model download size, persistent storage, startup latency, peak memory, throughput, CPU/GPU usage, and page responsiveness on desktop and representative mobile devices.

## Open technical decisions
- Exact shared-core language/build structure and package boundaries.
- Desktop manifest version and required permissions.
- Android delivery route and supported browser/device matrix.
- iOS Safari extension and containing-app structure.
- Niqqud model, data sources, licenses, and distribution.
- Browser/mobile inference runtime and model format.
- Shadow DOM, iframe, and restricted-page behavior.
- Original-text storage and user-preference persistence.
- Performance thresholds, fallback behavior, and release support matrix.

See [MOBILE_STRATEGY.md](MOBILE_STRATEGY.md) for mobile feasibility and acceptance gates.
