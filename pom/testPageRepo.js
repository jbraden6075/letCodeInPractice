import { Selector, t} from 'testcafe'


class testPageRepo {
    constructor() {
        this.btnEdit = Selector('a').withText('Edit')
    }

    async navigateToEditPage() {
        await t
            .click(this.btnEdit)
    }
}

export default new testPageRepo()