# Niqqud Engine Evaluation Protocol

[עברית – פרוטוקול הערכת מנועי ניקוד](NIQQUD_EVALUATION_PROTOCOL_HE.md)

**Status:** Draft protocol for the first controlled comparison.  
**Purpose:** Compare candidate engines fairly on Menaked's target content, not to reproduce vendor/model-card benchmarks.

## 1. Candidate systems
Initial comparison:
- DictaBERT-large-char-menaked through a verified ONNX implementation.
- Interscript heb-diac-plane-2.0.
- Optional third baseline: Nakdimon or another candidate if its inference and licensing requirements can be reproduced.

Phonikud / dicta-onnx is treated as an implementation path for DictaBERT unless evidence shows it uses materially different weights or processing.

## 2. Dataset design
Create a versioned, manually reviewed corpus. Each item must include:
- Stable item ID and source category.
- Original unvocalized Hebrew.
- Gold-standard fully vocalized reference.
- Notes for ambiguous words, proper names, and acceptable variants.
- Source/permission information; do not copy copyrighted web pages wholesale.
- Split assignment: development, validation, or held-out test.

Required categories:
1. Modern news and explanatory prose.
2. General websites and instructional text.
3. User-interface labels and short fragments.
4. Proper names, place names, and brand names.
5. Numbers, dates, currency, abbreviations, and acronyms.
6. Slang and informal language.
7. Ambiguous words whose reading depends on context.
8. Mixed Hebrew/Latin text and URLs.
9. Text with partial or full existing niqqud.
10. Poetry and historical/religious Hebrew as explicitly out-of-domain stress tests, not part of the primary modern-prose score.

The held-out test set must not be used to tune model settings.

## 3. Text normalization and alignment
- Preserve the exact original input for round-trip checks.
- Define Unicode normalization consistently (NFC for canonical comparison unless a model requires another representation).
- Compare niqqud marks separately from consonant letters.
- Document treatment of meteg, rafe, shin/sin dots, dagesh, qamats qatan, and cantillation marks.
- Do not silently normalize away distinctions that affect reading.
- Align model output to the reference at the character level; report cases where alignment is ambiguous.
- Score whitespace, punctuation, numerals, and Latin spans separately as preservation checks.

## 4. Metrics
Report all metrics per category and overall:
- **DER (Diacritic Error Rate):** edit errors over reference diacritic positions, with the exact formula and normalization rules published.
- **Word exact match:** percentage of Hebrew words whose diacritic sequence matches the reference.
- **Sentence exact match:** percentage of sentences with no diacritic errors.
- **Input preservation:** rate of exact preservation for consonants, whitespace, punctuation, numerals, and Latin text.
- **Existing-niqqud preservation:** percentage of user-provided marks retained exactly where preservation is required.
- **Failure rate:** timeouts, crashes, malformed output, or unsupported input.

No single metric is sufficient. DER must not hide a model that damages punctuation, spacing, or existing text.

## 5. Runtime and resource measurements
Run on identical hardware/software conditions and record:
- Exact model revision and SHA-256.
- Tokenizer/preprocessor revision and hash.
- Runtime version, execution provider, browser and OS versions.
- Model and runtime download size.
- Cold initialization time and warm processing time.
- Throughput in characters/second and sentences/second.
- Peak memory and CPU/GPU utilization where measurable.
- Page responsiveness while processing.
- Offline operation after all assets are cached.

Report median and p95 latency across repeated runs. Separate model inference time from preprocessing and DOM update time.

## 6. Test procedure
1. Freeze corpus version and candidate artifact hashes.
2. Run each candidate with documented, equivalent settings.
3. Store raw outputs without manual correction.
4. Compute metrics using the same scoring script.
5. Manually review a stratified sample of errors, especially ambiguity and proper names.
6. Repeat runtime measurements after one cold start and multiple warm runs.
7. Publish results, limitations, and reproduction steps.

## 7. Decision rule
Select a production candidate only if it:
- Meets a pre-agreed minimum quality threshold on the held-out modern-Hebrew set.
- Does not materially damage original letters, whitespace, punctuation, numerals, or existing niqqud.
- Fits desktop resource budgets and has a credible mobile feasibility path.
- Has verified licenses for weights, code, tokenizer, data dependencies, and runtime redistribution.
- Can run locally without sending page text to a remote service.

If no candidate passes, retain the replaceable engine interface and continue research rather than selecting the least-bad model by default.

## 8. Reproducibility and privacy
- Use public-domain, permissively licensed, synthetic, or explicitly permissioned evaluation text.
- Do not upload private user browsing content to public benchmark services.
- Publish corpus licensing and provenance.
- Keep the test corpus free of personal or sensitive information.
- Record all external downloads and verify checksums before execution.
