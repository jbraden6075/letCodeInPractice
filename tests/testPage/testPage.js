import { ClientFunction, Selector } from 'testcafe'
import editorPageRepo from '../../pom/editPageRepo'
import testPageRepo from '../../pom/testPageRepo'

fixture `letCodeIn - test`
    .page `letcode.in/test`

test('User Can Navigate To Edit Page', async t => {
    const editPageHref = 'https://letcode.in/edit'

    await testPageRepo.navigateToEditPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(editPageHref)
        .expect(editorPageRepo.h1Input.visible).ok()
})

test('User Can Navigate To Button Page', async t => {
const buttonPageHref = 'https://letcode.in/button'
    
    await testPageRepo.navigateToButtonPage()

    const url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(buttonPageHref)
        .expect(buttonPageRepo.h1Button.visible).ok()
})