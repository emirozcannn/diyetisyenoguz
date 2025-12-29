# SEO Uygulama Raporu - diyetisyenoguz.com
Tarih: 29 Aralık 2025

## ✅ TAMAMLANAN ÇALIŞMALAR

### 1. Kritik Metadata Güncellemeleri

#### Site URL Düzeltmeleri
- ✅ `constants.ts` - Site URL'i `https://diyetisyenoguz.com` olarak güncellendi
- ✅ `robots.ts` - Sitemap URL'i düzeltildi
- ✅ `sitemap.ts` - Base URL güncellendi

#### Title & Description Optimizasyonu
- ✅ **Eski:** "Uzman Diyetisyen Oğuz Yolyapan - Tekirdağ"
- ✅ **Yeni:** "Tekirdağ Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan"
- 🎯 **SEO Hedef:** "Tekirdağ Diyetisyen" anahtar kelimesi title'ın başında
- ✅ Meta description uzunluğu optimize edildi (155 karakter)

### 2. Root Layout Metadata (app/layout.tsx)

Eklenen özellikler:
- ✅ `metadataBase` URL tanımlaması
- ✅ Canonical URL yapısı
- ✅ Enhanced Open Graph tags (locale: tr_TR)
- ✅ Twitter Card optimizasyonu
- ✅ Robots meta directives (index: true, follow: true)
- ✅ Google Search Console verification placeholder
- ✅ Genişletilmiş keyword listesi (18 anahtar kelime)

### 3. LocalBusiness Schema Markup

Oluşturulan dosya: `components/seo/LocalBusinessSchema.tsx`

Schema türleri:
- ✅ LocalBusiness
- ✅ Dietitian
- ✅ MedicalBusiness
- ✅ HealthAndBeautyBusiness

İçeriği:
- ✅ NAP bilgileri (Name, Address, Phone)
- ✅ Geo koordinatlar (40.9833, 27.5167)
- ✅ Çalışma saatleri (OpeningHoursSpecification)
- ✅ Hizmet bölgeleri (areaServed: 7 şehir/ilçe)
- ✅ Sosyal medya linkleri (sameAs)
- ✅ Aggregate rating (4.9/5)
- ✅ Founder bilgisi (Person schema)
- ✅ Hizmet kataloğu (OfferCatalog)
- ✅ hasMap property (Google Maps link)

### 4. Google Maps Entegrasyonu

Oluşturulan dosya: `components/seo/GoogleMapsEmbed.tsx`

Özellikler:
- ✅ Responsive iframe embed
- ✅ Lazy loading
- ✅ SEO-friendly title attribute
- ✅ "Yol Tarifi Al" butonu (Google Maps deep link)
- ✅ Modern tasarım (gradients, shadow)

İletişim sayfası güncellemeleri:
- ✅ İyileştirilmiş Google Maps embed URL
- ✅ Yol tarifi butonu eklendi
- ✅ Harita title attribute eklendi

### 5. Ana Sayfa SEO (app/page.tsx)

- ✅ `generateMetadata` fonksiyonu eklendi
- ✅ Page-level title: "Tekirdağ Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan"
- ✅ Canonical URL tanımlaması
- ✅ LocalBusinessSchema component'i eklendi
- ✅ H1 tag düzeltildi: "Tekirdağ Uzman Diyetisyen" (boşluk hatası giderildi)
- ✅ Hero subtitle'da yerel odak: "Tekirdağ, Süleymanpaşa, Çorlu, Çerkezköy"

### 6. Robots.txt Güncellemesi

- ✅ `/admin/` dizini engellendi
- ✅ Sitemap URL düzeltildi
- ✅ User-agent yapısı optimize edildi

---

## 🔴 ACİL YAPILMASI GEREKENLER (Bu Hafta)

### 1. Google Search Console Kurulumu
**Durum:** 🔴 YAPILMADI
**Öncelik:** KRİTİK

