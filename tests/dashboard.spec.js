const {test} = require('@playwright/test')

test ('Dash', async function({browser})
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://test-ecc.tangandcompany.com/Account/Login?returnUrl=%2f")

    // Login With Creadential in Test Site.
    await page.locator('#LoginId').type("manish");
    await page.locator('#Password').type("Manish@9584")
    await page.click('.btn-green')
    
    //GoTo Dashboard Section
    await page.locator('.fa-caret-down').nth(13).click();
    //await page.pause();
    await page.locator("[href*='angular/ecc/dashboard']").click();
    //await page.pause();

    await page.locator(".ng-input").nth(0).click();
    //await page.pause();
    await page.locator('.ng-option').nth(13).click();
    //await page.pause();
    
})
const {test} = require('@playwright/test')

//test ('Dashboard_Main', function({browser})
// {
//     const context = browser.newContext()
//     const page = context.newPage()
//     page.goto("https://test-ecc.tangandcompany.com/Account/Login?returnUrl=%2f")
// })