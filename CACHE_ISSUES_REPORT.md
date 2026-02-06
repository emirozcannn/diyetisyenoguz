# SANİTY CACHE VE İÇERİK SORUNLARI - DETAYLI ANALİZ

## 🔴 TESPİT EDİLEN SORUNLAR

### 1. **FOOTER - 1 Saat Cache Sorunu** 
**Dosya**: `app/layout.tsx` (Satır 93-102)
```typescript
const footerData = await client.fetch(
  `*[_type == "footer"][0]{...}`,
  {},
  { next: { revalidate: 3600 } } // ← 3600 saniye = 1 SAAT!
);
```
**Sorun**: Footer'da yapılan değişiklikler 1 saat boyunca görünmüyor
**Çözüm**: Revalidate süresini 60 saniyeye düşür

---

### 2. **HAKKIMDA SAYFASI - Client Component + useEffect**
**Dosya**: `app/hakkimda/page.tsx` (Satır 1)
```tsx
'use client';  // ← Client Component
...
useEffect(() => {
  client.fetch<AboutData>('*[_type == "aboutPage"][0]')
    .then((result) => { setData(result); })
}, []);
```
**Sorun**: 
- Client-side rendering, SEO için kötü
- Her sayfa yüklemesinde fetch yapılıyor
- Loading state gösteriliyor

**Çözüm**: Server Component'e çevir

---

### 3. **İLETİŞİM SAYFASI - Client Component**
**Dosya**: `app/iletisim/page.tsx`
**Sorun**: Aynı şekilde client component
**Çözüm**: Server Component'e çevir

---

### 4. **BLOG SAYFASI - Client Component + Revalidation Yok**
**Dosya**: `app/blog/page.tsx`
**Sorun**: Client component + cache yok
**Çözüm**: Server Component'e çevir veya revalidation ekle

---

### 5. **POLİTİKA SAYFALARI - Revalidation Yok**
**Dosyalar**: 
- `app/gizlilik-politikasi/page.tsx`
- `app/kvkk/page.tsx`

**Sorun**: Static generation ama revalidation yok
**Çözüm**: Revalidation ekle

---

## ✅ ÇÖZÜM PLANI

### Öncelik 1: Footer Cache Süresini Düşür
- `app/layout.tsx` → revalidate: 60 saniye

### Öncelik 2: Client Component'leri Server Component'e Çevir
- `app/hakkimda/page.tsx`
- `app/iletisim/page.tsx`  
- `app/blog/page.tsx`

### Öncelik 3: Politika Sayfalarına Revalidation Ekle
- `app/gizlilik-politikasi/page.tsx`
- `app/kvkk/page.tsx`

---

## 📊 CACHE STRATEJİSİ ÖNERİSİ

| Sayfa/Component | Mevcut | Önerilen | Sebep |
|----------------|--------|----------|-------|
| Footer (layout) | 3600s | 60s | Sık değişebilir |
| Ana Sayfa | 60s | 60s | ✅ Doğru |
| Hakkımda | Yok | 300s | Orta sıklıkta değişir |
| İletişim | Yok | 300s | Orta sıklıkta değişir |
| Blog Listesi | Yok | 60s | Sık değişir |
| Hizmetler | 60s | 60s | ✅ Doğru |
| Politika Sayfaları | Yok | 86400s | Nadiren değişir (1 gün) |

---

## 🚀 HEMEN ŞİMDİ YAPILACAKLAR

1. ✅ Footer cache'ini 60 saniyeye düşür
2. ✅ Hakkımda sayfasını server component yap
3. ✅ İletişim sayfasını server component yap
4. ✅ Blog sayfasını server component yap
5. ✅ Politika sayfalarına revalidation ekle
