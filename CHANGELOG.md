# Changelog | יומן שינויים

This file records notable project changes. | קובץ זה מתעד שינויים משמעותיים בפרויקט.

## [Unreleased] — First desktop proof-of-concept scaffold

### Added
- Added a WXT + TypeScript extension scaffold targeting Manifest V3.
- Added a minimal Hebrew popup with explicit active-tab activation.
- Added a reversible text-node transformation proof of concept using a tiny sample dictionary.
- Added a replaceable NiqqudEngine contract and unit tests for the mock engine.
- Excluded editable controls, code, scripts, styles, templates, and already-vocalized text nodes in the page demo.

### Limitations
- The sample dictionary is not a real niqqud model and is not suitable for linguistic quality evaluation.
- The scaffold has not yet been installed, built, type-checked, or tested in Chrome and Opera.
- Exact restoration and page-interaction behavior still require browser integration tests.
- No production model or ONNX inference has been integrated.

---

## [Unreleased] — Initial technical baseline

### Added
- Selected TypeScript and WXT as the initial desktop development baseline.
- Selected Manifest V3 for the Chrome and Opera desktop prototype.
- Established least-privilege, user-initiated active-tab access as the permission direction.
- Defined a replaceable NiqqudEngine interface and mock-engine-first prototype.
- Documented ONNX Runtime Web with WASM as an inference candidate, not a production commitment.
- Added a bilingual, reproducible niqqud engine evaluation protocol.
- Kept final model selection open pending same-corpus accuracy, runtime, resource, and license tests.

---

## [Unreleased] — Community participation and contribution safeguards

### Added
- Confirmed that Menaked welcomes community issues, discussions, documentation improvements, and pull requests.
- Established maintainer-controlled review and merge.
- Added bilingual contribution and security guidance.

### Not yet implemented
- GitHub branch protection has not yet been verified or configured.
- Production niqqud model integration.
- Android or iOS application/extension.
- Automated browser compatibility tests and release packages.

---

## [טרם שוחרר] — אב־טיפוס ראשון למחשב

### נוסף
- נוסף שלד תוסף WXT ו-TypeScript המכוון ל-Manifest V3.
- נוספה חלונית עברית מינימלית עם הפעלה מפורשת בלשונית הפעילה.
- נוספה הוכחת היתכנות לשינוי הפיך של צומתי טקסט באמצעות מילון דוגמאות קטן.
- נוסף חוזה NiqqudEngine שניתן להחלפה ובדיקות יחידה למנוע הדמה.
- בהדגמת העמוד מוחרגים פקדים הניתנים לעריכה, קוד, סקריפטים, סגנונות, תבניות וצומתי טקסט שכבר מנוקדים.

### מגבלות
- מילון הדוגמאות אינו מודל ניקוד אמיתי ואינו מתאים להערכת איכות לשונית.
- השלד עדיין לא הותקן, נבנה, עבר בדיקת טיפוסים או נבדק ב-Chrome וב-Opera.
- שחזור מדויק והתנהגות מול אינטראקציות העמוד עדיין דורשים בדיקות אינטגרציה בדפדפן.
- לא שולב מודל ייצור או ONNX inference.

---

## [טרם שוחרר] — בסיס טכנולוגי ראשוני

### נוסף
- נבחרו TypeScript ו-WXT כבסיס הפיתוח הראשוני למחשב.
- נבחר Manifest V3 לאב־טיפוס Chrome ו-Opera למחשב.
- הוגדר כיוון הרשאות מצומצם, המבוסס על גישה ללשונית הפעילה בעקבות פעולת משתמש.
- הוגדר ממשק NiqqudEngine שניתן להחלפה ואסטרטגיית התחלה עם מנוע דמה.
- תועד ONNX Runtime Web עם WASM כמועמד להרצה, ולא כהתחייבות לייצור.
- נוסף פרוטוקול דו־לשוני ובר־שחזור להערכת מנועי ניקוד.
- בחירת המודל הסופי נשארה פתוחה עד לבדיקות דיוק, סביבת הרצה, משאבים ורישוי על אותו קורפוס.

