import { test, expect } from '@playwright/test';

test('test upload', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // Create a dummy PDF file content
    const buffer = Buffer.from('%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Pages\n/Kids [3 0 R]\n/Count 1\n>>\nendobj\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n/Resources <<\n/Font <<\n/F1 4 0 R\n>>\n>>\n/Contents 5 0 R\n>>\nendobj\n4 0 obj\n<<\n/Type /Font\n/Subtype /Type1\n/BaseFont /Helvetica\n>>\nendobj\n5 0 obj\n<<\n/Length 44\n>>\nstream\nBT\n/F1 12 Tf\n10 700 Td\n(Hello World) Tj\nET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f\n0000000009 00000 n\n0000000058 00000 n\n0000000114 00000 n\n0000000216 00000 n\n0000000304 00000 n\ntrailer\n<<\n/Size 6\n/Root 1 0 R\n>>\nstartxref\n398\n%%EOF', 'utf-8');
    
    // Wait for the file input
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('.border-dashed').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([{
        name: 'test.pdf',
        mimeType: 'application/pdf',
        buffer
    }]);

    // Wait until error appears
    await page.waitForTimeout(3000);
    
    // Get all the text in the upload panel
    console.log(await page.locator('.border-dashed').innerText());
    const fileRow = await page.locator('.space-y-2').innerText();
    console.log("FileRow Content:");
    console.log(fileRow);
});
