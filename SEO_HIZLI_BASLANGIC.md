# 🚀 SEO Hızlı Başlangıç Kılavuzu

Bu dosya, yapılan SEO değişikliklerini canlıya almak için gereken adımları içerir.

## ⚡ HEMEN ŞİMDİ YAPILMASI GEREKENLER (15 dakika)

### 1. Google Search Console Kurulumu

1. [Google Search Console](https://search.google.com/search-console/welcome)'a git
2. "URL ön eki" seçeneğini seç
3. `https://diyetisyenoguz.com` gir
4. **HTML etiket** yöntemiyle doğrula:
   - Size verilen kodu kopyala (örn: `google-site-verification=ABC123XYZ`)
   - `app/layout.tsx` dosyasını aç
   - Satır 63'te `GOOGLE_SEARCH_CONSOLE_CODE_BURAYA` yerine yapıştır
   - Örnek:
   ```typescript
   verification: {
     google: 'ABC123XYZ',
   },
   ```
5. Deploy et ve doğrula
6. Doğrulandıktan sonra **Sitemap gönder:**
   - Sol menüden "Sitemap'ler" seç
   - `https://diyetisyenoguz.com/sitemap.xml` gir
   - Gönder

### 2. Domain Ayarları Kontrolü

Vercel Dashboard'da kontrol et:
- [ ] Custom domain: `diyetisyenoguz.com` ekli mi?
- [ ] `www.diyetisyenoguz.com` → `diyetisyenoguz.com` redirect var mı?
- [ ] SSL sertifikası aktif mi? (kilidi görmeli)

### 3. Open Graph Image Oluşturma

**Hızlı yöntem (Canva ile):**

1. [Canva.com](https://www.canva.com/)'a git
2. "Social Media" → "Facebook Post" seç (1200x630 px)
3. Tasarımını yap:
   - Arka plan: Beyaz veya açık yeşil gradient
   - Sol taraf: Oğuz Yolyapan'ın profesyonel fotoğrafı
   - Sağ taraf:
     ```
     Tekirdağ Diyetisyen
     
     Uzman Diyetisyen
     Oğuz Yolyapan
     
     ✓ Kişiye Özel Diyet
     ✓ Online Danışmanlık
     ✓ 5+ Yıl Deneyim
     ```
4. İndir (JPG, 1200x630 px)
5. `public/og-image.jpg` olarak kaydet
6. Deploy et

**Alternatif (Hızlı Placeholder):**
Geçici olarak mevcut bir profil fotoğrafını kullan ve daha sonra profesyonel tasarım yap.

---

## 🔍 TEST VE DOĞRULAMA (10 dakika)

Deploy ettikten sonra bu araçlarla kontrol et:

### 1. Rich Results Test
🔗 https://search.google.com/test/rich-results

- `https://diyetisyenoguz.com` URL'ini gir
- **Beklenen sonuç:** LocalBusiness schema tespit edilmeli
- Hata yoksa ✅

### 2. Facebook Sharing Debugger
🔗 https://developers.facebook.com/tools/debug/

- `https://diyetisyenoguz.com` URL'ini gir
- **Kontrol et:**
  - Title: "Tekirdağ Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan"
  - Description görünüyor mu?
  - OG Image yüklendi mi?

### 3. PageSpeed Insights
🔗 https://pagespeed.web.dev/

- `https://diyetisyenoguz.com` URL'ini test et
- **Hedef skorlar:**
  - Mobile: 80+
  - Desktop: 90+

### 4. Manuel Kontrol

Tarayıcıda `https://diyetisyenoguz.com` aç ve kontrol et:

**Ana Sayfa:**
- [ ] H1: "Tekirdağ Uzman Diyetisyen" veya "Sağlıklı Beslenme" görünüyor mu?
- [ ] Footer'da adres bilgisi var mı?
- [ ] WhatsApp butonu çalışıyor mu?

**İletişim Sayfası:**
- [ ] Google Maps embed yüklendi mi?
- [ ] "Yol Tarifi Al" butonu var mı?
- [ ] Çalışma saatleri görünüyor mu?

**Kaynak Kodu Kontrolü (Ctrl+U veya Cmd+U):**
```html
<!-- Aranacak öğeler: -->
<title>Tekirdağ Diyetisyen | Uzman Diyetisyen Oğuz Yolyapan</title>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dietitian", ...
}
</script>

<link rel="canonical" href="https://diyetisyenoguz.com">
```

---

## 📱 GOOGLE İŞLETME PROFİLİ GÜNCELLEMESİ (5 dakika)

1. [Google Business Profile](https://business.google.com/) giriş yap
2. **Web sitesi URL güncelle:**
   - Ayarlar → İşletme bilgileri
   - Web sitesi: `https://diyetisyenoguz.com`
   - Kaydet

3. **NAP Tutarlılığı Kontrol:**
   ```
   Ad: Uzman Diyetisyen Oğuz Yolyapan
   Adres: Barbaros Mah. Sahilkent Sok. B Kısım No:20, Süleymanpaşa/Tekirdağ
   Telefon: +90 501 013 8188
   ```
   ⚠️ Bu bilgiler web sitesi ile %100 aynı olmalı!

4. **Fotoğraf Ekle:**
   - İşyeri dışarıdan
   - İşyeri içeriden
   - Oğuz Yolyapan profil
   - Hizmet görselleri

5. **Hizmetler Bölümünü Doldur:**
   - Kişiye Özel Diyet Programı
   - Online Beslenme Danışmanlığı
   - Sporcu Beslenmesi
   - Hamilelik Beslenmesi

---

## 🎯 GOOGLE'DA İNDEXLEME (Manuel)

Google Search Console'da:

1. Sol menüden **"URL Denetimi"** seç
2. `https://diyetisyenoguz.com` gir
3. "DİZİNDE DEĞİL" uyarısı alırsan → **"Dizine Ekleme İste"** butonuna tıkla
4. Aynı işlemi bu sayfalar için de yap:
   - `https://diyetisyenoguz.com/hakkimda`
   - `https://diyetisyenoguz.com/hizmetler`
   - `https://diyetisyenoguz.com/iletisim`
   - `https://diyetisyenoguz.com/randevu`

⏰ **Not:** Indexlenme 1-7 gün sürebilir. Sabırlı ol!

---

## 📊 TAKİP VE İZLEME KURULUMU

### Google Analytics 4 (Opsiyonel ama Önerilen)

1. [Google Analytics](https://analytics.google.com/) → Yönetici → Özellik Oluştur
2. "diyetisyenoguz.com" için GA4 property oluştur
3. Measurement ID'yi kopyala (G-XXXXXXXXXX)
4. `app/layout.tsx` dosyasına Google Analytics script'i ekle:

```typescript
// app/layout.tsx içine ekle (head section)
{process.env.NODE_ENV === 'production' && (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `
    }} />
  </>
)}
```

---

## ✅ YAPILDI KONTROLÜ

Tüm adımları tamamladıktan sonra işaretle:

### Kritik (Bugün)
- [ ] Google Search Console kuruldu ve doğrulandı
- [ ] Sitemap gönderildi
- [ ] Domain ayarları kontrol edildi
- [ ] OG image oluşturuldu ve eklendi
- [ ] Rich Results Test yapıldı
- [ ] Google İşletme Profili güncellendi

### Önemli (Bu Hafta)
- [ ] Manuel indexleme istekleri gönderildi
- [ ] PageSpeed test yapıldı
- [ ] Facebook Debugger test yapıldı
- [ ] Tüm sayfalarda manuel kontrol yapıldı

### Opsiyonel (2 Hafta İçinde)
- [ ] Google Analytics kuruldu
- [ ] DoktorTakvimi.com kaydı yapıldı
- [ ] DoktorSitesi.com kaydı yapıldı
- [ ] İlk blog yazısı yayınlandı

---

## 🆘 SORUN GİDERME

### "Rich Results Test'te schema görünmüyor"
**Çözüm:** 
- Sayfayı yenile (Ctrl+Shift+R)
- Deploy tamamlandı mı kontrol et
- Browser cache'i temizle

### "Google Search Console doğrulama başarısız"
**Çözüm:**
- Verification code'u doğru yapıştırdın mı?
- Deploy sonrası 2-3 dakika bekle
- Kod başına/sonuna boşluk eklememeli

### "OG Image görünmüyor"
**Çözüm:**
- Dosya adı tam olarak `og-image.jpg` olmalı
- Dosya `public/` klasöründe olmalı (root değil!)
- Boyut 1200x630 px olmalı
- Deploy sonrası Facebook Debugger'da "Scrape Again" yap

### "Site hala Google'da görünmüyor"
**Çözüm:**
- 24-48 saat bekle (indexlenme süreci)
- Search Console'da "Coverage" raporunu kontrol et
- Sitemap başarıyla işlendi mi bak

---

## 📞 YARDIM KAYNAKLARI

- **SEO Raporu:** `SEO_UYGULAMA_RAPORU.md` dosyasını oku
- **Google Search Console Yardım:** https://support.google.com/webmasters
- **Schema.org Dokümantasyonu:** https://schema.org/LocalBusiness
- **Next.js Metadata Docs:** https://nextjs.org/docs/app/building-your-application/optimizing/metadata

---

**Güncelleme:** 29 Aralık 2025  
**Versiyon:** 1.0
