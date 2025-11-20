# Vercel Deploy Talimatları

## 🚀 Vercel'e Deploy Adımları

### 1. Vercel'e Giriş Yap
- [vercel.com](https://vercel.com) adresine git
- GitHub hesabınla giriş yap

### 2. Yeni Proje Oluştur
- "Add New" → "Project" seç
- GitHub'dan `emirozcannn/diyetisyenoguz` repository'sini seç

### 3. Environment Variables Ekle
Aşağıdaki değişkenleri ekle:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Sanity Project ID'yi Bulmak:**
1. [sanity.io/manage](https://sanity.io/manage) adresine git
2. Projenizi seçin
3. Project ID'yi kopyalayın

### 4. Build & Development Settings
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 5. Deploy
- "Deploy" butonuna tıkla
- İlk deploy ~2-3 dakika sürer

## 📝 Deploy Sonrası

### Sanity Studio Erişimi
- Deploy edildikten sonra: `https://your-domain.vercel.app/studio`
- İlk girişte Sanity hesabınızla giriş yapın

### Domain Ayarları
- Vercel dashboard → Settings → Domains
- Custom domain ekleyebilirsiniz

### Environment Variables Güncelleme
- Değişken güncellemelerinden sonra "Redeploy" gerekir
- Dashboard → Deployments → "..." → Redeploy

## 🔧 Troubleshooting

### Build Hataları
- Logs'u kontrol et: Dashboard → Deployments → Son deploy → View Function Logs
- Genelde environment variable eksiklikleri olur

### Sanity Connection Sorunları
- CORS ayarlarını kontrol et: [sanity.io/manage](https://sanity.io/manage)
- API Settings → CORS Origins → Vercel domain'ini ekle

### Image Optimization
- Next.js Image component için Vercel otomatik optimize eder
- Sanity images için zaten imageUrlBuilder kullanıyoruz

## 📱 Test

Deploy sonrası test edilmesi gerekenler:
- [ ] Homepage yükleniyor mu?
- [ ] Blog listing çalışıyor mu?
- [ ] Blog detail sayfaları açılıyor mu?
- [ ] SSS sayfası çalışıyor mu?
- [ ] İletişim formu çalışıyor mu?
- [ ] Randevu formu çalışıyor mu?
- [ ] Hakkımda sayfası görüntüleniyor mu?
- [ ] Sanity Studio erişilebiliyor mu?
- [ ] WhatsApp butonu çalışıyor mu?
- [ ] Tüm görseller yükleniyor mu?

## 🎯 Performans Optimizasyonu

### Vercel Analytics (Opsiyonel)
1. Dashboard → Analytics → Enable
2. Real user monitoring aktif olur

### Speed Insights
1. Dashboard → Speed Insights → Enable
2. Core Web Vitals tracking

## 🔐 Güvenlik

### Environment Variables
- `.env.local` dosyasını asla commit etme
- Hassas bilgileri Vercel Environment Variables'a ekle

### API Routes
- Rate limiting eklenebilir (app/api/* routes)
- CORS ayarları yapılabilir

## 📊 Monitoring

### Deployment Status
- Vercel otomatik health check yapar
- Dashboard'dan status izlenebilir

### Logs
- Real-time logs: Dashboard → Deployments → View Function Logs
- Error tracking için Sentry entegre edilebilir (opsiyonel)

## 🔄 Güncellemeler

Her git push sonrası:
1. Vercel otomatik deploy başlatır
2. Preview URL oluşturur
3. Başarılı olursa production'a merge edilir

### Preview Deployments
- Her pull request için ayrı preview URL
- Test ortamı olarak kullanılabilir

---

**Son güncelleme:** 20 Kasım 2025
**Build durumu:** ✅ Başarılı
**Toplam sayfa:** 17 route
