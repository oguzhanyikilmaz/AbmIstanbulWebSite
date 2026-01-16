# 🚀 Hızlı Başlangıç Kılavuzu

## 1. Bağımlılıkları Yükleyin

```bash
npm install
```

## 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

## 3. Görselleri Ekleyin (ÖNEMLİ!)

Proje şu anda placeholder görsel yollarına sahip. Sitenin tam olarak çalışması için aşağıdaki görselleri eklemeniz gerekiyor:

### Minimum Gerekli Görseller (İlk Test İçin)

```
public/images/
├── hero/
│   ├── dhl-logistics.jpg      (1920x1080px)
│   ├── shell-energy.jpg        (1920x1080px)
│   └── hilton-hotel.jpg        (1920x1080px)
├── about/
│   ├── hero.jpg                (1920x800px)
│   ├── abm-building.jpg        (800x600px)
│   └── story.jpg               (800x1000px)
├── projects/
│   ├── kfc.jpg                 (800x600px)
│   ├── shell.jpg               (800x600px)
│   ├── hilton.jpg              (800x600px)
│   └── dhl.jpg                 (800x600px)
├── gallery/
│   └── hero.jpg                (1920x800px)
├── contact/
│   └── hero.jpg                (1920x800px)
└── cta-bg.jpg                  (1920x800px)
```

### Hızlı Placeholder Görseller

Geliştirme aşamasında test için [Unsplash](https://unsplash.com/) veya [Pexels](https://pexels.com/) üzerinden ücretsiz görseller indirebilirsiniz.

**Önerilen Arama Terimleri:**
- "corporate building"
- "modern warehouse"
- "logistics center"
- "hotel exterior"
- "gas station"
- "industrial facility"

## 4. İçeriği Özelleştirin

### İletişim Bilgileri
`src/components/layout/Footer.tsx` dosyasında:
- Adres
- Telefon
- E-posta
- Sosyal medya linkleri

### Ana Sayfa İçeriği
`src/components/home/` klasöründeki dosyalarda:
- Hero slider metinleri
- Şirket bilgileri
- Proje açıklamaları
- Testimonials

### Hakkımızda Sayfası
`src/app/hakkimizda/page.tsx` dosyasında:
- Şirket hikayesi
- Vizyon & Misyon
- Timeline
- Ekip bilgileri

## 5. Renkleri Özelleştirin (Opsiyonel)

`tailwind.config.ts` dosyasında `colors.brand` bölümünü düzenleyin:

```typescript
colors: {
  brand: {
    red: '#E63946',        // Ana marka rengi
    'red-dark': '#C62E38', // Hover rengi
    // ...
  },
}
```

## 6. Production Build

```bash
npm run build
npm start
```

## 🎯 Sonraki Adımlar

1. ✅ Görselleri ekleyin
2. ✅ İçeriği özelleştirin
3. ✅ İletişim bilgilerini güncelleyin
4. ⬜ Google Maps koordinatlarını ayarlayın
5. ⬜ İletişim formu backend entegrasyonu
6. ⬜ SEO meta tags güncelleyin
7. ⬜ Google Analytics ekleyin
8. ⬜ Domain'e deploy edin

## 📚 Daha Fazla Bilgi

- Detaylı dokümantasyon: `README.md`
- Geliştirme notları: `DEVELOPMENT.md`
- Görsel gereksinimleri: `public/images/README.md`

## 🆘 Sorun Giderme

### Port zaten kullanımda
```bash
# Farklı bir port kullanın
npm run dev -- -p 3001
```

### Görseller görünmüyor
- Görsellerin `public/images/` klasöründe olduğundan emin olun
- Dosya isimlerinin doğru olduğunu kontrol edin
- Tarayıcı cache'ini temizleyin

### Build hatası
```bash
# node_modules'ü temizleyin ve yeniden yükleyin
rm -rf node_modules package-lock.json
npm install
```

## 📞 Destek

Sorularınız için: info@abmistanbul.com
