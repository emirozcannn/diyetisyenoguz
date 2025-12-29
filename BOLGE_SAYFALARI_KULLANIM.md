# 🎯 Bölge Sayfaları SEO Sistemi

## 📋 Genel Bakış

"Tekirdağ Diyetisyen" aramasında 1. sırada çıkmak için tasarlanmış kapsamlı SEO stratejisi ve bölge sayfaları sistemi.

## ✅ Yapılanlar

### 1. Sanity CMS - Location Page Schema
- **Dosya:** `lib/sanity/schemas/locationPage.ts`
- **Özellikler:**
  - ✓ Tam SEO kontrolü (meta title, description, keywords)
  - ✓ Hero bölümü (H1, subtitle, görsel)
  - ✓ Rich content editor (H2, H3 destekli)
  - ✓ "Neden Bizi Seçmelisiniz?" kartları
  - ✓ Hizmet vurgulama
  - ✓ Yerel bilgiler (ulaşım, yakın bölgeler)
  - ✓ FAQ bölümü
  - ✓ Aktif/Pasif toggle
  - ✓ Sıralama sistemi

### 2. Dynamic Route Yapısı
- **URL Formatı:** `/bolge/[slug]`
- **Örnekler:**
  - `/bolge/corlu-diyetisyen`
  - `/bolge/cerkezkoy-diyetisyen`
  - `/bolge/tekirdag-diyetisyen`

### 3. SEO Optimizasyonları

#### Ana Sayfa
- ✓ "Tekirdağ Diyetisyen" title başta
- ✓ LocalBusinessSchema eklendi
- ✓ LocationsGrid bölümü eklendi (iç linkleme)
- ✓ SEO-friendly content

#### Location Sayfaları
- ✓ Her sayfa için özel metadata
- ✓ Dynamic sitemap entegrasyonu
- ✓ Canonical URL'ler
- ✓ OG tags
- ✓ generateStaticParams (SSG)

#### İç Linkleme
- ✓ Ana sayfada LocationsGrid
- ✓ Footer'da "Hizmet Bölgeleri" sütunu
- ✓ Her location sayfasında hizmetlere linkler

## 🚀 Kullanım Kılavuzu

### Sanity'de Yeni Bölge Sayfası Oluşturma

1. **Sanity Studio'ya giriş yap**
   ```bash
   npm run dev
   # http://localhost:3000/admin
   ```

2. **"Bölge Sayfaları" sekmesine git**

3. **Yeni Sayfa Oluştur:**

#### 📝 Temel Bilgiler
```
Sayfa Başlığı: Çorlu Diyetisyen
URL Slug: corlu-diyetisyen (otomatik oluşur)
Bölge Adı: Çorlu
Aktif mi?: ✓ İşaretle
Sıralama: 1 (ilk sırada göster)
```

#### 🎯 SEO Ayarları (KRİTİK!)
```
Meta Title: Çorlu Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan
(Max 60 karakter - Google'da görünen başlık)

Meta Description: Çorlu'da uzman diyetisyen Oğuz Yolyapan ile kişiye özel diyet programları. Online ve yüz yüze danışmanlık. Hemen randevu alın!
(Max 160 karakter - Google'da görünen açıklama)

Anahtar Kelimeler:
- çorlu diyetisyen
- çorlu beslenme danışmanı
- çorlu diyet programı
- çorlu online diyetisyen
```

#### 🎨 Hero Bölümü
```
H1 Başlık: Çorlu'da Uzman Diyetisyen Hizmeti
Alt Başlık: Kişiye Özel Beslenme Programları
Açıklama: Çorlu'da 5+ yıllık deneyimli uzman diyetisyen...
Hero Görseli: [Yükle]
CTA Butonu: Hemen Randevu Al
```

