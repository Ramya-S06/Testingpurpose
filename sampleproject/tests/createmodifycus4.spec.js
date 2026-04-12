const { test, expect } = require('@playwright/test');

test('Customer Flow - Create, Modify, Delete', async ({ page }) => {

    // 1️⃣ Navigate to URL
    await page.goto('https://sgtestinginstituteapp.onrender.com/');

    // 2️⃣ Login
    await page.fill('[name="username"]', 'ramya');
    await page.fill('[name="password"]', 'ramya');
    await page.click('text=Sign In');

    await page.waitForSelector('text=Customer');

    // 3️⃣ Go to Customer Page
    await page.click('text=Customer');

    // 4️⃣ Create Customer
    await page.click('text=Add Customer');

    const customerName = 'Cust' + Math.floor(Math.random() * 1000);

    await page.fill('[name="firstName"]', customerName);
    await page.fill('[name="email"]', `${customerName}@test.com`);
    await page.fill('[name="location"]', `BTM`);
    await page.fill('[name="description"]', 'testng');

    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // 5️⃣ Modify Customer
    await page.locator(`text=${customerName}`).first().click();

    await page.click('text=Edit');

    const updatedName = customerName + '_Updated';

    await page.fill('[name="firstName"]', updatedName);

    await page.click('text=Update');

    await page.waitForTimeout(2000);

    // 6️⃣ Delete Customer
    await page.locator(`text=${updatedName}`).first().click();

    // Handle alert BEFORE clicking delete
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');

    await page.waitForTimeout(2000);

    // 7️⃣ Logout
    await page.click('text=Logout');

});