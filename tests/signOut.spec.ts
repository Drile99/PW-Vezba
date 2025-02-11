import {test, expect} from "@playwright/test";



test.skip("Odjava sa sistema", async ({page}) => {
    
    await page.goto("http://www.automationpractice.pl/index.php");
    await page.locator('a[title="Log in to your customer account"]').click();
    await page.fill('input[id=email]', "primer@gmail.com");
    await page.fill('input[id=passwd]', "PatronaKaca"); 
    await page.locator('button[id="SubmitLogin"]').click();   
    await page.locator('a[class = logout]').click();
    await page.waitForURL("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");
    await expect(page).toHaveURL("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");
    await page.pause();

})