# Niqqud Engine Development Strategy

[עברית – אסטרטגיית פיתוח מנוע הניקוד](NIQQUD_ENGINE_STRATEGY_HE.md)

**Status:** Approved planning direction; this document does not select a model or commit to a particular implementation.  
**Agreed direction:** Gradual development — first build an independent, understandable foundation, then allow external or open models behind a stable interface.

## 1. Engine goal

Build a component that accepts Hebrew text and returns vocalized text while preserving text, punctuation, and surrounding structure. Development should progress from simple lexical lookup to context-sensitive linguistic decisions.

The current prototype is a small dictionary-based demonstration. It must not be presented as a genuine linguistic niqqud engine.

## 2. Engineering principles

1. **Separation of concerns:** lexical data, linguistic analysis, disambiguation, and the engine interface are separate components.
2. **Replaceability:** different engines can implement the same contract without changing page transformation.
3. **Traceability:** each output can be associated with a knowledge source, rule, or model version.
4. **Uncertainty-aware behavior:** do not force one reading when evidence is insufficient. Allow a token to remain unchanged or mark a result as uncertain.
5. **Test before expansion:** every lexicon or linguistic-rule change is checked against positive and negative fixtures.
6. **Privacy by default:** local processing is the design target. Any remote service requires an explicit decision, user disclosure, and privacy review.
7. **Provenance and licensing:** do not integrate a model, corpus, dictionary, or code before documenting its origin and usage/redistribution terms.

## 3. Development stages

### Stage A — Lexical foundation
- Define a data model for a written form and its possible readings.
- Store spelling, vocalized form, part of speech, sense, and grammatical features.
- Represent ambiguous forms without forcing a single reading.
- Create a small, linguistically reviewed starter lexicon.
- Test preservation of unknown words, existing niqqud, and punctuation.

**Exit criteria:** documented schema, reviewed examples, and automated tests.

### Stage B — Morphology and word analysis
- Identify common prefixes and suffixes.
- Record root, binyan, pattern, person, tense, gender, and number where available.
- Distinguish defective and plene spelling and inflected forms.
- Do not infer grammatical information without supporting evidence.

**Exit criteria:** a test set of inflected forms, including irregular cases.

### Stage C — Contextual disambiguation
- Analyze a context window around each token.
- Identify syntactic roles and basic relations between words.
- Rank candidate readings using context.
- Return confidence and abstain when candidate scores are too close.

**Exit criteria:** measurable improvement on an ambiguity corpus not used to develop the rules.

### Stage D — Model evaluation and integration
- Compare at least two candidates on the same corpus and protocol.
- Evaluate quality, latency, memory, size, licenses, and local execution.
- Wrap any selected model in an adapter implementing the engine contract.
- Preserve the ability to replace the model or runtime.

**Exit criteria:** measured results, license review, and documented acceptance criteria.

### Stage E — Continuous improvement
- Collect failure cases and corrected examples through a controlled process.
- Keep training, development, and test data separate.
- Run regression tests for every lexicon, rule, or model release.
- Record versions, sources, licenses, and hashes for external assets.

## 4. Target logical architecture

```text
Input text
   |
Text normalization and segmentation
   |
Lexicon lookup ---- Morphological analysis
   |                         |
Candidate readings <---------+
   |
Context analysis and ranking
   |
Confidence / abstention policy
   |
NiqqudEngine adapter
   |
Vocalized output + diagnostics
```

This diagram describes logical responsibilities. It does not require creating particular folders or files at this stage.

## 5. Disambiguation policy

- A single reviewed lexical match may provide a basis for vocalization, subject to word features and context.
- When multiple readings exist, retain all candidates until evidence supports a preference.
- Frequency alone is not proof of meaning.
- When confidence is low, abstain from adding niqqud or return an explicitly uncertain result.
- Keep model confidence separate from correctness measured against an annotated corpus.

## 6. Quality metrics

Measure at least:
- DER — diacritic error rate.
- Exact word and sentence accuracy.
- Accuracy on ambiguous words separately.
- Abstention rate and error rate among decisions the engine does make.
- Processing latency, startup time, memory, and asset size.
- Preservation of whitespace, punctuation, numbers, and mixed-language text.

Do not compare accuracy figures from different sources unless candidates are evaluated on the same test set and protocol.

## 7. Out of scope for now

- Training a model from scratch.
- Making a remote vocalization service the default.
- Changing the existing engine contract before inspecting dependencies and tests.
- Moving prototype code into a new folder structure without a complete mapping.
- Claiming that the starter lexicon understands context or covers Hebrew.

## 8. First practical step

Define and approve the lexicon schema and multiple-reading policy. Then create a small starter vocabulary with contextual examples and tests. Integrate the data into the extension only after the local source code and GitHub repository have been synchronized and inspected.
