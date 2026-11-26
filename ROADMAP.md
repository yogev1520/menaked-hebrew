# Development Roadmap

[עברית – מפת הדרכים](ROADMAP_HE.md)

This roadmap is an initial plan. Milestones may change as research, prototypes, and testing reveal new requirements.

## Phase 0 — Project foundation
- [x] Create the public GitHub repository.
- [x] Establish Hebrew and English documentation.
- [ ] Select and document the project license.
- [ ] Open initial GitHub issues for research questions and decisions.

**Progress checkpoint (26 November 2026):** An initial scan of potential Hebrew niqqud engines has been completed and documented in [Engine Research](ENGINE_RESEARCH.md). Engine selection, full license review, and comparative accuracy/performance testing remain open.

**Initial target decision (26 November 2026):** The first release will target both Google Chrome and Opera Desktop. We will prefer a shared Chromium-based codebase using Manifest V3 and test both browsers separately. Compatibility is a design goal, not an unverified assumption.

## Phase 1 — Requirements and research
- [ ] Define supported browsers and extension manifest version.
- [ ] Define what counts as Hebrew text and which page regions should be excluded (for example, editable fields and code blocks).
- [ ] Research available Hebrew niqqud models, datasets, and licenses.
- [ ] Evaluate accuracy, ambiguity handling, model size, runtime requirements, and offline feasibility.
- [ ] Define a representative evaluation corpus and quality metrics.

## Phase 2 — Minimal extension prototype
- [ ] Create the extension manifest and toolbar interface.
- [ ] Implement safe discovery of eligible text nodes.
- [ ] Integrate a replaceable niqqud-engine interface.
- [ ] Add an enable/disable interaction.
- [ ] Preserve original text so the user can restore it.

## Phase 3 — Page integrity and dynamic content
- [ ] Preserve DOM structure, styling, links, controls, and accessibility semantics.
- [ ] Handle dynamically inserted content without repeatedly processing the same text.
- [ ] Avoid modifying input fields, editable content, scripts, styles, and code samples.
- [ ] Test on long pages and complex websites.

## Phase 4 — Local execution and performance
- [ ] Prototype local inference in the browser.
- [ ] Measure startup time, memory use, throughput, and page responsiveness.
- [ ] Investigate one-time model download and offline operation.
- [ ] Document any unavoidable network activity.

## Phase 5 — Quality and release
- [ ] Build a test suite for niqqud quality and DOM preservation.
- [ ] Test right-to-left rendering and mixed Hebrew/Latin text.
- [ ] Test supported browsers and accessibility.
- [ ] Prepare user documentation and release notes.
- [ ] Publish an initial version when release criteria are met.

## Guiding release criteria

A first release should not be considered ready until it can:
1. Apply niqqud to eligible Hebrew text reliably enough for the documented use cases.
2. Preserve the page's structure and core interactions.
3. Restore the original text without loss.
4. Explain clearly what is processed locally and what, if anything, leaves the device.
5. Meet documented performance and compatibility expectations.
