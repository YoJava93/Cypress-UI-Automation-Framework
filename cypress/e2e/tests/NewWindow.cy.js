import { navigateTo } from "../../support/pages/NavigationPage";
import { NewWindowPage } from "../../support/pages/NewWindowsPage";

const newWindowPage = new NewWindowPage;

describe("Testing multiple windows", () => {

    beforeEach( () => {
        navigateTo.main();
    })

    it("testing switch to window", () => {
        cy.get(newWindowPage.multipleWindowButton).click();
        cy.get(newWindowPage.clickHereButton).click();

        cy.visit('https://practice.expandtesting.com/windows/new')
        cy.textExists('Example of a new window page for Automation Testing Practice')
    })

})