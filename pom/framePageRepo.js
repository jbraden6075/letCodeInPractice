import { Selector, t } from 'testcafe'


class framePageRepo {
    constructor() {
        this.h1Frame = Selector('h1').withText('Frame')
        this.iframeFirst = Selector('#firstFr')
        this.txtFirstName = Selector('input').withAttribute('name', 'fname')
        this.txtLastName = Selector('input').withAttribute('name', 'lname')
        this.iframeNested = Selector('iframe').withAttribute('src', 'innerFrame')
        this.iframeInner = Selector('iframe').nth(1)
        this.txtEmail = Selector('input').withAttribute('name', 'email')
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

    async populateEmailField(email) {
        await t
            .typeText(this.txtEmail, email, { replace: true, paste: true} )
    }
}

export default new framePageRepo()
