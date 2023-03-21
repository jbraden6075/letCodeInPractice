import { Selector } from 'testcafe'
import editPageRepo from '../../pom/editPageRepo'

fixture `letCodeIn - edit`
    .page `letcode.in/edit`

test('User Can Input Into Full Name Text Field', async t => {
    const fullNameText = 'Bob Bobbers'

    await editPageRepo.typeTextIntoFullNameField(fullNameText)

    function setFullNameValue() {
        `document.getElementById('fullName').setAttribute('value', fullNameText)`
    }

    setFullNameValue()

    await t
        .expect(editPageRepo.txtFullName.value).eql(fullNameText)
})

test('User Can Append Text To Text Field', async t => {
    const appendedText = ' appended text.'
    const fullText = 'I am good appended text.'

    await editPageRepo.appendTextToAppendField(appendedText)

    function setAppendValue() {
        `document.getElementById('join').setAttribute('value', fullText')`
    }

    setAppendValue()

    await t
        .expect(editPageRepo.txtAppendText.value).eql(fullText)
})

test('TestCafe Can Read What Is In a Text Field', async t => {
    const expectedText = 'ortonikc'

    await t
        .expect(editPageRepo.txtGetText.value).eql(expectedText)
})

test('User Can Delete Text From Text Field', async t => {
    await editPageRepo.deleteTextFromField(editPageRepo.txtDeleteText)
    
    function setClearValue() {
        `document.getElementById('clearMe').setAttribute('value', '')`
    }

    setClearValue()

    await t
        .expect(editPageRepo.txtDeleteText.value).eql('')
})

test('User Cannot Edit a Disabled Field', async t => {
    let disabledFound = 0

    if(editPageRepo.txtDisabled.hasAttribute('disabled')) {
        disabledFound = 1
    }

    await t
        .expect(disabledFound).eql(1)
})

test('User Cannot Edit a Readonly Field', async t =>{
    let readonlyFound = 0

    if(editPageRepo.txtReadonly.hasAttribute('readonly')) {
        readonlyFound = 1
    }

    await t
        .expect(readonlyFound).eql(1)
}) 