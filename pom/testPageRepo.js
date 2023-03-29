import { Selector, t} from 'testcafe'


class testPageRepo {
    constructor() {
        this.btnEdit = Selector('a').withText('Edit')
        this.btnButton = Selector('a').withText('Click')
        this.btnDropdown = Selector('a').withText('Drop-Down')
        this.btnAlert = Selector('a').withText('Dialog')
        this.btnFrame = Selector('a').withText('Inner HTML')
        this.btnRadio = Selector('a').withText('Toggle')
    }

    async navigateToEditPage() {
        await t
            .click(this.btnEdit)
    }

    async navigateToButtonPage() {
        await t
            .click(this.btnButton)
    }

    async navigateToDropdownPage() {
        await t
            .click(this.btnDropdown)
    }

    async navigateToAlertPage() {
        await t
            .click(this.btnAlert)
    }

    async navigateToFramePage() {
        await t
            .click(this.btnFrame)
    }

    async navigateToRadioPage() {
        await t
            .click(this.btnRadio)
    }
}

export default new testPageRepo()
