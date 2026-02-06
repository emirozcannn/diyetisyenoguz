// Duplicate kontrol script
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function checkDuplicates() {
  console.log('=== DUPLICATE DOCUMENT KONTROL ===\n');
  
  try {
    // Ana Sayfa Kontrol
    console.log('1. ANA SAYFA (homePage) Kontrol:');
    const homePages = await client.fetch('*[_type == "homePage"] { _id, _createdAt, _updatedAt, "hasContent": defined(hero.title) }');
    console.log(`   Toplam document: ${homePages.length}`);
    if (homePages.length > 0) {
      homePages.forEach((doc, idx) => {
        console.log(`   ${idx + 1}. ID: ${doc._id}`);
        console.log(`      Oluşturma: ${doc._createdAt}`);
        console.log(`      Güncelleme: ${doc._updatedAt}`);
        console.log(`      İçerik var mı: ${doc.hasContent ? 'EVET' : 'HAYIR'}`);
        console.log('');
      });
    }
    
    // Hakkımda Sayfası Kontrol
    console.log('\n2. HAKKIMDA SAYFASI (aboutPage) Kontrol:');
    const aboutPages = await client.fetch('*[_type == "aboutPage"] { _id, _createdAt, _updatedAt, "hasContent": defined(hero.title) }');
    console.log(`   Toplam document: ${aboutPages.length}`);
    if (aboutPages.length > 0) {
      aboutPages.forEach((doc, idx) => {
        console.log(`   ${idx + 1}. ID: ${doc._id}`);
        console.log(`      Oluşturma: ${doc._createdAt}`);
        console.log(`      Güncelleme: ${doc._updatedAt}`);
        console.log(`      İçerik var mı: ${doc.hasContent ? 'EVET' : 'HAYIR'}`);
        console.log('');
      });
    }
    
    // Politika Sayfaları Kontrol
    console.log('\n3. POLİTİKA SAYFALARI (legalPage) Kontrol:');
    const legalPages = await client.fetch('*[_type == "legalPage"] { _id, title, "slug": slug.current, _createdAt, _updatedAt, "hasContent": defined(content) }');
    console.log(`   Toplam document: ${legalPages.length}`);
    if (legalPages.length > 0) {
      legalPages.forEach((doc, idx) => {
        console.log(`   ${idx + 1}. Başlık: ${doc.title || 'YOK'}`);
        console.log(`      Slug: ${doc.slug || 'YOK'}`);
        console.log(`      ID: ${doc._id}`);
        console.log(`      Oluşturma: ${doc._createdAt}`);
        console.log(`      Güncelleme: ${doc._updatedAt}`);
        console.log(`      İçerik var mı: ${doc.hasContent ? 'EVET' : 'HAYIR'}`);
        console.log('');
      });
    }
    
    // Özet
    console.log('\n=== ÖZET ===');
    console.log(`Ana Sayfa: ${homePages.length} document`);
    console.log(`Hakkımda: ${aboutPages.length} document`);
    console.log(`Politika Sayfaları: ${legalPages.length} document`);
    
    if (homePages.length > 1 || aboutPages.length > 1) {
      console.log('\n⚠️  UYARI: Birden fazla document bulundu! Singleton olmalı.');
    }
    
    // Politika sayfalarında duplicate slug var mı?
    const slugs = legalPages.map(p => p.slug).filter(Boolean);
    const duplicateSlugs = slugs.filter((slug, idx) => slugs.indexOf(slug) !== idx);
    if (duplicateSlugs.length > 0) {
      console.log(`\n⚠️  UYARI: Duplicate slug'lar bulundu: ${duplicateSlugs.join(', ')}`);
    }
    
  } catch (error) {
    console.error('Hata:', error);
  }
}

checkDuplicates();
