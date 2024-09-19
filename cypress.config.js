const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://practice.expandtesting.com',
    env: {
      main : "/"
    },
     // define how many times the test should re-run if it failed
     retries : 1,
     // the waiting time for the page to load and to find/click on elements
     defaultCommandTimeout: 2000,
     // height and width of the opening window when running the tests
     viewportHeight: 800,
     viewportWidth: 1200,
     // to save or not video of the tests run
     video: false
  },
});