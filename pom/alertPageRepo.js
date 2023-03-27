import { Selector } from 'testcafe'

class alertPageRepo {
    constructor() {
        this.h1Alert = Selector('h1').withText('Alert')
        this.btnSimpleAlert = Selector('#accept')
        this.btnConfirmAlert = Selector('#confirm')
    }
}

export default new alertPageRepo()
