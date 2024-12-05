import { Page} from '@playwright/test'
import { BasePage } from './BasePage'

export class DynamicIDPage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async clickButtonWithDynamicID(){
        await this.page.getByRole('button', {name: 'Button with Dynamic ID'}).click()
    }

}