Adımlar:
1. [Google Search Console](https://search.google.com/search-console)'a giriş yap
2. `diyetisyenoguz.com` için property oluştur
3. HTML tag yöntemiyle doğrula:
   - GSC'den verification code al
   - `app/layout.tsx` dosyasındaki `GOOGLE_SEARCH_CONSOLE_CODE_BURAYA` yerine yapıştır
4. Sitemap gönder: `https://diyetisyenoguz.com/sitemap.xml`
5. URL inspection yap ve manuel indexleme iste

### 2. Open Graph Image Oluşturma
**Durum:** 🔴 YAPILMADI
**Öncelik:** YÜKSEK

Gereksinimler:
- 📐 Boyut: 1200x630 px
- 📁 Format: JPG veya PNG
- 📍 Konum: `public/og-image.jpg`
- 🎨 İçerik: Oğuz Yolyapan fotoğrafı + "Tekirdağ Diyetisyen" yazısı

Canva Template Önerisi:
```
[Fotoğraf - Sol Taraf]  |  Tekirdağ Diyetisyen
                        |  Uzman Diyetisyen Oğuz Yolyapan
                        |  
                        |  ✓ Kişiye Özel Diyet
                        |  ✓ Online Danışmanlık
                        |  ✓ 5+ Yıl Deneyim
```

### 3. Vercel Environment Variables
**Durum:** 🔴 YAPILMADI

Eklenecek değişkenler:
```env
NEXT_PUBLIC_SITE_URL=https://diyetisyenoguz.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX (opsiyonel)
```

### 4. Domain Doğrulama
**Durum:** 🟡 KONTROL EDİLMELİ

Kontrol listesi:
- [ ] `diyetisyenoguz.com` → ana site
- [ ] `www.diyetisyenoguz.com` → redirect to non-www
- [ ] SSL sertifikası aktif mi?
- [ ] Vercel'de custom domain bağlandı mı?

---

## 🟠 YÜKSEK ÖNCELİK (2 Hafta İçinde)

### 1. Google İşletme Profili (GBP) Optimizasyonu

Yapılacaklar:
- [ ] Web sitesi linkini güncelle: `diyetisyenoguz.com`
- [ ] İşletme kategorisi: "Diyetisyen" (birincil)
- [ ] Ek kategoriler: "Beslenme Danışmanı", "Sağlık Danışmanı"
- [ ] NAP bilgilerini web sitesi ile %100 eşitle
- [ ] 10+ yüksek kaliteli fotoğraf ekle
- [ ] "Hizmetler" bölümünü doldur
- [ ] "Ürünler" bölümüne diyet paketlerini ekle
- [ ] Her hafta Google Post paylaş

### 2. Platform Kayıtları (Backlink Stratejisi)

Kaydolunacak platformlar:
1. **DoktorTakvimi.com** - Online randevu sistemi
2. **DoktorSitesi.com** - Doktor arama motoru
3. **Armut.com** - Hizmet sağlayıcı platformu
4. **SağlıkBlog.com** - Sağlık profesyonelleri dizini
5. **Linktr.ee** - Sosyal medya bio linki

Her platformda:
- NAP tutarlılığını koru
- Aynı işletme açıklamasını kullan
- Web sitesi linkini ekle
- "Tekirdağ diyetisyen" keyword'ünü kullan

### 3. Yerel İçerik Sayfaları Oluşturma

Oluşturulacak sayfalar:
1. `/tekirdag-diyetisyen` - Ana yerel sayfa
2. `/corlu-diyetisyen` - Çorlu bölgesi
3. `/cerkezkoy-diyetisyen` - Çerkezköy bölgesi
4. `/malkara-diyetisyen` - Malkara bölgesi

Her sayfada olması gerekenler:
- H1: "[İlçe] Diyetisyen | Oğuz Yolyapan"
- En az 500 kelime benzersiz içerik
- O bölgeye özel bilgiler
- Google Maps embed
- Randevu CTA'sı

---

## 🟡 ORTA ÖNCELİK (1 Ay İçinde)

### 1. Blog İçerik Takvimi

Haftalık hedef: 1 SEO odaklı blog yazısı (min. 800 kelime)

Makale fikirleri:
- "Tekirdağ'da Sağlıklı Beslenme Rehberi"
- "PCOS Diyeti: Uzman Diyetisyenden Tavsiyeler"
- "Sporcu Beslenmesi: Performans Artırma Yöntemleri"
- "Hamilelik Döneminde Beslenme: Yapılması ve Yapılmaması Gerekenler"
- "Diyabet Hastaları İçin Beslenme Planı"

Her makale için:
- [ ] Keyword araştırması (AnswerThePublic, Google Trends)
- [ ] 2-3 H2 başlığı
- [ ] 1 featured image (800x400 px)
- [ ] Internal linkler (hizmet sayfalarına)
- [ ] FAQ Schema markup

### 2. Hesaplama Araçları Geliştirme

Mevcut durum: `/hesaplama-araclari` sayfası var

Eklenecek araçlar:
- [x] BMI Hesaplama
- [x] BMR Hesaplama
- [x] Kalori Hesaplama
- [x] İdeal Kilo Hesaplama
- [x] Su Tüketimi Hesaplama

SEO optimizasyonları:
- [ ] Her hesaplayıcı için ayrı URL oluştur
- [ ] Schema markup ekle (SoftwareApplication)
- [ ] Sonuçları paylaşılabilir yap (Social Share)
- [ ] "Detaylı Analiz İçin Randevu Al" CTA'sı

### 3. E-E-A-T Sinyalleri Güçlendirme

E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness

Yapılacaklar:
- [ ] "Hakkımda" sayfasına diploma ve sertifikalar ekle
- [ ] Medya görünürlüğü sayfası oluştur
- [ ] Katıldığı seminer/konferanslar
- [ ] Yayınlanan röportajlar/makaleler
- [ ] Üye olunan meslek dernekleri
- [ ] "Neden Beni Seçmelisiniz?" bölümü

---

## 🟢 SÜREKLI İYİLEŞTİRME

### 1. Core Web Vitals İzleme

Takip edilecek metrikler:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

Araçlar:
- PageSpeed Insights
- Chrome DevTools Lighthouse
- Vercel Analytics

### 2. Backlink İzleme

Araçlar:
- Google Search Console (Links report)
- Ahrefs Backlink Checker (ücretsiz sınırlı)
- Moz Link Explorer

Hedef: Ayda 5-10 kaliteli backlink

### 3. Rakip Analizi (Aylık)

Takip edilecek rakipler:
- edaekinci.com
- diyetisyenmucahitokluk.com

İzlenecek metrikler:
- Yeni sayfalar
- Blog yazıları
- Sosyal medya aktivitesi
- Backlink profili değişiklikleri

---

## 📊 BEKLENEN SONUÇLAR

### 1-2 Hafta Sonra:
- ✅ Google Search Console'da site görünür olacak
- ✅ "Tekirdağ diyetisyen" aramasında sayfa 2-3'te görünme

### 1 Ay Sonra:
- 🎯 "Tekirdağ diyetisyen" → Sayfa 1 (Top 10)
- 🎯 "Süleymanpaşa diyetisyen" → Sayfa 1
- 🎯 Google Haritalar → Top 3

### 3 Ay Sonra:
- 🎯 "Tekirdağ diyetisyen" → Top 3
- 🎯 "Çorlu diyetisyen" → Sayfa 1
- 🎯 "Online diyetisyen" → Sayfa 2-3
- 🎯 Organik trafik: 100+ ziyaretçi/ay

---

## 🛠️ YARDIMCI ARAÇLAR

### SEO Araçları
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com)
- [Schema Markup Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Keyword Araştırma
- [Google Keyword Planner](https://ads.google.com/intl/tr_tr/home/tools/keyword-planner/)
- [AnswerThePublic](https://answerthepublic.com/)
- [Google Trends](https://trends.google.com/trends/)

### Tasarım
- [Canva](https://www.canva.com/) - OG image oluşturma
- [TinyPNG](https://tinypng.com/) - Görsel optimizasyonu

---

## 📝 NOTLAR

1. **Domain Değişikliği:** `oguzyolyapan.com` → `diyetisyenoguz.com` değişikliği yapıldı. Eski domain'den 301 redirect yapıldığından emin olun!

2. **Instagram Handle:** Schema'da `@diyetisyenoguz` kullanıldı. Eğer farklıysa düzeltin.

3. **Koordinatlar:** Schema'da kullanılan (40.9833, 27.5167) tahmini koordinatlar. Google Maps'ten gerçek koordinatları alıp güncelleyin.

4. **OG Image:** `public/og-image.jpg` dosyası henüz mevcut değil. Oluşturulup eklenmeli.

5. **Verification Code:** `app/layout.tsx` dosyasında `GOOGLE_SEARCH_CONSOLE_CODE_BURAYA` placeholder'ı var. Google Search Console'dan alınan kod ile değiştirilmeli.

---

**Hazırlayan:** GitHub Copilot  
**Tarih:** 29 Aralık 2025  
**Versiyon:** 1.0
