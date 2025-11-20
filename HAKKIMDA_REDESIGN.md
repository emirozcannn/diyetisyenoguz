# Hakkımda Sayfası - Yeniden Tasarım Dokümantasyonu

## 🎨 Tasarım Konsepti
Profesyonel, diyetisyen temalı, organik şekiller ve doğal renkler (yeşil, teal, emerald tonları) kullanılarak "sağlık" ve "doğallık" hissi veren modern bir tasarım.

## 📐 Sayfa Yapısı (6 Bölüm)

### 1. **Hero Section - Diyetisyen Temalı Original Design**
- **Arka Plan**: Organik gradyan blob'lar (emerald, green, teal, lime tonları)
- **Layout**: İki sütun (Sol: Başlık + Rozetler, Sağ: Profil fotoğrafı)
- **Animasyonlar**: 
  - Başlık: fade-in + slide from left
  - Profil: scale + rotate efekti
  - Dekoratif blob'lar: pulse animasyonu
- **Özellikler**:
  - Rounded-[3rem] profil çerçevesi (8px beyaz border)
  - Hover'da profil üstünde gradient overlay
  - İkon rozetleri (Award, Users vb.) - hover'da yukarı kayma

### 2. **Biography Section - Custom Design**
- **Başlık**: Gradient text + alt çizgi
- **İçerik Kutusu**:
  - Dekoratif quote mark (8xl, opacity 50%, sol üst köşe)
  - Green-to-teal gradient background
  - PortableText ile Sanity'den gelen zengin metin içeriği
  - Sağ üst köşede dekoratif blob
- **İstatistikler**: 4 grid card (farklı gradient renkler - primary, emerald, blue, purple)
  - Hover efekti: shadow + yukarı kayma (-translate-y-2)

### 3. **Quote Section - Diyetisyenin Kişisel Motto'su**
- **Arka Plan**: Primary-to-emerald-to-teal gradient
- **Dekorasyon**: Beyaz ve sarı blob'lar (opacity 10%)
- **Tipografi**: 
  - 3xl-4xl serif italic font
  - Quote icon (16x16)
  - Beyaz metin + yazar adı

### 4. **Education & Experience - İki Sütun Layout**
- **Sol Sütun - Eğitim**:
  - Başlık: GraduationCap icon + gradient background
  - Card'lar: Sol kenar renkli border (4px), hover'da gölge büyüme + sola kayma (-translate-x-2)
  - Renkli noktalar (dot indicators)
  
- **Sağ Sütun - Deneyim**:
  - Başlık: Briefcase icon + emerald gradient
  - Aynı card stili (farklı border renkleri)
  
- **Arka Plan**: Büyük merkezi gradient blob (800x800px)

