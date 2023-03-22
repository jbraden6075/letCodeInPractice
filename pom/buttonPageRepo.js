import { Selector, t } from 'testcafe'


class buttonPageRepo {
    constructor() {
        this.btnGotoHome = Selector('#home')
        this.btnFindLocation = Selector('#position')
        this.btnColor = Selector('#color')
    }

    async clickButton(button) {
        await t
            .click(button)
    }
}

export default new buttonPageRepo()