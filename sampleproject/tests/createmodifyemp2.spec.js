const { test, expect } = require('@playwright/test');

test('Employee Flow - Create, Modify, Delete', async ({ page }) => {

    // 1️⃣ Navigate to URL
    await page.goto('https://sgtestinginstituteapp.onrender.com/');

    // 2️⃣ Login
    await page.fill('[name="username"]', 'ramya');
    await page.fill('[name="password"]', 'ramya');
    await page.click('text=Sign In');

    await page.waitForSelector('text=Employee');

    // 3️⃣ Go to Employee Page
    await page.click('text=Employee');

    // 4️⃣ Create Employee
    await page.click('text=Add Employee');

    const empName = 'TestUser' + Math.floor(Math.random() * 1000);

    await page.fill('[name="firstName"]', empName);
    await page.fill('[name="lastName"]', 'Automation');
    await page.fill('[name="jobName"]', 'Software');
    await page.fill('[name="email"]', `${empName}@test.com`);
    await page.fill('[name="age"]', `25`);
    await page.fill('[name="contactNumber"]', '987651210');
    await page.fill('[name="salary"]', `25000`);
    await page.fill('[name="departmentName"]', `TestingPurpose`);
    await page.fill('[name="cityName"]', `Mangalore`);
    await page.fill('[name="address"]', `RRnagar`);
    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // 5️⃣ Modify Employee
    // Click the created employee
    await page.locator(`text=${empName}`).first().click();

    // Click Edit button
    await page.click('text=Edit');

    // Modify details
    const updatedName = empName + '_Updated';

    await page.fill('[name="firstName"]', updatedName);

    await page.click('text=Update');

    await page.waitForTimeout(2000);

    // 6️⃣ Delete Employee
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