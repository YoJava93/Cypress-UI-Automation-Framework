import { navigateTo } from "../../support/pages/NavigationPage";
import { AddRemovePage } from "../../support/pages/AddRemovePage";

const addRemovePage = new AddRemovePage();

describe("Test suit for practicing main cypress concepts", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Practice add and remove", () =>  {
        
        cy.get(addRemovePage.addRemoveButton).click();
        
        cy.elementIsVisible(addRemovePage.addButton);
        
        cy.get(addRemovePage.addButton).click();
        
        cy.get(addRemovePage.deleteButton).click();

    })

})