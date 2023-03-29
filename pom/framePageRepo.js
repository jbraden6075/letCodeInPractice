import { Selector, t } from 'testcafe'


class framePageRepo {
    constructor() {
        this.h1Frame = Selector('h1').withText('Frame')
        this.iframeFirst = Selector('#firstFr')
        this.txtFirstName = Selector('input').withAttribute('name', 'fname')
        this.txtLastName = Selector('input').withAttribute('name', 'lname')
    }

    async switchToIFrame(iFrame) {
        await t
            .switchToIframe(this.iframeFirst)
    }

    async populateNameFields(firstName, lastName) {
        await t
            .typeText(this.txtFirstName, firstName, { replace: true, paste: true})
            .typeText(this.txtLastName, lastName, { replace: true, paste: true})
    }
}

export default new framePageRepo()
