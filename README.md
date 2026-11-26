# מְנַקֵּד | Menaked Hebrew

**An open-source browser extension that adds Hebrew niqqud (vowel points) to web pages while preserving their original appearance.**

[עברית – README בעברית](README_HE.md)

## The idea

Menaked is a browser extension designed to make Hebrew text easier to read and learn. With a single action, users will be able to apply niqqud to Hebrew text across the currently open web page.

The intended experience is similar to a browser translation feature: activate the extension, let the page update, and continue reading in the same visual environment.

## Product principles

- **Preserve the page:** retain the original layout, styling, images, links, buttons, and document structure wherever possible.
- **Respect the source:** provide a way to restore or view the original, unvocalized text.
- **Privacy by design:** prioritize local processing. The intended goal is to work offline after any required language model or data has been downloaded.
- **One simple action:** make the core experience accessible from the browser toolbar.
- **Open development:** build transparently and welcome thoughtful contributions.

## Project status

**Early planning and architecture stage.** The repository and initial documentation are being established. No production-ready extension or final niqqud engine is claimed at this stage.

## Planned milestones

1. Define functional requirements and evaluation criteria.
2. Research and select a Hebrew niqqud engine suitable for local browser use.
3. Build a minimal browser-extension prototype.
4. Apply niqqud to page text while preserving DOM structure and page behavior.
5. Add original-text restoration and robust handling of dynamic pages.
6. Test accuracy, performance, accessibility, and browser compatibility.
7. Package and publish an initial release.

See [ROADMAP.md](ROADMAP.md) for the development plan and [ARCHITECTURE.md](ARCHITECTURE.md) for the proposed technical design.

## Documentation

| English | עברית |
|---|---|
| [Project overview](README.md) | [סקירת הפרויקט](README_HE.md) |
| [Roadmap](ROADMAP.md) | [מפת דרכים](ROADMAP_HE.md) |
| [Architecture](ARCHITECTURE.md) | [ארכיטקטורה](ARCHITECTURE_HE.md) |
| [Contributing](CONTRIBUTING.md) | [הנחיות לתרומה](CONTRIBUTING_HE.md) |
| [Privacy](PRIVACY.md) | [פרטיות](PRIVACY_HE.md) |

## Get involved

Ideas, issue reports, testing, documentation improvements, and code contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a contribution.

## License

A project license has not yet been selected. Until a license is added, do not assume that the source code is available for unrestricted reuse, modification, or distribution.
