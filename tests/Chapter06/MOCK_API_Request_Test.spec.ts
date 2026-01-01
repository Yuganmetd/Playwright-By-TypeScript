import { test, expect } from '@playwright/test'

test('MOCK API Request in PlayWright Typescript Test', async ({ page }) => {

    // Mock API Request

    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            { name: 'PlayWright By Testers Talk', id: 12 },
            { name: 'Cypress By Testers Talk', id: 13 },
            { name: 'Typescript By Testers Talk', id: 14 },
            { name: 'API Testing By Testers Talk', id: 15 }
        ]
        await route.fulfill({ json })
    })

    // GOTO URL

    await page.goto('https://demo.playwright.dev/api-mocking/')
    // Validate Text

    await expect(page.getByText('PlayWright By Testers Talk')).toBeVisible()
    await expect(page.getByText('Cypress By Testers Talk')).toBeVisible()
    await expect(page.getByText('Typescript By Testers Talk')).toBeVisible()
    await expect(page.getByText('API Testing By Testers Talk')).toBeVisible()





})