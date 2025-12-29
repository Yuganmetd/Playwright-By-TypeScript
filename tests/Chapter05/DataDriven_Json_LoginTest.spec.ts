import { test, expect } from '@playwright/test';
import loginData from '../../test-data/qa/loginData.json'


console.log(loginData)

for (const row of loginData) {


  test(`Login Test - ${row.TestCase}`, async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill(row.Username)
    await page.locator('#password').fill(row.Password)
    await page.locator('#submit').click()

    if (row.ExpectedResult === 'success') {

      await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    } else {

      const error = page.locator('#error');
      await expect(error).toBeVisible();
      await expect(error).toHaveText(row.ErrorMessage);

    }

  })

}












