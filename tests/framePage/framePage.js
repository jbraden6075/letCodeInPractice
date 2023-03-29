import { Selector } from 'testcafe'
import framePageRepo from '../../pom/framePageRepo'


fixture `letCodeIn - frame`
    .page `https://letcode.in/frame`

test('User Can Populate Fields Inside IFrames', async t => {
    const firstName = 'Bob'
    const lastName = 'Bobbers'

    await framePageRepo.switchToIFrame(framePageRepo.iframeFirst)
    await framePageRepo.populateNameFields(firstName, lastName)

    await t
        .expect(Selector('p').withText('You have entered ' + firstName + ' ' + lastName).visible).ok()
        .switchToMainWindow()
})

test('TestCafe Can Switch To Nested IFrames', async t => {
    const email = 'bob.bobbers@mailinator.com'

    await t
        .switchToIframe(framePageRepo.iframeFirst)
        .switchToIframe(framePageRepo.iframeInner)

    await framePageRepo.populateEmailField(email)

    function setEmailValue() {
        `document.getElementByName('email').setAttribute('value', email)`
    }

    setEmailValue()

    await t
        .expect(framePageRepo.txtEmail.value).eql(email)
        .switchToMainWindow()
})
