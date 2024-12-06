import {test} from '../../test-opts'


// test.beforeEach(async ({page})=>{
//     await page.goto('http://uitestingplayground.com/home')
// })

test('navigation stuff', async ({disabledInputPagePM})=>{
    await disabledInputPagePM.navigateTo().DisabledInputPage()
    await disabledInputPagePM.onDisabledInputPage().clickButtonWithDelayAndEnterText('this is a test')
})
