//POM for login page

// login function
   export class Auth {
        login(username, password) {
          
        // wrapping the type() method to accept empty fields.
        cy.get(locators.userName).then(e => { if (username !== '') cy.wrap(e).type(username) })
        
        cy.get(locators.password).then(e => { if (password !== '') cy.wrap(e).type(password) })
    
        cy.get(locators.submit).click();
    }
    
    logout() {
        return cy.get("a[href='/logout']").click();
    }
}

export const auth = new Auth();

class Locators {
    get userName() {
        return '[name="username"]';
    }
    get password() {
        return '[name="password"]';
    }
    get submit() {
        return 'button[type="submit"]';
    }
}

const locators = new Locators();