const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://practice.expandtesting.com',
    env: {
      login : "/login"
    },
    retries : 1,
    defaultCommandTimeout: 5000,
    viewportHeight: 800,
    viewportWidth: 1200,
    video: false
  },
});