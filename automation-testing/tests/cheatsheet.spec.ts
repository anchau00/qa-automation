import { test, expect } from '@playwright/test';

//Example of a test case
//Everything inside the test function are steps for the test case
test('Cheatsheet Example', async ({ page }) => {
      //Title of test case
    
    //Goes to a page using the link
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Finds the username textbox using its role and name, then clicks it
    await page.getByRole('textbox', { name: 'Username' }).click();

    //Fills in the username textbox with 'Admin'    
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    //Finds the first textbox with the name 'Type here' and clicks it
    await page.getByRole('textbox', { name: 'Type here' }).first().click();

    //Finds the first textbox with the name 'Type here' and fills it
    await page.getByRole('textbox', { name: 'Type here' }).first().fill('bob@gmail.com');
    
    //Finds the switch input using its class and clicks it
     await page.locator('.oxd-switch-input').click();

     

});