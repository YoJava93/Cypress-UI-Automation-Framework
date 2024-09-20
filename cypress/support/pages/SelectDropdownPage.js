export class SelectDropdownPage {
    get dropdownListButton() {
        return 'a[href="/dropdown"]'
    }

    get simpleDropdown() {
        return 'select[id="dropdown"]'
    }

    get countryDropdown() {
        return 'select[id="country"]'
    }
}