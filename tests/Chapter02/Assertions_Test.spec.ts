import { test, expect } from '@playwright/test'

test('Assertions in PlayWright', async ({ page }) => {

    await page.goto('https://www.youtube.com/')

    // Visible, Enabled, Editable, Empty

    await expect(page.getByPlaceholder('Search', { exact: true })).toBeVisible()
    await expect(page.getByPlaceholder('Search', { exact: true })).toBeEnabled()
    await expect(page.getByPlaceholder('Search', { exact: true })).toBeEditable()
    await expect(page.getByPlaceholder('Search', { exact: true })).toBeEmpty()

    await page.getByPlaceholder('Search', { exact: true }).fill('Playwright')
    await page.getByPlaceholder('Search', { exact: true }).press('Enter')
    await expect(page.getByPlaceholder('Search', { exact: true })).not.toBeEmpty()


  // Verify URL, Title, Text, Count

  await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright')
  await expect(page).toHaveTitle('Playwright - YouTube')
  await expect(page.getByText('Playwright Beginner Tutorials')).toHaveText('Playwright Beginner Tutorials')
  await expect(page.locator('[id="title"]')).toHaveCount(7)


})