import { useEffect } from 'react';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function Head({
  title = 'Kokum & Coast - Coastal Maharashtra, Reimagined | Mumbai Restaurant',
  description = 'Experience authentic coastal Maharashtra cuisine with a modern twist at Kokum & Coast. Located in Colaba, Mumbai. Fresh seafood, traditional flavors, contemporary dining.',
  keywords = 'Mumbai restaurant, coastal cuisine, Maharashtra food, seafood, Colaba dining, Indian restaurant, kokum, coastal flavors, Mumbai food, Gateway of India restaurant',
  image = 'https://static.wixstatic.com/media/bb9e77_ee914074c3294db382ea7fbcae4a61b8~mv2.png?originWidth=1152&originHeight=576',
  url = 'https://kokumandcoast.in'
}: HeadProps) {
  const fullTitle = title.includes('Kokum & Coast') ? title : `${title} | Kokum & Coast`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kokum & Coast",
    "description": "Coastal Maharashtra cuisine reimagined in the heart of Mumbai",
    "url": url,
    "telephone": "+91-22-4000-1234",
    "email": "hello@kokumandcoast.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 12, Colaba Causeway",
      "addressLocality": "Colaba",
      "addressRegion": "Mumbai",
      "postalCode": "400005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.9220",
      "longitude": "72.8311"
    },
    "openingHours": "Mo-Su 11:00-23:00",
    "priceRange": "$",
    "servesCuisine": ["Indian", "Seafood", "Coastal"],
    "acceptsReservations": true,
    "hasMenu": true,
    "image": image,
    "sameAs": [
      "https://instagram.com/kokumandcoast",
      "https://facebook.com/kokumandcoast",
      "https://twitter.com/kokumandcoast"
    ]
  };

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Kokum & Coast');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'en');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph Meta Tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Kokum & Coast', true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@kokumandcoast');

    // Additional Meta Tags
    updateMetaTag('theme-color', '#FF6B6B');
    updateMetaTag('msapplication-TileColor', '#FF6B6B');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', 'Kokum & Coast');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Update structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Add preconnect links if they don't exist
    const addPreconnect = (href: string, crossOrigin?: boolean) => {
      const existing = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', href);
        if (crossOrigin) {
          link.setAttribute('crossorigin', 'anonymous');
        }
        document.head.appendChild(link);
      }
    };

    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com', true);
    addPreconnect('https://static.wixstatic.com');
  }, [fullTitle, description, keywords, image, url, structuredData]);

  return null;
}