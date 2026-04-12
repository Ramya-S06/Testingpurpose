const { test, expect } = require('@playwright/test');

test('Customer + Project Flow', async ({ page }) => {

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

    // 5️⃣ Create Project
    await page.click('text=Project');
    await page.click('text=Add Project');

    const projectName = 'Proj' + Math.floor(Math.random() * 1000);

    await page.fill('[name="projectTitle"]', customerName);
    await page.fill('[name="projectDomain"]', `software`);
    await page.fill('[name="projectDescription"]', `Test`);
    await page.locator(':text("Select Customer Name")');

    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // Select customer (if dropdown exists)
    await page.selectOption('[name="customer"]', { label: customerName });

    await page.fill('[name="projectName"]', projectName);
    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // 6️⃣ Delete Project
    await page.locator(`text=${projectName}`).first().click();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');
    await page.waitForTimeout(2000);

    // 7️⃣ Delete Customer
    await page.click('text=Customer');

    await page.locator(`text=${customerName}`).first().click();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');

    await page.waitForTimeout(2000);

    // 8️⃣ Logout
    await page.click('text=Logout');

});