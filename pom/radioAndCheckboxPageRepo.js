import { Selector } from 'testcafe'


class radioAndCheckboxPageRepo {
    constructor() {
        this.h1RadioAndCheckBox = Selector('h1').withText('Radio & Checkbox')
        this.radAnyOneYes = Selector('#yes')
    }
}

export default new radioAndCheckboxPageRepo()
