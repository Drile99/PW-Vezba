import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";

test("Dodavanje kamere u korpu", async ({ page }) => {
  const fakeEmail: string = faker.internet.email();

  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );
  await page.locator('a[class="icon-left both text-reset"]').click();
  await page.locator('a.nav-link >> text="Cameras"').click();

   await page.locator("a#mz-product-grid-image-30-212408").hover();

  await page.waitForTimeout(2000);

  await page.locator("(//button[@title='Add to Cart']/span[text()='Add to Cart'])[3]").click();

//   await expect(page).toHaveURL(
//     "https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=33&product_id=30"
//   );

  // const addToCartButton = await page.locator('button.btn-cart.cart-30');
  // await addToCartButton.waitFor({ state: 'visible' });  // Čekaš da dugme bude vidljivo
  // await addToCartButton.click();

  // await page.locator('button.btn btn-light').click();

  //const increaseButton = page.locator('button[data-spinner="up"]').click();


 
  await page.pause();
});
