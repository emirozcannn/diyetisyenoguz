import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'appointment',
  title: 'Randevular',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Ad Soyad',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preferredDate',
      title: 'Tercih Edilen Tarih',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lokasyon',
      type: 'string',
      options: {
        list: [
          { title: 'İzmir', value: 'izmir' },
          { title: 'Tekirdağ', value: 'tekirdag' },
          { title: 'Online', value: 'online' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Mesaj',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'status',
      title: 'Durum',
      type: 'string',
      options: {
        list: [
          { title: 'Beklemede', value: 'pending' },
          { title: 'Onaylandı', value: 'confirmed' },
          { title: 'İptal Edildi', value: 'cancelled' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'notes',
      title: 'Notlar',
      type: 'text',
      rows: 3,
      description: 'Sadece admin tarafından görünür',
    }),
    defineField({
      name: 'createdAt',
      title: 'Oluşturulma Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Tarih (Yeni)',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
});
