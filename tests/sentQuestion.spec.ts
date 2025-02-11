import {test, expect} from "@playwright/test";
import {faker} from '@faker-js/faker';


test.skip('Slanje poruke na contact strani', async({page})=> {

    const fakeEmail: string = faker.internet.email();
    const fakeText: string = faker.lorem.text();

    await page.goto('http://www.automationpractice.pl/index.php');
    await page.locator('a[title="Contact us"]').click();
    await expect(page).toHaveURL('http://www.automationpractice.pl/index.php?controller=contact');
    
    await page.selectOption('#id_contact', {value: '1'});
    await page.fill('input[id="email"]', fakeEmail);
    await page.fill('input[id="id_order"]', "nesto");

    const chooseFileButton = await page.locator('input[id="fileUpload"]');
    await chooseFileButton.setInputFiles('C:/Users/ndrikic/Desktop/udemy.txt');

    const fileSpan = await page.locator('span[class="filename"]');
    await expect(fileSpan).toHaveText('udemy.txt');
    await page.fill('textarea[id = "message"]', fakeText);
    await page.locator('#submitMessage').click();


    const successMessageVisible = await page.locator('.alert.alert-success');
    await expect(successMessageVisible).toHaveText('Your message has been successfully sent to our team.');
    await page.pause();
})