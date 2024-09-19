import { LoginPage } from "../../support/pages/LoginPage"
import { navigateTo } from "../../support/pages/NavigationPage"

const loginPage = new LoginPage();

describe("Testing login functionality", () => {

    beforeEach(() => {
        navigateTo.main();
    })

    it("Login test", () => {

        cy.get(loginPage.loginPageButtom).click();

        cy.fixture('users').then((user) => {
            cy.get(loginPage.username).type(user.user1.username)
            cy.get(loginPage.password).type(user.user1.password)
        })
            cy.get(loginPage.loginButton).click();

        cy.handlePromt("Handling the succes prompt")

        cy.textExists("You logged into a secure area!")
        cy.get(loginPage.logoutButton).click()
    })

})

