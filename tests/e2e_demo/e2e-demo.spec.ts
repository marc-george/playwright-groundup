import { E2E_PageManager } from '../../page_files_e2e/E2E_PageManager'
import { test } from '../../test-opts'
import e2e_data from '../../test_data/e2e_data.json'


// test.describe('e2e demo rahul shetty', ()=>{

//     // test('click on laptops checkbox', async ({page, rahulDemoPage})=>{
//     //     await page.getByLabel('laptops').click()
//     // }
// )
// })


test('E2E', async ({rahulDemoPagePM})=>{

    //navigate to view item page for selected item
    await rahulDemoPagePM.onHomePage().goToViewItemPageForSelectedItem(e2e_data.firstItem)
    //verify on view item page for selected item and add to cart from view page
    await rahulDemoPagePM.onViewItemPage().verifyItemNameIsDisplayedAndAddToCartAndConfirmToastMessage(e2e_data.firstItem)
    console.log('PASSED THE FIRST ITEM')
    //navigate back to home page and select another item using Add To Cart button
    await rahulDemoPagePM.navigateTo().homePage()
    await rahulDemoPagePM.onHomePage().addItemToCartUsingAddToCartButtonAndVerifyToastMessage(e2e_data.secondItem)
    console.log('PASSED THE SECOND ITEM')
    //navigate to cart and confirm purchased items present

    //remove an item from cart and verify no longer exists

    //checkout **IMPLEMENT CHECKOUT PAGE**

})

