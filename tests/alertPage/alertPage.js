import alertPageRepo from '../../pom/alertPageRepo'


fixture `letCodeIn - alert`
    .page `https://letcode.in/alert`

test('TestCafe Can handle Alert Dialogs', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(alertPageRepo.btnSimpleAlert)
        .takeScreenshot({ path: "./artifacts/screenshots", fullPage: true })
})
