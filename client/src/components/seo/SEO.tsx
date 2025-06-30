import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  location?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  additionalStructuredData?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords,
  image = "/logo.png", 
  url = window.location.href,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  location,
  additionalStructuredData
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const defaultTitle = t('seo.defaultTitle', 'ESS SARL - Environmental & Safety Solutions');
  const defaultDescription = t('seo.defaultDescription', 'ESS SARL provides comprehensive environmental and safety solutions consultancy services in the Democratic Republic of Congo.');
  const defaultKeywords = t('seo.defaultKeywords', 'environmental consulting, safety solutions, DRC, mining safety, environmental management, safety training, Lubumbashi, Congo, ISO 14001');
  
  const siteTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;

  // Structured data for Organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ESS SARL",
    "url": "https://www.ess-sarl.com",
    "logo": "https://www.ess-sarl.com/logo.png",
    "description": defaultDescription,
    "telephone": "+243 83 870 43 93",
    "email": "office@ess-sarl.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "02 Avenue Papy LUBOTA, quartier Golf Tshamalale",
      "addressLocality": "Lubumbashi",
      "addressRegion": "Haut-Katanga",
      "postalCode": "",
      "addressCountry": "CD"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ess-sarl/",
      "https://www.facebook.com/ESSSARL"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  // Additional structured data based on page type
  let structuredData = organizationStructuredData;

  if (type === 'article' && title && publishedTime) {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "image": image,
      "author": author || "ESS SARL Team",
      "publisher": {
        "@type": "Organization",
        "name": "ESS SARL",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ess-sarl.com/logo.png"
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "description": description
    };
  } else if (type === 'service' && title) {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": title,
      "provider": {
        "@type": "Organization",
        "name": "ESS SARL",
        "url": "https://www.ess-sarl.com"
      },
      "description": description,
      "areaServed": {
        "@type": "Country",
        "name": "Democratic Republic of Congo"
      }
    };
  }

  // Merge with any additional structured data provided
  if (additionalStructuredData) {
    structuredData = { ...structuredData, ...additionalStructuredData };
  }

  return (
    <Helmet>
      <html lang={currentLanguage} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={currentLanguage === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="ESS SARL" />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
        </>
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate language links */}
      <link rel="alternate" hrefLang="en" href={url.replace(/\/fr\//g, '/en/')} />
      <link rel="alternate" hrefLang="fr" href={url.replace(/\/en\//g, '/fr/')} />
      <link rel="alternate" hrefLang="x-default" href={url.replace(/\/(en|fr)\//g, '/en/')} />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="geo.region" content="CD" />
      <meta name="geo.placename" content="Lubumbashi" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}