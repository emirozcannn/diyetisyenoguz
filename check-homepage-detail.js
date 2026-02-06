// Ana sayfa içeriği detaylı kontrol
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function checkHomePage() {
  console.log('=== ANA SAYFA DETAYLI KONTROL ===\n');
  
  try {
    const homePages = await client.fetch(`*[_type == "homePage"] { 
      _id, 
      _createdAt,
      _updatedAt,
      hero { 
        title, 
        subtitle,
        "featuresCount": count(features)
      },
      "statsCount": count(stats),
      aboutSection { title },
      servicesSection { title },
      testimonialsSection { title }
    }`);
    
    console.log(`Toplam homePage document: ${homePages.length}\n`);
    
    homePages.forEach((doc, idx) => {
      console.log(`Document ${idx + 1}:`);
      console.log(`  ID: ${doc._id}`);
      console.log(`  Oluşturma: ${doc._createdAt}`);
      console.log(`  Güncelleme: ${doc._updatedAt}`);
      console.log(`  Hero Başlık: ${doc.hero?.title || 'BOŞ'}`);
      console.log(`  Hero Alt Başlık: ${doc.hero?.subtitle ? (doc.hero.subtitle.substring(0, 50) + '...') : 'BOŞ'}`);
      console.log(`  Hero Features: ${doc.hero?.featuresCount || 0}`);
      console.log(`  İstatistik sayısı: ${doc.statsCount || 0}`);
      console.log(`  Hakkımda Bölümü: ${doc.aboutSection?.title || 'BOŞ'}`);
      console.log(`  Hizmetler Bölümü: ${doc.servicesSection?.title || 'BOŞ'}`);
      console.log(`  Referanslar Bölümü: ${doc.testimonialsSection?.title || 'BOŞ'}`);
      console.log('');
    });
    
    // Eski document var mı kontrol et
    const oldDoc = await client.fetch(`*[_type == "homePage" && _id == "abd83d53-24bc-45c5-8332-a7720f9e71f0"][0]`);
    if (oldDoc) {
      console.log('⚠️  ESKİ DOCUMENT HALA VAR!');
      console.log('   ID: abd83d53-24bc-45c5-8332-a7720f9e71f0');
      console.log('   Bu document silinmeli ve içeriği yeni document\'e kopyalanmalı.');
    }
    
  } catch (error) {
    console.error('Hata:', error);
  }
}

checkHomePage();
