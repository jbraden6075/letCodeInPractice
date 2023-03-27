import alertPageRepo from '../../pom/alertPageRepo'


fixture `letCodeIn - alert`
    .page `https://letcode.in/alert`

test('TestCafe Can handle Alert Dialogs', async t => {
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
