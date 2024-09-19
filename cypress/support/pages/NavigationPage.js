class NavigateTo {
    main() {
        cy.visit(Cypress.env('main'));
    }
}

export const navigateTo = new NavigateTo();