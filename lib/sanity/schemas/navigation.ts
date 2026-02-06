import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigasyon',
  type: 'document',
  __experimental_singleton: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Menü Adı',
      type: 'string',
      description: 'Örnek: Ana Menü, Footer Menü vb.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'identifier',
      title: 'Tanımlayıcı',
      type: 'string',
      description: 'Kullanılacak yeri belirten benzersiz kod (örn: header, footer-services)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Menü Öğeleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Etiket',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'URL/Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'external',
              title: 'Dış Link',
              type: 'boolean',
              description: 'Yeni sekmede açılsın mı?',
              initialValue: false,
            },
            {
              name: 'children',
              title: 'Alt Menü',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Etiket',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'href',
                      title: 'URL/Link',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'description',
                      title: 'Açıklama',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      identifier: 'identifier',
    },
    prepare({ title, identifier }) {
      return {
        title: title,
        subtitle: identifier,
      };
    },
  },
});
