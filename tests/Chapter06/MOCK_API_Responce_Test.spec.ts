import { test, expect } from '@playwright/test'

test('MOCK API Responce in PlayWright Typescript Test', async ({ page }) => {

    // Mock API Request

    await page.route('*/**/api/v1/fruits', async route => {

        const response = await route.fetch()
        const json = await response.json()
        json.push( { name: 'PlayWright By Testers Talk', id: 12 })
        json.push( { name: 'Cypress By Testers Talk', id: 13 })
        json.push({ name: 'Typescript By Testers Talk', id: 14 })
        json.push({ name: 'API Testing By Testers Talk', id: 15 })
    
        await route.fulfill({ response,json })
    })

    // GOTO URL

    await page.goto('https://demo.playwright.dev/api-mocking/')
    // Validate Text

    await expect(page.getByText('PlayWright By Testers Talk')).toBeVisible()
    await expect(page.getByText('Cypress By Testers Talk')).toBeVisible()
    await expect(page.getByText('Typescript By Testers Talk')).toBeVisible()
    await expect(page.getByText('API Testing By Testers Talk')).toBeVisible()





})