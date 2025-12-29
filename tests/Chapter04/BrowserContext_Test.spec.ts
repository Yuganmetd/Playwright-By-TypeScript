import { test, expect } from '@playwright/test';

test('Multiple Browser/Tabs in Playwright ', async ({ page, browser }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByPlaceholder('Email address or phone number').fill('testers talkt');
    await page.getByPlaceholder('Password').fill('ersrer');
    await page.locator('[name="login"]').click();
    await expect(page.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in.');



    //New Browser Session

    const context2 = await browser.newContext()
    const page2 = await context2.newPage()

    await page2.goto('https://www.facebook.com/');
    await page2.getByPlaceholder('Email address or phone number').fill('testers talkt');
    await page2.getByPlaceholder('Password').fill('ersrer');
    await page2.locator('[name="login"]').click();
    await expect(page2.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in.');


    // Create New Tabs

    const newTab = await context2.newPage()
    await newTab.goto('https://www.facebook.com/');
    await newTab.getByPlaceholder('Email address or phone number').fill('testers talkt');
    await newTab.getByPlaceholder('Password').fill('ersrer');
    await newTab.locator('[name="login"]').click();
    await expect(newTab.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in.');



});