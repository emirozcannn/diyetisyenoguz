// Politika sayfası slug düzeltme
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function fixLegalPageSlug() {
  console.log('=== POLİTİKA SAYFASI SLUG DÜZELTİLİYOR ===\n');
  
  try {
    // Gizlilik Politikası slug'ını düzelt
    console.log('1. Gizlilik Politikası slug düzeltiliyor...');
    console.log('   Eski slug: gizlilik');
    console.log('   Yeni slug: gizlilik-politikasi');
    
    const result = await client
      .patch('gizlilik-politikasi')
      .set({
        slug: {
          _type: 'slug',
          current: 'gizlilik-politikasi'
        }
      })
      .commit();
    
    console.log('✅ Gizlilik Politikası slug güncellendi!');
    console.log(`   Document ID: ${result._id}`);
    console.log(`   Yeni slug: ${result.slug.current}`);
    
    console.log('\n🎉 Slug düzeltme tamamlandı!');
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    if (error.response) {
      console.error('Detay:', error.response);
    }
  }
}

if (!process.env.SANITY_API_TOKEN) {
  console.log('❌ SANITY_API_TOKEN bulunamadı!');
  process.exit(1);
}

fixLegalPageSlug();
