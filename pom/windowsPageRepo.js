import { Selector } from 'testcafe'


class windowsPageRepo {
    constructor() {
        this.h1Windows = Selector('h1').withText('Windows')
        this.btnHomePage = Selector('#home')
    }
}

export default new windowsPageRepo()
