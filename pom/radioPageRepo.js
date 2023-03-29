import { Selector } from 'testcafe'


class radioPageRepo {
    constructor() {
        this.h1RadioAndCheckBox = Selector('h1').withText('Radio & Checkbox')
    }
}

export default new radioPageRepo()
