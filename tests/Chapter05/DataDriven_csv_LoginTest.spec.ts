import { test, expect } from '@playwright/test';
import {parse} from 'csv-parse/sync'
import path from 'path'
import fs from 'fs'

// ---- Read CSV file ----
const csvPath = path.join(__dirname, '../../test-data/qa/loginData.csv');
const fileContent = fs.readFileSync(csvPath);

// ---- Parse CSV ----

const records:{TestCase: string,
  Username: string,
  Password: string,
  ExpectedResult: 'success' | 'failure',
  ErrorMessage: string}[] = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});
console.log(records)

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











       
