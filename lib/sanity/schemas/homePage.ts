import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Ana Sayfa',
  type: 'document',
  __experimental_singleton: true,
  fields: [
    // --- HERO BÖLÜMÜ (Mevcut) ---
    defineField({
      name: 'hero',
      title: 'Hero Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'subtitle', title: 'Alt Başlık', type: 'text', rows: 3 },
        { name: 'highlightedText', title: 'Vurgulu Metin', type: 'string' },
        { name: 'image', title: 'Hero Görseli', type: 'image', options: { hotspot: true } },
        {
          name: 'features',
          title: 'Özellikler',
          type: 'array',
          of: [{ type: 'string' }],
          description: '✓ ile başlayan özellikler listesi',
        },
        { name: 'primaryButtonText', title: 'Ana Buton Metni', type: 'string', initialValue: 'Ücretsiz Randevu Al' },
        { name: 'primaryButtonLink', title: 'Ana Buton Linki', type: 'string', initialValue: '/randevu' },
        { name: 'secondaryButtonText', title: 'İkinci Buton Metni', type: 'string', initialValue: 'Beni Arayın' },
        { name: 'secondaryButtonPhone', title: 'İkinci Buton Telefon', type: 'string' },
      ],
    }),
    
    // --- İSTATİSTİKLER (Mevcut) ---
    defineField({
      name: 'stats',
      title: 'İstatistikler',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Değer', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'label', title: 'Etiket', type: 'string', validation: (Rule) => Rule.required() },
            {
              name: 'icon',
              title: 'İkon',
              type: 'string',
              options: {
                list: [
                  { title: 'Kullanıcılar', value: 'Users' },
                  { title: 'Ödül', value: 'Award' },
                  { title: 'Takvim', value: 'Calendar' },
                  { title: 'Yıldız', value: 'Star' },
                ],
              },
            },
          ],
        },
      ],
    }),

    // --- HAKKIMDA BÖLÜMÜ (Mevcut) ---
    defineField({
      name: 'aboutSection',
      title: 'Hakkımda Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string' },
        { name: 'subtitle', title: 'Alt Başlık', type: 'string' },
        { name: 'description', title: 'Açıklama Paragrafları', type: 'array', of: [{ type: 'text', rows: 3 }] },
        { name: 'image', title: 'Görsel', type: 'image', options: { hotspot: true } },
        {
          name: 'floatingStats',
          title: 'Fotoğraf Üzerindeki İstatistik',
          type: 'object',
          fields: [
            { name: 'value', title: 'Değer (örn: 10+)', type: 'string' },
            { name: 'label', title: 'Etiket (örn: Yıllık Deneyim)', type: 'string' },
          ],
        },
        {
          name: 'highlights',
          title: 'Öne Çıkanlar',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Başlık', type: 'string' },
                { name: 'description', title: 'Açıklama', type: 'text', rows: 2 },
                {
                  name: 'icon',
                  title: 'İkon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Ödül', value: 'Award' },
                      { title: 'Kullanıcılar', value: 'Users' },
                      { title: 'Kalp', value: 'Heart' },
                      { title: 'Kitap', value: 'BookOpen' },
                      { title: 'Eğitim', value: 'GraduationCap' },
                      { title: 'Deneyim', value: 'Briefcase' },
                      { title: 'Sertifika', value: 'FileCheck' },
                      { title: 'Yıldız', value: 'Star' },
                      { title: 'Hedef', value: 'Target' },
                      { title: 'Kalkkan', value: 'Shield' },
                      { title: 'Elmas', value: 'Gem' },
                      { title: 'Kontrol', value: 'CheckCircle' },
                      { title: 'Sağlık', value: 'Activity' },
                      { title: 'Grafik', value: 'TrendingUp' },
                      { title: 'Saat', value: 'Clock' },
                      { title: 'Takvim', value: 'Calendar' },
                      { title: 'Mesaj', value: 'MessageCircle' },
                      { title: 'Telefon', value: 'Phone' },
                      { title: 'Mail', value: 'Mail' },
                      { title: 'Konum', value: 'MapPin' },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
    
    // --- YENİ BÖLÜM: HİZMETLER ---
    defineField({
      name: 'servicesSection',
      title: 'Hizmetler Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Bölüm Başlığı', type: 'string' },
        { name: 'subtitle', title: 'Bölüm Alt Başlığı', type: 'text', rows: 3 },
      ],
    }),

    // --- YENİ BÖLÜM: REFERANSLAR (Testimonials) ---
    defineField({
      name: 'testimonialsSection',
      title: 'Referanslar Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Bölüm Başlığı', type: 'string' },
        { name: 'subtitle', title: 'Bölüm Alt Başlığı', type: 'text', rows: 3 },
      ],
    }),

    // --- YENİ BÖLÜM: BLOG ÖNİZLEME ---
    defineField({
      name: 'blogPreviewSection',
      title: 'Blog Önizleme Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Bölüm Başlığı', type: 'string' },
        { name: 'subtitle', title: 'Bölüm Alt Başlığı', type: 'text', rows: 3 },
        { name: 'ctaText', title: 'Tüm Bloglar Buton Metni', type: 'string', initialValue: 'Tüm Blog Yazıları' },
      ],
    }),
    
    // --- YENİ BÖLÜM: HAREKETE GEÇİRİCİ ÇAĞRI (CTA) ---
    defineField({
      name: 'ctaSection',
      title: 'Harekete Geçirici Çağrı (CTA)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', initialValue: 'Hemen Randevu Alın' },
        { name: 'description', title: 'Açıklama', type: 'text', rows: 3 },
        { name: 'buttonText', title: 'Buton Metni', type: 'string', initialValue: 'Randevu Sayfasına Git' },
        { name: 'buttonLink', title: 'Buton Bağlantısı', type: 'url', initialValue: '/randevu' },
      ],
    }),

    // --- SEO (Mevcut) ---
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Başlık', type: 'string' },
        { name: 'metaDescription', title: 'Meta Açıklama', type: 'text', rows: 3 },
        { name: 'keywords', title: 'Anahtar Kelimeler', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Ana Sayfa İçeriği',
      };
    },
  },
});