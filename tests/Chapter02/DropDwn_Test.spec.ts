import {test,expect} from '@playwright/test'

test('Handling DropDown In PlayWright',async({page})=>{
    await page.goto('https://www.facebook.com/')
    await page.getByRole('button',{name:'Create new account'}).click()

    //select dropdown using value
    await page.locator('#day').selectOption('12')
    await page.getByLabel('Month').selectOption('3')
    await page.getByTitle('Year').selectOption('1994')

    //select dropdown using visible text
    await page.locator('#day').selectOption('1')
    await page.getByLabel('Month').selectOption('Aug')
    await page.getByTitle('Year').selectOption('1994')


    //Validate all options
    await expect(page.locator('#month>option')).toHaveText(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    
})