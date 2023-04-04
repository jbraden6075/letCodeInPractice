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

// FIND THE BUG: Both radio buttons are allowed to be selected in the same group.

test('TestCafe Can Find Which Radio Button Is Selected', async t => {    
    let selected = 0
    let unselected = 0

    if(await radioAndCheckboxPageRepo.radBar.checked) {
        selected = 1
    }

    if(await radioAndCheckboxPageRepo.radFoo.checked) {
        unselected = 1
    }

    await t
        .expect(selected).eql(1)
        .expect(unselected).eql(0)
})

test('Verify Last Radio Button Is Disabled', async t => {
    let disabledFound = 0

    if(radioAndCheckboxPageRepo.radMaybe.hasAttribute('disabled')) {
        disabledFound = 1
    }

    await t
        .expect(disabledFound).eql(1)
})
