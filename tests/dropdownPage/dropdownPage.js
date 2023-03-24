import { Selector } from 'testcafe'
import dropdownPageRepo from '../../pom/dropdownPageRepo'


fixture `letCodeIn - dropdown`
    .page `https://letcode.in/dropdowns`

test('User Can Select a Single Option from Dropdown', async t => {
    const optionNotification = Selector('p').withText('You have selected Apple')

    await dropdownPageRepo.selectOption('Apple')

    await t
        .expect(optionNotification.visible).ok()
})

test('User Can Select Multiple Options from Multi-Select', async t => {
    const option1 = Selector('#superheros').find('option').withText('The Avengers')
    const option2 = Selector('#superheros').find('option').withText('Batman')

    await dropdownPageRepo.multiSelectOptions(option1, option2)

    await t
        .expect(option1.selected).ok()
        .expect(option2.selected).ok()
})
