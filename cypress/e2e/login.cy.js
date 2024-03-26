import { navigateTo } from "../support/pages/Navigation";
import { auth } from "../support/pages/Auth";


describe('Login: tests to verify login functionalities', () => {

   // before each method, to clear the cookies and to navigate to login page.
    beforeEach(() => {
        navigateTo.loginPage(); 
    })

    it('Test login funtionality hapy path, correct username and password', () => {
       cy.fixture('users').then((user) => {
        auth.login(user.user1.username, user.user1.password);
       })
       
       cy.textExists('You logged into a secure area!');

       auth.logout();

       cy.textExists('You logged out of the secure area!');
    })

    it('Test login funtionality sad path, wrong username and correct password', () => {
       cy.fixture('users').then((user) => {
        auth.login(user.user2.wrongUsername, user.user2.password);
       })

       cy.textExists('Your username is invalid!');
    })

    it('Test login funtionality sad path, correct username and wrong password', () => {
       cy.fixture('users').then((user) => {
        auth.login(user.user3.username, user.user3.wrongPassword);
       })

       cy.textExists('Your password is invalid!');
    })

    it('Test login funtionality sad path, empty username and correct password', () => {
      cy.fixture('users').then((user) => {
       auth.login(user.user4.emptyUsername, user.user4.password);
      })

      cy.textExists('Your username is invalid!');
   })

   it('Test login funtionality sad path, correct username and empty password', () => {
      cy.fixture('users').then((user) => {
       auth.login(user.user5.username, user.user5.emptyPassword);
      })

      cy.textExists('Your password is invalid!');
   })

   it('Test login funtionality sad path, incorrect username case and correct password case', () => {
      cy.fixture('users').then((user) => {
       auth.login(user.user6.usernameWrongCase, user.user6.password);
      })

      cy.textExists('Your username is invalid!');
   })

   it('Test login funtionality sad path, correct username case and incorrect password case', () => {
      cy.fixture('users').then((user) => {
       auth.login(user.user7.username, user.user7.passwordWrongCase);
      })

      cy.textExists('Your password is invalid!');
   })

  })