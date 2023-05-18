const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    spacPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },
});
