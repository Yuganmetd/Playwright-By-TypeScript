import  {test,expect} from '@playwright/test'

test('Different Screenshot capturing' , async({page})=>{
    await page.goto('https://www.youtube.com/@testerstalk')

    // Element Screenshot

    await page.locator('#page-header-container').screenshot({path:'./screenshots/ElementScreenshot.png'})

    // Page Screenshot

    await page.screenshot({path:'./screenshots/PageScreenshot.png'})

    // FullPage Screenshot

        await page.screenshot({path:'./screenshots/FullPageScreenshot.png',fullPage:true})
})

