import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage';

export class LoadDelay extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async clickOnButtonAppearingAfterDelay(){
        await this.page.getByRole('button').click()
    }

}