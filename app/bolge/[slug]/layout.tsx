import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import LocationPageClient from './page';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all location pages
export async function generateStaticParams() {
  const locations = await client.fetch(
    `*[_type == "locationPage" && isActive == true]{ "slug": slug.current }`
  );

  return locations.map((location: { slug: string }) => ({
    slug: location.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = params;

  const data = await client.fetch(
    `*[_type == "locationPage" && slug.current == $slug && isActive == true][0]{
      seo,
      title,
      location,
      schemaData
    }`,
    { slug }
  );

  if (!data) {
    return {
      title: 'Sayfa Bulunamadı',
    };
  }

  const metaTitle = data.seo?.metaTitle || `${data.location} Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan`;
  const metaDescription = data.seo?.metaDescription || `${data.location}'da uzman diyetisyen hizmeti. Kişiye özel diyet programları ve beslenme danışmanlığı.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: data.seo?.keywords || [],
    alternates: {
      canonical: `https://www.diyetisyenoguz.com/bolge/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.diyetisyenoguz.com/bolge/${slug}`,
      type: 'website',
      locale: 'tr_TR',
      siteName: 'Diyetisyen Oğuz Yolyapan',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default LocationPageClient;
