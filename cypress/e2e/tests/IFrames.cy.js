import { navigateTo } from "../../support/pages/NavigationPage";
import { IFramesPage } from "../../support/pages/IFramesPage";

const iFramesPage = new IFramesPage();

describe("Testing iframe", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Testing the iFrame happy path", () => {

        cy.get(iFramesPage.iFrameButton).click();
        
        cy.wait(3000)
        //                                                        something wrong with a locator
        cy.switchToIframe(iFramesPage.externalTextIframe).find(iFramesPage.externalTextIframeTypingBox)
                                                         .clear()
                                                         .type("Blah")

        // if i want to move to inner iframe i move one be one form upper to inner

    })


})