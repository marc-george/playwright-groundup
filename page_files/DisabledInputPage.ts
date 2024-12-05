import {test, expect, Page} from '@playwright/test'
import { BasePage } from './BasePage'

export class DisabledInputPage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async clickButtonWithDelayAndEnterText(text: string){
        await this.page.getByRole('button').click()
        const inputField = this.page.locator('#inputField')
        await inputField.fill(text)
        // await expect(inputField).toHaveText(text)
        console.log(await inputField.innerText())
    }
}