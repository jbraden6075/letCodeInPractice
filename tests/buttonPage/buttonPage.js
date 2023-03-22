import { ClientFunction } from 'testcafe'
import buttonPageRepo from '../../pom/buttonPageRepo'

fixture `letCodeIn - button`
    .page `https://letcode.in/buttons`

test('User Can Click On A Button And Navigate Back To Buttons Page', async t => {
    const button = buttonPageRepo.btnGotoHome
    const homeUrl = 'https://letcode.in/'
    const buttonUrl = 'https://letcode.in/buttons'

    await buttonPageRepo.clickButton(button)

    let url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(homeUrl)

    await t
        .navigateTo(buttonUrl)

    url = ClientFunction(() => window.location.href)

    await t
        .expect(url()).eql(buttonUrl)
})

test('JavaScript Can Return the Coordinates Of an Element', async t => {
    const getElementY = ClientFunction(() => document.getElementById('position').getBoundingClientRect().top)
    const getElementX = ClientFunction(() => document.getElementById('position').getBoundingClientRect().left)

    let y = await getElementY()
    y = JSON.stringify(y)

    let x = await getElementX()
    x = JSON.stringify(x)

    console.log('Y: ' + JSON.stringify(y))
    console.log('X: ' + JSON.stringify(x))

    await t
        .expect(y).eql('338')
        .expect(x).eql('64')
})

// TODO: Figure out how to parse the RGB and convert it to Hex
test('The Background Color Of Button Will Be Correct', async t => {
    let buttonColorRGB = buttonPageRepo.btnColor.getStyleProperty('background-color')
    let buttonColorHex = (c) => {const hex = c.toString(16)
                                return hex.length == 1 ? "0" + hex : hex
                        }


    await t
        .expect(buttonColorHex).eql('#8a4d76')
})
