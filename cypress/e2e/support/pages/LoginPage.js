export class LoginPage {

    get loginPageButtom() {
        return 'a[href="/login"]'
    }

    get username() {
        return '#username' // finding by id
    }

    get password() {
        return 'input[id="password"]'
    }

    get loginButton() {
        return 'button[type="submit"]'
    }

    get logoutButton() {
        return 'i[class="icon-2x icon-signout"]'
    }
}