# Proposed Architecture

[עברית – ארכיטקטורה מוצעת](ARCHITECTURE_HE.md)

> Status: proposal for investigation and prototyping, not a finalized implementation.

## User experience

1. The user activates Menaked from the browser toolbar.
2. The extension identifies eligible Hebrew text on the current page.
3. A niqqud engine processes the text.
4. The extension updates text content while preserving the surrounding page structure and behavior.
5. The user can restore the original text.

## Proposed components

- **Browser action / popup:** starts and stops processing and communicates status.
- **Content script:** discovers eligible text nodes and coordinates page updates.
- **Text filtering layer:** excludes editable fields, code, scripts, styles, and other unsuitable regions.
- **Niqqud engine adapter:** isolates the extension from a specific model or inference implementation.
- **Local inference runtime:** candidate execution environment to be selected after model and browser research.
- **Original-text store:** retains exact source text for reversible updates during the page session.

## Key engineering constraints

### DOM safety
Prefer changing text-node values rather than rebuilding page elements. Do not replace whole containers with HTML strings. Preserve event listeners and element identity.

### Reversibility
Keep a reliable mapping between original and processed text. Repeated activation must not add duplicate niqqud or overwrite the original source.

### Dynamic pages
A later iteration may observe DOM mutations and process newly added text nodes. Mutation handling must avoid feedback loops caused by the extension's own changes.

### Hebrew language quality
Niqqud is context-sensitive. The engine must be evaluated on ambiguous words, names, quotations, punctuation, abbreviations, mixed-language text, and already-vocalized content. The extension should not imply perfect accuracy.

### Privacy and network use
The target is local processing, including offline use after any required one-time model download. This is a design goal, not yet a verified property. Any telemetry, remote inference, or network requests would require explicit design review and clear disclosure.

## Open technical decisions

- Browser support and Manifest version.
- Niqqud model, data sources, license, and distribution approach.
- Browser inference runtime and model format.
- Handling of shadow DOM, iframes, and restricted browser pages.
- Persistence strategy for original text and user preferences.
- Performance thresholds and fallback behavior.
