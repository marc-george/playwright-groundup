import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HiddenLayersPage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async doubleClickButtonAndCheckStatus(){
        await this.page.locator('[style=')
        await this.page.locator('#greenButton').click()

        // await this.page.getByRole('button').filter({has: this.page.locator('#greenButton')}).click()
    }

}