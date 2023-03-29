import { Selector } from 'testcafe'
import alertPageRepo from '../../pom/alertPageRepo'


fixture `letCodeIn - alert`
    .page `https://letcode.in/alert`

test('TestCafe Can Handle Alert Dialogs', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(alertPageRepo.btnSimpleAlert)
})

test('TestCafe Can Get Dialog History', async t => {
    await t
        .setNativeDialogHandler((type) => {
            if(type === 'confirm')
                return true
        })

        .click(alertPageRepo.btnConfirmAlert)

    const dialogs = await t.getNativeDialogHistory()

    console.log(dialogs[0])

    await t
        .expect(dialogs[0].type).eql('confirm')
})

test('User Can Populate a Prompt Dialog', async t => {
    

    await t
        .setNativeDialogHandler((type) => {
            if(type == 'prompt') {
                return 'Bob Bobbers'
            }
        })

        .click(alertPageRepo.btnPromptAlert)
        .expect(alertPageRepo.notifPromptAlert.innerText).eql('Your name is: Bob Bobbers')
})