### 5. **Certificates Section - NEW**
- **Layout**: Grid (md:2, lg:3 kolonlu)
- **Card Yapısı**:
  - Üst: Sertifika görseli (aspect-ratio, hover'da scale 110%)
  - Alt: Başlık, veren kurum, yıl
  - Hover efekti: Shadow büyüme + yukarı kayma
- **Başlık**: Award icon + gradient background + merkezi alt çizgi

### 6. **Publications/Thesis Section - NEW**
- **Layout**: Vertical stack (tek sütun)
- **Card Yapısı**:
  - Sol: BookOpen icon (blue-cyan gradient)
  - Orta: Tip badge (Tez/Makale/Çalışma) + yıl + başlık + açıklama
  - Sağ: External link icon (varsa)
  - Hover: Shadow büyüme
- **Başlık**: FileText icon + blue-cyan gradient

## 🎭 Animasyon Detayları

| Bölüm | Animasyon | Delay | Duration |
|-------|-----------|-------|----------|
| Hero Title | opacity + x: -50 | 0ms | 800ms |
| Hero Subtitle | opacity | 400ms | 600ms |
| Hero Badges | opacity + y | 600ms | 600ms |
| Profile Image | opacity + scale + rotate | 300ms | 800ms |
| Biography Content | opacity + y | 200ms | - |
| Stats Grid | opacity + y | 400ms | - |
| Quote | opacity + scale | 0ms | - |
| Education Cards | opacity + y | idx * 100ms | - |
| Experience Cards | opacity + y | idx * 100ms | - |
| Certificate Cards | opacity + y | idx * 100ms | - |
| Publication Cards | opacity + x | idx * 100ms | - |

## 🎨 Renk Paleti

### Ana Renkler
- **Primary**: Gradient (primary-500 → primary-600)
- **Emerald**: Gradient (emerald-500 → green-500)
- **Blue**: Gradient (blue-500 → cyan-500)
- **Purple**: Gradient (purple-500 → pink-500)

### Border Renkleri
- `border-primary-500`, `border-secondary-500`, `border-accent-500`
- `border-emerald-500`, `border-blue-500`, `border-purple-500`, `border-pink-500`

### Arka Plan Renkleri
- Hero: `from-emerald-50 via-green-50/30 to-teal-50`
- Biography Box: `from-green-50 via-white to-teal-50`
- Quote Section: `from-primary-600 via-emerald-600 to-teal-600`
- Education/Experience: `from-gray-50 to-white`

## 📊 Sanity CMS Schema (aboutPage.ts)

### Alanlar:
1. **hero** (object)
   - title (string, required)
   - subtitle (text)
   - profileImage (image)
   - badges (array of objects: icon, text)

2. **biography** (object)
   - title (string)
   - content (block content)
   - stats (array: value, label, color)

3. **quote** (object)
   - text (text)
   - author (string, optional)

4. **education** (array of objects)
   - degree, institution, year, description, color

5. **experience** (array of objects)
   - position, company, period, description, color

6. **certificates** (array of objects)
   - title, issuer, year, image

7. **publications** (array of objects)
   - title, type (Tez/Makale/Çalışma/Araştırma), year, description, link

## 🔄 State Management
- `useState<AboutData | null>` - Sanity'den gelen data
- `useState<boolean>` - Loading state
- `useEffect` - Component mount'ta Sanity fetch

## 🖼️ Image Handling
- `imageUrlBuilder` kullanımı
- Hero profile: 600x600px
- Certificates: 400x300px
- `fill` prop + `object-cover` + `hotspot` desteği

## ✨ Hover Efektleri

| Element | Hover Efekti |
|---------|--------------|
| Hero Badges | `-translate-y-1` + `shadow-xl` |
| Profile Image | Gradient overlay (opacity 0→100) |
| Stats Cards | `-translate-y-2` + `shadow-2xl` |
| Education/Experience Cards | `-translate-x-2` + `shadow-xl` |
| Certificate Cards | `-translate-y-2` + `shadow-xl` + image scale 110% |
| Publication Cards | `shadow-xl` |
| External Link Icons | `bg-gray-100` → `bg-primary-100`, text color değişimi |

## 📱 Responsive Breakpoints
- Hero: `lg:grid-cols-2`
- Stats: `grid-cols-2 md:grid-cols-4`
- Education/Experience: `lg:grid-cols-2`
- Certificates: `md:grid-cols-2 lg:grid-cols-3`

## 🚀 Performans Optimizasyonları
- `viewport={{ once: true }}` - Animasyonlar sadece bir kez oynar
- Image lazy loading (Next.js Image component)
- Conditional rendering (certificates, publications varsa göster)
- Loading state ile skeleton/spinner

## 🎯 Kullanıcı Deneyimi İyileştirmeleri
1. **Görsel Hiyerarşi**: Icon + başlık kombinasyonları
2. **Renk Kodlaması**: Her bölüm farklı gradient (kolayca ayırt edilebilir)
3. **Micro-interactions**: Tüm clickable/hoverable elementlerde feedback
4. **Okuma Deneyimi**: Prose class, proper line-height, padding'ler
5. **Accessibility**: Alt texts, semantic HTML, proper contrast ratios

## 🔧 Sanity Studio'da Düzenleme
1. **Content > Hakkımda Sayfası** sekmesine git
2. Her bölümü ayrı ayrı düzenle (Hero, Biography, Quote, vb.)
3. **Publish** butonuna bas
4. Sayfa otomatik olarak güncellenecek (ISR/SSG)

## 📦 Dependencies
- `framer-motion` - Animasyonlar
- `lucide-react` - İkonlar
- `@sanity/client` - Sanity data fetch
- `@portabletext/react` - Rich text rendering
- `@sanity/image-url` - Image URL builder
- `next/image` - Optimize edilmiş görseller

---

**Not**: Bu tasarım "ergenlikten çıkarıp olgunluğa eriştirme" felsefesiyle yapılmıştır. Profesyonel, tıbbi/sağlık sektörüne uygun, original ve custom design elementleri içerir.
