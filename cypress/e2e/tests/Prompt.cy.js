import { navigateTo } from "../../support/pages/NavigationPage";
import { PromptPage } from "../../support/pages/PromptPage";

const promptPage = new PromptPage;

describe("Testing ad prompt", () => {
    beforeEach(() => {
        navigateTo.main();
    })

    it("Testing closing an prompt", () => {
        cy.get(promptPage.entryAddButton).click();
        cy.handlePrompt("Closing the prompt");
        cy.get(promptPage.closeAdButton).should('be.visible').click({force:true});
        cy.get(promptPage.clickHereButton).click();
    })
})