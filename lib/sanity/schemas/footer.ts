import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      description: 'Footer başlığı (örn: Oğuz Yolyapan)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicesLinks',
      title: 'Hizmetler Linkleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Link Adı',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'corporateLinks',
      title: 'Kurumsal Linkler',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Link Adı',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'legalLinks',
      title: 'Yasal Linkler',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Link Adı',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Telif Hakkı Metni',
      type: 'string',
      description: 'Örn: Tüm hakları saklıdır.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
