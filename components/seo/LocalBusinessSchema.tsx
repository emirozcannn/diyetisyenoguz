'use client';

import { CONTACT_INFO, SITE_URL, SITE_NAME } from '@/lib/constants';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dietitian", "MedicalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${SITE_URL}/#business`,
    "name": "Uzman Diyetisyen Oğuz Yolyapan",
    "alternateName": ["Diyetisyen Oğuz", "Oğuz Yolyapan"],
    "description": "Tekirdağ'da uzman diyetisyen hizmetleri, kişiye özel beslenme programları ve online diyet danışmanlığı",
    "url": SITE_URL,
    "telephone": CONTACT_INFO.phone,
    "email": CONTACT_INFO.email,
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barbaros Mah. Sahilkent Sok. B Kısım No:20",
      "addressLocality": "Süleymanpaşa",
      "addressRegion": "Tekirdağ",
      "postalCode": "59030",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9833",
      "longitude": "27.5167"
    },
    "hasMap": "https://www.google.com/maps?q=Barbaros+Mah.+Sahilkent+Sok.+B+Kısım+No:20+Süleymanpaşa+Tekirdağ",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Tekirdağ",
        "@id": "https://tr.wikipedia.org/wiki/Tekirdağ"
      },
      {
        "@type": "City",
        "name": "Süleymanpaşa"
      },
      {
        "@type": "City",
        "name": "Çorlu"
      },
      {
        "@type": "City",
        "name": "Çerkezköy"
      },
      {
        "@type": "City",
        "name": "Malkara"
      },
      {
        "@type": "City",
        "name": "Hayrabolu"
      },
      {
        "@type": "City",
        "name": "Marmaraereğlisi"
      }
    ],
    "image": `${SITE_URL}/images/oguz-yolyapan.jpg`,
    "logo": `${SITE_URL}/logo.png`,
    "sameAs": [
      CONTACT_INFO.socialMedia.instagram,
      CONTACT_INFO.socialMedia.linkedin,
      CONTACT_INFO.socialMedia.youtube,
      CONTACT_INFO.socialMedia.facebook
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Online Banking"],
    "currenciesAccepted": "TRY",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Oğuz Yolyapan",
      "jobTitle": "Uzman Diyetisyen",
      "description": "Tekirdağ'da 5+ yıllık deneyime sahip uzman diyetisyen. Kişiye özel beslenme programları ve online diyet danışmanlığı konularında uzman.",
      "sameAs": [
        CONTACT_INFO.socialMedia.instagram,
        CONTACT_INFO.socialMedia.linkedin
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Diyetisyen Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kişiye Özel Diyet Programı",
            "description": "Detaylı beslenme analizi ve kişiye özel hazırlanan diyet programı"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Diyet Danışmanlığı",
            "description": "Uzaktan beslenme takibi ve danışmanlık hizmeti"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sporcu Beslenmesi",
            "description": "Sporcular için performans odaklı beslenme programları"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
