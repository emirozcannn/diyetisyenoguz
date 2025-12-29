# 🎯 "Tekirdağ Diyetisyen" SEO Stratejisi - Uygulama Özeti

## 🚀 Yapılan İşlemler

### ✅ 1. Bölge Sayfaları Sistemi Kuruldu

#### Sanity CMS Entegrasyonu
- **Schema:** `locationPage.ts` oluşturuldu
- **Özellikler:**
  - Tam SEO kontrolü (title, description, keywords)
  - Hero bölümü (H1, görsel, CTA)
  - Rich content editor (H2/H3 destekli)
  - "Neden Bizi Seçmelisiniz" kartları
  - Hizmet vurgulama
  - Yerel bilgiler & ulaşım
  - FAQ bölümü
  - Aktif/Pasif toggle
  - Sıralama sistemi

#### Dynamic Route Yapısı
- **URL Format:** `/bolge/[slug]`
- **Örnek:** `/bolge/corlu-diyetisyen`
- **Teknoloji:** 
  - SSG (Static Site Generation)
  - generateStaticParams (build-time rendering)
  - Dynamic metadata per page

### ✅ 2. SEO Optimizasyonları

#### Ana Sayfa Güçlendirme
- ✓ "Tekirdağ Diyetisyen" title'da başta
- ✓ LocalBusinessSchema eklendi
- ✓ LocationsGrid component (iç linkleme)
- ✓ SEO-friendly content yapısı

