import {Page} from '@playwright/test'
import { NavigationPage } from './NavigationPage'
import { CartPage } from './CartPage'
import { HomePage } from './HomePage'
import { OrdersPage } from './OrdersPage'
import { ViewItemPage } from './ViewItemPage'

export class E2E_PageManager{
    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly cartPage: CartPage
    private readonly homePage: HomePage
    private readonly ordersPage: OrdersPage
    private readonly viewItemPage: ViewItemPage



    constructor(page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.homePage = new HomePage(this.page)
        this.ordersPage = new OrdersPage(this.page)
        this.viewItemPage = new ViewItemPage(this.page)

    }

    navigateTo(){
        return this.navigationPage
    }

    onCartPage(){
        return this.cartPage
    }

    onHomePage(){
        return this.homePage
    }

    onOrdersPage(){
        return this.ordersPage
    }

    onViewItemPage(){
        return this.viewItemPage
    }
}