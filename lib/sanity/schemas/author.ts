import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Yazarlar',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'İsim',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Biyografi',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

export const category = defineType({
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
          { title: 'Primary (Mavi-Yeşil)', value: 'primary' },
          { title: 'Emerald (Zümrüt Yeşili)', value: 'emerald' },
          { title: 'Blue (Mavi)', value: 'blue' },
          { title: 'Purple (Mor)', value: 'purple' },
          { title: 'Orange (Turuncu)', value: 'orange' },
          { title: 'Pink (Pembe)', value: 'pink' },
          { title: 'Teal (Petrol)', value: 'teal' },
          { title: 'Red (Kırmızı)', value: 'red' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
});
