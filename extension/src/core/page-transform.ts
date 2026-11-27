
/**
 * Self-contained function injected into the active tab by browser.scripting.
 * Keep this function free of imported helpers and external closures.
 *
 * DOM-safe demonstration of Hebrew niqqud.
 * This is not a production niqqud engine.
 */
export function togglePageNiqqudDemo(): {
  mode: "applied" | "restored";
  changed?: number;
  restored?: number;
} {
  const stateKey = "__MENAKED_DEMO_STATE_V1__";

  type SavedNode = {
    original: string;
    transformed: string;
  };

  type PageState = {
    active: boolean;
    nodes: Map<Text, SavedNode>;
  };

  const pageWindow = window as unknown as Record<string, unknown>;
  const currentState = pageWindow[stateKey] as PageState | undefined;

  // Restore the original text when the demo is already active.
  if (currentState?.active) {
    let restored = 0;

    for (const [node, saved] of currentState.nodes) {
      if (!node.isConnected) {
        continue;
      }

      // Do not overwrite changes made by the website after transformation.
      if (node.nodeValue === saved.transformed) {
        node.nodeValue = saved.original;
        restored += 1;
      }
    }

    currentState.nodes.clear();
    currentState.active = false;

    delete pageWindow[stateKey];

    return { mode: "restored", restored };
  }


const sampleDictionary: Record<string, string> = {
  // ברכות ומילים בסיסיות
  "שלום": "שָׁלוֹם",
  "עולם": "עוֹלָם",
  "עברית": "עִבְרִית",
  "מנקד": "מְנַקֵּד",
  "מילה": "מִלָּה",
  "מילים": "מִלִּים",
  "אות": "אוֹת",
  "אותיות": "אוֹתִיּוֹת",
  "שפה": "שָׂפָה",
  "ספר": "סֵפֶר",
  "ספרים": "סְפָרִים",
  "סיפור": "סִפּוּר",
  "סיפורים": "סִפּוּרִים",
  "שאלה": "שְׁאֵלָה",
  "תשובה": "תְּשׁוּבָה",

  // משפחה ואנשים
  "אדם": "אָדָם",
  "אנשים": "אֲנָשִׁים",
  "איש": "אִישׁ",
  "אישה": "אִשָּׁה",
  "ילד": "יֶלֶד",
  "ילדה": "יַלְדָּה",
  "ילדים": "יְלָדִים",
  "אבא": "אַבָּא",
  "אמא": "אִמָּא",
  "משפחה": "מִשְׁפָּחָה",
  "חבר": "חָבֵר",
  "חברים": "חֲבֵרִים",
  "ילדות": "יַלְדוּת",

  // בית וחיי יום-יום
  "בית": "בַּיִת",
  "חדר": "חֶדֶר",
  "חדרים": "חֲדָרִים",
  "דלת": "דֶּלֶת",
  "חלון": "חַלּוֹן",
  "שולחן": "שֻׁלְחָן",
  "כיסא": "כִּסֵּא",
  "מחשב": "מַחְשֵׁב",
  "עבודה": "עֲבוֹדָה",
  "משחק": "מִשְׂחָק",
  "משחקים": "מִשְׂחָקִים",

  // זמן
  "יום": "יוֹם",
  "ימים": "יָמִים",
  "לילה": "לַיְלָה",
  "לילות": "לֵילוֹת",
  "בוקר": "בֹּקֶר",
  "ערב": "עֶרֶב",
  "שבוע": "שָׁבוּעַ",
  "שבועות": "שָׁבוּעוֹת",
  "חודש": "חֹדֶשׁ",
  "חודשים": "חֳדָשִׁים",
  "שנה": "שָׁנָה",
  "שנים": "שָׁנִים",
  "עכשיו": "עַכְשָׁו",
  "מחר": "מָחָר",
  "אתמול": "אֶתְמוֹל",
  "תמיד": "תָּמִיד",
  "לפעמים": "לִפְעָמִים",

  // אוכל ושתייה
  "מים": "מַיִם",
  "אוכל": "אֹכֶל",
  "לחם": "לֶחֶם",
  "חלב": "חָלָב",
  "גבינה": "גְּבִינָה",
  "ביצה": "בֵּיצָה",
  "ביצים": "בֵּיצִים",
  "תפוח": "תַּפּוּחַ",
  "תפוחים": "תַּפּוּחִים",
  "קפה": "קָפֶה",
  "תה": "תֵּה",
  "סוכר": "סֻכָּר",
  "מלח": "מֶלַח",
  "אורז": "אֹרֶז",
  "בשר": "בָּשָׂר",
  "דג": "דָּג",
  "דגים": "דָּגִים",
  "ירקות": "יְרָקוֹת",
  "פירות": "פֵּרוֹת",

  // טבע וסביבה
  "ארץ": "אֶרֶץ",
  "ארצות": "אֲרָצוֹת",
  "עיר": "עִיר",
  "ערים": "עָרִים",
  "כפר": "כְּפָר",
  "כפרים": "כְּפָרִים",
  "רחוב": "רְחוֹב",
  "רחובות": "רְחוֹבוֹת",
  "דרך": "דֶּרֶךְ",
  "דרכים": "דְּרָכִים",
  "שמש": "שֶׁמֶשׁ",
  "ירח": "יָרֵחַ",
  "כוכב": "כּוֹכָב",
  "כוכבים": "כּוֹכָבִים",
  "ים": "יָם",
  "נהר": "נָהָר",
  "הר": "הַר",
  "עצים": "עֵצִים",
  "פרח": "פֶּרַח",
  "פרחים": "פְּרָחִים",
  "אור": "אוֹר",

  // רגשות וערכים
  "אהבה": "אַהֲבָה",
  "תקווה": "תִּקְוָה",
  "אמונה": "אֱמוּנָה",
  "שמחה": "שִׂמְחָה",
  "חיים": "חַיִּים",
  "לב": "לֵב",
  "כבוד": "כָּבוֹד",
  "חופש": "חֹפֶשׁ",
  "אמת": "אֱמֶת",
  "צדק": "צֶדֶק",

  // מדינה וחברה
  "ישראל": "יִשְׂרָאֵל",
  "מדינה": "מְדִינָה",
  "מדינות": "מְדִינוֹת",
  "ממשלה": "מֶמְשָׁלָה",
  "חדשות": "חֲדָשׁוֹת",
  "מלחמה": "מִלְחָמָה",
  "צבא": "צָבָא",
  "ביטחון": "בִּטָּחוֹן",
  "חייל": "חַיָּל",
  "חיילים": "חַיָּלִים",

  // תארים
  "טוב": "טוֹב",
  "טובה": "טוֹבָה",
  "טובים": "טוֹבִים",
  "גדול": "גָּדוֹל",
  "גדולה": "גְּדוֹלָה",
  "קטן": "קָטָן",
  "קטנה": "קְטַנָּה",
  "חדש": "חָדָשׁ",
  "חדשה": "חֲדָשָׁה",
  "יפה": "יָפֶה",
  "יפים": "יָפִים",
  "חשוב": "חָשׁוּב",
  "חשובה": "חֲשׁוּבָה",
};


  const excludedSelector = [
    "script",
    "style",
    "noscript",
    "template",
    "textarea",
    "input",
    "select",
    "option",
    "code",
    "pre",
    "kbd",
    "samp",
    "svg",
    "canvas",
    "[contenteditable]",
    "[data-menaked-ui]",
  ].join(",");

  const nodes = new Map<Text, SavedNode>();

  const body = document.body;

  if (!body) {
    return { mode: "applied", changed: 0 };
  }

  const walker = document.createTreeWalker(
    body,
    NodeFilter.SHOW_TEXT,
  );

  let current = walker.nextNode();

  while (current) {
    const textNode = current as Text;
    const parent = textNode.parentElement;
    const original = textNode.nodeValue ?? "";

    if (
      parent &&
      !parent.closest(excludedSelector) &&
      !parent.isContentEditable &&
      !/[\u05B0-\u05C7]/.test(original) &&
      /[\u05D0-\u05EA]/.test(original)
    ) {
      const transformed = original.replace(
        /[\u05D0-\u05EA]+/g,
        (word) => sampleDictionary[word] ?? word,
      );

      if (transformed !== original) {
        nodes.set(textNode, {
          original,
          transformed,
        });

        textNode.nodeValue = transformed;
      }
    }

    current = walker.nextNode();
  }

  pageWindow[stateKey] = {
    active: true,
    nodes,
  } satisfies PageState;

  return {
    mode: "applied",
    changed: nodes.size,
  };
}
