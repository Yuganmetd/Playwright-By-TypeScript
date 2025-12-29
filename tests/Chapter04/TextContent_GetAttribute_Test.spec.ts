import { test, expect } from '@playwright/test';

test('textContent in Playwright ', async ({ page, browser }) => {
    await page.goto('https://github.com/BakkappaN');
    const name = await page.locator('[itemprop="name"]').textContent()
    const finalName = name?.trim()
    console.log(`Name is : ${finalName}`)
    expect(finalName).toBe('Testers Talk')
})

test('innerText in Playwright ', async ({ page, browser }) => {
    await page.goto('https://github.com/BakkappaN');
    const name = await page.locator('[itemprop="name"]').innerText ()
    const finalName = name?.trim()
    console.log(`Name is : ${finalName}`)
    expect(finalName).toBe('Testers Talk')
})

test('getAttribute Value in Playwright ', async ({ page, browser }) => {
    await page.goto('https://github.com/BakkappaN');
    const name = await page.locator('[itemprop="name"]').innerText ()
    const finalName = name?.trim()
    console.log(`Name is : ${finalName}`)
    expect(finalName).toBe('Testers Talk')

    const value = await page.getByTestId('repositories').first().getAttribute('data-selected-links')
    console.log(`Attribute Value is : ${value}`)
})