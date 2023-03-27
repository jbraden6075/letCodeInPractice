import { Selector } from 'testcafe'

class alertPageRepo {
    constructor() {
        this.h1Alert = Selector('h1').withText('Alert')
        this.btnSimpleAlert = Selector('#accept')
    }
}

export default new alertPageRepo()
