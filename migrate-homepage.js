// Migration script - Eski içeriği yeni document'e kopyala
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // .env dosyasından alınacak
});

async function migrateHomePage() {
  console.log('=== ANA SAYFA MIGRATION ===\n');
  
  try {
    // Önce eski document'i al
    console.log('1. Eski document içeriği alınıyor...');
    const oldDoc = await client.fetch('*[_type == "homePage" && _id == "abd83d53-24bc-45c5-8332-a7720f9e71f0"][0]');
    
    if (!oldDoc) {
      console.log('❌ Eski document bulunamadı!');
      return;
    }
    
    console.log('✅ Eski document bulundu');
    console.log(`   Hero Başlık: ${oldDoc.hero?.title}`);
    console.log(`   İstatistik sayısı: ${oldDoc.stats?.length || 0}`);
    
    // Yeni document'e kopyala
    console.log('\n2. İçerik yeni document\'e kopyalanıyor...');
    
    // _id, _type, _createdAt, _updatedAt, _rev gibi meta alanları çıkar
    const { _id, _type, _createdAt, _updatedAt, _rev, ...contentToCopy } = oldDoc;
    
    // Yeni document'i güncelle (ID: "homePage")
    const result = await client
      .patch('homePage')
      .set(contentToCopy)
      .commit();
    
    console.log('✅ İçerik başarıyla kopyalandı!');
    console.log(`   Güncellenen document ID: ${result._id}`);
    
    // Eski document'i sil
    console.log('\n3. Eski document siliniyor...');
    await client.delete('abd83d53-24bc-45c5-8332-a7720f9e71f0');
    console.log('✅ Eski document silindi!');
    
    console.log('\n🎉 Migration başarıyla tamamlandı!');
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    console.error(error);
  }
}

// Token kontrolü
if (!process.env.SANITY_API_TOKEN) {
  console.log('❌ SANITY_API_TOKEN bulunamadı!');
  console.log('\nKullanım:');
  console.log('1. Sanity.io\'da bir API token oluşturun (Editor yetkisi gerekli)');
  console.log('2. Komutu şu şekilde çalıştırın:');
  console.log('   SANITY_API_TOKEN=your_token_here node migrate-homepage.js');
  console.log('\nVeya .env dosyasına ekleyin:');
  console.log('   SANITY_API_TOKEN=your_token_here');
  process.exit(1);
}

migrateHomePage();
