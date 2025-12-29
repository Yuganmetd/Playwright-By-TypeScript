import {test,expect} from '@playwright/test'

test('My First PlayWright Typescript Test Using Record At Cursor', async({page})=>{
    await test.step('Navigate to URL',async()=>{
        await page.goto('https://www.youtube.com/')
    })
    await test.step('Search with Keywords in Search Bar',async()=>{
        await page.getByRole('combobox', { name: 'Search' }).fill('PlayWright By Testers Talk')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    })
    await test.step('Click on Link',async()=>{
        await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click()
    })
     await test.step('Validate title',async()=>{
        await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube')
    })
     await test.step('Validate First and second video titles',async()=>{
        await expect(page.getByRole('link', { name: '2 #2 Playwright API Testing' })).toBeVisible()
        await expect(page.getByRole('link', { name: '3 Testing Microsoft D365 CRM' })).toBeVisible()
        await expect(page.locator('#playlist')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
        await expect(page.getByLabel('Testing Microsoft D365 CRM')).toContainText('Testing Microsoft D365 CRM App. with Playwright');
    })
})