import { test, expect } from '@playwright/test';
import path from 'path'
import {readExcelLoginData} from '../../src/utils/ExcelLoginTest'


const filePath = path.join(__dirname,'../../test-data/qa/loginData.xlsx')
const records = readExcelLoginData(filePath)
for (const row of records) {

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