#### ✍️ İçerik Bölümü
**Ana İçerik:** (Rich text editor)
```markdown
## Çorlu'da Diyetisyen Hizmeti

Çorlu'da yaşıyorsanız ve sağlıklı beslenme ile ilgili profesyonel 
destek arıyorsanız, doğru yerdesiniz...

### Çorlu'da Sunduğumuz Hizmetler
- Kişiye özel diyet programı
- Online takip sistemi
- WhatsApp destek

### Çorlu Bölgesinde Online Diyet Avantajları
...
```

**Neden Bizi Seçmelisiniz?**
```
Kart 1:
- Başlık: 5+ Yıllık Deneyim
- Açıklama: Çorlu'da yüzlerce kişiye...
- İkon: Award

Kart 2:
- Başlık: %95 Başarı Oranı
- Açıklama: Danışanlarımızın...
- İkon: Heart
```

#### 🏥 Hizmet Vurguları
```
Başlık: Çorlu'da Sunduğumuz Hizmetler
Hizmetler: [Online Diyet, Yüz Yüze Danışmanlık, vs. seç]
```

#### 📍 Yerel Bilgiler
```
Bölge Açıklaması: Çorlu, Tekirdağ'ın en büyük ilçesidir...

Ulaşım Bilgisi: Çorlu merkezden Tekirdağ merkezine 
yaklaşık 45 dakika mesafededir. Online hizmetimiz 
ile dilediğiniz yerden ulaşabilirsiniz.

Yakın Bölgeler:
- Velimeşe
- Değirmenaltı
- Karaevli
- Ulaş
```

#### ❓ Sık Sorulan Sorular
```
SSS Göster: ✓

Soru 1: Çorlu'da diyetisyen randevusu nasıl alınır?
Cevap: İletişim sayfamızdan veya WhatsApp hattımızdan...

Soru 2: Çorlu'da online diyet hizmeti veriyor musunuz?
Cevap: Evet! Çorlu'da yaşayan tüm danışanlarımıza...
```

#### 🎯 CTA Bölümü
```
Başlık: Çorlu'da Randevu Almak İster misiniz?
Açıklama: Sağlıklı yaşam yolculuğunuza bugün başlayın!
Buton Yazısı: Hemen İletişime Geçin
```

## 📊 SEO Stratejisi: Tekirdağ Diyetisyen İçin 1. Sıra

### 🎯 Ana Hedef
**Anahtar Kelime:** "Tekirdağ Diyetisyen"
**Hedef Sayfa:** Ana Sayfa (/)
**Hedef Konum:** Google 1. sıra

### 🔑 Destekleyici Sayfalar

1. **Çorlu Diyetisyen** → `/bolge/corlu-diyetisyen`
2. **Çerkezköy Diyetisyen** → `/bolge/cerkezkoy-diyetisyen`
3. **Malkara Diyetisyen** → `/bolge/malkara-diyetisyen`
4. **Hayrabolu Diyetisyen** → `/bolge/hayrabolu-diyetisyen`
5. **Süleymanpaşa Diyetisyen** → `/bolge/suleymanpasa-diyetisyen`

### 📈 İç Linkleme Yapısı

```
Ana Sayfa (/)
  ├─> Hizmet Bölgeleri Grid
  │   ├─> Çorlu Diyetisyen
  │   ├─> Çerkezköy Diyetisyen
  │   └─> Malkara Diyetisyen
  │
  └─> Footer Linkler
      └─> Hizmet Bölgeleri
```

### ✍️ İçerik Stratejisi

#### Ana Sayfa İçin:
- H1: "Tekirdağ Diyetisyen" içermeli ✓
- İlk paragrafta 2-3 kez kullan
- "Tekirdağ uzman diyetisyen" varyasyonları
- Location mentions: Süleymanpaşa, Çorlu, Çerkezköy

#### Location Sayfaları İçin:
- H1: "[Bölge] + Diyetisyen" formatı
- H2'lerde bölge adı tekrarı
- Yerel bilgiler (ulaşım, mahalleler)
- Ana sayfaya "Tekirdağ diyetisyen" anchor text ile link

## 🛠️ Teknik Detaylar

