import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

export default function SEO({
  title = "ESS SARL - Environmental & Safety Solutions | Mining Consultancy DRC",
  description = "Leading environmental and safety consultancy in the Democratic Republic of Congo. Expert mining solutions, regulatory compliance, and sustainable practices for industrial operations.",
  keywords = "environmental consultancy, safety solutions, mining consultancy, DRC, Democratic Republic of Congo, regulatory compliance, sustainable mining, workplace safety, environmental management",
  canonical,
  ogImage = "/assets/images/logo/ess-logo.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}: SEOProps) {
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ESS SARL",
    "description": "Environmental and Safety Solutions SARL - Leading consultancy in the Democratic Republic of Congo",
    "url": "https://ess-sarl.netlify.app",
    "logo": "https://ess-sarl.netlify.app/assets/images/logo/ess-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+243-XXX-XXX-XXX",
      "contactType": "customer service",
      "areaServed": "CD",
      "availableLanguage": ["French", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lubumbashi",
      "addressCountry": "CD"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ess-sarl",
      "https://www.facebook.com/ess-sarl"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Environmental Consulting",
    "services": [
      "Environmental Management",
      "Safety Consultancy", 
      "Mining Solutions",
      "Regulatory Compliance",
      "Training & Development"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ESS SARL" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://ess-sarl.netlify.app"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ESS SARL" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#30B4F2" />
      <meta name="msapplication-TileColor" content="#30B4F2" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="googlec7cd33e197176b15" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Environmental Consultancy Services",
          "description": "Comprehensive environmental management and safety solutions for mining and industrial operations",
          "provider": {
            "@type": "Organization",
            "name": "ESS SARL"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Democratic Republic of Congo"
          },
          "serviceType": "Environmental Consulting",
          "offers": {
            "@type": "Offer",
            "description": "Professional environmental and safety consultancy services"
          }
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ess-sarl.netlify.app"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Services",
              "item": "https://ess-sarl.netlify.app/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "About",
              "item": "https://ess-sarl.netlify.app/about"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact",
              "item": "https://ess-sarl.netlify.app/contact"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
