# ESS SARL Website

A professional website for ESS SARL, an environmental and safety solutions consultancy in DRC, showcasing their services, expertise, and achievements.

## Features
- Responsive design optimized for all devices
- Professional presentation of services and expertise
- Contact form and newsletter subscription functionality
- Serverless functions for form handling
- Ready for deployment on Netlify

## Deploy to Netlify

There are two easy ways to deploy this project to Netlify:

### Option 1: Use the Deploy to Netlify Button (GitHub Repository Required)

If you've pushed this project to GitHub, click the button below to deploy directly from your repository:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_GITHUB_USERNAME/ess-sarl-website)

### Option 2: Manual Deployment (No GitHub Required)

Run the included deployment script:

```bash
./deploy.sh
```

This will:
1. Build the project
2. Open the Netlify drag & drop deployment page
3. Guide you through the deployment process

Alternatively, you can manually:
1. Run `npm run build` to build the project
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder to deploy

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Build for Production

```bash
# Build the project
npm run build
```

## License
MIT