import { defineType } from 'sanity';
import { MapPin } from 'lucide-react';

export default defineType({
  name: 'locationPage',
  title: 'Bölge Sayfaları',
  type: 'document',
  icon: MapPin,
  fields: [
    {
      name: 'title',
      title: 'Sayfa Başlığı',
      type: 'string',
      description: 'Örn: Çorlu Diyetisyen, Çerkezköy Diyetisyen',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Örn: corlu-diyetisyen, cerkezkoy-diyetisyen',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Bölge Adı',
      type: 'string',
      description: 'Örn: Çorlu, Çerkezköy, Malkara',
      validation: Rule => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Aktif mi?',
      type: 'boolean',
      description: 'Sayfayı yayında tutmak için işaretleyin',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Sayfaların gösterim sırası (küçük numara önce gelir)',
      initialValue: 0,
    },
    
    // SEO Section
    {
      name: 'seo',
      title: 'SEO Ayarları',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Örn: Çorlu Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan (60 karakter)',
          validation: Rule => Rule.required().max(60).warning('60 karakterden kısa olmalı'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Çorlu\'da uzman diyetisyen... (160 karakter)',
          validation: Rule => Rule.required().max(160).warning('160 karakterden kısa olmalı'),
        },
        {
          name: 'keywords',
          title: 'Anahtar Kelimeler',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Örn: çorlu diyetisyen, çorlu beslenme danışmanı, çorlu diyet',
        },
        {
          name: 'ogImage',
          title: 'OG Image (Sosyal Medya Görseli)',
          type: 'image',
          description: 'Önerilen boyut: 1200x630px',
        },
      ],
    },

    // Hero Section
    {
      name: 'hero',
      title: 'Hero Bölümü',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'h1',
          title: 'H1 Başlık',
          type: 'string',
          description: 'Örn: Çorlu\'da Uzman Diyetisyen Hizmeti',
          validation: Rule => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Alt Başlık',
          type: 'string',
          description: 'Kısa açıklayıcı metin',
        },
        {
          name: 'description',
          title: 'Açıklama',
          type: 'text',
          rows: 4,
          description: 'Detaylı açıklama metni',
        },
        {
          name: 'image',
          title: 'Hero Görseli',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'ctaText',
          title: 'CTA Butonu Yazısı',
          type: 'string',
          initialValue: 'Hemen Randevu Al',
        },
      ],
    },

    // Content Section
    {
      name: 'content',
      title: 'İçerik Bölümü',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'mainContent',
          title: 'Ana İçerik',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
              },
            },
          ],
          description: 'SEO-friendly içerik yazın. H2, H3 kullanın.',
        },
        {
          name: 'whyChooseUs',
          title: 'Neden Bizi Seçmelisiniz?',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Başlık' },
                { name: 'description', type: 'text', title: 'Açıklama', rows: 3 },
                { 
                  name: 'icon', 
                  type: 'string', 
                  title: 'İkon', 
                  description: 'Lucide icon adı (örn: Heart, Award, Users)',
                },
              ],
            },
          ],
        },
      ],
    },

    // Services Highlight
    {
      name: 'servicesHighlight',
      title: 'Hizmet Vurguları',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Başlık',
          type: 'string',
          initialValue: 'Hizmetlerimiz',
        },
        {
          name: 'services',
          title: 'Hizmetler',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'service' }],
            },
          ],
          description: 'Gösterilecek hizmetleri seçin',
        },
      ],
    },

    // Local Info Section
    {
      name: 'localInfo',
      title: 'Yerel Bilgiler',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Bölüm Başlığı',
          type: 'string',
          initialValue: 'Bölge Hakkında',
        },
        {
          name: 'description',
          title: 'Bölge Açıklaması',
          type: 'text',
          rows: 4,
          description: 'Bu bölge hakkında yerel bilgiler (nüfus, özellikler vs.)',
        },
        {
          name: 'transportInfo',
          title: 'Ulaşım Bilgisi',
          type: 'text',
          rows: 3,
          description: 'Bölgeden nasıl ulaşılır?',
        },
        {
          name: 'nearbyLocations',
          title: 'Yakın Bölgeler',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Örn: Velimeşe, Değirmenaltı, Fevzipaşa',
        },
      ],
    },

    // FAQ Section
    {
      name: 'faq',
      title: 'Sık Sorulan Sorular',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'showFaq',
          title: 'SSS Göster?',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'Başlık',
          type: 'string',
          initialValue: 'Sık Sorulan Sorular',
        },
        {
          name: 'questions',
          title: 'Sorular',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { 
                  name: 'question', 
                  type: 'string', 
                  title: 'Soru',
                  description: 'Örn: Çorlu\'da diyetisyen randevusu nasıl alınır?',
                },
                { 
                  name: 'answer', 
                  type: 'text', 
                  title: 'Cevap', 
                  rows: 3,
                },
              ],
              preview: {
                select: {
                  title: 'question',
                  subtitle: 'answer',
                },
              },
            },
          ],
        },
      ],
    },

    // CTA Section
    {
      name: 'cta',
      title: 'CTA (Harekete Geçirici) Bölümü',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Başlık',
          type: 'string',
          initialValue: 'Randevu Almak İster misiniz?',
        },
        {
          name: 'description',
          title: 'Açıklama',
          type: 'text',
          rows: 2,
        },
        {
          name: 'buttonText',
          title: 'Buton Yazısı',
          type: 'string',
          initialValue: 'Hemen İletişime Geçin',
        },
      ],
    },

    // Schema Markup Data
    {
      name: 'schemaData',
      title: 'Yapısal Veri (Schema)',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'latitude',
          title: 'Enlem (Latitude)',
          type: 'string',
          description: 'Bölgenin GPS koordinatı',
        },
        {
          name: 'longitude',
          title: 'Boylam (Longitude)',
          type: 'string',
          description: 'Bölgenin GPS koordinatı',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      location: 'location',
      slug: 'slug.current',
      isActive: 'isActive',
    },
    prepare({ title, location, slug, isActive }) {
      return {
        title: title || location,
        subtitle: `/${slug} ${isActive ? '✓ Aktif' : '✗ Pasif'}`,
      };
    },
  },
});
