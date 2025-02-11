import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

test.skip("Registracija", async({page}) => {

    const fakeEmail: string = faker.internet.email();

    await page.goto("http://www.automationpractice.pl/index.php");
    await expect(page).toHaveURL('http://www.automationpractice.pl/index.php'); 

    await page.locator('a[class = login]').click();

    await page.fill('input[id=email_create]', fakeEmail);
    await page.locator('button[id="SubmitCreate"]').click();
    await page.locator('input[id="id_gender1"]').click();

    await page.fill('input[id="customer_firstname"]', "Patronas");
    await page.fill('input[id="customer_lastname"]', "Kaca");
    await page.fill('input[id="passwd"]', "PatronaKaca");
    await page.selectOption('#days', {value: '5'});
    await page.selectOption('#months', {value: '1'});
    await page.selectOption('#years', {value: '1999'});
    await page.locator('input[id="newsletter"]').click();
    await page.locator('button[id="submitAccount"]').click();

    const successMessageVisible = await page.locator('.alert.alert-success');
    await expect(successMessageVisible).toHaveText('Your account has been created.');

    const accountVisible = await page.locator('.header_user_info a span');
    await expect(accountVisible).toBeVisible();
    await expect(accountVisible).toHaveText('Patronas Kaca');


    


    await page.pause();

})


