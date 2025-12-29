import { test, expect } from '@playwright/test';

test('Alerts Test in Playwright', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept()
        console.log(`Alert Text is ` + dialog.message())
        console.log(`Alert Type is ` + dialog.type())
    })

    await page.getByText('See an example alert', { exact: true }).first().click()


})

test('Popups Test in Playwright', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        //dialog.accept()

        dialog.dismiss()
        console.log(`Popup Text is ` + dialog.message())
        console.log(`Alert Type is ` + dialog.type())

    })

    await page.getByText('See a sample confirm', { exact: true }).first().click()


})

test('Prompt Popups Test in Playwright', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async (dialog) => {
        //dialog.accept()
        console.log(`Popup Text is ` + dialog.message())
        await dialog.accept('Playwright')
        console.log(`Alert Type is ` + dialog.type())

    })

    await page.getByText('See a sample prompt', { exact: true }).first().click()


})