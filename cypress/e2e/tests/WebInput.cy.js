import { navigateTo } from "../../support/pages/NavigationPage";
import { WebInputPage } from "../../support/pages/WebInputPage";


const webInputPage = new WebInputPage();

describe("Web input testing", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Web input practice", () => {

        cy.get(webInputPage.webInputButton).click();

        cy.generateRandomUser().then((user) => {

        // cy.log(`User: ${user.firstName} ${user.lastName}, Email: ${user.email}`);

        cy.get(webInputPage.inputNumber).type(user.randomNumber)
        cy.get(webInputPage.inputText).type(user.text)
        cy.get(webInputPage.inputPassword).type(user.password)
        cy.get(webInputPage.inputDate).type(user.date)
        cy.get(webInputPage.displayInputsButtom).click()
        })
    })    

})