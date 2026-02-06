import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  __experimental_singleton: true,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Açıklaması',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactInfo',
      title: 'İletişim Bilgileri',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Telefon', type: 'string' },
        { name: 'izmirAddress', title: 'İzmir Adres', type: 'text', rows: 2 },
        { name: 'tekirdagAddress', title: 'Tekirdağ Adres', type: 'text', rows: 2 },
        {
          name: 'socialMedia',
          title: 'Sosyal Medya',
          type: 'object',
          fields: [
            { name: 'instagram', title: 'Instagram', type: 'url' },
            { name: 'facebook', title: 'Facebook', type: 'url' },
            { name: 'linkedin', title: 'LinkedIn', type: 'url' },
            { name: 'youtube', title: 'YouTube', type: 'url' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Başlık', type: 'string' },
        { name: 'metaDescription', title: 'Meta Açıklama', type: 'text', rows: 3 },
        { name: 'keywords', title: 'Anahtar Kelimeler', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'OG Görsel', type: 'image' },
      ],
    }),
  ],
});
