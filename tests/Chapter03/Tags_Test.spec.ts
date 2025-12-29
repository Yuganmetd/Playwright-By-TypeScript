import {test,expect} from '@playwright/test'

test('My First PlayWright Typescript Test 1',{tag : ['@Smoke Testing']}, async({page})=>{
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
})

test('My First PlayWright Typescript Test 2',{tag:['@Smoke Testing, @Regression Testing']}, async({page})=>{
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
})

test('My First PlayWright Typescript Test 3',{tag:['@Regression Testing']}, async({page})=>{
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
})