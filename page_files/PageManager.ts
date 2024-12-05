import { Page } from "@playwright/test"
import { NavigationPage } from "./NavigationPage"
import { DynamicIDPage } from "./DynamicIDPage"
import { ClassAttributePage } from "./ClassAttributePage"
import { HiddenLayersPage } from "./HiddenLayersPage"
import { LoadDelay } from "./LoadDelay"
import { DisabledInputPage } from "./DisabledInputPage"
import { DynamicTablePage } from "./DynamicTablePage"

export class PageManager{
    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly dynamicIDPage: DynamicIDPage
    private readonly classAttributePage : ClassAttributePage
    private readonly hiddenLayersPage: HiddenLayersPage
    private readonly loadDelaysPage: LoadDelay
    private readonly disabledInputPage: DisabledInputPage
    private readonly dynamicTablePage: DynamicTablePage

    constructor(page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.dynamicIDPage = new DynamicIDPage(this.page)
        this.classAttributePage = new ClassAttributePage(this.page)
        this.hiddenLayersPage = new HiddenLayersPage(this.page)
        this.loadDelaysPage = new LoadDelay(this.page)
        this.disabledInputPage = new DisabledInputPage(this.page)
        this.dynamicTablePage = new DynamicTablePage(this.page)
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

    onDisabledInputPage(){
        return this.disabledInputPage
    }

    onDynamicTablePage(){
        return this.dynamicTablePage
    }



}