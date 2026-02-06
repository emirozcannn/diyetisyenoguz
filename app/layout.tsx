import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { client } from "@/lib/sanity/client";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | Diyetisyen Oğuz Yolyapan`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'tekirdağ diyetisyen',
    'tekirdağ uzman diyetisyen',
    'diyetisyen tekirdağ',
    'süleymanpaşa diyetisyen',
    'çorlu diyetisyen',
    'çerkezköy diyetisyen',
    'tekirdağ online diyet',
    'tekirdağ beslenme danışmanı',
    'tekirdağ diyet programı',
    'tekirdağ kilo verme',
    'malkara diyetisyen',
    'hayrabolu diyetisyen',
    'marmaraereğlisi diyetisyen',
    'online diyetisyen',
    'kişiye özel diyet',
    'sağlıklı beslenme',
    'sporcu beslenmesi',
    'hamilelik beslenmesi',
  ],
  authors: [{ name: 'Uzman Diyetisyen Oğuz Yolyapan' }],
  creator: 'Uzman Diyetisyen Oğuz Yolyapan',
  publisher: 'Uzman Diyetisyen Oğuz Yolyapan',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: 'https://www.diyetisyenoguz.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tekirdağ Diyetisyen Oğuz Yolyapan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: '@diyetisyenoguz',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'MsG3mxWbUnOo-F4Omw7oYL5iGTqOHTzeqtkJdFApVpI',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch footer data from Sanity
  const footerData = await client.fetch(
    `*[_type == "footer"][0]{
      title,
      description,
      servicesLinks,
      corporateLinks,
      legalLinks,
      copyrightText,
      contactInfo,
      socialMedia
    }`,
    {},
    { next: { revalidate: 60 } } // Cache for 1 minute
  );

  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer data={footerData} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
