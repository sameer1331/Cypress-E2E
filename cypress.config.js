const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile:"cypress/support/e2e.js",
    chromeWebSecurity: false,
    baseUrl: "https://uat.finx.finstein.ai/",
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
