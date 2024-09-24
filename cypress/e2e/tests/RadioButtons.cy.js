import { navigateTo } from "../../support/pages/NavigationPage";
import { RadioButtonsPage } from "../../support/pages/RadioButtonsPage";

const radioButtonnPage = new RadioButtonsPage();

describe("Testing radio buttons", () => {

    beforeEach(() => {
        navigateTo.main();
    }) 

    it("Testing radio buttons", () => {
        cy.get(radioButtonnPage.radioButtonsButton).click();
        cy.get(radioButtonnPage.redRadioButton).click()
        cy.get(radioButtonnPage.blackRadioButton).click()
        cy.get(radioButtonnPage.blueRadioButton).click()


        cy.get(radioButtonnPage.blueRadioButton).should('be.checked')
                                               
    })
        
    

})