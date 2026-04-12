const { test, expect } = require('@playwright/test');

test('Customer Flow - Create and Delete', async ({ page }) => {

    // 1️⃣ Navigate to URL
    await page.goto('https://sgtestinginstituteapp.onrender.com/');

    // 2️⃣ Login
    await page.fill('[name="username"]', 'ramya');
    await page.fill('[name="password"]', 'ramya');
    await page.click('text=Sign In');

    await page.waitForSelector('text=Customer');

    // 3️⃣ Navigate to Customer Page
    await page.click('text=Customer');

    // 4️⃣ Click Create Customer
    await page.click('text=Add Customer');

    // 5️⃣ Fill Customer Details
    const customerName = 'Cust' + Math.floor(Math.random() * 1000);

    await page.fill('[name="firstName"]', customerName);
    await page.fill('[name="email"]', `${customerName}@test.com`);
    await page.fill('[name="location"]', `BTM`);
    await page.fill('[name="description"]', 'testng');

    // 6️⃣ Save Customer
    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // 7️⃣ Delete Customer
    // Click created customer
    await page.locator(`text=${customerName}`).first().click();

    // Handle alert BEFORE clicking delete
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');

    await page.waitForTimeout(2000);

    // 8️⃣ Logout
    await page.click('text=Logout');

});