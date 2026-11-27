# Hebrew Lexicon Data Model

[עברית – מודל נתונים למילון העברי](LEXICON_DATA_MODEL_HE.md)

**Status:** Initial runtime integration. The extension now reads its prototype vocabulary from `extension/src/dictionary/lexicon.ts`. This is draft data, not a production linguistic resource.

## Runtime model

- A spelling entry (`surface`) contains one or more `readings`.
- Each reading has a stable local ID, vocalized form, part of speech, optional lemma, sense, grammatical features, and review status.
- `unclassified` marks legacy prototype vocabulary whose part of speech has not yet been reviewed.
- `draft` means the reading has not received formal linguistic review.

## Ambiguity policy

The runtime helper `getUnambiguousVocalization` returns a vocalized form only when an entry has exactly one reading. Entries with multiple readings are not passed to the simple page dictionary and remain unchanged by the mock engine. Array order is never used to choose a reading.

Examples:
- ספר: סֵפֶר (noun), סָפַר (verb), סַפָּר (noun).
- מלך: מֶלֶךְ (noun), מָלַךְ (verb).
- דרך: דֶּרֶךְ (noun), דָּרַךְ (verb).
- חדש: חָדָשׁ (adjective), חֹדֶשׁ (noun).

## Source of truth

`extension/src/dictionary/lexicon.ts` is the single runtime data source. `basic.ts` is a compatibility export derived from unambiguous entries; it must not contain a second hand-maintained word list.

## Data quality and limitations

All imported seed readings remain `draft`. Existing prototype words without reviewed grammatical classification use `unclassified`. This dataset is useful for schema, integration, and regression testing only. Do not describe it as a complete or linguistically verified Hebrew lexicon.

## Rules

1. Normalize lookup keys to Unicode NFC.
2. Preserve exact source text separately for restoration.
3. Do not strip existing niqqud unless a separate explicit policy permits it.
4. Do not select among multiple readings without contextual analysis.
5. Keep linguistic review status explicit.
6. Record source and licensing information before adding externally sourced data.
7. Keep names, abbreviations, acronyms, and domain-specific terms separable from the general lexicon.

## Acceptance criteria

- Multiple readings are represented without losing their grammatical metadata.
- The active prototype uses the same lexicon data source.
- Ambiguous and unknown words remain unchanged.
- Existing single-reading prototype vocabulary remains available.
- Tests cover lookup, ambiguity, normalization, and regression behavior.
