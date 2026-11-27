/**
 * Menaked Hebrew lexicon — runtime data source.
 *
 * The lexicon stores possible readings, not automatic contextual decisions.
 * Entries marked "draft" or "unclassified" are prototype data and require
 * linguistic review before production use.
 */

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "preposition"
  | "conjunction"
  | "interjection"
  | "unclassified";

export type ReviewStatus = "draft" | "reviewed";

export interface LexiconReading {
  readonly id: string;
  readonly vocalized: string;
  readonly lemma?: string;
  readonly partOfSpeech: PartOfSpeech;
  readonly sense?: string;
  readonly features?: Readonly<Record<string, string>>;
  readonly reviewStatus: ReviewStatus;
}

export interface LexiconEntry {
  readonly id: string;
  readonly surface: string;
  readonly readings: readonly LexiconReading[];
}

const entries: readonly LexiconEntry[] = [
  {
    "id": "he-5d0-5d1-5d0",
    "surface": "אבא",
    "readings": [
      {
        "id": "default",
        "vocalized": "אַבָּא",
        "lemma": "אַבָּא",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d3-5dd",
    "surface": "אדם",
    "readings": [
      {
        "id": "default",
        "vocalized": "אָדָם",
        "lemma": "אָדָם",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d4-5d1-5d4",
    "surface": "אהבה",
    "readings": [
      {
        "id": "default",
        "vocalized": "אַהֲבָה",
        "lemma": "אַהֲבָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d5-5db-5dc",
    "surface": "אוכל",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֹכֶל",
        "lemma": "אֹכֶל",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d5-5e8",
    "surface": "אור",
    "readings": [
      {
        "id": "default",
        "vocalized": "אוֹר",
        "lemma": "אוֹר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d5-5e8-5d6",
    "surface": "אורז",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֹרֶז",
        "lemma": "אֹרֶז",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d5-5ea",
    "surface": "אות",
    "readings": [
      {
        "id": "default",
        "vocalized": "אוֹת",
        "lemma": "אוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d5-5ea-5d9-5d5-5ea",
    "surface": "אותיות",
    "readings": [
      {
        "id": "default",
        "vocalized": "אוֹתִיּוֹת",
        "lemma": "אוֹתִיּוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d9-5e9",
    "surface": "איש",
    "readings": [
      {
        "id": "default",
        "vocalized": "אִישׁ",
        "lemma": "אִישׁ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5d9-5e9-5d4",
    "surface": "אישה",
    "readings": [
      {
        "id": "default",
        "vocalized": "אִשָּׁה",
        "lemma": "אִשָּׁה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5de-5d0",
    "surface": "אמא",
    "readings": [
      {
        "id": "default",
        "vocalized": "אִמָּא",
        "lemma": "אִמָּא",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5de-5d5-5e0-5d4",
    "surface": "אמונה",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֱמוּנָה",
        "lemma": "אֱמוּנָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5de-5ea",
    "surface": "אמת",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֱמֶת",
        "lemma": "אֱמֶת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5e0-5e9-5d9-5dd",
    "surface": "אנשים",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֲנָשִׁים",
        "lemma": "אֲנָשִׁים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5e8-5e5",
    "surface": "ארץ",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֶרֶץ",
        "lemma": "אֶרֶץ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5e8-5e6-5d5-5ea",
    "surface": "ארצות",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֲרָצוֹת",
        "lemma": "אֲרָצוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d0-5ea-5de-5d5-5dc",
    "surface": "אתמול",
    "readings": [
      {
        "id": "default",
        "vocalized": "אֶתְמוֹל",
        "lemma": "אֶתְמוֹל",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d1-5d5-5e7-5e8",
    "surface": "בוקר",
    "readings": [
      {
        "id": "default",
        "vocalized": "בֹּקֶר",
        "lemma": "בֹּקֶר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d1-5d9-5d8-5d7-5d5-5df",
    "surface": "ביטחון",
    "readings": [
      {
        "id": "default",
        "vocalized": "בִּטָּחוֹן",
        "lemma": "בִּטָּחוֹן",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d1-5d9-5e6-5d4",
    "surface": "ביצה",
    "readings": [
      {
        "id": "default",
        "vocalized": "בֵּיצָה",
        "lemma": "בֵּיצָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d1-5d9-5e6-5d9-5dd",
    "surface": "ביצים",
    "readings": [
      {
        "id": "default",
        "vocalized": "בֵּיצִים",
        "lemma": "בֵּיצִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d1-5d9-5ea",
    "surface": "בית",
    "readings": [
      {
        "id": "house",
        "vocalized": "בַּיִת",
        "lemma": "בַּיִת",
        "partOfSpeech": "noun",
        "sense": "בית; מקום מגורים",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d1-5e9-5e8",
    "surface": "בשר",
    "readings": [
      {
        "id": "default",
        "vocalized": "בָּשָׂר",
        "lemma": "בָּשָׂר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d2-5d1-5d9-5e0-5d4",
    "surface": "גבינה",
    "readings": [
      {
        "id": "default",
        "vocalized": "גְּבִינָה",
        "lemma": "גְּבִינָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d2-5d3-5d5-5dc",
    "surface": "גדול",
    "readings": [
      {
        "id": "default",
        "vocalized": "גָּדוֹל",
        "lemma": "גָּדוֹל",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d2-5d3-5d5-5dc-5d4",
    "surface": "גדולה",
    "readings": [
      {
        "id": "default",
        "vocalized": "גְּדוֹלָה",
        "lemma": "גְּדוֹלָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d3-5d2",
    "surface": "דג",
    "readings": [
      {
        "id": "default",
        "vocalized": "דָּג",
        "lemma": "דָּג",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d3-5d2-5d9-5dd",
    "surface": "דגים",
    "readings": [
      {
        "id": "default",
        "vocalized": "דָּגִים",
        "lemma": "דָּגִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d3-5dc-5ea",
    "surface": "דלת",
    "readings": [
      {
        "id": "default",
        "vocalized": "דֶּלֶת",
        "lemma": "דֶּלֶת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d3-5e8-5da",
    "surface": "דרך",
    "readings": [
      {
        "id": "way",
        "vocalized": "דֶּרֶךְ",
        "lemma": "דֶּרֶךְ",
        "partOfSpeech": "noun",
        "sense": "דרך; נתיב",
        "reviewStatus": "draft"
      },
      {
        "id": "stepped",
        "vocalized": "דָּרַךְ",
        "lemma": "דָּרַךְ",
        "partOfSpeech": "verb",
        "sense": "פסע; דרך",
        "features": {
          "binyan": "qal",
          "tense": "past",
          "person": "third",
          "gender": "masculine",
          "number": "singular"
        },
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d3-5e8-5db-5d9-5dd",
    "surface": "דרכים",
    "readings": [
      {
        "id": "default",
        "vocalized": "דְּרָכִים",
        "lemma": "דְּרָכִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d4-5e8",
    "surface": "הר",
    "readings": [
      {
        "id": "default",
        "vocalized": "הַר",
        "lemma": "הַר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d1-5e8",
    "surface": "חבר",
    "readings": [
      {
        "id": "default",
        "vocalized": "חָבֵר",
        "lemma": "חָבֵר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d1-5e8-5d9-5dd",
    "surface": "חברים",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֲבֵרִים",
        "lemma": "חֲבֵרִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d3-5e8",
    "surface": "חדר",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֶדֶר",
        "lemma": "חֶדֶר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d3-5e8-5d9-5dd",
    "surface": "חדרים",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֲדָרִים",
        "lemma": "חֲדָרִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d3-5e9",
    "surface": "חדש",
    "readings": [
      {
        "id": "new",
        "vocalized": "חָדָשׁ",
        "lemma": "חָדָשׁ",
        "partOfSpeech": "adjective",
        "sense": "חדש; זכר יחיד",
        "features": {
          "gender": "masculine",
          "number": "singular"
        },
        "reviewStatus": "draft"
      },
      {
        "id": "month",
        "vocalized": "חֹדֶשׁ",
        "lemma": "חֹדֶשׁ",
        "partOfSpeech": "noun",
        "sense": "חודש",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d3-5e9-5d4",
    "surface": "חדשה",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֲדָשָׁה",
        "lemma": "חֲדָשָׁה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d3-5e9-5d5-5ea",
    "surface": "חדשות",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֲדָשׁוֹת",
        "lemma": "חֲדָשׁוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d5-5d3-5e9",
    "surface": "חודש",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֹדֶשׁ",
        "lemma": "חֹדֶשׁ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d5-5d3-5e9-5d9-5dd",
    "surface": "חודשים",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֳדָשִׁים",
        "lemma": "חֳדָשִׁים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d5-5e4-5e9",
    "surface": "חופש",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֹפֶשׁ",
        "lemma": "חֹפֶשׁ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d9-5d9-5dc",
    "surface": "חייל",
    "readings": [
      {
        "id": "default",
        "vocalized": "חַיָּל",
        "lemma": "חַיָּל",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d9-5d9-5dc-5d9-5dd",
    "surface": "חיילים",
    "readings": [
      {
        "id": "default",
        "vocalized": "חַיָּלִים",
        "lemma": "חַיָּלִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5d9-5d9-5dd",
    "surface": "חיים",
    "readings": [
      {
        "id": "default",
        "vocalized": "חַיִּים",
        "lemma": "חַיִּים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5dc-5d1",
    "surface": "חלב",
    "readings": [
      {
        "id": "default",
        "vocalized": "חָלָב",
        "lemma": "חָלָב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5dc-5d5-5df",
    "surface": "חלון",
    "readings": [
      {
        "id": "default",
        "vocalized": "חַלּוֹן",
        "lemma": "חַלּוֹן",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5e9-5d5-5d1",
    "surface": "חשוב",
    "readings": [
      {
        "id": "default",
        "vocalized": "חָשׁוּב",
        "lemma": "חָשׁוּב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d7-5e9-5d5-5d1-5d4",
    "surface": "חשובה",
    "readings": [
      {
        "id": "default",
        "vocalized": "חֲשׁוּבָה",
        "lemma": "חֲשׁוּבָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d8-5d5-5d1",
    "surface": "טוב",
    "readings": [
      {
        "id": "default",
        "vocalized": "טוֹב",
        "lemma": "טוֹב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d8-5d5-5d1-5d4",
    "surface": "טובה",
    "readings": [
      {
        "id": "default",
        "vocalized": "טוֹבָה",
        "lemma": "טוֹבָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d8-5d5-5d1-5d9-5dd",
    "surface": "טובים",
    "readings": [
      {
        "id": "default",
        "vocalized": "טוֹבִים",
        "lemma": "טוֹבִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5d5-5dd",
    "surface": "יום",
    "readings": [
      {
        "id": "default",
        "vocalized": "יוֹם",
        "lemma": "יוֹם",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5dc-5d3",
    "surface": "ילד",
    "readings": [
      {
        "id": "default",
        "vocalized": "יֶלֶד",
        "lemma": "יֶלֶד",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5dc-5d3-5d4",
    "surface": "ילדה",
    "readings": [
      {
        "id": "default",
        "vocalized": "יַלְדָּה",
        "lemma": "יַלְדָּה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5dc-5d3-5d5-5ea",
    "surface": "ילדות",
    "readings": [
      {
        "id": "default",
        "vocalized": "יַלְדוּת",
        "lemma": "יַלְדוּת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5dc-5d3-5d9-5dd",
    "surface": "ילדים",
    "readings": [
      {
        "id": "default",
        "vocalized": "יְלָדִים",
        "lemma": "יְלָדִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5dd",
    "surface": "ים",
    "readings": [
      {
        "id": "default",
        "vocalized": "יָם",
        "lemma": "יָם",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5de-5d9-5dd",
    "surface": "ימים",
    "readings": [
      {
        "id": "default",
        "vocalized": "יָמִים",
        "lemma": "יָמִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5e4-5d4",
    "surface": "יפה",
    "readings": [
      {
        "id": "default",
        "vocalized": "יָפֶה",
        "lemma": "יָפֶה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5e4-5d9-5dd",
    "surface": "יפים",
    "readings": [
      {
        "id": "default",
        "vocalized": "יָפִים",
        "lemma": "יָפִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5e8-5d7",
    "surface": "ירח",
    "readings": [
      {
        "id": "default",
        "vocalized": "יָרֵחַ",
        "lemma": "יָרֵחַ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5e8-5e7-5d5-5ea",
    "surface": "ירקות",
    "readings": [
      {
        "id": "default",
        "vocalized": "יְרָקוֹת",
        "lemma": "יְרָקוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5d9-5e9-5e8-5d0-5dc",
    "surface": "ישראל",
    "readings": [
      {
        "id": "default",
        "vocalized": "יִשְׂרָאֵל",
        "lemma": "יִשְׂרָאֵל",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5db-5d1-5d5-5d3",
    "surface": "כבוד",
    "readings": [
      {
        "id": "default",
        "vocalized": "כָּבוֹד",
        "lemma": "כָּבוֹד",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5db-5d5-5db-5d1",
    "surface": "כוכב",
    "readings": [
      {
        "id": "default",
        "vocalized": "כּוֹכָב",
        "lemma": "כּוֹכָב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5db-5d5-5db-5d1-5d9-5dd",
    "surface": "כוכבים",
    "readings": [
      {
        "id": "default",
        "vocalized": "כּוֹכָבִים",
        "lemma": "כּוֹכָבִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5db-5d9-5e1-5d0",
    "surface": "כיסא",
    "readings": [
      {
        "id": "default",
        "vocalized": "כִּסֵּא",
        "lemma": "כִּסֵּא",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5db-5e4-5e8",
    "surface": "כפר",
    "readings": [
      {
        "id": "default",
        "vocalized": "כְּפָר",
        "lemma": "כְּפָר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5db-5e4-5e8-5d9-5dd",
    "surface": "כפרים",
    "readings": [
      {
        "id": "default",
        "vocalized": "כְּפָרִים",
        "lemma": "כְּפָרִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5dc-5d1",
    "surface": "לב",
    "readings": [
      {
        "id": "default",
        "vocalized": "לֵב",
        "lemma": "לֵב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5dc-5d7-5dd",
    "surface": "לחם",
    "readings": [
      {
        "id": "default",
        "vocalized": "לֶחֶם",
        "lemma": "לֶחֶם",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5dc-5d9-5dc-5d4",
    "surface": "לילה",
    "readings": [
      {
        "id": "default",
        "vocalized": "לַיְלָה",
        "lemma": "לַיְלָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5dc-5d9-5dc-5d5-5ea",
    "surface": "לילות",
    "readings": [
      {
        "id": "default",
        "vocalized": "לֵילוֹת",
        "lemma": "לֵילוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5dc-5e4-5e2-5de-5d9-5dd",
    "surface": "לפעמים",
    "readings": [
      {
        "id": "default",
        "vocalized": "לִפְעָמִים",
        "lemma": "לִפְעָמִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d3-5d9-5e0-5d4",
    "surface": "מדינה",
    "readings": [
      {
        "id": "default",
        "vocalized": "מְדִינָה",
        "lemma": "מְדִינָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d3-5d9-5e0-5d5-5ea",
    "surface": "מדינות",
    "readings": [
      {
        "id": "default",
        "vocalized": "מְדִינוֹת",
        "lemma": "מְדִינוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d7-5e8",
    "surface": "מחר",
    "readings": [
      {
        "id": "default",
        "vocalized": "מָחָר",
        "lemma": "מָחָר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d7-5e9-5d1",
    "surface": "מחשב",
    "readings": [
      {
        "id": "default",
        "vocalized": "מַחְשֵׁב",
        "lemma": "מַחְשֵׁב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d9-5dc-5d4",
    "surface": "מילה",
    "readings": [
      {
        "id": "default",
        "vocalized": "מִלָּה",
        "lemma": "מִלָּה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d9-5dc-5d9-5dd",
    "surface": "מילים",
    "readings": [
      {
        "id": "default",
        "vocalized": "מִלִּים",
        "lemma": "מִלִּים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5d9-5dd",
    "surface": "מים",
    "readings": [
      {
        "id": "water",
        "vocalized": "מַיִם",
        "lemma": "מַיִם",
        "partOfSpeech": "noun",
        "sense": "מים",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5dc-5d7",
    "surface": "מלח",
    "readings": [
      {
        "id": "default",
        "vocalized": "מֶלַח",
        "lemma": "מֶלַח",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5dc-5d7-5de-5d4",
    "surface": "מלחמה",
    "readings": [
      {
        "id": "default",
        "vocalized": "מִלְחָמָה",
        "lemma": "מִלְחָמָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5dc-5da",
    "surface": "מלך",
    "readings": [
      {
        "id": "king",
        "vocalized": "מֶלֶךְ",
        "lemma": "מֶלֶךְ",
        "partOfSpeech": "noun",
        "sense": "מלך; שליט",
        "reviewStatus": "draft"
      },
      {
        "id": "reigned",
        "vocalized": "מָלַךְ",
        "lemma": "מָלַךְ",
        "partOfSpeech": "verb",
        "sense": "שלט כמלך",
        "features": {
          "binyan": "qal",
          "tense": "past",
          "person": "third",
          "gender": "masculine",
          "number": "singular"
        },
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5de-5e9-5dc-5d4",
    "surface": "ממשלה",
    "readings": [
      {
        "id": "default",
        "vocalized": "מֶמְשָׁלָה",
        "lemma": "מֶמְשָׁלָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5e0-5e7-5d3",
    "surface": "מנקד",
    "readings": [
      {
        "id": "default",
        "vocalized": "מְנַקֵּד",
        "lemma": "מְנַקֵּד",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5e9-5d7-5e7",
    "surface": "משחק",
    "readings": [
      {
        "id": "default",
        "vocalized": "מִשְׂחָק",
        "lemma": "מִשְׂחָק",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5e9-5d7-5e7-5d9-5dd",
    "surface": "משחקים",
    "readings": [
      {
        "id": "default",
        "vocalized": "מִשְׂחָקִים",
        "lemma": "מִשְׂחָקִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5de-5e9-5e4-5d7-5d4",
    "surface": "משפחה",
    "readings": [
      {
        "id": "default",
        "vocalized": "מִשְׁפָּחָה",
        "lemma": "מִשְׁפָּחָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e0-5d4-5e8",
    "surface": "נהר",
    "readings": [
      {
        "id": "default",
        "vocalized": "נָהָר",
        "lemma": "נָהָר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e1-5d5-5db-5e8",
    "surface": "סוכר",
    "readings": [
      {
        "id": "default",
        "vocalized": "סֻכָּר",
        "lemma": "סֻכָּר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e1-5d9-5e4-5d5-5e8",
    "surface": "סיפור",
    "readings": [
      {
        "id": "default",
        "vocalized": "סִפּוּר",
        "lemma": "סִפּוּר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e1-5d9-5e4-5d5-5e8-5d9-5dd",
    "surface": "סיפורים",
    "readings": [
      {
        "id": "default",
        "vocalized": "סִפּוּרִים",
        "lemma": "סִפּוּרִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e1-5e4-5e8",
    "surface": "ספר",
    "readings": [
      {
        "id": "book",
        "vocalized": "סֵפֶר",
        "lemma": "סֵפֶר",
        "partOfSpeech": "noun",
        "sense": "ספר לקריאה",
        "reviewStatus": "draft"
      },
      {
        "id": "counted",
        "vocalized": "סָפַר",
        "lemma": "סָפַר",
        "partOfSpeech": "verb",
        "sense": "מנה; ספר",
        "features": {
          "binyan": "qal",
          "tense": "past",
          "person": "third",
          "gender": "masculine",
          "number": "singular"
        },
        "reviewStatus": "draft"
      },
      {
        "id": "barber",
        "vocalized": "סַפָּר",
        "lemma": "סַפָּר",
        "partOfSpeech": "noun",
        "sense": "אדם העוסק בתספורת",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e1-5e4-5e8-5d9-5dd",
    "surface": "ספרים",
    "readings": [
      {
        "id": "default",
        "vocalized": "סְפָרִים",
        "lemma": "סְפָרִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5d1-5d5-5d3-5d4",
    "surface": "עבודה",
    "readings": [
      {
        "id": "default",
        "vocalized": "עֲבוֹדָה",
        "lemma": "עֲבוֹדָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5d1-5e8-5d9-5ea",
    "surface": "עברית",
    "readings": [
      {
        "id": "default",
        "vocalized": "עִבְרִית",
        "lemma": "עִבְרִית",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5d5-5dc-5dd",
    "surface": "עולם",
    "readings": [
      {
        "id": "world",
        "vocalized": "עוֹלָם",
        "lemma": "עוֹלָם",
        "partOfSpeech": "noun",
        "sense": "עולם; יקום; נצח",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5d9-5e8",
    "surface": "עיר",
    "readings": [
      {
        "id": "default",
        "vocalized": "עִיר",
        "lemma": "עִיר",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5db-5e9-5d9-5d5",
    "surface": "עכשיו",
    "readings": [
      {
        "id": "default",
        "vocalized": "עַכְשָׁו",
        "lemma": "עַכְשָׁו",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5e6-5d9-5dd",
    "surface": "עצים",
    "readings": [
      {
        "id": "default",
        "vocalized": "עֵצִים",
        "lemma": "עֵצִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5e8-5d1",
    "surface": "ערב",
    "readings": [
      {
        "id": "default",
        "vocalized": "עֶרֶב",
        "lemma": "עֶרֶב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e2-5e8-5d9-5dd",
    "surface": "ערים",
    "readings": [
      {
        "id": "default",
        "vocalized": "עָרִים",
        "lemma": "עָרִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e4-5d9-5e8-5d5-5ea",
    "surface": "פירות",
    "readings": [
      {
        "id": "default",
        "vocalized": "פֵּרוֹת",
        "lemma": "פֵּרוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e4-5e8-5d7",
    "surface": "פרח",
    "readings": [
      {
        "id": "default",
        "vocalized": "פֶּרַח",
        "lemma": "פֶּרַח",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e4-5e8-5d7-5d9-5dd",
    "surface": "פרחים",
    "readings": [
      {
        "id": "default",
        "vocalized": "פְּרָחִים",
        "lemma": "פְּרָחִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e6-5d1-5d0",
    "surface": "צבא",
    "readings": [
      {
        "id": "default",
        "vocalized": "צָבָא",
        "lemma": "צָבָא",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e6-5d3-5e7",
    "surface": "צדק",
    "readings": [
      {
        "id": "default",
        "vocalized": "צֶדֶק",
        "lemma": "צֶדֶק",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e7-5d8-5df",
    "surface": "קטן",
    "readings": [
      {
        "id": "default",
        "vocalized": "קָטָן",
        "lemma": "קָטָן",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e7-5d8-5e0-5d4",
    "surface": "קטנה",
    "readings": [
      {
        "id": "default",
        "vocalized": "קְטַנָּה",
        "lemma": "קְטַנָּה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e7-5e4-5d4",
    "surface": "קפה",
    "readings": [
      {
        "id": "default",
        "vocalized": "קָפֶה",
        "lemma": "קָפֶה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e8-5d7-5d5-5d1",
    "surface": "רחוב",
    "readings": [
      {
        "id": "default",
        "vocalized": "רְחוֹב",
        "lemma": "רְחוֹב",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e8-5d7-5d5-5d1-5d5-5ea",
    "surface": "רחובות",
    "readings": [
      {
        "id": "default",
        "vocalized": "רְחוֹבוֹת",
        "lemma": "רְחוֹבוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5d0-5dc-5d4",
    "surface": "שאלה",
    "readings": [
      {
        "id": "default",
        "vocalized": "שְׁאֵלָה",
        "lemma": "שְׁאֵלָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5d1-5d5-5e2",
    "surface": "שבוע",
    "readings": [
      {
        "id": "default",
        "vocalized": "שָׁבוּעַ",
        "lemma": "שָׁבוּעַ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5d1-5d5-5e2-5d5-5ea",
    "surface": "שבועות",
    "readings": [
      {
        "id": "default",
        "vocalized": "שָׁבוּעוֹת",
        "lemma": "שָׁבוּעוֹת",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5d5-5dc-5d7-5df",
    "surface": "שולחן",
    "readings": [
      {
        "id": "default",
        "vocalized": "שֻׁלְחָן",
        "lemma": "שֻׁלְחָן",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5dc-5d5-5dd",
    "surface": "שלום",
    "readings": [
      {
        "id": "peace",
        "vocalized": "שָׁלוֹם",
        "lemma": "שָׁלוֹם",
        "partOfSpeech": "noun",
        "sense": "שלום; ברכה",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5de-5d7-5d4",
    "surface": "שמחה",
    "readings": [
      {
        "id": "default",
        "vocalized": "שִׂמְחָה",
        "lemma": "שִׂמְחָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5de-5e9",
    "surface": "שמש",
    "readings": [
      {
        "id": "default",
        "vocalized": "שֶׁמֶשׁ",
        "lemma": "שֶׁמֶשׁ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5e0-5d4",
    "surface": "שנה",
    "readings": [
      {
        "id": "default",
        "vocalized": "שָׁנָה",
        "lemma": "שָׁנָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5e0-5d9-5dd",
    "surface": "שנים",
    "readings": [
      {
        "id": "default",
        "vocalized": "שָׁנִים",
        "lemma": "שָׁנִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5e9-5e4-5d4",
    "surface": "שפה",
    "readings": [
      {
        "id": "default",
        "vocalized": "שָׂפָה",
        "lemma": "שָׂפָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5ea-5d4",
    "surface": "תה",
    "readings": [
      {
        "id": "default",
        "vocalized": "תֵּה",
        "lemma": "תֵּה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5ea-5de-5d9-5d3",
    "surface": "תמיד",
    "readings": [
      {
        "id": "default",
        "vocalized": "תָּמִיד",
        "lemma": "תָּמִיד",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5ea-5e4-5d5-5d7",
    "surface": "תפוח",
    "readings": [
      {
        "id": "default",
        "vocalized": "תַּפּוּחַ",
        "lemma": "תַּפּוּחַ",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5ea-5e4-5d5-5d7-5d9-5dd",
    "surface": "תפוחים",
    "readings": [
      {
        "id": "default",
        "vocalized": "תַּפּוּחִים",
        "lemma": "תַּפּוּחִים",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5ea-5e7-5d5-5d5-5d4",
    "surface": "תקווה",
    "readings": [
      {
        "id": "default",
        "vocalized": "תִּקְוָה",
        "lemma": "תִּקְוָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  },
  {
    "id": "he-5ea-5e9-5d5-5d1-5d4",
    "surface": "תשובה",
    "readings": [
      {
        "id": "default",
        "vocalized": "תְּשׁוּבָה",
        "lemma": "תְּשׁוּבָה",
        "partOfSpeech": "unclassified",
        "sense": "קריאה יחידה במילון האב־טיפוס; טרם סווגה לשונית",
        "reviewStatus": "draft"
      }
    ]
  }
];

export const hebrewLexicon: Readonly<Record<string, LexiconEntry>> =
  Object.freeze(Object.fromEntries(entries.map((entry) => [entry.surface, entry])));

export function getLexiconEntry(surface: string): LexiconEntry | undefined {
  return hebrewLexicon[surface.normalize("NFC")];
}

/**
 * Returns a vocalization only when the spelling has exactly one candidate.
 * Ambiguous spellings intentionally return undefined until context analysis exists.
 */
export function getUnambiguousVocalization(surface: string): string | undefined {
  const entry = getLexiconEntry(surface);
  if (!entry || entry.readings.length !== 1) {
    return undefined;
  }

  return entry.readings[0]?.vocalized;
}

export const unambiguousDictionary: Readonly<Record<string, string>> =
  Object.freeze(Object.fromEntries(
    entries.flatMap((entry) =>
      entry.readings.length === 1
        ? [[entry.surface, entry.readings[0]!.vocalized] as const]
        : [],
    ),
  ));
