import { Selector } from 'testcafe'
import dropdownPageRepo from '../../pom/dropdownPageRepo'


fixture `letCodeIn - dropdown`
    .page `https://letcode.in/dropdowns`

test('User Can Select Option from Dropdown', async t => {
    const optionNotification = Selector('p').withText('You have selected Apple')

    await dropdownPageRepo.selectOption('Apple')

    await t
        .expect(optionNotification.visible).ok()
})
