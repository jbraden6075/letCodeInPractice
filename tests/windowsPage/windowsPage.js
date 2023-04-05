import { ClientFunction } from 'testcafe'
import windowsPageRepo from '../../pom/windowsPageRepo'


fixture `letCodeIn - windows`
    .page`https://letcode.in/windows`

test('TestCafe Can Read the Title Of a Newly Opened Tab', async t => {
    await t
        .click(windowsPageRepo.btnHomePage)

    let windowTitle = ClientFunction(() => document.title)

    await t
        .expect(windowTitle()).eql('LetCode - Testing Hub')
})

// TODO: Figure out how to get around TestCafe's window issues
test('TestCafe Can Close The Parent Window', async t => {
    let parentWindow = ClientFunction(() => document.title)
    let focusWindow1 = ClientFunction(() => parentWindow.focus())


    await t
        .click(windowsPageRepo.btnHomePage)

    await focusWindow1()
    await parentWindow

    let childWindow = ClientFunction(() => document.title)

    console.log(await childWindow())
})
