import { test, expect } from '@playwright/test'

test.beforeAll(async () => {
    console.log('Running Before all tests')
})
test.afterAll(async () => {
    console.log('Running After all tests')
})
test.beforeEach(async () => {
    console.log('Running Before Each tests')
})
test.afterEach(async () => {
    console.log('Running After Each tests')
})
test('Test 1', async ({ page }) => {
    console.log('Test1 Execution started')
    await test.step('Navigate to URL', async () => {
        await page.goto('https://www.youtube.com/')
    })
    await test.step('Search with Keywords in Search Bar', async () => {
        await page.getByRole('combobox', { name: 'Search' }).fill('PlayWright By Testers Talk')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    })
   
})

test('Test 2', async ({ page }) => {
    console.log('Test2 Execution started')

    await test.step('Navigate to URL', async () => {
        await page.goto('https://www.youtube.com/')
    })
    await test.step('Search with Keywords in Search Bar', async () => {
        await page.getByRole('combobox', { name: 'Search' }).fill('PlayWright By Testers Talk')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')
    })
    await test.step('Click on Link', async () => {
        await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click()
    })
    await test.step('Validate title', async () => {
     await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube')
    })
    
})