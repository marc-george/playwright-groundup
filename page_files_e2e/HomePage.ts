import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    constructor(page: Page){
        super(page)
    }

    async goToViewItemPageForSelectedItem(itemName: string){
        const selectedItemBase = this.page.locator('div div div div div', {hasText: itemName})
        const viewButton = selectedItemBase.getByRole('button', {name: 'View'})
        await viewButton.click()
    }

    async addItemToCartUsingAddToCartButtonAndVerifyToastMessage(itemName: string){
        const selectedItemBase = this.page.locator('div div div div div', {hasText: itemName})
        const addToCartButton = selectedItemBase.getByRole('button', {name: 'Add To Cart'})
        const loadingCircleGraphic = this.page.locator('.la-ball-scale-multiple')
        await addToCartButton.click()
        await expect(loadingCircleGraphic).toBeHidden()
        const toastMessage = 'Product Added To Cart'
        const toastContainer = this.page.locator("[aria-label='Product Added To Cart']")
        await expect(toastContainer).toContainText(toastMessage)
    }


}