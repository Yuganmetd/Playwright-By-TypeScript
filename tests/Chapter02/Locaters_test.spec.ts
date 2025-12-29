import { test, expect } from '@playwright/test'

test('Locators Test getByRole', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // getByLink
    // Link
    await page.getByRole('link', { name: 'Free Access to InterviewQues/ResumeAssistance/Material' }).click()
    await expect(page).toHaveTitle('RS Academy')
    await page.goBack()

    // Button
    await page.getByRole('button', { name: 'Home' }).click()
    await expect(page).toHaveTitle('Rahul Shetty Academy | Master AI & Automation Testing')
    await page.goBack()
    
    //CheckBox
    await page.getByRole('checkbox',{name : 'Option1'})

    // RadioButton 
    await page.getByRole('radio',{name:'Radio1'})
})

test('Locators Test getBylabel', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN')
    await page.getByLabel('Homepage',{exact:true}).first().click()

})

test('Locators Test getByAltText', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN')
    await page.getByAltText("View BakkappaN's full-sized avatar").click()
})

test('Locators Test getBytestId', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN')
    await page.getByTestId('repositories').first().click()
})

test('Locators Test getByText', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN')
    await page.getByText('Sign up').click()
})

test('Locators Test getByPlaceHolder,xpath,css', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk/')
    await page.getByPlaceholder('Search').fill('Testers Talk')
    await page.getByPlaceholder('Search').clear()
    await page.locator('//input[@name="search_query"]').fill('Playwright')
    await page.getByPlaceholder('Search').clear()
    await page.locator('input[name="search_query"]').fill('Playwright by testers talk')

})

test('Locators Test getByTitle', async ({ page }) => {
    await page.goto('https://google.com/')
    await page.getByTitle('Search').fill('Automation step by step')
})