# Cypress | Test | UI Framework  

## Versions / Dependencies

```
Cypress:    13.7.0
Electron:   27.1.3    
Node:       v20.11.1                
```

## Getting up and running

```bash
# Pre: Ensure dependancies are installed

# 1: Create new folder in desired location and move into it
$ mkdir CypressAutomationFramework
$ cd CypressAutomationFramework

# 2: Clone the repo
$ git clone https://github.com/YoJava93/Cypress-UI-Automation-Framework.git

# 3: Install dependencies
$ npm init

# 4: Install cypress
$ npm install cypress    
```

## Commands

```bash
# Opens up the cypress app UI
$ npx cypress open 
# then choose in which browser you want to run the tests
# and once the browser open click on login tests to run them

# See the cypress CLI page for more info https://docs.cypress.io/guides/guides/command-line

```

## Configuring for environments

The environment details are stored in the `cypress.config.js` file. To change environment, change the `baseUrl` to your desired env.

## Tech Details

* Cypress - Self proclaiming E2E test framework. Designed to keep UI tests simple and reliable. https://www.cypress.io/
* Time Travel: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
* Automatic Waiting: Never add waits or sleeps to your tests.
* Screenshots and Videos: View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.
* Cross browser Testing
* Cypress processes respond to the application’s events and processes command in real-time. With real-time reloads in Cypress, tests are reloaded
automatically as and when changes are made in the app.

## Project Structure

```bash
# All the test code lives in here
./cypress/

# New commands and supporting helpers are stored in this directory
./cypress/support/

# Page helpers are stored in here. This is where custom cypress commands
# are stored such as: cy.NavigateTo();
./cypress/support/pages/

# Storage of static data. Can be accessed by cy.fixtures('filename') command. 
./cypress/fixtures/

# Location of all test files
./cypress/e2e/