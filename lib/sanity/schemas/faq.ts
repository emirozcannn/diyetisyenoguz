import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Sık Sorulan Sorular',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Soru',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Cevap',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Genel', value: 'genel' },
          { title: 'Randevu', value: 'randevu' },
          { title: 'Beslenme', value: 'beslenme' },
          { title: 'Ücretlendirme', value: 'ucretlendirme' },
          { title: 'Online Danışmanlık', value: 'online' },
        ],
      },
    }),
    defineField({
      name: 'categoryColor',
      title: 'Kategori Rengi',
      type: 'string',
      options: {
        list: [
          { title: 'Kırmızı (Red)', value: 'red' },
          { title: 'Mavi (Blue)', value: 'blue' },
          { title: 'Yeşil (Emerald)', value: 'emerald' },
          { title: 'Mor (Purple)', value: 'purple' },
          { title: 'Turuncu (Orange)', value: 'orange' },
          { title: 'Pembe (Pink)', value: 'pink' },
          { title: 'Petrol (Teal)', value: 'teal' },
          { title: 'Primary (Mavi-Yeşil)', value: 'primary' },
        ],
      },
      initialValue: 'primary',
      description: 'Her kategori için farklı bir renk seçin',
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
