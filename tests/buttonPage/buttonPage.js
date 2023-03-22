import { ClientFunction, Selector } from 'testcafe'
import buttonPageRepo from '../../pom/buttonPageRepo'

fixture `letCodeIn - button`
    .page `https://letcode.in/buttons`

test('User Can Click On A Button And Navigate Back To Buttons Page', async t => {
    const button = buttonPageRepo.btnGotoHome
    const homeUrl = 'https://letcode.in/'
    const buttonUrl = 'https://letcode.in/buttons'

    await buttonPageRepo.clickButton(button)

    let url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(homeUrl)

    await t
        .navigateTo(buttonUrl)

    url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(buttonUrl)
})
