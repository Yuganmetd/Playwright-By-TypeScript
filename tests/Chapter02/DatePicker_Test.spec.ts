import { test, expect } from '@playwright/test'

test('Date Picker Tests in PlayWright', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/')

    const iframe = page.frameLocator('[class="demo-frame"]')

    //Hard coded Date

    await iframe.locator('[id="datepicker"]').fill('11/14/2025')

    // Dynamic Date Selection
    await iframe.locator('[id="datepicker"]').clear()

    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('.ui-datepicker-today').click()

    // Selecting past date
    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('[title="Prev"]').click()
    await iframe.locator('[data-date="30"]').click()


    // Selecting Future Date
    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('[title="Next"]').click()
    await iframe.locator('[data-date="31"]').click()




})