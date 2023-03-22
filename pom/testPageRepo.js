import { Selector, t} from 'testcafe'


class testPageRepo {
    constructor() {
        this.btnEdit = Selector('a').withText('Edit')
        this.btnButton = Selector('a').withText('Click')
    }

    async navigateToEditPage() {
        await t
            .click(this.btnEdit)
    }

    async navigateToButtonPage() {
        await t
            .click(this.btnButton)
    }
}

export default new testPageRepo()