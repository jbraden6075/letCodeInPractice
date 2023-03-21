import { ClientFunction, Selector } from 'testcafe'

fixture `letCodeIn - test`
    .page `letcode.in/test`

test('User Can Navigate To EditPage', async t => {
    await t
        .click(Selector('a').withText('Edit'))

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql('https://letcode.in/edit')
        .expect(Selector('h1').withText('Input').visible).ok()
})