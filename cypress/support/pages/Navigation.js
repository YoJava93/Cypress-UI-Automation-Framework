// utility method for navigation to different pages
export class NavigateTo{
    loginPage(){
        cy.visit(Cypress.env('login'));
    }
}

export const navigateTo = new NavigateTo();