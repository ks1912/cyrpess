const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    usreName: process.env.U_PASS,
    password: process.env.U_NAME,
  },
  viewportHeight: 630,
  viewportWidth: 1080,
  retries: {
    runMode: 1, // retires during cypress run, by default it is 0
    openMode: 0, // retires during cypress open, by default it is 0
  },
  // retries: 1, // If retires: 1 then for both runMode and openMode it is 1.
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.BASE_URL_API,
  },
});