#### Sitemap Güncellemesi
- ✓ Location sayfaları dinamik olarak ekleniyor
- ✓ Priority: 0.8 (yüksek öncelik)
- ✓ Auto-update (Sanity'den çekiyor)

#### İç Linkleme Stratejisi
- ✓ Ana sayfada "Hizmet Verdiğimiz Bölgeler" bölümü
- ✓ Footer'da "Hizmet Bölgeleri" sütunu (5 sütunlu grid)
- ✓ Her location sayfasında hizmetlere linkler
- ✓ CTA'larda ana sayfaya linkler

### ✅ 3. Teknik Altyapı

#### Yeni Dosyalar
```
lib/sanity/schemas/locationPage.ts
app/bolge/[slug]/page.tsx
app/bolge/[slug]/layout.tsx
components/sections/LocationsGrid.tsx
BOLGE_SAYFALARI_KULLANIM.md
```

#### Güncellenen Dosyalar
```
lib/sanity/schemas/index.ts (schema export)
lib/sanity/queries.ts (location queries)
app/sitemap.ts (dynamic location pages)
app/page.tsx (LocationsGrid eklendi)
components/layout/Footer.tsx (Hizmet Bölgeleri sütunu)
```

## 🎯 "Tekirdağ Diyetisyen" İçin Strateji

### Ana Hedef
- **Keyword:** "Tekirdağ Diyetisyen"
- **Target Page:** Ana Sayfa (/)
- **Goal:** Google 1. sıra

### Destekleyici Sayfalar
Bu sayfalar Sanity'de oluşturulmalı:

1. `/bolge/tekirdag-diyetisyen` (Ana bölge)
2. `/bolge/corlu-diyetisyen` (En büyük ilçe)
3. `/bolge/cerkezkoy-diyetisyen` (İkinci büyük ilçe)
4. `/bolge/suleymanpasa-diyetisyen` (Merkez)
5. `/bolge/malkara-diyetisyen`
6. `/bolge/hayrabolu-diyetisyen`
7. `/bolge/marmaraereglis-diyetisyen`

### SEO Piramit Yapısı

```
                 Ana Sayfa (/)
              "Tekirdağ Diyetisyen"
                     ↑↑↑
            Internal Links (Juice Flow)
                     ↑↑↑
    ┌────────────────┼────────────────┐
    │                │                │
Çorlu         Çerkezköy        Süleymanpaşa
Diyetisyen    Diyetisyen       Diyetisyen
    │                │                │
    └────────────────┴────────────────┘
         Location Pages (Tier 2)
```

## 📋 Yapılması Gerekenler

### 1. Sanity'de İçerik Oluşturma

Her bölge için:

#### A. Çorlu Diyetisyen
```yaml
Sayfa Başlığı: Çorlu Diyetisyen
Slug: corlu-diyetisyen
Bölge: Çorlu
Aktif: ✓

SEO:
  Title: "Çorlu Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan"
  Description: "Çorlu'da uzman diyetisyen hizmeti. Online ve yüz yüze diyet programları. Velimeşe, Değirmenaltı, Karaevli bölgelerine hizmet."
  Keywords:
    - çorlu diyetisyen
    - çorlu beslenme danışmanı
    - çorlu online diyet
    - çorlu kilo verme

Hero:
  H1: "Çorlu'da Uzman Diyetisyen Hizmeti"
  Subtitle: "Kişiye Özel Beslenme ve Diyet Programları"
  
Content:
  - 500+ kelime unique içerik
  - Çorlu'ya özel bilgiler
  - Ulaşım: "Çorlu merkezden 5 dk"
  - Yakın mahalleler: Velimeşe, Değirmenaltı, Karaevli

FAQ:
  - "Çorlu'da diyetisyen randevusu nasıl alınır?"
  - "Çorlu'da online diyet hizmeti var mı?"
  - "Çorlu'da diyet programı ücreti ne kadar?"
```

#### B. Çerkezköy Diyetisyen
```yaml
Title: "Çerkezköy Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan"
H1: "Çerkezköy'de Uzman Diyetisyen"
Keywords: çerkezköy diyetisyen, çerkezköy diyet
Yakın bölgeler: Kapaklı, Saray, Muratlı
```

#### C. Tekirdağ Diyetisyen (Ana Bölge)
```yaml
Title: "Tekirdağ Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan"
H1: "Tekirdağ'da Uzman Diyetisyen Hizmeti"
Keywords: tekirdağ diyetisyen, tekirdağ merkez diyetisyen
Önemli: Bu sayfa ana sayfaya "Tekirdağ diyetisyen" anchor text ile link vermeli!
```

### 2. İçerik Stratejisi

#### Ana Sayfa (/)
- H1: "Tekirdağ Diyetisyen" kelimesini içermeli ✓ (Şu an mevcut)
- İlk paragrafta 2-3 kez "Tekirdağ diyetisyen" geçmeli
- LocationsGrid'de tüm bölgelere linkler ✓ (Yapıldı)

#### Location Sayfaları
Her sayfa için:
1. **H1:** "[Bölge] + Diyetisyen" formatı
2. **İçerik:** 500-800 kelime
3. **H2/H3:** Bölge adını tekrarla
4. **Yerel info:** Ulaşım, mahalleler, özellikler
5. **Internal links:** Ana sayfaya ve hizmetlere

### 3. Keyword Dağılımı

| Sayfa | Primary Keyword | Secondary Keywords |
|-------|----------------|-------------------|
| Ana Sayfa | tekirdağ diyetisyen | tekirdağ uzman diyetisyen, tekirdağ beslenme danışmanı |
| Çorlu | çorlu diyetisyen | çorlu beslenme danışmanı, çorlu diyet programı |
| Çerkezköy | çerkezköy diyetisyen | çerkezköy online diyet |
| Süleymanpaşa | süleymanpaşa diyetisyen | süleymanpaşa diyet |

## 🔗 İç Linkleme Planı

### Ana Sayfa → Location Sayfaları
```
"Hizmet Verdiğimiz Bölgeler" bölümünde:
- Çorlu Diyetisyen [Link: /bolge/corlu-diyetisyen]
- Çerkezköy Diyetisyen [Link: /bolge/cerkezkoy-diyetisyen]
- ...
```

### Location Sayfaları → Ana Sayfa
```
İçerik metinlerinde:
"Tekirdağ'ın en deneyimli diyetisyeni olarak..."
[Anchor: "Tekirdağ diyetisyen" → Link: /]
```

### Footer Linkleri
```
Hizmet Bölgeleri (her sayfada görünür):
- Tekirdağ
- Çorlu
- Çerkezköy
- Malkara
```

## 📊 Beklenen Sonuçlar

### İlk 2 Hafta
- Google'a indexlenme
- Search Console'da görünmeye başlama
- İlk impression'lar

### 4-6 Hafta
- "Çorlu diyetisyen" gibi alt keywords'lerde ilk sayfa
- Ana sayfa "Tekirdağ diyetisyen" için 2-3. sayfa

### 8-12 Hafta
- "Tekirdağ diyetisyen" için ilk 5-10 arası
- Bölge sayfaları kendi keywords'lerinde top 3

### 3+ Ay
- Ana hedef: "Tekirdağ diyetisyen" 1-3. sıra
- Long-tail keywords'lerde dominasyon

## ⚡ Hızlı Başlatma Adımları

### Bugün Yapılacaklar:

1. **Sanity Studio Aç**
   ```bash
   npm run dev
   # http://localhost:3000/admin
   ```

2. **İlk 3 Bölge Sayfası Oluştur:**
   - Çorlu Diyetisyen (en önemli - büyük ilçe)
   - Çerkezköy Diyetisyen (ikinci büyük)
   - Tekirdağ Diyetisyen (merkez)

3. **Her Sayfa İçin:**
   - SEO bilgilerini doldur (title, description)
   - H1 başlık yaz
   - 500+ kelime içerik ekle
   - 3+ FAQ ekle
   - "Aktif" işaretle
   - Publish!

4. **Deploy Et**
   ```bash
   npm run build
   vercel --prod
   ```

5. **Google Search Console'a Gönder**
   - Her yeni URL'i manuel index'e gönder
   - Sitemap'i yeniden submit et

## 📈 Takip ve Ölçümleme

### Google Search Console
- **İzlenecek Queries:**
  - "tekirdağ diyetisyen"
  - "çorlu diyetisyen"
  - "çerkezköy diyetisyen"
  - "tekirdağ beslenme danışmanı"

### Analytics
- `/bolge/` sayfalarına trafik
- Hangi bölgeler daha çok ilgi görüyor
- Bounce rate < %60 hedefle

## 🎨 İçerik Şablonu

Her location sayfası için kullan:

```markdown
# [Bölge]'da Uzman Diyetisyen Hizmeti

[Bölge]'da yaşıyorsanız ve sağlıklı beslenme desteği arıyorsanız, 
doğru yerdesiniz. Uzman diyetisyen Oğuz Yolyapan olarak [Bölge] 
ve çevresine profesyonel diyet hizmeti sunuyoruz.

## [Bölge] Diyetisyen Olarak Neler Sunuyoruz?

- Kişiye özel beslenme programı
- Online ve yüz yüze danışmanlık seçenekleri
- 7/24 WhatsApp destek hattı
- Haftalık kontrol ve takip sistemi

## [Bölge]'da Neden Bizi Tercih Etmelisiniz?

### 5+ Yıllık Deneyim
[Bölge]'de yüzlerce kişiye başarılı diyet programları uyguladık...

### %95 Başarı Oranı
Danışanlarımızın %95'i hedeflerine ulaştı...

## [Bölge] Bölgesinde Hizmet Detayları

[Bölge] merkezden veya [yakın mahalleler] bölgelerinden 
kolayca ulaşabilirsiniz. Online hizmetimiz ile isterseniz 
evinizdeki konforunuzdan yararlanabilirsiniz.

### Ulaşım Bilgisi
[Bölge]'den Tekirdağ merkezine yaklaşık [X] dakika mesafedeyiz...

## Sık Sorulan Sorular

**[Bölge]'da diyetisyen randevusu nasıl alabilirim?**
İletişim sayfamızdan veya WhatsApp hattımızdan...

**Online diyet programı mı yoksa yüz yüze mi daha etkili?**
Her iki yöntem de eşit derecede etkilidir...
```

## ✅ Final Checklist

Her location sayfası publish etmeden önce:

- [ ] Meta title 60 karakter altında
- [ ] Meta description 160 karakter altında
- [ ] H1'de bölge adı + diyetisyen var
- [ ] İçerik 500+ kelime
- [ ] H2, H3 başlıklar kullanıldı
- [ ] Bölge adı içerikte 5-10 kez geçiyor
- [ ] Yerel bilgiler (ulaşım, mahalleler) eklendi
- [ ] 3+ FAQ sorusu var
- [ ] "Aktif" işaretli
- [ ] Preview'da görsel kontrol yapıldı
- [ ] Hizmetlere linkler var

---

## 🎯 Özet

Sistem hazır! Şimdi tek yapman gereken:

1. ✅ Sanity'de 5-7 location sayfası oluştur
2. ✅ Her birine SEO-optimized content yaz
3. ✅ Deploy et
4. ⏳ Google'a indexlenmeyi bekle (2-4 hafta)
5. ⏳ Performansı takip et

**Ana hedef:** "Tekirdağ Diyetisyen" aramasında ana sayfa 1. sırada!

**Destek yapısı:** Her location sayfası ana sayfaya link juice gönderiyor.

**Zaman çizelgesi:** 8-12 haftada ilk 5'e girmek gerçekçi bir hedef.

Good luck! 🚀
