import { ClientFunction, Selector } from 'testcafe'
import dropdownPageRepo from '../../pom/dropdownPageRepo'


fixture `letCodeIn - dropdown`
    .page `https://letcode.in/dropdowns`

test('User Can Select a Single Option from Dropdown', async t => {
    const fruit = 'Apple'
    const optionNotification = Selector('p').withText('You have selected Apple')

    await dropdownPageRepo.selectOption(dropdownPageRepo.selectFruits, fruit)

    await t
        .expect(optionNotification.visible).ok()
})

test('User Can Select Multiple Options from Multi-Select', async t => {
    const option1 = Selector('#superheros').find('option').withText('The Avengers')
    const option2 = Selector('#superheros').find('option').withText('Batman')

    await dropdownPageRepo.multiSelectOptions(option1, option2)

    await t
        .expect(option1.selected).ok()
        .expect(option2.selected).ok()
})

// TODO: Figure this out
test.skip('Print All Options In Dropdown', async t => {
    let i = 0
    let dropdownOptions = await ClientFunction(() => {
        document.getElementById('lang')

        for(i; i < dropdownOptions.options.length; i++) {
            console.log("I'm in the for loop")
        }
    })

    const optionNotification = Selector('p').withText('You have selected C#')

    dropdownOptions()

    await t
        .click(dropdownOptions[i-1])
        .expect(optionNotification.visible).ok()
})

test('User Can Select Option Via Value', async t => {
    await t
        .click(dropdownPageRepo.selectCountry)
        .click(dropdownPageRepo.selectCountry.child('option').withAttribute('value', 'India'))

    const countryValue = dropdownPageRepo.selectCountry.value

    await t
        .expect(countryValue).eql('India')

    console.log(await countryValue)
})
