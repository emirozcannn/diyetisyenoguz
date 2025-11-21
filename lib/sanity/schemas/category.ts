import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Kategoriler',
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
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'Renk',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Emerald', value: 'emerald' },
          { title: 'Blue', value: 'blue' },
          { title: 'Purple', value: 'purple' },
          { title: 'Orange', value: 'orange' },
          { title: 'Pink', value: 'pink' },
          { title: 'Teal', value: 'teal' },
          { title: 'Red', value: 'red' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
});
