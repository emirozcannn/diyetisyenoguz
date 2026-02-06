// Hakkımda sayfası migration script
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function migrateAboutPage() {
  console.log('=== HAKKIMDA SAYFASI MIGRATION ===\n');
  
  try {
    // Eski document'i al
    console.log('1. Eski document içeriği alınıyor...');
    const oldDoc = await client.fetch('*[_type == "aboutPage" && _id == "088d5416-a868-4576-9a6a-7589d434bd17"][0]');
    
    if (!oldDoc) {
      console.log('❌ Eski document bulunamadı!');
      return;
    }
    
    console.log('✅ Eski document bulundu');
    console.log(`   Hero Başlık: ${oldDoc.hero?.title}`);
    console.log(`   Eğitim sayısı: ${oldDoc.education?.length || 0}`);
    console.log(`   Deneyim sayısı: ${oldDoc.experience?.length || 0}`);
    
    // Yeni document'e kopyala
    console.log('\n2. İçerik yeni document\'e kopyalanıyor (ID: aboutPage)...');
    
    // Meta alanları çıkar
    const { _id, _type, _createdAt, _updatedAt, _rev, ...contentToCopy } = oldDoc;
    
    // Yeni document'i oluştur/güncelle (ID: "aboutPage")
    const result = await client
      .createOrReplace({
        _id: 'aboutPage',
        _type: 'aboutPage',
        ...contentToCopy
      });
    
    console.log('✅ İçerik başarıyla kopyalandı!');
    console.log(`   Yeni document ID: ${result._id}`);
    
    // Eski document'i sil
    console.log('\n3. Eski document siliniyor...');
    await client.delete('088d5416-a868-4576-9a6a-7589d434bd17');
    console.log('✅ Eski document silindi!');
    
    console.log('\n🎉 Migration başarıyla tamamlandı!');
    console.log('\n📋 Sonuç:');
    console.log('   - Eski ID: 088d5416-a868-4576-9a6a-7589d434bd17 (SİLİNDİ)');
    console.log('   - Yeni ID: aboutPage (OLUŞTURULDU)');
    console.log('   - Tüm içerik korundu');
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    if (error.response) {
      console.error('Detay:', error.response);
    }
  }
}

if (!process.env.SANITY_API_TOKEN) {
  console.log('❌ SANITY_API_TOKEN bulunamadı!');
  console.log('Lütfen .env.local dosyasında token\'ın olduğundan emin olun.');
  process.exit(1);
}

migrateAboutPage();
