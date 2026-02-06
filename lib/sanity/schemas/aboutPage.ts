import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'Hakkımda Sayfası',
  type: 'document',
  __experimental_singleton: true,
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Bölümü',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'subtitle', title: 'Alt Başlık', type: 'text', rows: 3 },
        { name: 'profileImage', title: 'Profil Fotoğrafı', type: 'image', options: { hotspot: true } },
        {
          name: 'badges',
          title: 'Rozetler/İstatistikler',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { 
                  name: 'icon', 
                  title: 'İkon', 
                  type: 'string',
                  options: {
                    list: [
                      { title: '🏆 Ödül', value: 'Award' },
                      { title: '👥 Kullanıcılar', value: 'Users' },
                      { title: '🎓 Mezuniyet', value: 'GraduationCap' },
                      { title: '⭐ Yıldız', value: 'Star' },
                      { title: '✅ Onay', value: 'CheckCircle' },
                      { title: '🎯 Hedef', value: 'Target' },
                      { title: '💼 Çanta', value: 'Briefcase' },
                      { title: '📚 Kitaplar', value: 'BookOpen' },
                      { title: '📖 Kitap', value: 'BookText' },
                      { title: '🏅 Madalya', value: 'Medal' },
                      { title: '🎖️ Rozet', value: 'Badge' },
                      { title: '🧑 Kişi', value: 'User' },
                      { title: '👤 Profil', value: 'UserCircle' },
                      { title: '❤️ Kalp', value: 'Heart' },
                      { title: '💡 Ampul', value: 'Lightbulb' },
                      { title: '✨ Parlama', value: 'Sparkles' },
                      { title: '🔥 Ateş', value: 'Flame' },
                      { title: '⚡ Şimşek', value: 'Zap' },
                      { title: '🎖 Başarı', value: 'Trophy' },
                      { title: '📊 Grafik', value: 'TrendingUp' },
                      { title: '🌟 İyileştirme', value: 'Sparkle' },
                      { title: '💪 Güç', value: 'Dumbbell' },
                      { title: '🧠 Beyin', value: 'Brain' },
                      { title: '🔬 Bilim', value: 'Microscope' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                },
                { name: 'text', title: 'Metin', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),

    // Biography
    defineField({
      name: 'biography',
      title: 'Biyografi',
      type: 'object',
      fields: [
        { name: 'title', title: 'Başlık', type: 'string', initialValue: 'Biyografi' },
        { name: 'content', title: 'İçerik', type: 'array', of: [{ type: 'block' }] },
        {
          name: 'stats',
          title: 'İstatistikler',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'value', title: 'Değer', type: 'string' },
                { name: 'label', title: 'Etiket', type: 'string' },
                { name: 'color', title: 'Renk (Tailwind sınıfı)', type: 'string', description: 'Örn: primary, emerald, blue, purple' },
              ],
            },
          ],
        },
      ],
    }),

    // Quote
    defineField({
      name: 'quote',
      title: 'Alıntı / Motto',
      type: 'object',
      fields: [
        { name: 'text', title: 'Alıntı Metni', type: 'text', rows: 4 },
        { name: 'author', title: 'Yazar (opsiyonel)', type: 'string' },
      ],
    }),

    // Education
    defineField({
      name: 'education',
      title: 'Eğitim',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', title: 'Derece', type: 'string' },
            { name: 'institution', title: 'Kurum', type: 'string' },
            { name: 'year', title: 'Yıl', type: 'string' },
            { name: 'description', title: 'Açıklama (opsiyonel)', type: 'text', rows: 2 },
            { name: 'color', title: 'Border Rengi', type: 'string', description: 'primary, secondary, accent, emerald, blue vb.' },
          ],
        },
      ],
    }),

    // Experience
    defineField({
      name: 'experience',
      title: 'Deneyim',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'position', title: 'Pozisyon', type: 'string' },
            { name: 'company', title: 'Şirket/Kurum', type: 'string' },
            { name: 'period', title: 'Dönem', type: 'string' },
            { name: 'description', title: 'Açıklama (opsiyonel)', type: 'text', rows: 2 },
            { name: 'color', title: 'Border Rengi', type: 'string', description: 'primary, accent, purple, pink vb.' },
          ],
        },
      ],
    }),

    // Certificates
    defineField({
      name: 'certificates',
      title: 'Sertifikalar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Sertifika Adı', type: 'string' },
            { name: 'issuer', title: 'Veren Kurum', type: 'string' },
            { name: 'year', title: 'Yıl', type: 'string' },
            { name: 'image', title: 'Sertifika Görseli', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),

    // Publications/Thesis
    defineField({
      name: 'publications',
      title: 'Yayınlar / Tezler / Çalışmalar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Başlık', type: 'string' },
            { name: 'type', title: 'Tip', type: 'string', options: { list: ['Tez', 'Makale', 'Çalışma', 'Araştırma'] } },
            { name: 'year', title: 'Yıl', type: 'string' },
            { name: 'description', title: 'Açıklama', type: 'text', rows: 3 },
            { name: 'link', title: 'Link (opsiyonel)', type: 'url' },
            { 
              name: 'file', 
              title: 'Dosya (PDF/Word)', 
              type: 'file',
              description: 'PDF veya Word dosyası yükleyebilirsiniz',
              options: {
                accept: '.pdf,.doc,.docx',
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'hero.title' },
    prepare(selection: { title?: string }) {
      return { title: selection.title || 'Hakkımda Sayfası' };
    },
  },
});
