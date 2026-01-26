import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './lib/sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Oğuz Yolyapan - Uzman Diyetisyen',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/admin',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('İçerik Yönetimi')
          .items([
            // Site Ayarları
            S.listItem()
              .title('⚙️ Site Ayarları')
              .child(
                S.list()
                  .title('Site Ayarları')
                  .items([
                    S.listItem()
                      .title('Genel Ayarlar')
                      .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                    S.listItem()
                      .title('Navigasyon')
                      .child(S.document().schemaType('navigation').documentId('navigation')),
                    S.listItem()
                      .title('Footer')
                      .child(S.document().schemaType('footer').documentId('footer')),
                  ])
              ),

            S.divider(),

            // Sayfalar
            S.listItem()
              .title('📄 Sayfalar')
              .child(
                S.list()
                  .title('Sayfalar')
                  .items([
                    S.listItem()
                      .title('Ana Sayfa')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('Hakkımda Sayfası')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem()
                      .title('İletişim Sayfası')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                    S.listItem()
                      .title('Yasal Sayfalar')
                      .child(S.documentTypeList('legalPage').title('Yasal Sayfalar')),
                    S.listItem()
                      .title('Bölge Sayfaları')
                      .child(S.documentTypeList('locationPage').title('Bölge Sayfaları')),
                  ])
              ),

            S.divider(),

            // İçerikler
            S.listItem()
              .title('📝 İçerikler')
              .child(
                S.list()
                  .title('İçerikler')
                  .items([
                    S.listItem()
                      .title('Blog Yazıları')
                      .child(S.documentTypeList('post').title('Blog Yazıları')),
                    S.listItem()
                      .title('Kategoriler')
                      .child(S.documentTypeList('category').title('Kategoriler')),
                    S.listItem()
                      .title('Yazarlar')
                      .child(S.documentTypeList('author').title('Yazarlar')),
                  ])
              ),

            S.divider(),

            // Hizmetler & Paketler
            S.listItem()
              .title('🎯 Hizmetler & Paketler')
              .child(S.documentTypeList('service').title('Hizmetler')),

            S.divider(),

            // Diğer İçerikler
            S.listItem()
              .title('💬 Diğer İçerikler')
              .child(
                S.list()
                  .title('Diğer İçerikler')
                  .items([
                    S.listItem()
                      .title('Referanslar')
                      .child(S.documentTypeList('testimonial').title('Referanslar')),
                    S.listItem()
                      .title('SSS')
                      .child(S.documentTypeList('faq').title('SSS')),
                    S.listItem()
                      .title('Randevular')
                      .child(S.documentTypeList('appointment').title('Randevular')),
                    S.listItem()
                      .title('İletişim Mesajları')
                      .child(S.documentTypeList('contact').title('İletişim Mesajları')),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
