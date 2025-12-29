import { test, expect } from '@playwright/test';
import youtubeData from '../../test-data/qa/testdata.json';

// for (const dataSet of Object.values(youtubeData)) {

//     // Loop Skill1 and Skill2
//     for (const skill of Object.values(dataSet)) {


//         test(`Search Skill in Youtube - ${skill}`, async ({ page }) => {
//             await page.goto('https://www.youtube.com/');
//             await page.getByRole('combobox', { name: 'Search' }).click();
//             await page.getByRole('combobox', { name: 'Search' }).fill(`${skill}`);
//             await page.getByRole('combobox', { name: 'Search' }).press('Enter');
//             //   await page.getByRole('link', { name: `${skill}` }).first().click();
//             await expect(page).toHaveTitle(`${skill} - YouTube`);

//         })

//     }
// }


type YoutubeDataType = typeof youtubeData;

for (const dataSetName in youtubeData) {

  const typedKey = dataSetName as keyof YoutubeDataType;
  const dataSet = youtubeData[typedKey];

  for (const skillName in dataSet) {
    const skillValue = dataSet[skillName as keyof typeof dataSet];
    console.log(skillValue);

     test(`Search Skill in Youtube - ${skillValue}`, async ({ page }) => {
            await page.goto('https://www.youtube.com/');
            await page.getByRole('combobox', { name: 'Search' }).click();
            await page.getByRole('combobox', { name: 'Search' }).fill(`${skillValue}`);
            await page.getByRole('combobox', { name: 'Search' }).press('Enter');
            //   await page.getByRole('link', { name: `${skill}` }).first().click();
            await expect(page).toHaveTitle(`${skillValue} - YouTube`);

        })
  }
}
       
