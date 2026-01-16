# Geliştirme Notları

## Yapılması Gerekenler

### 1. Görseller
- [ ] Hero slider görselleri ekle (3 adet)
- [ ] Proje görselleri ekle (6 adet)
- [ ] Hakkımızda sayfası görselleri ekle
- [ ] Ekip fotoğrafları ekle (4 adet)
- [ ] Partner logoları ekle (SVG formatında)
- [ ] Arka plan görselleri ekle

### 2. İçerik
- [ ] Tüm placeholder metinleri gerçek içerikle değiştir
- [ ] Testimonials bölümünde gerçek müşteri yorumları ekle
- [ ] İletişim bilgilerini doğrula
- [ ] Google Maps koordinatlarını güncelle

### 3. Backend Entegrasyonu
- [ ] İletişim formu backend entegrasyonu
- [ ] E-posta gönderme servisi (Nodemailer, SendGrid vb.)
- [ ] Form validasyonu
- [ ] Spam koruması (reCAPTCHA)

### 4. SEO & Analytics
- [ ] Her sayfa için unique meta descriptions
- [ ] Open Graph görselleri
- [ ] Sitemap.xml oluştur
- [ ] robots.txt yapılandır
- [ ] Google Analytics entegrasyonu
- [ ] Google Search Console kurulumu

### 5. Performans Optimizasyonu
- [ ] Görselleri WebP formatına dönüştür
- [ ] Lazy loading implementasyonu
- [ ] Font optimizasyonu
- [ ] Bundle size analizi
- [ ] Lighthouse skorunu 90+ yap

### 6. Güvenlik
- [ ] HTTPS yapılandırması
- [ ] Security headers (CSP, HSTS vb.)
- [ ] Rate limiting
- [ ] Input sanitization

### 7. Test
- [ ] Responsive test (mobil, tablet, desktop)
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility test (WAVE, axe)
- [ ] Performance test (Lighthouse, WebPageTest)
- [ ] Form submission test

### 8. Deployment
- [ ] Production build test
- [ ] Environment variables yapılandırması
- [ ] Domain bağlama
- [ ] SSL sertifikası
- [ ] CDN yapılandırması (opsiyonel)

## Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Önemli Dosyalar

- `src/app/layout.tsx` - Root layout, metadata
- `src/app/globals.css` - Global stiller, Tailwind
- `tailwind.config.ts` - Tailwind yapılandırması
- `next.config.js` - Next.js yapılandırması

## Component Yapısı

### Layout Components
- `Header.tsx` - Navigasyon, mobil menü
- `Footer.tsx` - Footer, iletişim bilgileri

### UI Components
- `Button.tsx` - Yeniden kullanılabilir buton
- `Card.tsx` - Hover efektli kart
- `Container.tsx` - Max-width container
- `SectionHeader.tsx` - Bölüm başlıkları
- `ScrollToTop.tsx` - Yukarı scroll butonu

### Home Components
- `Hero.tsx` - Ana sayfa slider
- `About.tsx` - Hakkımızda özeti
- `Expertise.tsx` - Uzmanlık alanları
- `Projects.tsx` - Proje showcase
- `Partners.tsx` - İş ortakları
- `Testimonials.tsx` - Müşteri yorumları
- `CTA.tsx` - Call to action

## Stil Sistemi

### Tailwind Utilities
- `container-custom` - Custom container
- `btn-primary` - Ana buton stili
- `btn-secondary` - İkincil buton stili
- `section-heading` - Bölüm başlığı
- `card` - Kart stili
- `overlay-dark` - Dark overlay

### Animasyonlar
- Framer Motion kullanılıyor
- `initial`, `animate`, `whileInView` props
- Smooth scroll aktif
- Hover efektleri

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## Browser Support

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## Notlar

1. Tüm bileşenler TypeScript ile yazılmıştır
2. Client components 'use client' direktifi ile işaretlenmiştir
3. Framer Motion animasyonları performans için optimize edilmiştir
4. Tailwind CSS utility-first yaklaşımı kullanılmıştır
5. Semantic HTML kullanılmıştır (accessibility için)
