# Hebrew Lexicon Data Model

[עברית – מודל נתונים למילון העברי](LEXICON_DATA_MODEL_HE.md)

**Status:** Initial data-schema proposal. It is not yet connected to extension code and is not a final standard.

## 1. Goals

Menaked's lexicon must not be a simple one-word-to-one-vocalization map. It should represent:
- An unvocalized Hebrew spelling.
- One or more vocalized readings for that spelling.
- Part of speech and grammatical features.
- Meaning or usage.
- Sentence examples illustrating each reading.
- Data provenance and review status.

## 2. Core principle: spelling is not meaning

The same sequence of letters can represent more than one word or grammatical form. A spelling entry therefore contains an array of possible readings rather than one vocalization field.

Examples:
- ספר: סֵפֶר (noun), סָפַר (verb), סַפָּר (noun).
- מלך: מֶלֶךְ (noun), מָלַךְ (verb).
- דרך: דֶּרֶךְ (noun), דָּרַךְ (verb).
- חדש: חָדָשׁ (adjective), חֹדֶשׁ (noun).

These examples illustrate why multiple readings are needed. Every production entry must receive linguistic review before it is used for automatic decisions.

## 3. Proposed fields

### Spelling entry
- `id`: stable unique identifier.
- `surface`: unvocalized spelling as it appears in text.
- `normalization`: normalization policy applied; never discard or alter the exact original text.
- `readings`: list of possible readings.

### Candidate reading
- `id`: identifier within the entry.
- `vocalized`: vocalized form.
- `lemma`: base form, when known.
- `partOfSpeech`: part of speech.
- `features`: grammatical features such as gender, number, person, tense, binyan, and pattern.
- `sense`: concise meaning description.
- `examples`: contextual examples with source and vocalized sentences.
- `reviewStatus`: linguistic review status.
- `provenance`: data source and licensing note.

## 4. Data rules

1. Store comparison forms in Unicode NFC, but preserve exact original text separately for restoration.
2. Do not strip existing niqqud before an explicit mixed-text policy is defined.
3. Do not assume every lexicon entry is unambiguous.
4. Never select a reading based on array order.
5. Distinguish linguistically reviewed data from unreviewed proposals.
6. Record source and license for all externally sourced data.
7. Separate the general lexicon from proper names, abbreviations, acronyms, and domain-specific terms.

## 5. Conceptual JSON example

```json
{
  "schemaVersion": 1,
  "language": "he",
  "entries": [
    {
      "id": "he-sefer",
      "surface": "ספר",
      "readings": [
        {
          "id": "book",
          "vocalized": "סֵפֶר",
          "partOfSpeech": "noun",
          "sense": "A book for reading",
          "reviewStatus": "draft"
        },
        {
          "id": "counted",
          "vocalized": "סָפַר",
          "partOfSpeech": "verb",
          "sense": "Counted items",
          "reviewStatus": "draft"
        }
      ]
    }
  ]
}
```

This is a schema illustration only. It must not be used as a production lexicon until grammatical features, examples, and linguistic review are complete.

## 6. What does not belong in the lexicon

The lexicon must not make contextual decisions by itself. Syntax, context, neighboring-word evidence, candidate ranking, and confidence belong to the analysis and disambiguation components.

This separation allows the context analyzer to improve without changing the underlying data model.

## 7. Version-one acceptance criteria

- The schema supports multiple readings for one spelling.
- Every reading has a vocalized form and part of speech.
- Meanings and examples can be attached.
- Review status and data provenance are explicit.
- Uncertain data is not presented as verified.
- Schema validation and duplicate-ID checks are available.
