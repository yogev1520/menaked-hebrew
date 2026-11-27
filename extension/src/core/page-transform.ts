
/**
 * Self-contained function injected into the active tab by browser.scripting.
 * Keep this function free of imported helpers and external closures.
 *
 * DOM-safe Hebrew niqqud demonstration using an external dictionary.
 * This is not a production niqqud engine.
 */
export function togglePageNiqqudDemo(
  dictionary: Readonly<Record<string, string>>,
): {
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
        (word) => dictionary[word] ?? word,
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
