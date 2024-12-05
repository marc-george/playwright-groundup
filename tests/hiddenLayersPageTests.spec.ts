import {test , expect} from '@playwright/test'
import { PageManager } from '../page_files/PageManager'


test.beforeEach(async ({page})=>{
    await page.goto('http://uitestingplayground.com/home')
})

test('navigation stuff', async ({page})=>{
    const pm = new PageManager(page)
    await pm.navigateTo().HiddenLayersPage()
    await pm.onHiddenLayersPage().doubleClickButtonAndCheckStatus()


})
