const { test, expect } = require('@playwright/test');

test('Customer + Project + Task Flow (Create, Modify, Delete)', async ({ page }) => {

    // 1️⃣ Navigate to URL
    await page.goto('https://sgtestinginstituteapp.onrender.com/');

    // 2️⃣ Login
    await page.fill('[name="username"]', 'ramya');
    await page.fill('[name="password"]', 'ramya');
    await page.click('text=Sign In');

    await page.waitForSelector('text=Customer');

    // 3️⃣ Create Customer
    await page.click('text=Customer');
    await page.click('text=Add Customer');

    const customerName = 'Cust' + Math.floor(Math.random() * 1000);

    await page.fill('[name="firstName"]', customerName);
    await page.fill('[name="lastName"]', 'Automation');
    await page.fill('[name="email"]', `${customerName}@test.com`);
    await page.fill('[name="phone"]', '9876543210');

    await page.click('text=Save');
    await page.waitForTimeout(2000);

    // 4️⃣ Create Project
    await page.click('text=Project');
    await page.click('text=Add Project');

    const projectName = 'Proj' + Math.floor(Math.random() * 1000);

    await page.waitForSelector('[name="customer"]');
    await page.selectOption('[name="customer"]', { label: customerName });

    await page.fill('[name="projectName"]', projectName);
    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // 5️⃣ Create Task
    await page.click('text=Task');
    await page.click('text=Create Task');

    const taskName = 'Task' + Math.floor(Math.random() * 1000);

    await page.waitForSelector('[name="project"]');
    await page.selectOption('[name="project"]', { label: projectName });

    await page.fill('[name="taskName"]', taskName);
    await page.click('text=Save');

    await page.waitForTimeout(2000);

    // 6️⃣ Modify Task
    await page.locator(`text=${taskName}`).first().click();

    await page.click('text=Edit');

    const updatedTask = taskName + '_Updated';

    await page.fill('[name="taskName"]', updatedTask);
    await page.click('text=Update');

    await page.waitForTimeout(2000);

    // 7️⃣ Delete Task
    await page.locator(`text=${updatedTask}`).first().click();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');
    await page.waitForTimeout(2000);

    // 8️⃣ Delete Project
    await page.click('text=Project');
    await page.locator(`text=${projectName}`).first().click();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');
    await page.waitForTimeout(2000);

    // 9️⃣ Delete Customer
    await page.click('text=Customer');
    await page.locator(`text=${customerName}`).first().click();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Delete');
    await page.waitForTimeout(2000);

    // 🔟 Logout
    await page.click('text=Logout');

});