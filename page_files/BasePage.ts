import {Page} from '@playwright/test'

export class BasePage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(waitTime: number){
        await this.page.waitForTimeout(waitTime*1000)
    }
}