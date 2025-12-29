import { test, expect } from '@playwright/test';
test.describe('Smoke Tests',()=>{
test('Test 1 ', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByPlaceholder('Email address or phone number').fill('testers talkt');
    await page.getByPlaceholder('Password').fill('ersrer');
    await page.locator('[name="login"]').click();
    await expect(page.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in.');
})
})

test.describe('Regression Tests',()=>{
test('Test 2 ', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByPlaceholder('Email address or phone number').fill('testers talkt');
    await page.getByPlaceholder('Password').fill('ersrer');
    await page.locator('[name="login"]').click();
    await expect(page.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in.');
})
test('Test 3 ', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByPlaceholder('Email address or phone number').fill('testers talkt');
    await page.getByPlaceholder('Password').fill('ersrer');
    await page.locator('[name="login"]').click();
    await expect(page.locator('#email_container')).toContainText('The email address or mobile number you entered isn\'t connected to an account. Find your account and log in..');
})
})