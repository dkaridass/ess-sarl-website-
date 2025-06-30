#!/bin/bash

echo "ESS SARL Website - Netlify Deployment Helper"
echo "-------------------------------------------"

# Build the project first
echo "Building the project..."
npm run build

echo "Preparing for Netlify deployment..."

# Open Netlify deploy page (site-specific instructions)
echo "Please follow these steps:"
echo "1. Go to https://app.netlify.com/drop"
echo "2. Drag and drop the 'dist' folder from this project to the Netlify page"
echo "3. Wait for the upload to complete and your site will be deployed!"
echo "4. You can configure your custom domain in the Netlify dashboard after deployment"

# Try to open the URL automatically based on the operating system
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  open "https://app.netlify.com/drop"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # Linux
  xdg-open "https://app.netlify.com/drop"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
  # Windows
  start "https://app.netlify.com/drop"
else
  echo "Could not automatically open the URL. Please visit https://app.netlify.com/drop manually."
fi