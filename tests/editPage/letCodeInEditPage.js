import { Selector } from 'testcafe'

fixture `letCodeIn - edit`
    .page `letcode.in/edit`

test('User Can Input Into Full Name Text Field', async t => {
    await t
        .typeText(Selector('#fullName'), 'Justin Braden', {replace: true, paste: true})

    function setFullNameValue() {
        `document.getElementById('fullName').setAttribute('value', 'Justin Braden')`
    }

    setFullNameValue()

    await t
        .expect(Selector('#fullName').value).eql('Justin Braden')
})

test('User Can Append Text To Text Field', async t => {
    await t
        .click(Selector('#join'))
        .selectText(Selector('#join'), 9,9)
        .typeText(Selector('#join'), ' appended text.')

    function setAppendValue() {
        `document.getElementById('join').setAttribute('value', 'I am good appended text.')`
    }

    setAppendValue()

    await t
        .expect(Selector('#join').value).eql('I am good appended text.')
})

test('TestCafe Can Read What Is In a Text Field', async t => {
    await t
        .expect(Selector('#getMe').value).eql('ortonikc')
})

test('User Can Delete Text From Text Field', async t => {
    await t
        .selectText(Selector('#clearMe'), 0, 18)
        .pressKey('delete')

    function setClearValue() {
        `document.getElementById('clearMe').setAttribute('value', '')`
    }

    setClearValue()

    await t
        .expect(Selector('#clearMe').value).eql('')
})

test('User Cannot Edit a Disabled Field', async t => {
    let disabledFound = 0

    if(Selector('#noEdit').withAttribute('disabled')) {
        disabledFound = 1
    }

    await t
        .expect(disabledFound).eql(1)
})

test('User Cannot Edit a Readonly Field', async t =>{
    let readonlyFound = 0

    if(Selector('#dontwrite').withAttribute('readonly')) {
        readonlyFound = 1
    }

    await t
        .expect(readonlyFound).eql(1)
}) 