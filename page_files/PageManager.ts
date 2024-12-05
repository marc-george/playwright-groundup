import { Page } from "@playwright/test"
import { NavigationPage } from "./NavigationPage"
import { DynamicIDPage } from "./DynamicIDPage"
import { ClassAttributePage } from "./ClassAttributePage"
import { HiddenLayersPage } from "./HiddenLayersPage"
import { LoadDelay } from "./LoadDelay"

export class PageManager{
    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly dynamicIDPage: DynamicIDPage
    private readonly classAttributePage : ClassAttributePage
    private readonly hiddenLayersPage: HiddenLayersPage
    private readonly loadDelaysPage: LoadDelay


    constructor(page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.dynamicIDPage = new DynamicIDPage(this.page)
        this.classAttributePage = new ClassAttributePage(this.page)
        this.hiddenLayersPage = new HiddenLayersPage(this.page)
        this.loadDelaysPage = new LoadDelay(this.page)

    }

    navigateTo(){
        return this.navigationPage
    }

    onDynamicIDPage(){
        return this.dynamicIDPage
    }

    onClassAttributePage(){
        return this.classAttributePage
    }

    onHiddenLayersPage(){
        return this.hiddenLayersPage
    }

    onLoadDelaysPage(){
        return this.loadDelaysPage
    }



}