import { navigateTo } from "../../support/pages/NavigationPage";
import { SelectDropdownPage } from "../../support/pages/SelectDropdownPage";

const selectDropdownPage = new SelectDropdownPage();

describe("Testing select dropdown", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Testing simple dropdown ", () => {

        cy.get(selectDropdownPage.dropdownListButton).click();
        cy.get(selectDropdownPage.simpleDropdown).select("Option 1").should('have.value', '1');
    })

    it("Testing country dropdown", () => {
        cy.get(selectDropdownPage.dropdownListButton).click();
        cy.get(selectDropdownPage.countryDropdown).select("AL").should('have.value', 'AL')
    })

})