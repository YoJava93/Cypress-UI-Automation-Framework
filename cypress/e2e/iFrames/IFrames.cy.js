import { navigateTo } from "../../support/pages/NavigationPage";
import { IFrames } from "../../support/pages/IFrames";
import _ from 'lodash';

const iFrames = new IFrames();

describe("Testing iframe", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Testing the iFrame happy path", () => {

        cy.get(iFrames.iFrameButtom).click();
        cy.switchToIframe(iFrames.externalIframeVideo).click()

    })


})