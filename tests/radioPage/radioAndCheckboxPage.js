import radioAndCheckboxPageRepo from '../../pom/radioAndCheckboxPageRepo'


fixture `letCodeIn - radio & checkbox`
    .page `https://letcode.in/radio`

test('User Can Select a Radio Button', async t => {
    await t
        .click(radioAndCheckboxPageRepo.radAnyOneYes)
        .expect(radioAndCheckboxPageRepo.radAnyOneYes.checked).ok()
})

test('User Can Only Select One Radio Button Per Group', async t => {
    await t
        .click(radioAndCheckboxPageRepo.radOnlyOneYes)
        .click(radioAndCheckboxPageRepo.radOnlyOneNo)

        .expect(radioAndCheckboxPageRepo.radOnlyOneYes.checked).notOk()
        .expect(radioAndCheckboxPageRepo.radOnlyOneNo.checked).ok()
})
