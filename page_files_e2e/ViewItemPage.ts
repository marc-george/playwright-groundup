import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ViewItemPage extends BasePage{
    constructor(page: Page){
        super(page)
    }

    async verifyItemNameIsDisplayedAndAddToCartAndConfirmToastMessage(itemName: string){
        const pageHeader = this.page.locator('h2')
        const addToCartButton = this.page.getByRole('button', {name: 'ADD TO CART'})
        await expect(pageHeader).toContainText(itemName)
        await addToCartButton.click()
        const toastMessage = 'Product Added To Cart'
        const toastContainer = this.page.locator("[aria-label='Product Added To Cart']")
        await expect(toastContainer).toContainText(toastMessage)
    }


}