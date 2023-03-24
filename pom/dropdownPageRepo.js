import { Selector, t } from 'testcafe'


class dropdownPageRepo {
    constructor() {
        this.h1Dropdown = Selector('h1').withText('Dropdown')
        this.selectFruits = Selector('#fruits')
    }

    async selectOption(option) {
        await t
            .click(this.selectFruits)
            .click(Selector('option').withText(option))
    }
}

export default new dropdownPageRepo()
