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
$ git clone 

# 3: Install dependencies
$ npm init

# 3: Install cypress
$ npm install cypress    
```

## Commands

```bash
# Opens up the cypress app UI
$ npx cypress open 
# then choose in which browser you want to run the tests
# and once the browser open click on login tests to run them

# See the cypress CLI page for more info

```

## Configuring for environments

The environment details are stored in the `cypress.config.js` file. To change environment, change the `baseUrl` to your desired env.

## Tech Details

* Cypress - Self proclaiming E2E test framework. Designed to keep UI tests simple and reliable. https://www.cypress.io/

* Cypress/Mocha + Chai - Cypress uses the Mocha & Chai combination for test runner and assertion library.

## Project Structure

```bash
# All the test code lives in here
./cypress/

# New commands and supporting helpers are stored in this directory
./cypress/support/

# Page helpers are stored in here. This is where custom cypress commands
# are stored such as: cy.visitLogintPage();
./cypress/support/pages/

# Storage of static data. Can be accessed by cy.fixtures('filename') command. I suggest a read up on the async nature of Cypress prior to this. An example of its use resides in the ./cypress/pages/product.js file, the cy.visitProductPage() function...
./cypress/fixtures/

# Location of all test files
./cypress/e2e/