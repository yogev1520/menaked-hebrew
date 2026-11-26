# Development Roadmap

[עברית – מפת הדרכים](ROADMAP_HE.md)

This is an initial plan. Milestones may change as research and testing reveal new requirements.

## Phase 0 — Project foundation
- [x] Create the GitHub repository.
- [x] Establish Hebrew and English documentation.
- [x] Agree on cross-platform direction: desktop first, mobile feasibility from day one, Android before iPhone.
- [x] Choose a public, community-participation model with maintainer-controlled code review and merging.
- [x] Document contribution and security expectations.
- [ ] Configure and verify main-branch protection and pull-request review requirements in GitHub.
- [ ] Select and document the project license before accepting code or other contributions for distribution.

## Phase 1 — Requirements and architecture validation
- [x] Set initial desktop targets: Google Chrome and Opera Desktop.
- [x] Define shared-core / platform-adapter architecture.
- [x] Document mobile strategy and platform acceptance gates.
- [x] Select initial desktop development baseline: TypeScript, WXT, Manifest V3.
- [x] Define least-privilege permission direction for the prototype (user-initiated active-tab access).
- [x] Define replaceable NiqqudEngine boundary and mock-engine-first strategy.
- [x] Document initial ONNX Runtime Web/WASM evaluation path without committing to production inference.
- [ ] Define eligible Hebrew text and excluded page regions.
- [ ] Define minimum desktop prototype scope and measurable success criteria.
- [ ] Define initial Android and iPhone feasibility test matrix.

## Phase 2 — Engine evaluation and mobile feasibility
- [ ] Build a representative modern-Hebrew evaluation corpus: ambiguous words, names, numbers, abbreviations, slang, mixed-language, and already-vocalized content.
- [ ] Compare at least two candidate engines on the same corpus and protocol.
- [ ] Verify model, code, tokenizer, data, and runtime licenses and redistribution conditions.
- [ ] Test ONNX Runtime Web with WASM; evaluate WebGPU only where supported.
- [ ] Measure model size, download, storage, startup, memory, throughput, and quality on desktop.
- [ ] Run an Android proof of feasibility in parallel with desktop prototyping.
- [ ] Record and test the critical assumptions of the iPhone Safari Web Extension / containing-app path.

## Phase 3 — Minimal desktop extension prototype
- [ ] Scaffold the WXT + TypeScript project.
- [ ] Create the Manifest V3 action and minimal popup.
- [ ] Implement safe discovery of eligible text nodes.
- [ ] Integrate a deterministic mock NiqqudEngine behind the shared interface.
- [ ] Add apply/restore interaction with exact original-text preservation.
- [ ] Verify behavior in Chrome and Opera Desktop.

## Phase 4 — Page integrity, dynamic content, and Android decision
- [ ] Preserve DOM structure, styling, links, controls, and accessibility semantics.
- [ ] Handle dynamically inserted content without repeated processing.
- [ ] Avoid modifying input fields, editable content, scripts, styles, templates, and code samples.
- [ ] Test long pages, complex websites, RTL layout, and mixed Hebrew/Latin text.
- [ ] Decide Android delivery route from measured results; do not claim support before acceptance gates pass.

## Phase 5 — iPhone feasibility and platform integration
- [ ] Prototype Safari Web Extension packaging and its containing iOS app, or document a viable companion-app workflow.
- [ ] Measure model/runtime feasibility and permission flow on representative iPhones.
- [ ] Decide the supported iPhone workflow based on test results.
- [ ] Keep shared-core behavior and language-quality tests aligned across platforms.

## Phase 6 — Quality, privacy, security, and release
- [ ] Complete niqqud quality, DOM preservation, restoration, performance, accessibility, and compatibility tests.
- [ ] Review dependencies, build scripts, and GitHub Actions; apply least-privilege workflow permissions.
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

Community participation is welcome, but external contributions do not enter the official codebase unless reviewed and explicitly accepted by a maintainer. Public visibility does not grant contributors direct write access.
