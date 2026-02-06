// Cache ve revalidation analizi
const fs = require('fs');
const path = require('path');

console.log('=== CACHE VE REVALİDATİON ANALİZİ ===\n');

const filesToCheck = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/hakkimda/page.tsx',
  'app/iletisim/page.tsx',
  'app/hizmetler/page.tsx',
  'app/blog/page.tsx',
  'app/gizlilik-politikasi/page.tsx',
  'app/kvkk/page.tsx',
  'components/layout/Footer.tsx',
  'components/layout/Header.tsx',
];

filesToCheck.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  ${file} - Dosya bulunamadı`);
    return;
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  console.log(`\n📄 ${file}`);
  console.log('─'.repeat(60));
  
  // revalidate kontrol
  const revalidateMatches = content.match(/revalidate:\s*(\d+|false)/g);
  if (revalidateMatches) {
    console.log('  Revalidate ayarları:');
    revalidateMatches.forEach(match => {
      console.log(`    - ${match}`);
    });
  } else {
    console.log('  ⚠️  Revalidate ayarı YOK (static generation kullanılıyor olabilir)');
  }
  
  // cache kontrol
  const cacheMatches = content.match(/cache:\s*['"]([^'"]+)['"]/g);
  if (cacheMatches) {
    console.log('  Cache ayarları:');
    cacheMatches.forEach(match => {
      console.log(`    - ${match}`);
    });
  }
  
  // fetch kontrol
  const fetchCount = (content.match(/client\.fetch/g) || []).length;
  if (fetchCount > 0) {
    console.log(`  Sanity fetch sayısı: ${fetchCount}`);
  }
  
  // "use client" kontrol
  if (content.includes("'use client'") || content.includes('"use client"')) {
    console.log('  ℹ️  Client Component (cache Next.js tarafından yönetilmiyor)');
  }
});

console.log('\n\n=== ÖNERİLER ===');
console.log('1. Footer data cache: 3600 saniye (1 saat)');
console.log('   → Footer değişikliklerinin görünmesi 1 saat sürebilir');
console.log('2. Ana sayfa cache: 60 saniye');
console.log('3. Client component\'lerde useEffect ile fetch yapılırsa cache yok');
console.log('\nÇözümler:');
console.log('a) Development\'ta cache sorunu için: Sayfayı yenile (F5) veya hard refresh (Ctrl+Shift+R)');
console.log('b) Production\'da: revalidate süresini kısalt veya ISR kullan');
console.log('c) Hemen güncelleme için: cache: "no-store" kullan (ama performans düşer)');
