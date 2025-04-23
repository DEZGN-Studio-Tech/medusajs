const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', '.medusa', 'client', 'index.css');

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

try {
  // Read existing CSS content
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  
  // Append new CSS rules
  cssContent += cssAdditions;
  
  // Write back to file
  fs.writeFileSync(cssPath, cssContent);
  
  console.log('Successfully modified index.css');
} catch (error) {
  console.error('Error modifying CSS:', error);
}