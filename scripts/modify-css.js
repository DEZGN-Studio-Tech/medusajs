import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// New target directory
const targetDir = '/app/public/admin/assets';

const cssAdditions = `
#medusa > div > div > div.mb-4.flex.flex-col.items-center > h1{
  position: relative;
  width: calc(100% - 8ch);  /* reduce width by 4 characters */
  overflow: hidden;
  text-indent: 0;
  white-space: nowrap;
}

#medusa > div > div > div.mb-4.flex.flex-col.items-center > p {
display: none;
}

div[class*="bg-ui-bg-field"][class*="text-ui-fg-subtle"][class*="flex"][class*="items-center"][class*="justify-center"][class*="size-12"][class*="size-11"][class*="rounded-[10px]"][class*="bg-ui-button-neutral"][class*="shadow-buttons-neutral"][class*="after:button-neutral-gradient"][class*="relative"][class*="mb-4"][class*="h-[50px]"][class*="w-[50px]"][class*="rounded-xl"][class*="after:inset-0"][class*="after:content-['']"] {
  display: none;
}

a[href="https://docs.medusajs.com"] {
display: none;
}

a[href="https://medusajs.com/changelog/"] {
display: none;
}

.text-ui-fg-muted.txt-small.my-6:has(a[href*="app/reset-password"]) {
display: none;
}
`;

// Add delay function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Main function
async function modifyCss() {
  try {
    console.log('Starting CSS modification process...');
    
    // Get all files in the directory
    const files = await fs.readdir(targetDir);
    
    // Filter for files that match the pattern index-*.css
    const cssFiles = files.filter(file => /^index-.*\.css$/.test(file));
    
    if (cssFiles.length === 0) {
      console.error('No matching CSS files found');
      process.exit(1);
    }

    console.log(`Found ${cssFiles.length} CSS files to modify`);
    console.log('Waiting 10 seconds before modifying CSS...');
    
    // Modify each matching file
    for (const file of cssFiles) {
      const filePath = join(targetDir, file);
      console.log(`Modifying ${file}...`);
      
      // Read existing CSS content
      let cssContent = await fs.readFile(filePath, 'utf8');
      
      // Append new CSS rules
      cssContent += cssAdditions;
      
      // Write back to file with proper permissions
      await fs.writeFile(filePath, cssContent, { mode: 0o644 });
      
      console.log(`Successfully modified ${file}`);
    }
    
    console.log('All files modified successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error modifying CSS:', error);
    process.exit(1);
  }
}

async function modifyTitle() {
  try {
    const indexPath = '/app/public/admin/index.html';
    console.log('Modifying index.html title...');
    
    // Read the HTML file
    let htmlContent = await fs.readFile(indexPath, 'utf8');
    
    // Replace <head> with <head><title>Order Now</title>
    htmlContent = htmlContent.replace('<head>', '<head><title>Order Now</title>');
    
    // Write back to file
    await fs.writeFile(indexPath, htmlContent, { mode: 0o644 });
    
    console.log('Successfully added title to head');
  } catch (error) {
    console.error('Error modifying title:', error);
    process.exit(1);
  }
}

async function main() {
  await delay(60000);
  await modifyTitle();
  await modifyCss();
}

// Execute the main function
main();