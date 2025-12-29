import {test,expect} from '@playwright/test'

test('KeyBoard actions Test',async({page})=>{
    await page.goto('https://www.youtube.com/')

    // Enter Key Board Action

    await page.getByPlaceholder('Search').click()
    await page.getByPlaceholder('Search').fill('PlayWright By Testers Talk')
    await page.getByPlaceholder('Search').press('Enter')

    // CTRL+A and Delete

    await page.getByPlaceholder('Search').click()
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Delete')


    // Press TAB and Enter
  await page.getByPlaceholder('Search').click()
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')

})