import { Selector } from 'testcafe'


class framePageRepo {
    constructor() {
        this.h1Frame = Selector('h1').withText('Frame')
    }
}

export default new framePageRepo()
