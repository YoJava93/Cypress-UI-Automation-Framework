import { navigateTo } from "../../support/pages/NavigationPage";
import { HoverOverPage } from "../../support/pages/HoverOverPage";

const hoverOverPage = new HoverOverPage();

describe("Testing hover over functionality", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Hever over test 1", () => {

        cy.get(hoverOverPage.hoverOverButton).click();

        cy.get(hoverOverPage.users).eq(1).trigger('mouseover');
          
        cy.get(hoverOverPage.user2).click({force : true});

        cy.textExists("Welcome user2 ")

    })



})