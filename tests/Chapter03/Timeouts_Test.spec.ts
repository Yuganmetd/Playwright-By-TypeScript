import {test,expect} from '@playwright/test'

test('Timeout in PlayWright Typescript Test', async({page})=>{

    //test.setTimeout(1*60*1000)
    await test.step('Navigate to URL',async()=>{
        await page.goto('https://www.youtube.com/')
    })
    await test.step('Search with Keywords in Search Bar',async()=>{
        await page.getByRole('combobox', { name: 'Search' }).fill('PlayWright By Testers Talk')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    })
    await test.step('Click on Link',async()=>{
        await page.getByRole('link', { name: 'Playwright by Testers Talk1 ✅' }).click({timeout : 5000})
    })
     await test.step('Validate title',async()=>{
        await expect(page).toHaveTitle('1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube',{timeout : 6000})
    })

    //await page.waitForTimeout(60000)
})