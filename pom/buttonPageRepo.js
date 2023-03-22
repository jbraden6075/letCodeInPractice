import { Selector, t } from 'testcafe'


class buttonPageRepo {
    constructor() {
        this.btnGotoHome = Selector('#home')
        this.btnFindLocation = Selector('#position')
        this.btnColor = Selector('#color')
        this.h1Button = Selector('h1').withText('Button')
    }

    async clickButton(button) {
        await t
            .click(button)
    }
}

export default new buttonPageRepo()