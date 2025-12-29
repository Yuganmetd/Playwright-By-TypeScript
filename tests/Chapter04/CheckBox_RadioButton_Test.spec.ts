import { test, expect } from '@playwright/test';

test('Handling Radio Btns in Playwright ', async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');

    const iframe = await page.frameLocator('[class="demo-frame"]')

    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked()
    await iframe.locator('[for="radio-1"]').check()
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked()

})

test('Handling Check box in Playwright ', async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');

    const iframe = await page.frameLocator('[class="demo-frame"]')

    await expect(iframe.locator('[for="checkbox-1"]')).not.toBeChecked()
    await iframe.locator('[for="checkbox-1"]').check()
    await expect(iframe.locator('[for="checkbox-1"]')).toBeChecked()

})