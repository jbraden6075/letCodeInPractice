import radioAndCheckboxPageRepo from '../../pom/radioAndCheckboxPageRepo'


fixture `letCodeIn - radio & checkbox`
    .page `https://letcode.in/radio`

test('User Can Select a Radio Button', async t => {
    await t
        .click(radioAndCheckboxPageRepo.radAnyOneYes)
        .expect(radioAndCheckboxPageRepo.radAnyOneYes.checked).ok()
})
