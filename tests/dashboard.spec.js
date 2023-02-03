const {test} = require('@playwright/test')

test ('Dash', async function({browser})
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://test-ecc.tangandcompany.com/Account/Login?returnUrl=%2f") //Test-Site
    //await page.goto("http://localhost:54632/Account/Login?returnUrl=%2f") //Local

    // Login With Creadential in Test Site.
    await page.locator('#LoginId').type("manish");
    await page.locator('#Password').type("Manish@9584")
    
    // Login With Creadential in Local Site.
    // await page.locator('#LoginId').type("manish");
    // await page.locator('#Password').type("asap")
    await page.click('.btn-green')
    
    //GoTo Dashboard Section
    await page.goto("https://test-ecc.tangandcompany.com/angular/ecc/dashboard/mydashboard") //Test-Site
    //await page.goto("http://localhost:54632/angular/ecc/dashboard/mydashboard") //Local
})
