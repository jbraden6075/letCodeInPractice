import { Selector } from 'testcafe'

class alertPageRepo {
    constructor() {
        this.h1Alert = Selector('h1').withText('Alert')
    }
}

export default new alertPageRepo()