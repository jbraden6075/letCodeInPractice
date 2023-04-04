import { Selector } from 'testcafe'


class radioAndCheckboxPageRepo {
    constructor() {
        this.h1RadioAndCheckBox = Selector('h1').withText('Radio & Checkbox')
        this.radAnyOneYes = Selector('#yes')
        this.radOnlyOneYes = Selector('#one')
        this.radOnlyOneNo = Selector('#two')
        this.radFoo = Selector('#foo')
        this.radBar = Selector('#notfoo')
        this.radMaybe = Selector('#maybe')
        this.checkboxRememberMe = Selector('label').withText(' Remember me').child('input')
    }
}

export default new radioAndCheckboxPageRepo()
