import { test, expect } from '@playwright/test';
import {parse} from 'csv-parse/sync'
import path from 'path'

import fs from 'fs'

// ---- Read CSV file ----
const csvPath = path.join(__dirname, '../../test-data/qa/testdata.csv');
const fileContent = fs.readFileSync(csvPath);

// ---- Parse CSV ----
const records: { Skill1: string; Skill2: string }[] = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});
console.log(records)
// ---- Extract all skills into single array ----
// const skills: string[] = [];

// for (const row of records) {
//   skills.push(row.Skill1);
//   skills.push(row.Skill2);
// }
// console.log(skills)
  for (const skillName of Object.values(records)) {

    for (const skill of Object.values(skillName)){

    

    // Loop Skill1 and Skill2


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










       
