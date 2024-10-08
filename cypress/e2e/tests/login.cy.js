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

//     it('should submit with valid form', () => {
//         // Submit form flow
//         cy.getByData('new-user-email' ).type(TEST_USER_EMAIL)
//         cy.fillSelect ('new-user-system-role', ROLES.SUPERVISOR)
//         cy.getByData('new-facility-roles').click()
//         cy.getByData('autocomplete-checkbox-0').click()
//         cy.getByData ('new-facility-roles').find('input' ).blur()
//         cy.getByData('submit-create-user').click()

//         // END Submit form flow
//         cy.wait('@create').then((interception) => {
//         const requestBody = interception.request.body

//         assert.isTrue(createUserRequestSchema.isValidSync(requestBody) )
//         cy.getByData('toast')
//         .should ( 'be.visible')
//         .should('include.text', 'Email with activation link sent successful')})
// })

})