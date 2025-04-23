import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use posix-style paths for Linux
const cssPath = join(__dirname, '..', '.medusa', 'client', 'index.css').replace(/\\/g, '/');

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
    console.log('Starting CSS modification process...');
    
    // Check if file exists before waiting
    try {
      await fs.access(cssPath);
    } catch (e) {
      console.error(`CSS file not found at: ${cssPath}`);
      process.exit(1);
    }

    console.log('Waiting 10 seconds before modifying CSS...');
    await delay(10000);
    
    // Read existing CSS content
    let cssContent = await fs.readFile(cssPath, 'utf8');
    
    // Append new CSS rules
    cssContent += cssAdditions;
    
    // Write back to file with proper permissions
    await fs.writeFile(cssPath, cssContent, { mode: 0o644 });
    
    console.log('Successfully modified index.css');
    process.exit(0);
  } catch (error) {
    console.error('Error modifying CSS:', error);
    process.exit(1);
  }
}

// Execute the function
modifyCss();