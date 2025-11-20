# 🥗 Oğuz Yolyapan - Uzman Diyetisyen Web Sitesi

Modern, profesyonel ve SEO odaklı uzman diyetisyen web sitesi. Next.js 15, TypeScript, Tailwind CSS ve Sanity CMS ile geliştirilmiştir.

## ✨ Özellikler

- ⚡ **Next.js 15** - App Router ile modern React framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Type-safe development
- 🖼️ **Sanity CMS** - Headless CMS ile içerik yönetimi
- 🎭 **Framer Motion** - Smooth animasyonlar
- 📱 **Fully Responsive** - Mobil uyumlu tasarım
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- ♿ **Accessible** - WCAG uyumlu
- 🧮 **Hesaplama Araçları** - BMI, BMR ve daha fazlası
- 📅 **Randevu Sistemi** - Sanity entegreli form

## 🚀 Kurulum

### Prerequisites

- Node.js 18+ 
- npm veya yarn
- Sanity hesabı (ücretsiz)

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repo-url>
cd oguz
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment variables**

`.env.local` dosyası oluşturun:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=5sq2xijg
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

4. **Development server'ı başlatın**
```bash
npm run dev
```

Site `http://localhost:3000` adresinde çalışacaktır.

5. **Sanity Studio'yu açın**

`http://localhost:3000/studio` adresinden Sanity Studio'ya erişebilirsiniz.

## 📁 Proje Yapısı

```
oguz/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Tüm sayfalar
│   ├── api/               # API routes
│   ├── studio/            # Sanity Studio
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Base UI components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   ├── calculators/       # Hesaplama araçları
│   └── forms/             # Form components
├── lib/
│   ├── sanity/            # Sanity config & schemas
│   ├── utils/             # Utility functions
│   └── constants.ts       # Constants
├── types/                 # TypeScript types
└── public/                # Static assets
```

## 🎨 Sayfalar

- **Ana Sayfa** (`/`) - Hero, hizmetler, referanslar, blog
- **Hakkımda** (`/hakkimda`) - Biyografi, eğitim, deneyim
- **Hizmetler** (`/hizmetler`) - Hizmet paketleri
- **Blog** (`/blog`) - Blog yazıları listesi
- **Hesaplama Araçları** (`/hesaplama-araclari`) - BMI, BMR vb.
- **Randevu** (`/randevu`) - Randevu formu
- **SSS** (`/sss`) - Sık sorulan sorular
- **İletişim** (`/iletisim`) - İletişim bilgileri
- **KVKK** (`/kvkk`) - KVKK aydınlatma metni
- **Gizlilik Politikası** (`/gizlilik-politikasi`)

## 🔧 Sanity CMS

### Schemas

- **siteSettings** - Site ayarları (singleton)
- **service** - Hizmetler
- **post** - Blog yazıları
- **author** - Yazarlar
- **category** - Kategoriler
- **testimonial** - Referanslar
- **faq** - SSS
- **appointment** - Randevular
- **contact** - İletişim mesajları
- **aboutPage** - Hakkımda sayfası (singleton)
- **legalPage** - Yasal sayfalar

### Studio Erişimi

Studio'ya erişmek için: `http://localhost:3000/studio`

## 🚀 Deployment

### Vercel (Önerilen)

1. GitHub'a push edin
2. Vercel'e import edin
3. Environment variables ekleyin
4. Deploy!

```bash
# Build komutu
npm run build

# Production server
npm start
```

## 📝 Environment Variables

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=5sq2xijg
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

## 🛠️ Teknolojiler

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📊 SEO

- ✅ Meta tags (her sayfa)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt tags
- ✅ Structured data (geliştirilecek)

## 🎯 TODO

- [ ] Blog detay sayfası
- [ ] Hizmet detay sayfaları
- [ ] Daha fazla hesaplama aracı (BMR, Kalori, vs.)
- [ ] İletişim formu API route
- [ ] Email notifications
- [ ] Google Analytics
- [ ] Schema markup (LocalBusiness, MedicalBusiness)
- [ ] Gerçek görseller
- [ ] Sanity'ye örnek içerik

## 📄 License

Private - Oğuz Yolyapan

## 👤 Contact

- **Website**: oguzyolyapan.com
- **Email**: info@oguzyolyapan.com


---


**Tarih**: 20 Kasım 2024
