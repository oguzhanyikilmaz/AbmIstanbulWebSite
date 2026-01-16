# ABM Istanbul - Kurumsal Web Sitesi

Modern, profesyonel ve kurumsal bir web sitesi. Next.js 14, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern Teknoloji Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Performans Odaklı**: Optimize edilmiş yükleme süreleri ve SEO
- **Animasyonlar**: Framer Motion ile profesyonel animasyonlar
- **Erişilebilirlik**: WCAG standartlarına uygun
- **Dark Theme**: Kurumsal dark tema tasarımı

## 📁 Proje Yapısı

```
AbmIstanbulWebSite/
├── src/
│   ├── app/                    # Next.js App Router sayfaları
│   │   ├── page.tsx           # Ana sayfa
│   │   ├── hakkimizda/        # Hakkımızda sayfası
│   │   ├── galeri/            # Projeler/Galeri sayfası
│   │   ├── iletisim/          # İletişim sayfası
│   │   ├── kvkk/              # KVKK sayfası
│   │   ├── gizlilik/          # Gizlilik Politikası
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global stiller
│   └── components/
│       ├── home/              # Ana sayfa bileşenleri
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Expertise.tsx
│       │   ├── Projects.tsx
│       │   ├── Partners.tsx
│       │   ├── Testimonials.tsx
│       │   └── CTA.tsx
│       ├── layout/            # Layout bileşenleri
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       └── ui/                # Yeniden kullanılabilir UI bileşenleri
│           ├── Button.tsx
│           ├── Card.tsx
│           ├── Container.tsx
│           └── SectionHeader.tsx
├── public/
│   └── images/                # Görseller (aşağıda detaylar)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Tasarım Sistemi

### Renkler
- **Brand Red**: #E63946 (Ana marka rengi)
- **Dark**: #1A1A1A (Arka plan)
- **Dark Lighter**: #2A2A2A (Kartlar, vurgular)
- **Gray**: #808080 (İkincil metin)
- **Gray Light**: #CCCCCC (Açık metin)

### Tipografi
- **Heading Font**: Space Grotesk
- **Body Font**: Inter
- **Display Sizes**: XL (4.5rem), LG (3.5rem), MD (2.5rem)

### Spacing
- Container: max-w-7xl, px-6 lg:px-8
- Section Padding: py-24 lg:py-32
- Component Gaps: 8, 12, 16

## 📸 Görsel Gereksinimleri

Projenin çalışması için aşağıdaki görselleri `public/images/` klasörüne eklemeniz gerekmektedir:

### Hero Slider (3 görsel)
- `/public/images/hero/dhl-logistics.jpg` (1920x1080px)
- `/public/images/hero/shell-energy.jpg` (1920x1080px)
- `/public/images/hero/hilton-hotel.jpg` (1920x1080px)

### Hakkımızda
- `/public/images/about/hero.jpg` (1920x800px)
- `/public/images/about/abm-building.jpg` (800x600px)
- `/public/images/about/story.jpg` (800x1000px)

### Projeler
- `/public/images/projects/kfc.jpg` (800x600px)
- `/public/images/projects/shell.jpg` (800x600px)
- `/public/images/projects/hilton.jpg` (800x600px)
- `/public/images/projects/dhl.jpg` (800x600px)
- `/public/images/projects/migros.jpg` (800x600px)
- `/public/images/projects/kayseri.jpg` (800x600px)

### Galeri
- `/public/images/gallery/hero.jpg` (1920x800px)

### İletişim
- `/public/images/contact/hero.jpg` (1920x800px)

### Diğer
- `/public/images/cta-bg.jpg` (1920x800px)

### Ekip (4 görsel)
- `/public/images/team/member-1.jpg` (400x500px)
- `/public/images/team/member-2.jpg` (400x500px)
- `/public/images/team/member-3.jpg` (400x500px)
- `/public/images/team/member-4.jpg` (400x500px)

### Partner Logoları (SVG tercih edilir)
- `/public/images/partners/archerson.svg`
- `/public/images/partners/dhl.svg`
- `/public/images/partners/migros.svg`
- `/public/images/partners/kfc.svg`
- `/public/images/partners/hilton.svg`
- `/public/images/partners/shell.svg`
- `/public/images/partners/petrol-ofisi.svg`
- `/public/images/partners/kayseri-mutfagi.svg`
- `/public/images/partners/korfez-yusuf.svg`

## 🛠️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın:
```
http://localhost:3000
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🔧 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.ts` dosyasındaki `colors.brand` bölümünü düzenleyin.

### Fontları Değiştirme
`src/app/layout.tsx` dosyasındaki font importlarını değiştirin.

### İçerik Güncelleme
Her sayfa ve bileşen kendi dosyasında bulunur. İlgili dosyayı düzenleyerek içeriği güncelleyebilirsiniz.

## 📄 Sayfalar

- **Ana Sayfa** (`/`): Hero slider, hakkımızda özeti, uzmanlık alanları, projeler, partnerler, testimonials
- **Hakkımızda** (`/hakkimizda`): Şirket hikayesi, vizyon-misyon, değerler, timeline, yönetim ekibi
- **Galeri** (`/galeri`): Filtrelenebilir proje galerisi, proje detay modal
- **İletişim** (`/iletisim`): İletişim formu, adres bilgileri, harita
- **KVKK** (`/kvkk`): KVKK aydınlatma metni
- **Gizlilik** (`/gizlilik`): Gizlilik politikası

## 🎯 Önemli Notlar

1. **Görseller**: Projenin tam olarak çalışması için yukarıda belirtilen görselleri eklemeniz gerekmektedir.
2. **Google Maps**: İletişim sayfasındaki harita için gerçek koordinatları güncelleyin.
3. **Form Gönderimi**: İletişim formunda backend entegrasyonu yapılmalıdır.
4. **SEO**: Her sayfa için metadata güncellenmelidir.
5. **Analytics**: Google Analytics veya benzeri bir araç entegre edilmelidir.

## 🚀 Deployment

### Vercel (Önerilen)
```bash
vercel
```

### Diğer Platformlar
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Lisans

© 2026 ABM Istanbul. All Rights Reserved.

## 🤝 Destek

Sorularınız için: info@abmistanbul.com
