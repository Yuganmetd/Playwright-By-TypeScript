
import {test,expect} from '@playwright/test'
    
const searchKeyWords = ['PlayWright By Testers Talk','Cypress By Testers Talk','API Testing By Testers Talk']

for (const searchKeyWord of searchKeyWords){
test(`My First PlayWright Typescript Test +${searchKeyWord}`, async({page})=>{

    await test.step('Navigate to URL',async()=>{
        await page.goto('https://www.youtube.com/')
    })
    await test.step('Search with Keywords in Search Bar',async()=>{
        await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyWord)
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    })
    await test.step('Click on Link',async()=>{
        await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click()
    })
     await test.step('Validate title',async()=>{
        await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube')
    })
})
}

