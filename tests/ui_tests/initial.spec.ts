import { test } from '../../test-opts'
import { PageManager } from '../../page_files/PageManager'



test.beforeEach(async ({page, notBaseURL})=>{
    await page.goto(notBaseURL)
})

test('navigation stuff', async ({page})=>{

    console.log('ON REDDIT')

})
