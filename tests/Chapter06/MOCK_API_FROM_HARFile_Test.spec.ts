import { test, expect } from '@playwright/test'

test('MOCK API from HAR file in PlayWright Typescript Test', async ({ page }) => {

    // Recording a HAR File

    await page.routeFromHAR('./Playwright-By-TypeScript/har/fruits.har', {
        url: '*/**/api/v1/fruits',
        update: false
    })

    // GOTO URL
    await page.goto('https://demo.playwright.dev/api-mocking/ ')

    // Validate the Text

    await expect(page.getByText('Strawberry')).toBeVisible()
    await expect(page.getByText('Playwright Typescript by Testers talk')).toBeVisible()
    await expect(page.getByText('Playwright javascript by Testers talk')).toBeVisible()
    await expect(page.getByText('Cypress by Testers talk')).toBeVisible()
    await expect(page.getByText('API Testing by Testers talk')).toBeVisible()
})