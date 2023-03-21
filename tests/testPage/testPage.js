import { ClientFunction, Selector } from 'testcafe'
import editorPageRepo from '../../pom/editPageRepo'
import testPageRepo from '../../pom/testPageRepo'

fixture `letCodeIn - test`
    .page `letcode.in/test`

test('User Can Navigate To EditPage', async t => {
    await testPageRepo.navigateToEditPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql('https://letcode.in/edit')
        .expect(editorPageRepo.h1Input.visible).ok()
})