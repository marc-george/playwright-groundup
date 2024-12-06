import {test as base} from '@playwright/test'
import { PageManager } from './page_files/PageManager'
import e2e_test_data from './test_data/e2e_data.json'
import { E2E_PageManager } from './page_files_e2e/E2E_PageManager'


export type TestOpts = {
    notBaseURL: string
    disabledInputPage: string
    disabledInputPagePM: PageManager
    dynamicIDPage: string
    dynamicIDPagePM: PageManager
    rahulDemoPage: string
    rahulDemoPagePM: E2E_PageManager
}

//extend basic tests
export const test = base.extend<TestOpts>({

    notBaseURL: ['', {option: true}],

    disabledInputPage: async ({page}, use)=>{
        await page.goto('/')
        await page.getByText('Disabled Input').click()
        await use('')
        await page.getByText('Home').click()
    },

    disabledInputPagePM: async({page, disabledInputPage}, use )=>{
        const pm = new PageManager(page)
        await use(pm)
    },

    dynamicIDPage: async({page}, use)=>{
        page.goto('/')
        page.getByText('Dynamic ID').click()
        await use('')
        page.getByText('Home').click()
    },

    dynamicIDPagePM: async({page, dynamicIDPage}, use ) =>{
        const pm = new PageManager(page)
        await use(pm)
    },

    rahulDemoPage: async({page}, use) =>{
        await page.goto('https://rahulshettyacademy.com/client')
        await page.getByPlaceholder('email@example.com').fill(e2e_test_data.email)
        await page.getByPlaceholder('enter your passsword').fill(e2e_test_data.password)
        await page.getByRole('button', {name: 'Login'}).click()
        await use('')        
    },

    rahulDemoPagePM: async({page, rahulDemoPage}, use )=>{
        const pme2e = new E2E_PageManager(page)
        await use(pme2e)
    }


})