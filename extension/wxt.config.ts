import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    name: "מְנַקֵּד – ניקוד עברי",
    description: "אב־טיפוס להוספת ניקוד לטקסט עברי בדף האינטרנט",
    version: "0.1.0",
    permissions: ["activeTab", "scripting"],
    action: {
      default_title: "מְנַקֵּד",
    },
  },
});
