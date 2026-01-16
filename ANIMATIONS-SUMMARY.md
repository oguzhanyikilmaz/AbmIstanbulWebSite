# 🎬 Animasyon Özeti - Hızlı Referans

## 🎯 Her Bölümde Kullanılan Efektler

### 🏠 Hero Section
```
✨ Parallax Scroll (arka plan)
🌊 Fade on Scroll (içerik)
📜 Reveal Animation (başlık)
🧲 Magnetic Button (play butonu)
```

### 👥 About Section  
```
🔢 Counter Animation (15+, 42.000, 2.500+, 100+)
📐 Parallax Image (görsel hareket)
🔄 Rotating Decorator (çerçeve dönüş)
📝 Reveal Text (başlık reveal)
```

### 💼 Expertise Section
```
🎲 3D Rotate (kartlar rotateY)
🎯 Scale Animation (küçükten büyüğe)
🔄 Icon Rotation (360° hover)
📊 Stagger List (sıralı liste)
```

### 📁 Projects Section
```
🎪 3D Flip (kartlar rotateX)
🔍 Zoom on Hover (görsel büyüme)
💫 Magnetic Filter (butonlar)
➡️ Arrow Slide (ok animasyonu)
```

### 🤝 Partners Section
```
🌀 Spiral Entrance (dönerek giriş)
🎨 Wave Animation (dalga efekti)
🔄 Wiggle on Hover (sallama)
📏 Scale Pulse (büyüme)
```

### 💬 Testimonials Section
```
💬 3D Slide (rotateY geçiş)
🎈 Floating Quote (yüzen tırnak)
⭐ Star Animation (yıldızlar)
🔄 Card Flip (kart çevirme)
```

### 📢 CTA Section
```
💥 Scale Entrance (büyüyerek giriş)
🌀 Rotating Decorators (sürekli dönüş)
📝 Stagger Text (sıralı metin)
🎯 Button Glow (parlama efekti)
```

## 🚀 Test Etmek İçin

```bash
# Local'de çalıştır
npm run dev

# Tarayıcıda aç
http://localhost:3000

# Scroll yaparak tüm animasyonları gör!
```

## 📊 Performans

- ✅ Tüm animasyonlar GPU-accelerated
- ✅ `viewport={{ once: true }}` ile optimize
- ✅ Reduced motion desteği
- ✅ Mobile-friendly

## 🎨 Özelleştirme

Animasyon hızlarını değiştirmek için:

```typescript
// src/components/home/Hero.tsx
transition={{ duration: 0.8 }} // Değiştir

// src/hooks/useCountUp.ts
duration: 2000 // ms cinsinden değiştir
```

## 📱 Responsive

- **Desktop**: Tüm animasyonlar aktif
- **Tablet**: Orta seviye animasyonlar
- **Mobile**: Basitleştirilmiş animasyonlar

## 🔧 Sorun Giderme

### Animasyonlar çalışmıyor
```bash
# node_modules'ü yeniden yükle
rm -rf node_modules
npm install
```

### Yavaş çalışıyor
```typescript
// Parallax'ı kapat (Hero.tsx)
// const y = useTransform(...) // Yorum satırı yap
```

### Build hatası
```bash
# Framer Motion versiyonunu kontrol et
npm list framer-motion
```

## 📚 Detaylı Dokümantasyon

Tüm detaylar için: `ANIMATIONS.md`

---

**Keyif alın! 🎉**
