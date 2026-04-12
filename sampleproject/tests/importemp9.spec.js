const { test, expect } = require('@playwright/test');
const path = require('path');

test('Import Employee and Delete Flow', async ({ page }) => {

    // 1️⃣ Navigate to URL
    await page.goto('https://sgtestinginstituteapp.onrender.com/');

    // 2️⃣ Login
    await page.fill('[name="username"]', 'ramya');
    await page.fill('[name="password"]', 'ramya');
    await page.click('text=Sign In');

    await page.waitForSelector('text=Employee');

    // 3️⃣ Go to Employee Page
    await page.click('text=Employee');

    // 4️⃣ Click Import Employee
    await page.click('text=Import Employee');

    // 5️⃣ Upload File (CSV / Excel)
    // Make sure file exists in your project folder
    const filePath = path.join(__dirname, 'employees.csv');

    await page.setInputFiles('input[type="file"]', filePath);

    // 6️⃣ Click Upload / Import
    await page.click('text=Upload');

    await page.waitForTimeout(3000);

    // 👉 Assume first imported employee name from file
    const importedName = 'John'; // change based on your CSV data

    // 7️⃣ Delete Employee
    await page.locator(`text=${importedName}`).first().click();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');

    await page.waitForTimeout(2000);

    // 8️⃣ Logout
    await page.click('text=Logout');

});