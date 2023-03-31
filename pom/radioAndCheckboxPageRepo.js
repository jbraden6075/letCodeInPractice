import { Selector } from 'testcafe'


class radioAndCheckboxPageRepo {
    constructor() {
        this.h1RadioAndCheckBox = Selector('h1').withText('Radio & Checkbox')
        this.radAnyOneYes = Selector('#yes')
        this.radOnlyOneYes = Selector('#one')
        this.radOnlyOneNo = Selector('#two')
    }
}

export default new radioAndCheckboxPageRepo()
