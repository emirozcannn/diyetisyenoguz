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
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'tekirdağ diyetisyen',
    'diyetisyen tekirdağ',
    'süleymanpaşa diyetisyen',
    'diyetisyen süleymanpaşa',
    'marmaraereğlisi diyetisyen',
    'uzman diyetisyen tekirdağ',
    'tekirdağ beslenme danışmanı',
    'tekirdağ diyet programı',
    'tekirdağ kilo verme',
    'çorlu diyetisyen',
    'çerkezköy diyetisyen',
    'malkara diyetisyen',
    'hayrabolu diyetisyen',
    'online diyet',
    'online diyetisyen',
    'sağlıklı beslenme',
    'kilo verme',
    'diyet programı',
  ],
  authors: [{ name: 'Oğuz Yolyapan' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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
      copyrightText
    }`,
    {},
    { next: { revalidate: 3600 } } // Cache for 1 hour
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
