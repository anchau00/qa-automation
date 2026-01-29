import {test, expect, Locator} from '@playwright/test';

test("Verify Playwright Locators", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/");

    //getByAltTextidentifies images (similar elements) based on the alt attribute.
    //Use this when the elements supports alt text such as img and area elements.
        //variable is type locator
    const logo:Locator = page.getByAltText("nopCommerce demo store");

    // Assert logo is visible
    await expect(logo).toBeVisible();

    //getByText - Find element by the text it contains
    //Locate by visible text
    //Can be used on elements like div, span, p, a, button, h1-h6 etc.
    const text:Locator = page.getByText("Welcome to our store")
    await expect(text).toBeVisible();
    //or
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    //original method is already case insensitive but to make sure we can do this
    await expect(page.getByText(/welcome to our store/i)).toBeVisible();

    //getByRole() - Locating By Role (not an attribute but can some times be)
    //Locate button, checkboxes, headings, links, lists, tables, etc by its ARIA role
    //Preferred for interactive elements

    

})