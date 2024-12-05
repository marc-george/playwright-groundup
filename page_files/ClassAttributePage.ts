import {test, expect, Page} from '@playwright/test'
import { BasePage } from './BasePage'

export class ClassAttributePage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async clickPrimaryButtonAndAcceptChromeDialog(){
        this.page.on('dialog', dialog=>{
            expect(dialog.message()).toEqual('Primary button pressed')
            dialog.accept()
        })
        await this.page.locator('.btn-primary').click()
    }


}