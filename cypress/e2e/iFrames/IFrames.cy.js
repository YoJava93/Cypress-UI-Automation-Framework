import { navigateTo } from "../../support/pages/NavigationPage";
import { IFramesPage } from "../support/pages/IFramesPage";

const iFramesPage = new IFramesPage();

describe("Testing iframe", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Testing the iFrame happy path", () => {

        cy.get(iFramesPage.iFrameButton).click();
        
        cy.switchToIframe(iFramesPage.externalIframeVideo).find(iFramesPage.videoButton).click();

    })


})