const { test, expect } = require ('@playwright/test');


/*By definig page inside{} restricts the testing to one particular page*/
// test('basic test', async({page}) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// })

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

//To run as headless use the command npx playwright test

//To run as headed browser use the command npx playwright test --headed
