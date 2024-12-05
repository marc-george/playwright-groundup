import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DynamicTablePage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async getValueOfCPULoadAndCompareToDisplayedValue(browser: string){
        const gridRows = this.page.locator("[role='row']")
        const expectedValue = this.page.locator(".bg-warning")
        var chromeCPUValue
        var cpuIterator = 0
        var nameIterator = 0

        //find column with CPU
        const columnHeaders = gridRows.first().locator("span")
        for(let column of await columnHeaders.all()){
            if(await column.textContent() == "CPU"){
                break
            }
            cpuIterator++
        }
        //find column with Name
        for(let column of await columnHeaders.all()){
            if(await column.textContent() == "Name"){
                break
            }
            nameIterator++
        }        

        for(let row of await gridRows.all()){
            if(await row.locator("span").nth(nameIterator).textContent() == browser){
                chromeCPUValue = await row.locator("span").nth(cpuIterator).textContent()
            }
        }


        if(browser == "Chrome"){
            expect(await expectedValue.textContent()).toContain(chromeCPUValue)
        }else{
            expect(await expectedValue.textContent()).not.toContain(chromeCPUValue)
        }
    }
}