### Dosya Yapısı
```
app/
  ├─ page.tsx (Ana sayfa - LocationsGrid dahil)
  └─ bolge/
     └─ [slug]/
        ├─ page.tsx (Client component)
        └─ layout.tsx (Metadata & SSG)

components/
  └─ sections/
     └─ LocationsGrid.tsx (Ana sayfada bölge kartları)

lib/
  └─ sanity/
     ├─ schemas/
     │  └─ locationPage.ts (Schema tanımı)
     └─ queries.ts (Queries eklendi)
```

### Sitemap Entegrasyonu
`app/sitemap.ts` dosyasında location sayfaları otomatik ekleniyor:
```typescript
// Sanity'den aktif location sayfalarını çek
// Her biri için sitemap entry oluştur
// Priority: 0.8 (yüksek)
```

## 📱 Örnek URL'ler

Sanity'de oluşturduktan sonra şu URL'ler çalışır hale gelir:

- https://www.diyetisyenoguz.com/bolge/corlu-diyetisyen
- https://www.diyetisyenoguz.com/bolge/cerkezkoy-diyetisyen
- https://www.diyetisyenoguz.com/bolge/tekirdag-diyetisyen

## 🎨 Görsel Öneriler

Her location sayfası için:
- Hero görseli (1200x800px önerilir)
- Bölgeyle alakalı görseller kullan
- Alt text'lerde bölge adı + diyetisyen kullan

## ⚡ Performans

- **SSG (Static Site Generation)** kullanıldı
- Build time'da tüm sayfalar oluşturulur
- Sanity CDN'den optimize görseller
- Lazy loading aktif

## 🔍 Google Search Console

Location sayfaları oluşturduktan sonra:
1. Yeni URL'leri manuel olarak index'e gönder
2. Sitemap'i güncelle
3. "URL Inspection" ile kontrol et

## 📝 İçerik Yazma İpuçları

### SEO-Friendly İçerik Formülü:

```markdown
## [Bölge] Diyetisyen - [Unique Selling Point]

[Bölge]'da yaşıyorsanız ve [problem] ile karşı karşıyasanız...

### [Bölge]'da Neler Sunuyoruz?
- Kişiye özel...
- Online takip...

### [Bölge] Bölgesinde Hizmet Avantajlarımız
1. **Yakın takip:** [Bölge] sakinleri için...
2. **Online kolaylık:** [Bölge]'den ulaşım...

### Sıkça Sorulan Sorular
**[Bölge]'da diyetisyen ücreti ne kadar?**
...
```

## 🎯 Sonraki Adımlar

1. ✅ Sanity'de en az 5 location sayfası oluştur
2. ✅ Her sayfaya 500+ kelime SEO-optimized content yaz
3. ✅ Google Search Console'a gönder
4. ⏳ 2-4 hafta bekle (indexlenme süresi)
5. ⏳ Google Analytics ile performansı takip et

## 🚀 Hızlı Başlangıç

```bash
# 1. Sanity Studio'yu başlat
npm run dev

# 2. http://localhost:3000/admin adresine git

# 3. "Bölge Sayfaları" > "Create" tıkla

# 4. Formu doldur (yukarıdaki template'i kullan)

# 5. "Publish" tıkla

# 6. Canlıya deploy et
npm run build
vercel --prod
```

## ✅ Checklist

Her yeni location sayfası için:

- [ ] SEO-optimized meta title (60 karakter)
- [ ] Compelling meta description (160 karakter)
- [ ] 5+ anahtar kelime
- [ ] H1'de bölge adı + diyetisyen
- [ ] 500+ kelime unique content
- [ ] H2, H3 başlıklar kullanıldı
- [ ] 3+ "Neden biz?" kartı
- [ ] Yerel bilgiler eklendi
- [ ] 5+ FAQ sorusu
- [ ] Hero görseli yüklendi
- [ ] "Aktif" işaretlendi
- [ ] Preview'da kontrol edildi

---

**Not:** SEO sonuçları 2-4 hafta içinde görünmeye başlar. Düzenli content güncellemesi ve backlink çalışması da önerilir.
