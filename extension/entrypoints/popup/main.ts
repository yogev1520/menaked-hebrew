import { browser } from "wxt/browser";
import { togglePageNiqqudDemo } from "../../src/core/page-transform";

const button = document.querySelector<HTMLButtonElement>("#toggle");
const status = document.querySelector<HTMLElement>("#status");

if (!button || !status) {
  throw new Error("Menaked popup UI is missing required elements.");
}

button.addEventListener("click", async () => {
  button.disabled = true;
  status.textContent = "מעבד את העמוד…";

  try {
    const [tab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (typeof tab.id !== "number") {
      throw new Error("לא נמצאה לשונית פעילה.");
    }

    const results = await browser.scripting.executeScript({
      target: { tabId: tab.id },
      func: togglePageNiqqudDemo,
    });

    const result = results[0]?.result;
    if (!result) {
      throw new Error("לא התקבלה תוצאה מהעמוד.");
    }

    if (result.mode === "restored") {
      button.textContent = "החל ניקוד לדוגמה";
      status.textContent = `הטקסט המקורי שוחזר (${result.restored} צומתי טקסט).`;
    } else {
      button.textContent = "שחזר טקסט מקורי";
      status.textContent = result.changed > 0
        ? `הוחל ניקוד לדוגמה ב-${result.changed} צומתי טקסט.`
        : "לא נמצאו בדף מילים ממאגר הדוגמאות.";
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "שגיאה לא ידועה";
    status.textContent = `לא ניתן לעבד את העמוד: ${message}`;
  } finally {
    button.disabled = false;
  }
});
