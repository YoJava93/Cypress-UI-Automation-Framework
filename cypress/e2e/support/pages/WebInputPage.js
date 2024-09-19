
export class WebInputPage {

    get webInputButton() {
        return 'a[href="/inputs"]'
    }

    get inputNumber() {
        return 'input[id="input-number"]'
    }

    get inputText() {
        return 'input[id="input-text"]'
    }

    get inputPassword() {
        return 'input[id="input-password"]'
    }

    get inputDate() {
        return 'input[id="input-date"]'
    }

    get displayInputsButtom() {
        return 'button[id="btn-display-inputs"]'
    }
}