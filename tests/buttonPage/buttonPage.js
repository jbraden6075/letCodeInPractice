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

    const inHeadless = ClientFunction(() => !window.chrome)

    // I have no idea what this is evaluating XD
    if(eval.toString().length == 33 && await inHeadless()) {
        await t
            .expect(y).eql('338')
            .expect(x).eql('79.5')
    }else{
        await t
            .expect(y).eql('338')
            .expect(x).eql('64')
    }
})

test('The Background Color Of Button Will Be Correct', async t => {
    const buttonColorRGB = await buttonPageRepo.btnColor.getStyleProperty('background-color')

    function rgbToHex(rgb) {
        rgb = rgb.replace(/[^\d,]/g,"").split(",")

        let hex = '#'+((1<<24)+(+rgb[0]<<16)+(+rgb[1]<<8)+ +rgb[2]).toString(16).slice(1)
        return hex
    }
    
    const buttonColorToHex = rgbToHex(buttonColorRGB)

    await t
        .expect(buttonColorToHex).eql('#8a4d76')
})
