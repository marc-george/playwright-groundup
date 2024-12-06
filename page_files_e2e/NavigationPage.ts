import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavigationPage extends BasePage{
    constructor(page: Page){
        super(page)
    }

    async ordersPage(){
        await this.page.getByRole('button', {name: 'ORDERS'}).click()
    }

    async homePage(){
        await this.page.getByRole('button', {name: 'HOME'}).click()
    }

    async cartPage(){
        await this.page.getByRole('button', {name: 'Cart'}).click()
    }

    async signOut(){
        await this.page.getByRole('button', {name: 'signOut'}).click()
    }
}