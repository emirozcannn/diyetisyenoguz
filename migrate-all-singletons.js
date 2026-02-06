// Tüm singleton'ları sabit ID'lere migrate et
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function migrateSingletons() {
  console.log('=== TÜM SİNGLETON MIGRATION ===\n');
  
  const migrations = [
    {
      type: 'siteSettings',
      oldId: '348fabeb-4299-4400-94e3-2369c1a1a97d',
      newId: 'siteSettings'
    },
    {
      type: 'navigation',
      oldId: 'ce3959f7-d95b-4533-aaf5-c1327dbaa18f',
      newId: 'navigation'
    },
    {
      type: 'footer',
      oldId: 'd71a3911-e718-4975-ab8e-8c4092d4882c',
      newId: 'footer'
    },
    {
      type: 'contactPage',
      oldId: 'd14eb4ae-ba45-4ee3-a2a8-7c45f7a6c8bf',
      newId: 'contactPage'
    }
  ];
  
  for (const migration of migrations) {
    console.log(`\n📋 ${migration.type.toUpperCase()}`);
    console.log('─'.repeat(50));
    
    try {
      // Eski document'i al
      console.log(`1. Eski document alınıyor (${migration.oldId})...`);
      const oldDoc = await client.fetch(`*[_type == "${migration.type}" && _id == "${migration.oldId}"][0]`);
      
      if (!oldDoc) {
        console.log('⚠️  Eski document bulunamadı, atlanıyor...');
        continue;
      }
      
      console.log('✅ Eski document bulundu');
      
      // Meta alanları çıkar
      const { _id, _type, _createdAt, _updatedAt, _rev, ...contentToCopy } = oldDoc;
      
      // Yeni document oluştur/güncelle
      console.log(`2. İçerik yeni ID'ye kopyalanıyor (${migration.newId})...`);
      await client.createOrReplace({
        _id: migration.newId,
        _type: migration.type,
        ...contentToCopy
      });
      
      console.log('✅ İçerik kopyalandı');
      
      // Eski document'i sil
      console.log('3. Eski document siliniyor...');
      await client.delete(migration.oldId);
      console.log('✅ Eski document silindi');
      
      console.log(`🎉 ${migration.type} migration tamamlandı!`);
      
    } catch (error) {
      console.error(`❌ ${migration.type} migration hatası:`, error.message);
    }
  }
  
  console.log('\n\n🎉 TÜM MIGRATION İŞLEMLERİ TAMAMLANDI!');
  console.log('\n📋 Özet:');
  console.log('  ✅ siteSettings -> ID: siteSettings');
  console.log('  ✅ navigation -> ID: navigation');
  console.log('  ✅ footer -> ID: footer');
  console.log('  ✅ contactPage -> ID: contactPage');
  console.log('  ✅ homePage -> ID: homePage (önceden yapıldı)');
  console.log('  ✅ aboutPage -> ID: aboutPage (önceden yapıldı)');
  
  console.log('\n💡 Sanity Studio\'yu yeniden başlatın:');
  console.log('   npm run dev');
}

if (!process.env.SANITY_API_TOKEN) {
  console.log('❌ SANITY_API_TOKEN bulunamadı!');
  process.exit(1);
}

migrateSingletons();
