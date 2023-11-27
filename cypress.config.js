const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://techglobal-training.com/frontend",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
