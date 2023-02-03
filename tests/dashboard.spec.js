const {test} = require('@playwright/test')

test ('Dash', async function({browser})
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://localhost:54632/Account/Login?returnUrl=%2f")

    // Login With Creadential in Test Site.
    await page.locator('#LoginId').type("manish");
    await page.locator('#Password').type("asap")
    await page.click('.btn-green')
    
    //GoTo Dashboard Section
    await page.goto("http://localhost:54632/angular/ecc/dashboard/mydashboard")
    
})
