import { Selector } from 'testcafe'


class dropdownPageRepo {
    constructor() {
        this.h1Dropdown = Selector('h1').withText('Dropdown')
    }
}

export default new dropdownPageRepo()
