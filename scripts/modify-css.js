import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cssPath = join(__dirname, '..', '.medusa', 'client', 'index.css');

const cssAdditions = `
.font-sans.font-medium.h1-core {
  display: none;
}

div[class*="bg-ui-bg-field"][class*="text-ui-fg-subtle"][class*="flex"][class*="items-center"][class*="justify-center"][class*="size-12"][class*="size-11"][class*="rounded-[10px]"][class*="bg-ui-button-neutral"] {
  display: none;
}

.font-normal.font-sans.txt-small.text-ui-fg-subtle.text-center {
  display: none;
}
`;

// Add delay function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Main function
async function modifyCss() {
  try {
    console.log('Waiting 10 seconds before modifying CSS...');
    await delay(10000); // Wait 10 seconds
    
    // Read existing CSS content
    let cssContent = await fs.readFile(cssPath, 'utf8');
    
    // Append new CSS rules
    cssContent += cssAdditions;
    
    // Write back to file
    await fs.writeFile(cssPath, cssContent);
    
    console.log('Successfully modified index.css');
  } catch (error) {
    console.error('Error modifying CSS:', error);
  }
}

// Execute the function
modifyCss();