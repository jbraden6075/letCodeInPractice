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
