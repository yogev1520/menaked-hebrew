# Mobile Strategy

[עברית – אסטרטגיית סלולר](MOBILE_STRATEGY_HE.md)

**Status:** Approved product direction; implementation routes remain subject to feasibility testing.

## Product decision
Menaked is designed as a cross-platform product from the beginning, not as a desktop-only extension with mobile postponed.

Agreed delivery order:
1. Desktop browser extension for Google Chrome and Opera.
2. Mobile feasibility work from the first development phase.
3. Android as the first mobile target.
4. iPhone as the next mobile target.

This is a product commitment and an architectural constraint. It does not mean one extension package will run unchanged on every platform.

## Shared-core strategy
Separate language processing and platform-independent logic from browser-specific integration.

Candidate shared components:
- Hebrew text normalization and eligibility rules.
- Text segmentation and batching.
- Replaceable NiqqudEngine interface.
- Model/runtime adapter.
- Reversible transformation data model.
- Shared quality fixtures and regression tests.
- Shared processing state and configuration where practical.

Platform-specific adapters:
- Desktop: Chrome and Opera extension APIs, content scripts, permissions, and toolbar integration.
- Android: evaluate compatible mobile WebExtensions (including Firefox for Android) and a dedicated Android app workflow.
- iPhone: evaluate a Safari Web Extension packaged with an iOS app, plus a companion-app workflow.

Reuse the core and tests. Expect platform-specific UI, permissions, packaging, and page-integration code where required.

## Platform constraints
- Chrome on Android does not support installing desktop Chrome extensions. Do not promise a Chrome Android extension.
- Firefox for Android supports a subset of WebExtensions; verify the APIs and permissions Menaked actually needs.
- iOS Safari supports Safari Web Extensions distributed through an iOS app, with a distinct packaging, permission, review, and installation flow.
- A PWA can provide mobile text-entry and reading, but generally cannot transform arbitrary pages in every browser tab.
- Mobile operating systems and browsers restrict background execution, storage, memory, downloads, and cross-app access. Model size and runtime may affect platform choices.

## Required feasibility work from day one
Before desktop architecture is treated as fixed, test:
1. Can the selected engine/runtime run in the target Android environment?
2. Can it run in a Safari Web Extension or its containing iOS app?
3. What are model download size, persistent storage, startup time, peak memory, and processing speed on representative mobile devices?
4. Can the extension/app process page text while preserving page structure and interactions?
5. What user gestures and permissions are required on each platform?
6. What workflow is needed through a companion app or share sheet where arbitrary-page access is unavailable?

Record test devices, OS/browser versions, model/runtime versions, measurements, and limitations.

## Mobile acceptance gates
A platform is not supported merely because the code compiles.

**Android**
- Documented target browser or app workflow.
- Successful local processing of representative Hebrew text.
- Measured download, startup, memory, and processing performance.
- Tested way to pass text to Menaked and return readable output.
- Documented limitations for inaccessible pages or contexts.

**iPhone**
- Working Safari Web Extension or clearly scoped companion-app workflow.
- Successful local processing of representative Hebrew text.
- Verified permission, packaging, and user-activation flow.
- Measured resource use and documented limitations.

## Safeguards
- Do not assume one extension package works unchanged on desktop, Android, and iOS.
- Do not make mobile support depend on cloud processing without an explicit privacy/product decision.
- Do not silently send page text to a remote service.
- Do not weaken text restoration, DOM safety, or language-quality requirements to claim broader compatibility.

## Delivery sequence
1. Desktop extension prototype and shared-core boundary.
2. Android feasibility spike in parallel with desktop prototype.
3. Android implementation decision based on measured results.
4. iPhone Safari Web Extension / companion-app feasibility spike.
5. iPhone implementation decision based on measured results.
6. Release support only for platforms that pass their acceptance gates.
