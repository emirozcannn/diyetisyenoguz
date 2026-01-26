import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: 'Detaylı Açıklama',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detay sayfasında gösterilecek uzun açıklama',
    }),
    defineField({
      name: 'features',
      title: 'Özellikler',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Fiyat',
      type: 'number',
    }),
    defineField({
      name: 'priceText',
      title: 'Fiyat Metni',
      type: 'string',
      description: 'Örn: "Aylık ₺500" veya "3 Aylık ₺1200"',
    }),
    defineField({
      name: 'duration',
      title: 'Süre',
      type: 'string',
      description: 'Örn: "3 Ay", "6 Ay"',
    }),
    defineField({
      name: 'sessions',
      title: 'Görüşme Sayısı',
      type: 'number',
      description: 'Paketteki toplam görüşme sayısı',
    }),
    defineField({
      name: 'support',
      title: 'Destek',
      type: 'string',
      description: 'Örn: "7/24 WhatsApp", "Haftalık Kontrol"',
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'icon',
      title: 'İkon',
      type: 'string',
      description: 'Lucide icon adı',
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Sıra',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
