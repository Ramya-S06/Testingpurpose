const { test, expect } = require('@playwright/test');

test('Employee Flow', async ({ page }) => {

    // 1️⃣ Navigate to URL
    await page.goto('https://sgtestinginstituteapp.onrender.com/');

    // 2️⃣ Login
    await page.fill('[name="username"]', 'ramya');
    await page.fill('[name="password"]', 'ramya');
    await page.click('text=Sign In');

    // Wait for dashboard
    await page.waitForSelector('text=Employee');

    // 3️⃣ Navigate to Employee Page
    await page.click('text=Employee');

    // 4️⃣ Click Create Employee
    await page.click('text=Add Employee');

    // 5️⃣ Fill Employee Details
    const empName = 'TestUser' + Math.floor(Math.random() * 1000);

    await page.fill('[name="firstName"]', empName);
    await page.fill('[name="lastName"]', 'Automation');
    await page.fill('[name="jobName"]', 'Software');
    await page.fill('[name="email"]', `${empName}@test.com`);
    await page.fill('[name="age"]', `25`);
    await page.fill('[name="contactNumber"]', '9876543210');
    await page.fill('[name="salary"]', `25000`);
    await page.fill('[name="departmentName"]', `Testing Purpose`);
    await page.fill('[name="cityName"]', `Bangalore`);
    await page.fill('[name="address"]', `RR nagar`);

    // 6️⃣ Save Employee
    await page.click('text=Save');

    // Wait for employee list
    await page.waitForTimeout(2000);

    // 7️⃣ Delete Employee
    // Find created employee row and delete
    await page.locator(`text=${empName}`).first().click();

    await page.click('text=Delete');

    // Confirm delete (if popup appears)
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await page.waitForTimeout(2000);

    // 8️⃣ Logout
    await page.click('text=Logout');

});