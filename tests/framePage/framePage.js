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