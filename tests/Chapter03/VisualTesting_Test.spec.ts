import {test,expect} from '@playwright/test'

test('Testing Page screenshot visual comparison', async({page})=>{

        await page.goto('https://github.com/login/')

        await page.locator('#login_field').fill('Yugandhar')
        await expect(page).toHaveScreenshot('GitHubLoginPage.png')


    })
    
test('Testing Element screenshot visual comparison', async({page})=>{

        await page.goto('https://github.com/login/')

        await expect(page).toHaveScreenshot('GitHubLoginPage.png')

        const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]')

        await expect(element).toHaveScreenshot('GitHubLoginForm.png')

        await page.locator('#login_field').fill('Yugandhar')
        await expect(element).toHaveScreenshot('GitHubLoginForm.png')



    })