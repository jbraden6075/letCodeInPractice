import { Selector, t } from 'testcafe'


class buttonPageRepo {
    constructor() {
        this.btnGotoHome = Selector('#home')
    }

    async clickButton(button) {
        await t
            .click(button)
    }
}

export default new buttonPageRepo()