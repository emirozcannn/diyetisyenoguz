// Tüm singleton document'leri kontrol et
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function checkAllSingletons() {
  console.log('=== TÜM SINGLETON DOCUMENT KONTROL ===\n');
  
  try {
    // Singleton olması gereken document type'ları
    const singletonTypes = [
      'siteSettings',
      'navigation',
      'footer',
      'homePage',
      'aboutPage',
      'contactPage'
    ];
    
    for (const type of singletonTypes) {
      console.log(`\n📋 ${type.toUpperCase()}`);
      console.log('─'.repeat(50));
      
      const docs = await client.fetch(`*[_type == "${type}"] { 
        _id, 
        _createdAt, 
        _updatedAt,
        title,
        siteName,
        "hasContent": count(*) > 0
      }`);
      
      console.log(`Toplam document: ${docs.length}`);
      
      if (docs.length === 0) {
        console.log('⚠️  Hiç document yok!');
      } else if (docs.length > 1) {
        console.log('🔴 DUPLICATE VAR! Birden fazla document bulundu:\n');
        docs.forEach((doc, idx) => {
          console.log(`   ${idx + 1}. ID: ${doc._id}`);
          console.log(`      Oluşturma: ${doc._createdAt}`);
          console.log(`      Güncelleme: ${doc._updatedAt}`);
          if (doc.title) console.log(`      Başlık: ${doc.title}`);
          if (doc.siteName) console.log(`      Site Adı: ${doc.siteName}`);
          console.log('');
        });
      } else {
        console.log('✅ Tek document var (doğru)');
        console.log(`   ID: ${docs[0]._id}`);
        console.log(`   Oluşturma: ${docs[0]._createdAt}`);
        console.log(`   Güncelleme: ${docs[0]._updatedAt}`);
      }
    }
    
    // Politika sayfaları kontrol
    console.log(`\n📋 LEGALPAGES (POLİTİKA SAYFALARI)`);
    console.log('─'.repeat(50));
    
    const legalPages = await client.fetch(`*[_type == "legalPage"] { 
      _id, 
      title,
      "slug": slug.current,
      _createdAt, 
      _updatedAt
    }`);
    
    console.log(`Toplam legalPage: ${legalPages.length}`);
    
    if (legalPages.length === 0) {
      console.log('⚠️  Hiç legalPage yok!');
    } else {
      legalPages.forEach((doc, idx) => {
        console.log(`\n   ${idx + 1}. Başlık: ${doc.title || 'YOK'}`);
        console.log(`      Slug: ${doc.slug || 'YOK'}`);
        console.log(`      ID: ${doc._id}`);
        console.log(`      Oluşturma: ${doc._createdAt}`);
        console.log(`      Güncelleme: ${doc._updatedAt}`);
      });
      
      // Duplicate slug kontrol
      const slugs = legalPages.map(p => p.slug).filter(Boolean);
      const uniqueSlugs = [...new Set(slugs)];
      if (slugs.length !== uniqueSlugs.length) {
        console.log('\n🔴 DUPLICATE SLUG VAR!');
      }
    }
    
    console.log('\n\n=== OZET ===');
    console.log('Singleton documentler:');
    for (const type of singletonTypes) {
      const count = await client.fetch(`count(*[_type == "${type}"])`);
      const status = count === 0 ? '⚠️  YOK' : count === 1 ? '✅ TEK' : `🔴 ${count} DUPLICATE`;
      console.log(`  ${type}: ${status}`);
    }
    
  } catch (error) {
    console.error('Hata:', error);
  }
}

checkAllSingletons();
