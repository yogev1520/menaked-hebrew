/**
 * Self-contained function injected into the active tab by browser.scripting.
 * Keep this function free of imported helpers and external closures.
 *
 * This is a DOM-safety prototype, not a production niqqud engine.
 */
export function togglePageNiqqudDemo(): {
  mode: "applied" | "restored";
  changed?: number;
  restored?: number;
} {
  const stateKey = "__MENAKED_DEMO_STATE_V1__";
  const pageWindow = window as Window & {
    [key: string]: unknown;
  };

  type SavedNode = {
    original: string;
    transformed: string;
  };

  const currentState = pageWindow[stateKey] as
    | { active: boolean; nodes: Map<Text, SavedNode> }
    | undefined;

  if (currentState?.active) {
    let restored = 0;

    for (const [node, saved] of currentState.nodes) {
      if (node.isConnected && node.nodeValue === saved.transformed) {
        node.nodeValue = saved.original;
        restored += 1;
      }
    }

    currentState.nodes.clear();
    currentState.active = false;
    return { mode: "restored", restored };
  }

  const sampleDictionary: Record<string, string> = {
    "שלום": "שָׁלוֹם",
    "עולם": "עוֹלָם",
    "עברית": "עִבְרִית",
    "מנקד": "מְנַקֵּד",
    "ספר": "סֵפֶר",
    "ילדים": "יְלָדִים",
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
  const walker = document.createTreeWalker(
    document.body,
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
        nodes.set(textNode, { original, transformed });
        textNode.nodeValue = transformed;
      }
    }

    current = walker.nextNode();
  }

  pageWindow[stateKey] = { active: true, nodes };
  return { mode: "applied", changed: nodes.size };
}
