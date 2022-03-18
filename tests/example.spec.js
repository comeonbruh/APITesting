const{test, expect} = require('@playwright/test');

//assertions

test('my test', async({page}) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/PlayWright/);
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href','/docs/intro');
    await expect(page.locator('text = Learn more').first()).toBeVisible();
    await page.click('text=Get Started');
    await expect(page.locator('text = Introduction').first()).toBeVisible();
});