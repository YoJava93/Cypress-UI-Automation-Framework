// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { faker } from "@faker-js/faker/.";

// function to validate if test exists
Cypress.Commands.add('textExists', (text) => {
    cy.contains(text).should('exist');
})


Cypress.Commands.add('elementIsVisible', (selector) => {
    cy.get(selector).should('be.visible');
})

Cypress.Commands.add('generateRandomUser', () => {
    return {
       firstName : faker.person.firstName(),
       lastName : faker.person.lastName(),
       email : faker.internet.email(),
       phoneNumber : faker.phone.number(),
       randomNumber : faker.finance.accountNumber(),
       password : faker.finance.maskedNumber(),
       text : faker.animal.dog(),
       date : faker.date.past().toISOString().split('T')[0]
    }
})

Cypress.Commands.add('handlePromt', (response) => {
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(response)
    })
})

Cypress.Commands.add('switchToIframe', (iFrameSelector) => {
    cy.get(iFrameSelector)
    .its('0.contentDocument.body') // Access the content document of the iFrame
    .should('not.be.empty')
    .then(cy.wrap); // Wrap the iFrame's body so Cypress commands can be used within it
})

Cypress.Commands.add('switchToMainIframe', () => {
    return cy;// Returning Cypress's main context
})
