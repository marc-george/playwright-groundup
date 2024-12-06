import {Locator, Page, expect } from '@playwright/test'
import { loadEnvFile } from 'process'

export class BasePage{
    readonly page:Page

    constructor(page:Page){
        this.page = page
    }

    async waitForTimeout(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }

}