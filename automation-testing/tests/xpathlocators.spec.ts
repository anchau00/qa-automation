import {test, expect, Locator} from '@playwright/test';

//Xpath stand for XML Path Language
//It is a query language for selecting nodes from an XML document
//In Playwright, we can use XPath locators to identify elements on a web page
test("Verify Playwright XPath Locators", async ({page}) => {

await page.goto("https://demowebshop.tricentis.com/");

//Absolute Xpath provides full path from the root element to the target element
//Example: /html/body/div[1]/div[2]/div[1]/h1
//Try not to use this since it can change frequently with minor UI changes
const abslogo:Locator = page.locator("/html/body/div[1]/div[2]/div[1]/h1");

await expect(abslogo).toBeVisible();

//Relative Xpath is a more flexible way of finding an element. It directly jumps to the
//element using attributes, without starting from the root
//Example: //h1[@class='header-title'] or //*[@class='header-title']

const rellogo:Locator = page.locator("//h1[@class='header-title']");

await expect(rellogo).toBeVisible();




})