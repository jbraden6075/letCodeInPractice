import { ClientFunction, Selector, t } from 'testcafe'


class dropdownPageRepo {
    constructor() {
        this.h1Dropdown = Selector('h1').withText('Dropdown')
        this.selectFruits = Selector('#fruits')
        this.selectSuperHeroes = Selector('#superheros')
    }

    async selectOption(option) {
        await t
            .click(this.selectFruits)
            .click(Selector('option').withText(option))
    }

    async multiSelectOptions(option1, option2) {
        const selectOptions = ClientFunction(option => {
            option().selected = true
        })

        await selectOptions(option1)
        await selectOptions(option2)
    }
}

export default new dropdownPageRepo()
