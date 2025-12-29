import {test,expect} from '@playwright/test'

test('Mouse Actions Test',async({page})=>{
    await page.goto('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
    //left click 

    //await page.getByText('Playwright by Testers Talk ✅').click({button:'left'})

    //middle click 

    //await page.getByText('Playwright by Testers Talk ✅').click({button:'middle'})

    //Right click 

    await page.getByText('Playwright by Testers Talk ✅').click({button:'right'})
})

test('Mouse Hover',async({page})=>{
     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

     await page.locator('[id="mousehover"]').hover()
     await expect(page.locator('[class="mouse-hover-content"]')).toBeVisible()
     await expect(page.getByText('Top')).toBeVisible()
     await page.getByText('Top').click()
     await page.locator('[id="mousehover"]').hover()
     await expect(page.locator('[class="mouse-hover-content"]')).toBeVisible()
     await expect(page.getByText('Reload')).toBeVisible()
     await page.getByText('Reload').click()

})

test('Double Click',async({page})=>{
    await page.goto('https://www.youtube.com/results?search_query=playwright+by+testers+talk')

    await page.getByLabel('Search with your voice').dblclick()

})


