// İçerik detay kontrol script
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function checkContent() {
  console.log('=== İÇERİK DETAY KONTROL ===\n');
  
  try {
    // Ana Sayfa içeriklerini karşılaştır
    console.log('1. ANA SAYFA İÇERİKLERİ:');
    const homePages = await client.fetch('*[_type == "homePage"] { _id, hero { title, subtitle }, stats[0..2] { label } }');
    
    homePages.forEach((doc, idx) => {
      console.log(`\n   Document ${idx + 1} (ID: ${doc._id}):`);
      console.log(`   Hero Başlık: ${doc.hero?.title || 'BOŞ'}`);
      console.log(`   Hero Alt Başlık: ${doc.hero?.subtitle?.substring(0, 60) || 'BOŞ'}...`);
      console.log(`   İstatistik sayısı: ${doc.stats?.length || 0}`);
      if (doc.stats && doc.stats.length > 0) {
        console.log(`   İlk istatistik: ${doc.stats[0]?.label || 'BOŞ'}`);
      }
    });
    
    // Hakkımda sayfası
    console.log('\n\n2. HAKKIMDA SAYFASI İÇERİĞİ:');
    const aboutPages = await client.fetch('*[_type == "aboutPage"] { _id, hero { title, subtitle } }');
    
    aboutPages.forEach((doc, idx) => {
      console.log(`\n   Document ${idx + 1} (ID: ${doc._id}):`);
      console.log(`   Hero Başlık: ${doc.hero?.title || 'BOŞ'}`);
      console.log(`   Hero Alt Başlık: ${doc.hero?.subtitle?.substring(0, 60) || 'BOŞ'}...`);
    });
    
  } catch (error) {
    console.error('Hata:', error);
  }
}

checkContent();
