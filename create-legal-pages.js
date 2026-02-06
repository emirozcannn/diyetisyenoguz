// Migration script - Politika sayfaları oluştur
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function createLegalPages() {
  console.log('=== POLİTİKA SAYFALARI OLUŞTURMA ===\n');
  
  try {
    // Gizlilik Politikası
    console.log('1. Gizlilik Politikası oluşturuluyor...');
    const privacyPage = {
      _type: 'legalPage',
      _id: 'gizlilik-politikasi', // Sabit ID
      title: 'Gizlilik Politikası',
      slug: {
        _type: 'slug',
        current: 'gizlilik-politikasi'
      },
      content: [
        {
          _type: 'block',
          _key: 'intro',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'Web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumak bizim için önemlidir. Bu gizlilik politikası, kişisel bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi vermektedir.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h1',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '1. Toplanan Bilgiler',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'Web sitemizi ziyaret ettiğinizde, form doldurduğunuzda veya randevu talep ettiğinizde ad, e-posta adresi, telefon numarası gibi kişisel bilgilerinizi toplayabiliriz.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h2',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '2. Bilgilerin Kullanımı',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'Topladığımız bilgiler, hizmetlerimizi sunmak, randevuları yönetmek ve sizinle iletişim kurmak için kullanılır. Bilgileriniz üçüncü şahıslarla paylaşılmaz.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h3',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '3. Güvenlik',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p3',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'Kişisel bilgilerinizin güvenliğini sağlamak için gerekli tüm teknik ve idari önlemleri alıyoruz.',
              marks: []
            }
          ]
        }
      ],
      lastUpdated: new Date().toISOString()
    };
    
    await client.createOrReplace(privacyPage);
    console.log('✅ Gizlilik Politikası oluşturuldu');
    
    // KVKK
    console.log('\n2. KVKK sayfası oluşturuluyor...');
    const kvkkPage = {
      _type: 'legalPage',
      _id: 'kvkk', // Sabit ID
      title: 'KVKK - Kişisel Verilerin Korunması',
      slug: {
        _type: 'slug',
        current: 'kvkk'
      },
      content: [
        {
          _type: 'block',
          _key: 'intro',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin işlenmesi hakkında aydınlatma metni.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h1',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '1. Veri Sorumlusu',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'KVKK kapsamında veri sorumlusu Uzman Diyetisyen Oğuz YOLYAPAN\'dır.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h2',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '2. İşlenen Kişisel Veriler',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'Randevu ve danışmanlık hizmeti sunabilmek için ad, soyad, telefon numarası, e-posta adresi, sağlık bilgileri ve diyet geçmişi gibi kişisel verileriniz işlenmektedir.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h3',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '3. Kişisel Verilerin İşlenme Amacı',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p3',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'Kişisel verileriniz, diyetisyenlik hizmeti sunmak, randevuları yönetmek, sizinle iletişim kurmak ve hukuki yükümlülükleri yerine getirmek amacıyla işlenmektedir.',
              marks: []
            }
          ]
        },
        {
          _type: 'block',
          _key: 'h4',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: '4. Haklarınız',
              marks: ['strong']
            }
          ]
        },
        {
          _type: 'block',
          _key: 'p4',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'text',
              text: 'KVKK kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini isteme, silinmesini talep etme ve itiraz etme haklarına sahipsiniz.',
              marks: []
            }
          ]
        }
      ],
      lastUpdated: new Date().toISOString()
    };
    
    await client.createOrReplace(kvkkPage);
    console.log('✅ KVKK sayfası oluşturuldu');
    
    console.log('\n🎉 Tüm politika sayfaları başarıyla oluşturuldu!');
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    console.error(error);
  }
}

// Token kontrolü
if (!process.env.SANITY_API_TOKEN) {
  console.log('❌ SANITY_API_TOKEN bulunamadı!');
  console.log('\nKullanım:');
  console.log('SANITY_API_TOKEN=your_token_here node create-legal-pages.js');
  process.exit(1);
}

createLegalPages();
