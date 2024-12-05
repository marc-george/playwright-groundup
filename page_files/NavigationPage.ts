import {test, expect, Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class NavigationPage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async HomePage(){
        //click on home navigation on top bar
        await this.page.getByText('Home').click()
        //assert on homepage
        const pageTitle = this.page.locator('#title')
        await expect(pageTitle).toContainText('UI Test Automation')
    }

    async DynamicIDPage(){
        //this.HomePage()
        await this.page.getByRole('heading', {name: 'Dynamic ID'}).click()
        const pageHeading = this.page.locator('section div h3', {hasText: 'Dynamic ID'})
        await expect(pageHeading).toBeVisible()

    }

    async ClassAttributePage(){
       // this.HomePage()
        await this.page.getByRole('heading', {name: 'Class Attribute'}).click()
        const pageHeading = this.page.locator('section div h3', {hasText: 'Class Attribute'})
        await expect(pageHeading).toBeVisible()
    }

    async HiddenLayersPage(){
        await this.page.getByRole('heading', {name: 'Hidden Layers'}).click()
        await expect(this.page.locator('section div h3', {hasText: 'Hidden Layers'})).toBeVisible()
    }

    async LoadDelaysPage(){
        await this.page.getByRole('heading', {name: 'Load Delay'}).click()
        await expect(this.page.locator('section div h3', {hasText: 'Load Delays'})).toBeVisible()
    }
}

