# Preliminary Research: Hebrew Niqqud Engines

**Research date:** 26 November 2026  
**Status:** Preliminary research only — no engine has been selected, and Menaked has not yet run independent accuracy or performance tests.

## Research goal

Identify an engine that can add niqqud to modern Hebrew text from a browser extension, prioritizing local processing, privacy, reasonable latency, and preservation of the original text and web-page structure.

## Initial candidates

### 1. DictaBERT-large-char-menaked

- A BERT model dedicated to Hebrew diacritization, developed by DICTA.
- Its model card says it was trained on modern Hebrew texts manually vocalized by linguistic experts. DICTA reports state-of-the-art performance against open alternatives and commercial generative models on modern Hebrew vocalization benchmarks as of March 2025.
- It targets a wide range of modern Hebrew prose, but is not intended for Biblical, Rabbinic, premodern Hebrew, or poetry.
- The model card lists approximately 0.3B parameters and a full weights file of about 1.22GB; the declared model license is CC BY 4.0.
- An INT8 ONNX derivative of about 308MB exists, along with wrappers such as `dicta-onnx` and `phonikud-onnx`.

**Initial assessment:** A leading candidate for quality testing. Model download size, memory use, browser performance, exact component licensing, and handling of matres lectionis still need verification.

### 2. Phonikud ONNX / dicta-onnx

- Implementations using the Dicta model in ONNX format.
- The `dicta-onnx` project describes batching and a choice between full and reduced niqqud, and reports about 0.1 seconds per sentence on an Apple M1. This is the project's own figure, not an independent measurement or a browser benchmark.
- `phonikud-rs` describes using a DictaBERT ONNX model and reports similar timing on an M1 Mac.
- A quantized ONNX file listed on Hugging Face is about 308MB. Its provenance, license terms, and browser suitability must be verified before integration.

**Initial assessment:** A particularly practical route for an experiment because ONNX can be evaluated in JavaScript through ONNX Runtime Web. Tokenizer and preprocessing adaptation are still required; a Python or Rust implementation should not be assumed to work directly inside an extension.

### 3. Interscript heb-diac-plane-2.0

- An INT8 ONNX model using a ByT5-base encoder and a per-character niqqud classification head.
- Reported size: about 416MB.
- Its model card reports 8.18% DER on the Nakdimon test set, compared with 12.48% for version 1.0 in the same model family, under the protocol described in the card.
- Declared license: BSD-3-Clause for code and weights.
- Training uses a combined corpus including Nakdimon, Sefaria, and additional data; part of the corpus is described as private.

**Initial assessment:** A new and highly interesting candidate for comparative testing. Its reported numbers must not be compared directly with Dicta or Phonikud metrics unless all systems are run on the same test set and under the same protocol.

### 4. Nakdimon

- A character-level LSTM-based Hebrew diacritizer.
- The academic paper reports competitive performance against more complex systems across diverse modern Hebrew sources.
- The repository includes code, training data, and test sets. The current version documents Python 3.12+ and ONNX Runtime for inference.
- Direct browser compatibility, model size, and exact licensing still need verification.

**Initial assessment:** An important research baseline and potential source of evaluation data, even if it is not the final engine.

### 5. UNIKUD

- An open-source Hebrew vocalization project based on a CANINE Transformer and character-level multilabel classification.
- The repository declares an MIT license.
- Inference is provided through a Python package that downloads the required model files.
- Model size and compatibility with ONNX Runtime Web have not been verified.

**Initial assessment:** An open alternative worth keeping on the list, but there is currently less evidence of direct browser-extension suitability.

### 6. DICTA Nakdan — hosted service

- A professional Hebrew diacritization system supporting modern Hebrew and historical Hebrew genres.
- It is available through an online service/API, but this approach sends text outside the user's device.

**Initial assessment:** Useful as a quality reference or for manual testing, but not a default fit for Menaked's local-processing and privacy goals.

## Browser inference feasibility

ONNX Runtime Web can run ONNX models directly in the browser using JavaScript, without sending text to a server. Its documentation lists WASM support across a range of browsers and platforms, including Chrome, Edge, Firefox, and Safari; WebGPU is available mainly in compatible Chromium browsers.

This makes local and offline inference technically plausible after the model and runtime assets have been downloaded. However, a 308–416MB model is large for a browser extension. Initial download, storage, memory, load time, CPU/GPU usage, and performance on lower-powered devices must be measured.

## Preliminary conclusions

1. Several relevant open-source Hebrew diacritization engines exist; training a model from scratch is not the only path.
2. DictaBERT through ONNX is a strong first experiment due to its focus on modern Hebrew and the availability of an ONNX implementation.
3. Interscript heb-diac-plane-2.0 should also be included in the comparison because of its reported DER and known ONNX size.
4. Nakdimon is useful as a research baseline and source of test data.
5. No final engine has been selected. No candidate has yet been shown to meet the accuracy, speed, and resource requirements of a browser extension.

## Proposed next experiment

- Build a small representative modern-Hebrew test set: news, articles, user interfaces, proper names, numbers, abbreviations, slang, and contextually ambiguous words.
- Include already-vocalized text to test whether an engine preserves or unexpectedly changes existing niqqud.
- Run at least two candidates on exactly the same test set.
- Measure DER (Diacritic Error Rate), sentence and paragraph processing time, first-load time, memory use, and download size.
- Separately test preservation of whitespace, punctuation, links, mixed Hebrew/English text, numbers, and DOM structure.
- Test ONNX Runtime Web with WASM first, then WebGPU.
- Record model versions, hashes, license terms, and experiment results.

## Sources

- DictaBERT: https://huggingface.co/dicta-il/dictabert-large-char-menaked
- dicta-onnx: https://github.com/thewh1teagle/dicta-onnx
- Phonikud ONNX: https://huggingface.co/Phonikud/phonikud-onnx
- phonikud-rs: https://github.com/shimondoodkin/phonikud-rs
- Interscript heb-diac-plane-2.0: https://huggingface.co/Interscript/heb-diac-plane-2.0
- Nakdimon paper: https://aclanthology.org/2022.findings-naacl.75/
- Nakdimon code: https://github.com/elazarg/nakdimon
- UNIKUD: https://github.com/morrisalp/unikud
- ONNX Runtime Web: https://onnxruntime.ai/docs/get-started/with-javascript/web.html
- ONNX Runtime browser tutorial: https://onnxruntime.ai/docs/tutorials/web/
