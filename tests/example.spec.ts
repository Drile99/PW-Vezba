import { test, expect } from "@playwright/test";

test.skip("has title", async ({ page }) => {
  await page.goto("http://www.automationpractice.pl/index.php");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Shop/);
});

test.skip("get started link", async ({ page }) => {
  await page.goto("http://www.automationpractice.pl/index.php");

  // Click the get started link.
  const womenMenuItem = await page.locator('a[title="Women"]');
  await womenMenuItem.hover();

  await page.getByRole('link', {name: "Summer Dresses"}).click();
  

  // Provera url-a
  await expect(page).toHaveURL('http://www.automationpractice.pl/index.php?id_category=11&controller=category'); 

  // sort by
  const sortBy = await page.locator ('[id="selectProductSort"]');
  await sortBy.click();

  const selectedValue = await sortBy.selectOption('In stock');

  //await page.locator('[src="http://www.automationpractice.pl/img/p/1/2/12-home_default.jpg"]').hover();
  await page.locator('img[title="Printed Summer Dress"]').nth(1).hover();
  const Movelocator = page.locator("//span[contains(., 'More')]").nth(1).click();
  //await expect(page).toHaveURL('http://www.automationpractice.pl/index.php?id_product=5&controller=product');

  await page.pause();

});
