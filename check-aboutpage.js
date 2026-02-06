// Hakkımda sayfası detaylı kontrol
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function checkAboutPage() {
  console.log('=== HAKKIMDA SAYFASI DETAY KONTROL ===\n');
  
  try {
    const aboutPages = await client.fetch('*[_type == "aboutPage"] { _id, _createdAt, _updatedAt, hero { title }, biography { title }, education, experience }');
    
    console.log(`Toplam aboutPage document: ${aboutPages.length}\n`);
    
    aboutPages.forEach((doc, idx) => {
      console.log(`Document ${idx + 1}:`);
      console.log(`  ID: ${doc._id}`);
      console.log(`  Oluşturma: ${doc._createdAt}`);
      console.log(`  Güncelleme: ${doc._updatedAt}`);
      console.log(`  Hero Başlık: ${doc.hero?.title || 'BOŞ'}`);
      console.log(`  Biyografi Başlık: ${doc.biography?.title || 'BOŞ'}`);
      console.log(`  Eğitim sayısı: ${doc.education?.length || 0}`);
      console.log(`  Deneyim sayısı: ${doc.experience?.length || 0}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Hata:', error);
  }
}

checkAboutPage();
