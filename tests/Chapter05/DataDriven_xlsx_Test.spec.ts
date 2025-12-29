import { test, expect } from '@playwright/test';
import path from 'path'
import { readExeclFile } from '../../src/utils/ExeclHepler'

const filePath = path.join(__dirname,'../../test-data/qa/testdata.xlsx')
const records = readExeclFile(filePath)
for (const dataSet of Object.values(records)) {

    // Loop Skill1 and Skill2
    for (const skill of Object.values(dataSet)) {


        test(`Search Skill in Youtube - ${skill}`, async ({ page }) => {
            await page.goto('https://www.youtube.com/');
            await page.getByRole('combobox', { name: 'Search' }).click();
            await page.getByRole('combobox', { name: 'Search' }).fill(`${skill}`);
            await page.getByRole('combobox', { name: 'Search' }).press('Enter');
            //   await page.getByRole('link', { name: `${skill}` }).first().click();
            await expect(page).toHaveTitle(`${skill} - YouTube`);

        })

    }
  }