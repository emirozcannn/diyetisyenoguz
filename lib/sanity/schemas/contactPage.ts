import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'İletişim Sayfası',
  type: 'document',
  __experimental_singleton: true,
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', initialValue: 'İletişim' },
        { name: 'subtitle', title: 'Alt Başlık', type: 'text', rows: 2, initialValue: 'Sağlıklı yaşam yolculuğunuza başlamak için benimle iletişime geçin' },
      ],
    }),

    // Contact Info Cards
    defineField({
      name: 'contactCards',
      title: 'İletişim Kartları',
      type: 'object',
      fields: [
        { 
          name: 'phone', 
          title: 'Telefon Başlığı', 
          type: 'string', 
          initialValue: 'Telefon',
        },
        { 
          name: 'email', 
          title: 'E-posta Başlığı', 
          type: 'string', 
          initialValue: 'E-posta',
        },
        { 
          name: 'address', 
          title: 'Adres Başlığı', 
          type: 'string', 
          initialValue: 'Adres',
        },
        { 
          name: 'addressShort', 
          title: 'Kısa Adres', 
          type: 'string', 
          initialValue: 'Süleymanpaşa, Tekirdağ',
          description: 'İletişim kartında gösterilecek kısa adres',
        },
        { 
          name: 'workingHours', 
          title: 'Çalışma Saatleri Başlığı', 
          type: 'string', 
          initialValue: 'Çalışma Saatleri',
        },
        { 
          name: 'workingHoursShort', 
          title: 'Kısa Çalışma Saatleri', 
          type: 'string', 
          initialValue: 'Pzt-Cmt: 09:00-14:00',
          description: 'İletişim kartında gösterilecek özet',
        },
      ],
    }),

    // Contact Form
    defineField({
      name: 'contactForm',
      title: 'İletişim Formu',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', initialValue: 'Mesaj Gönderin' },
        { name: 'description', title: 'Açıklama', type: 'string', initialValue: 'Formu doldurun, en kısa sürede size geri dönelim' },
      ],
    }),

    // Address Details
    defineField({
      name: 'addressDetails',
      title: 'Adres Detayları Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', initialValue: 'Adres Bilgileri' },
        { name: 'mapUrl', title: 'Google Maps Embed URL', type: 'url', description: 'Google Maps embed linki' },
        {
          name: 'workingHours',
          title: 'Detaylı Çalışma Saatleri',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'day', title: 'Gün', type: 'string', description: 'Örn: Pazartesi - Cuma' },
                { name: 'hours', title: 'Saatler', type: 'string', description: 'Örn: 09:00 - 18:00 veya Kapalı' },
                { name: 'isClosed', title: 'Kapalı mı?', type: 'boolean', initialValue: false },
              ],
            },
          ],
        },
        { name: 'socialMediaTitle', title: 'Sosyal Medya Başlığı', type: 'string', initialValue: 'Sosyal Medya' },
      ],
    }),
  ],
  preview: {
    select: { title: 'hero.title' },
    prepare(selection: { title?: string }) {
      return { title: selection.title || 'İletişim Sayfası' };
    },
  },
});
