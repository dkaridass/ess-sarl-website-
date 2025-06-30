# ESS SARL Website

## Overview

ESS SARL is a professional website for Environmental and Safety Solutions SARL, a consultancy firm based in the Democratic Republic of Congo. The project is a full-stack web application that showcases the company's services, expertise, and achievements in environmental management and safety consulting for the mining and industrial sectors.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system and Shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Internationalization**: i18next with React integration for English/French language support
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Custom component library built on top of Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Vite with middleware mode for seamless development experience
- **API Pattern**: RESTful API with proper error handling and validation

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Drizzle but not specifically required)
- **Connection**: Neon serverless PostgreSQL adapter for cloud database connectivity
- **Schema**: Defined schemas for users, contact submissions, and newsletter subscriptions

## Key Components

### Core Functionality
1. **Multi-language Website**: English and French language support with proper SEO
2. **Contact Form**: Server-side validated contact form with email notifications
3. **Newsletter Subscription**: Email subscription system with validation
4. **Blog System**: Content management for articles and news
5. **Interactive Chatbot**: Customer service chatbot for basic inquiries
6. **Responsive Design**: Mobile-first approach with modern UI/UX

### Page Structure
- Home page with hero carousel and service overview
- About page with team information and company details
- Services page with detailed service descriptions
- Testimonials and achievements showcases
- FAQ section with categorized questions
- Contact page with integrated forms
- Blog with categorized posts and search functionality

### Component Architecture
- Modular component structure with reusable UI elements
- Layout components (Header, Footer, Navigation)
- Page-specific components with lazy loading
- Form components with validation and error handling
- SEO components for meta tag management

## Data Flow

1. **Client Requests**: Browser requests are handled by the Express server in development
2. **API Routing**: API requests are routed to appropriate handlers with validation
3. **Database Operations**: Drizzle ORM handles database queries with type safety
4. **Response Processing**: Server responses are processed by React Query on the client
5. **State Management**: Component state is managed locally with React hooks
6. **Form Submissions**: Forms are validated client-side and server-side before processing

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, PostCSS
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **UI Framework**: Tailwind CSS, Radix UI primitives
- **Form Handling**: React Hook Form, Zod validation
- **HTTP Client**: TanStack Query for API state management
- **Email Service**: Nodemailer for contact form submissions

### Development Dependencies
- **Code Quality**: ESLint, TypeScript compiler
- **CSS Processing**: Tailwind CSS, Autoprefixer
- **Asset Handling**: Vite asset optimization

### Deployment Dependencies
- **Serverless Functions**: Netlify Functions for contact form and chatbot
- **Email Services**: SMTP configuration for production email delivery

## Deployment Strategy

### Development Environment
- Local development server runs on port 5000
- Vite dev server with hot module replacement
- PostgreSQL database connection via environment variables

### Production Deployment
- **Platform**: Netlify with serverless functions
- **Build Process**: Vite production build with asset optimization
- **Functions**: Netlify serverless functions for API endpoints
- **Email**: SMTP configuration via environment variables
- **Assets**: Static asset optimization and CDN delivery

### Environment Variables
Required for production deployment:
- `DATABASE_URL`: PostgreSQL connection string
- `SMTP_HOST`: Email server host
- `SMTP_PORT`: Email server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `SMTP_SECURE`: TLS encryption setting

### Deployment Options
1. **Direct Upload**: Pre-built files can be uploaded directly to Netlify
2. **Git Integration**: Continuous deployment from Git repository
3. **Manual Build**: Local build with manual upload to hosting platform

## Changelog
- June 30, 2025. Complete four-service platform implementation with all company profiles integrated: Environmental Services, Health & Safety Services, Training & Mentoring Services, and Building & Construction Services - comprehensive mining consultancy website now fully operational
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.