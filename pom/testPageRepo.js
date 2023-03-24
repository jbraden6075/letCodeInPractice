import { Selector, t} from 'testcafe'


class testPageRepo {
    constructor() {
        this.btnEdit = Selector('a').withText('Edit')
        this.btnButton = Selector('a').withText('Click')
        this.btnDropdown = Selector('a').withText('Drop-Down')
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
}

export default new testPageRepo()
