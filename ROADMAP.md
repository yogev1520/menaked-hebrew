# Development Roadmap

[עברית – מפת הדרכים](ROADMAP_HE.md)

This is an initial plan. Milestones may change as research and testing reveal new requirements.

## Phase 0 — Project foundation
- [x] Create the public GitHub repository.
- [x] Establish Hebrew and English documentation.
- [x] Agree on cross-platform direction: desktop first, mobile feasibility from day one, Android before iPhone.
- [ ] Select and document the project license.
- [ ] Open initial GitHub issues for research questions and decisions.

**Progress checkpoint (26 November 2026):** Preliminary engine research is documented in [Engine Research](ENGINE_RESEARCH.md). No engine has been selected; full license review and independent comparative tests remain open.

## Phase 1 — Requirements and architecture validation
- [x] Set initial desktop targets: Google Chrome and Opera Desktop.
- [x] Define shared-core / platform-adapter architecture as the target design.
- [x] Document mobile strategy and platform acceptance gates.
- [ ] Define eligible Hebrew text and excluded page regions.
- [ ] Define minimum desktop prototype scope and measurable success criteria.
- [ ] Define initial Android and iPhone feasibility test matrix.
- [ ] Validate browser APIs, permissions, packaging, and runtime constraints before locking implementation choices.

## Phase 2 — Engine evaluation and mobile feasibility
- [ ] Build a representative modern-Hebrew evaluation corpus: ambiguous words, names, numbers, abbreviations, slang, mixed-language, and already-vocalized content.
- [ ] Compare at least two candidate engines on the same corpus and protocol.
- [ ] Verify model, code, tokenizer, and runtime licenses and redistribution conditions.
- [ ] Test ONNX Runtime Web with WASM as an initial candidate; evaluate WebGPU only where supported.
- [ ] Measure model size, download, storage, startup, memory, throughput, and quality on desktop.
- [ ] Run an Android proof of feasibility in parallel with desktop prototyping.
- [ ] Record an iPhone Safari Web Extension / containing-app feasibility plan and test its critical assumptions.

## Phase 3 — Minimal desktop extension prototype
- [ ] Create extension manifest and toolbar interface.
- [ ] Implement safe discovery of eligible text nodes.
- [ ] Integrate replaceable niqqud-engine interface.
- [ ] Add enable/disable interaction.
- [ ] Preserve original text for restoration.
- [ ] Verify shared-core behavior in Chrome and Opera Desktop.

## Phase 4 — Page integrity, dynamic content, and Android decision
- [ ] Preserve DOM structure, styling, links, controls, and accessibility semantics.
- [ ] Handle dynamically inserted content without repeated processing.
- [ ] Avoid modifying input fields, editable content, scripts, styles, and code samples.
- [ ] Test long pages, complex websites, RTL layout, and mixed Hebrew/Latin text.
- [ ] Decide Android delivery route from measured results; do not claim support before acceptance gates pass.

## Phase 5 — iPhone feasibility and platform integration
- [ ] Prototype Safari Web Extension packaging and its containing iOS app, or document a viable companion-app workflow.
- [ ] Measure model/runtime feasibility and permission flow on representative iPhones.
- [ ] Decide the supported iPhone workflow based on test results.
- [ ] Keep shared-core behavior and language-quality tests aligned across platforms.

## Phase 6 — Quality, privacy, and release
- [ ] Complete niqqud quality, DOM preservation, restoration, performance, accessibility, and compatibility tests.
- [ ] Verify network activity and publish an implementation-specific privacy policy.
- [ ] Document the supported browser, OS, and device matrix.
- [ ] Prepare user documentation and release notes.
- [ ] Publish only on platforms that pass their documented release gates.

## Release criteria
A release on any platform must:
1. Apply niqqud to eligible Hebrew text reliably enough for documented use cases.
2. Preserve page structure and core interactions where page processing is supported.
3. Restore original text without loss.
4. Explain clearly what is processed locally and what, if anything, leaves the device.
5. Meet documented performance and compatibility expectations for that platform.

Mobile support is an explicit project goal, but it must be verified per platform and workflow rather than inferred from shared source code.
