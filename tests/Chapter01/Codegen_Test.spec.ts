import { test, expect } from '@playwright/test';

test('Codegen Test ', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
  await expect(page.locator('#above-the-fold')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
});