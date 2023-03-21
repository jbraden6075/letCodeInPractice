import { Selector, t } from 'testcafe'


class editPageRepo {
    constructor() {
        this.txtFullName = Selector('#fullName')
        this.txtAppendText = Selector('#join')
        this.txtGetText = Selector('#getMe')
        this.txtDeleteText = Selector('#clearMe')
        this.txtDisabled = Selector('#noEdit')
        this.txtReadonly = Selector('#dontwrite')
        this.h1Input = Selector('h1').withText('Input')
    }

    async typeTextIntoFullNameField(text) {
        await t
            .typeText(this.txtFullName, text, {replace: true, paste: true})
    }

    async appendTextToAppendField(text) {
        await t
            .selectText(this.txtAppendText, 9,9)
            .typeText(this.txtAppendText, text)
    }

    async deleteTextFromField(element) {
        await t
            .selectText(element, 0, 100)
            .pressKey('delete')
    }
}

export default new editPageRepo()