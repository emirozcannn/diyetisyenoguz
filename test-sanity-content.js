// Sanity içerik çekme test scripti
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function testSanityQueries() {
  console.log('=== SANİTY İÇERİK ÇEKME TESTİ ===\n');
  
  try {
    // 1. Footer Test
    console.log('📋 FOOTER TEST');
    console.log('─'.repeat(50));
    const footer = await client.fetch(`*[_type == "footer"][0]{
      _id,
      title,
      description,
      servicesLinks,
      corporateLinks,
      legalLinks,
      copyrightText,
      contactInfo,
      socialMedia
    }`);
    
    if (footer) {
      console.log('✅ Footer çekildi');
      console.log(`   ID: ${footer._id}`);
      console.log(`   Başlık: ${footer.title || 'YOK'}`);
      console.log(`   Açıklama: ${footer.description ? footer.description.substring(0, 50) + '...' : 'YOK'}`);
      console.log(`   Servis Linkleri: ${footer.servicesLinks?.length || 0}`);
      console.log(`   Kurumsal Linkler: ${footer.corporateLinks?.length || 0}`);
      console.log(`   Yasal Linkler: ${footer.legalLinks?.length || 0}`);
      console.log(`   Copyright: ${footer.copyrightText || 'YOK'}`);
      console.log(`   İletişim Bilgileri: ${footer.contactInfo ? 'VAR' : 'YOK'}`);
      console.log(`   Sosyal Medya: ${footer.socialMedia ? 'VAR' : 'YOK'}`);
    } else {
      console.log('❌ Footer çekilemedi!');
    }
    
    // 2. Site Settings Test
    console.log('\n📋 SITE SETTINGS TEST');
    console.log('─'.repeat(50));
    const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{
      _id,
      siteTitle,
      description,
      contactInfo
    }`);
    
    if (siteSettings) {
      console.log('✅ Site Settings çekildi');
      console.log(`   ID: ${siteSettings._id}`);
      console.log(`   Site Başlığı: ${siteSettings.siteTitle || 'YOK'}`);
    } else {
      console.log('❌ Site Settings çekilemedi!');
    }
    
    // 3. Navigation Test
    console.log('\n📋 NAVIGATION TEST');
    console.log('─'.repeat(50));
    const navigation = await client.fetch(`*[_type == "navigation"][0]{
      _id,
      title,
      identifier,
      items
    }`);
    
    if (navigation) {
      console.log('✅ Navigation çekildi');
      console.log(`   ID: ${navigation._id}`);
      console.log(`   Başlık: ${navigation.title || 'YOK'}`);
      console.log(`   Identifier: ${navigation.identifier || 'YOK'}`);
      console.log(`   Menü sayısı: ${navigation.items?.length || 0}`);
    } else {
      console.log('❌ Navigation çekilemedi!');
    }
    
    // 4. HomePage Test
    console.log('\n📋 HOMEPAGE TEST');
    console.log('─'.repeat(50));
    const homePage = await client.fetch(`*[_type == "homePage"][0]{
      _id,
      hero { title },
      stats,
      aboutSection { title }
    }`);
    
    if (homePage) {
      console.log('✅ HomePage çekildi');
      console.log(`   ID: ${homePage._id}`);
      console.log(`   Hero Başlık: ${homePage.hero?.title || 'YOK'}`);
      console.log(`   İstatistik: ${homePage.stats?.length || 0}`);
    } else {
      console.log('❌ HomePage çekilemedi!');
    }
    
    // 5. AboutPage Test
    console.log('\n📋 ABOUTPAGE TEST');
    console.log('─'.repeat(50));
    const aboutPage = await client.fetch(`*[_type == "aboutPage"][0]{
      _id,
      hero { title },
      biography { title }
    }`);
    
    if (aboutPage) {
      console.log('✅ AboutPage çekildi');
      console.log(`   ID: ${aboutPage._id}`);
      console.log(`   Hero Başlık: ${aboutPage.hero?.title || 'YOK'}`);
    } else {
      console.log('❌ AboutPage çekilemedi!');
    }
    
    // 6. Legal Pages Test
    console.log('\n📋 LEGAL PAGES TEST');
    console.log('─'.repeat(50));
    const privacyPage = await client.fetch(`*[_type == "legalPage" && slug.current == "gizlilik-politikasi"][0]{ _id, title, "slug": slug.current }`);
    const kvkkPage = await client.fetch(`*[_type == "legalPage" && slug.current == "kvkk"][0]{ _id, title, "slug": slug.current }`);
    
    if (privacyPage) {
      console.log('✅ Gizlilik Politikası çekildi');
      console.log(`   ID: ${privacyPage._id}`);
      console.log(`   Slug: ${privacyPage.slug}`);
    } else {
      console.log('❌ Gizlilik Politikası çekilemedi!');
    }
    
    if (kvkkPage) {
      console.log('✅ KVKK çekildi');
      console.log(`   ID: ${kvkkPage._id}`);
      console.log(`   Slug: ${kvkkPage.slug}`);
    } else {
      console.log('❌ KVKK çekilemedi!');
    }
    
    // ÖZET
    console.log('\n\n=== TEST SONUÇLARI ===');
    const results = [
      { name: 'Footer', status: footer ? '✅' : '❌' },
      { name: 'Site Settings', status: siteSettings ? '✅' : '❌' },
      { name: 'Navigation', status: navigation ? '✅' : '❌' },
      { name: 'HomePage', status: homePage ? '✅' : '❌' },
      { name: 'AboutPage', status: aboutPage ? '✅' : '❌' },
      { name: 'Privacy Page', status: privacyPage ? '✅' : '❌' },
      { name: 'KVKK Page', status: kvkkPage ? '✅' : '❌' },
    ];
    
    results.forEach(r => console.log(`${r.status} ${r.name}`));
    
    const failedCount = results.filter(r => r.status === '❌').length;
    if (failedCount > 0) {
      console.log(`\n⚠️  ${failedCount} test başarısız!`);
    } else {
      console.log('\n🎉 Tüm testler başarılı!');
    }
    
  } catch (error) {
    console.error('❌ Test hatası:', error.message);
  }
}

testSanityQueries();
