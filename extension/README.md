# Menaked browser extension prototype

This folder contains the first desktop proof of concept, built with TypeScript, WXT, and Manifest V3.

## Scope

- Hebrew-first popup.
- User-initiated processing of the active tab.
- Minimal permissions: `activeTab` and `scripting`.
- Small deterministic dictionary used only to validate page transformation and restoration.
- Exact original text is retained for text nodes changed by the demo.
- Editable fields, code, scripts, styles, and already-vocalized text nodes are skipped.

## Important limitation

The included dictionary is **not** a real niqqud engine and must not be used to assess linguistic quality. It only changes a few known sample words so we can validate the extension workflow and DOM safety before integrating a real model.

## Development

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

Build the Chromium extension:

```bash
npm run build
```

Run unit tests:

```bash
npm test
npm run typecheck
```

Load the generated Chrome build from the WXT output directory using the browser's extension developer mode. Test Chrome and Opera separately.

## Next engineering tasks

1. Verify WXT build output and popup behavior in Chrome and Opera.
2. Test apply/restore on representative pages, including page scripts and interactive controls.
3. Add integration tests for exact restoration and external DOM changes.
4. Prototype the Android path in parallel.
5. Evaluate ONNX Runtime Web in an extension-owned context before selecting a production runtime or model.
