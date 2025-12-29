import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('testers talk');
  await page.getByTestId('royal-pass').fill('ersrer');
  await page.getByTestId('royal-login-button').click();
  await expect(page.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in.');
});
