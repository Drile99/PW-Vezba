import { faker } from "@faker-js/faker";
import {test, expect} from "@playwright/test";

test('Dodavanje kamere u korpu', async ({page}) => {
    
    const fakeEmail: string = faker.internet.email();

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await page.locator('a[class="icon-left both text-reset"]').click();
    await page.locator('a.nav-link >> text="Cameras"').click();

    await page.locator('a#mz-product-grid-image-30-212408').hover();
    await page.pause();
})