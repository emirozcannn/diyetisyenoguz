# Sanity İçerik Sorunları - Çözüm Raporu

## 🔍 Tespit Edilen Sorunlar

### 1. Ana Sayfa (homePage) - Duplicate Document
- **Sorun**: Admin panelde 2 farklı `homePage` document'i var
  - **Eski Document** (`abd83d53-24bc-45c5-8332-a7720f9e71f0`): Doğru içeriklerle dolu ✅
    - "Tekirdağ Uzman Diyetisyen" başlığı
    - İstatistikler mevcut
    - **Site şu anda bunu kullanıyor**
  
  - **Yeni Document** (`homePage`): Boş/eksik içerik ❌
    - "Türkiye'nin Güvenilir Diyetisyeni" başlığı
    - İstatistik yok
    - **Admin panelde bu görünüyor**

- **Neden**: Sanity şeması `singleton` olarak işaretlenmemiş, bu yüzden birden fazla document oluşturulabilmiş.

### 2. Politika Sayfaları (legalPage) - Hiç Document Yok
- **Sorun**: `legalPage` type'ında hiç document yok
  - Gizlilik Politikası: Yok ❌
  - KVKK: Yok ❌

- **Neden**: Document'ler hiç oluşturulmamış.

### 3. Hakkımda Sayfası (aboutPage) - Sorun Yok
- 1 document var ve doğru çalışıyor ✅

## ✅ Yapılan Düzeltmeler

### 1. Schema Güncellemeleri
Dosyalar:
- `lib/sanity/schemas/homePage.ts`
- `lib/sanity/schemas/aboutPage.ts`

**Değişiklik**: Her iki şemaya da `__experimental_singleton: true` eklendi.

```typescript
export default defineType({
  name: 'homePage',
  title: 'Ana Sayfa',
  type: 'document',
  __experimental_singleton: true, // ← EKLENEN
  fields: [
    // ...
  ]
});
```

**Sonuç**: Artık admin panelde her sayfa için sadece 1 document gösterilecek.

## 🚀 Yapılması Gerekenler

### Adım 1: Sanity API Token Oluşturun

1. https://www.sanity.io/manage adresine gidin
2. Projenizi seçin (5sq2xijg)
3. **API** sekmesine tıklayın
4. **Tokens** bölümüne gidin
5. **Add API token** butonuna tıklayın
6. Token ayarları:
   - **Label**: "Migration Token"
   - **Permissions**: **Editor** (yazma yetkisi gerekli)
7. Token'ı kopyalayın ve güvenli bir yerde saklayın

### Adım 2: Ana Sayfa İçeriğini Migrate Edin

Terminalde şu komutu çalıştırın (TOKEN'ı kendi token'ınızla değiştirin):

**Windows PowerShell:**
```powershell
$env:SANITY_API_TOKEN="your_token_here"; node migrate-homepage.js
```

**Windows CMD:**
```cmd
set SANITY_API_TOKEN=your_token_here && node migrate-homepage.js
```

**Mac/Linux:**
```bash
SANITY_API_TOKEN=your_token_here node migrate-homepage.js
```

**Ne yapılacak:**
1. Eski document'teki (`abd83d53-...`) tüm içerik alınacak
2. Yeni document'e (`homePage`) kopyalanacak
3. Eski document silinecek

### Adım 3: Politika Sayfalarını Oluşturun

Terminalde şu komutu çalıştırın:

**Windows PowerShell:**
```powershell
$env:SANITY_API_TOKEN="your_token_here"; node create-legal-pages.js
```

**Windows CMD:**
```cmd
set SANITY_API_TOKEN=your_token_here && node create-legal-pages.js
```

**Mac/Linux:**
```bash
SANITY_API_TOKEN=your_token_here node create-legal-pages.js
```

**Ne yapılacak:**
1. Gizlilik Politikası sayfası oluşturulacak
2. KVKK sayfası oluşturulacak
3. Her ikisi de temel içeriklerle doldurulacak

### Adım 4: Sanity Studio'yu Yeniden Başlatın

Schema değişiklikleri uygulandığı için Sanity Studio'yu yeniden başlatmanız gerekiyor:

```bash
npm run dev
```

Veya production'da:

```bash
npm run build
```

### Adım 5: Admin Panelde Kontrol Edin

1. Sanity Studio'yu açın (http://localhost:3333 veya production URL)
2. **Ana Sayfa** bölümüne girin:
   - Tek bir document görmeli ve doğru içerikler olmalı
   - "Tekirdağ Uzman Diyetisyen" başlığı
   - İstatistikler dolu olmalı

3. **Hakkımda Sayfası** bölümüne girin:
   - Tek bir document görmeli
   - Mevcut içerikler korunmalı

4. **Yasal Sayfalar** bölümüne girin:
   - "Gizlilik Politikası" ve "KVKK" document'leri görünmeli
   - İçeriklerini düzenleyip güncelleyebilirsiniz

### Adım 6: Sitede Kontrol Edin

1. Sitenizi açın
2. Ana sayfayı kontrol edin - içerik doğru mu?
3. Hakkımda sayfasını kontrol edin - içerik doğru mu?
4. Gizlilik Politikası sayfasını açın (/gizlilik-politikasi)
5. KVKK sayfasını açın (/kvkk)

## 📋 Kontrol Listesi

- [ ] Sanity API Token oluşturuldu
- [ ] `migrate-homepage.js` çalıştırıldı
- [ ] `create-legal-pages.js` çalıştırıldı
- [ ] Sanity Studio yeniden başlatıldı
- [ ] Admin panelde ana sayfa içeriği doğru
- [ ] Admin panelde hakkımda içeriği doğru
- [ ] Admin panelde politika sayfaları görünüyor
- [ ] Sitede ana sayfa içeriği doğru
- [ ] Sitede hakkımda içeriği doğru
- [ ] Sitede politika sayfaları görünüyor
- [ ] API Token güvenli bir şekilde saklandı veya silindi

## 🔒 Güvenlik Notu

Migration işlemleri tamamlandıktan sonra, oluşturduğunuz API Token'ı Sanity admin panelinden silebilirsiniz. Token'lar **Settings > API > Tokens** bölümünden yönetilebilir.

## ❓ Sorun Yaşarsanız

### Token hatası alıyorsanız:
- Token'ın doğru kopyalandığından emin olun
- Token'ın **Editor** yetkisine sahip olduğunu kontrol edin
- Token'ın etkin olduğundan emin olun

### Migration hatası alıyorsanız:
- İnternet bağlantınızı kontrol edin
- Sanity servisinin çalıştığından emin olun
- Script'leri tekrar çalıştırmayı deneyin (idempotent, yani birden fazla kez çalıştırılabilir)

### Admin panelde değişiklikler görünmüyorsa:
- Sayfayı yenileyin (F5)
- Tarayıcı cache'ini temizleyin
- Farklı bir tarayıcıda deneyin

## 📞 İletişim

Sorunlar devam ederse, lütfen geliştirici ile iletişime geçin.
