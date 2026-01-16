# 🎨 Animasyon Rehberi

ABM Istanbul web sitesinde kullanılan tüm animasyon efektleri ve detayları.

## 🎬 Bölüm Bazında Animasyonlar

### 1. Hero Section (Ana Banner)
**Efektler:**
- ✨ **Parallax Scroll**: Arka plan scroll'da yavaş hareket eder
- 🌊 **Fade on Scroll**: İçerik scroll'da kaybolur
- 📜 **Reveal Animation**: Başlık alt

tan yukarı kayarak beliriyor
- 🧲 **Magnetic Button**: Play butonu mouse'u takip ediyor

**Teknoloji:**
- `useScroll` + `useTransform` (Framer Motion)
- Custom MagneticButton component

**Parametreler:**
```typescript
parallaxSpeed: 150px over 500px scroll
fadeSpeed: opacity 1 to 0 over 300px
revealDuration: 0.8s
```

### 2. About Section (Hakkımızda)
**Efektler:**
- 🔢 **Counter Animation**: Sayılar 0'dan hedef değere sayıyor
- 📐 **Parallax Image**: Görsel scroll'da hareket ediyor
- 🔄 **Rotating Decorator**: Dekoratif çerçeve dönüyor
- 📝 **Reveal Text**: Başlık reveal animasyonu

**Teknoloji:**
- Custom `useCountUp` hook
- Intersection Observer API
- Easing: easeOutQuart

**Parametreler:**
```typescript
counterDuration: 2500ms
counterEasing: easeOutQuart
parallaxRange: 100px to -100px
rotateRange: -5deg to 5deg
```

### 3. Expertise Section (Uzmanlık Alanları)
**Efektler:**
- 🎲 **3D Rotate**: Kartlar 3D dönüş yaparak beliriyor
- 🎯 **Scale Animation**: Kartlar küçükten büyüğe
- 🔄 **Icon Rotation**: İkonlar hover'da 360° dönüyor
- 📊 **Stagger List**: Liste elemanları sırayla beliriyor

**Teknoloji:**
- CSS `perspective: 1000px`
- `rotateY` transformations
- Spring animations

**Parametreler:**
```typescript
initialRotateY: -30deg
hoverScale: 1.05
iconRotation: 360deg
staggerDelay: 0.1s per item
```

### 4. Projects Section (Projeler)
**Efektler:**
- 🎪 **3D Flip**: Proje kartları 3D flip ile beliriyor
- 🔍 **Zoom on Hover**: Görsel hover'da büyüyor
- 💫 **Magnetic Filter**: Filtre butonları magnetic efekt
- ➡️ **Arrow Slide**: Ok ikonu slide + rotate

**Teknoloji:**
- Layout animations (Framer Motion)
- `whileHover` transformations
- `rotateX` for 3D effect

**Parametreler:**
```typescript
initialRotateX: -15deg
hoverScale: 1.02
hoverY: -10px
imageZoom: 1.1x
arrowRotate: -45deg to 0deg
```

### 5. Partners Section (İş Ortakları)
**Efektler:**
- 🌀 **Spiral Entrance**: Logolar dönerek beliriyor
- 🎨 **Wave Animation**: Sıralı dalga efekti
- 🔄 **Wiggle on Hover**: Hover'da sallama efekti
- 📏 **Scale Pulse**: Hover'da büyüme

**Teknoloji:**
- Spring animations
- Rotate transformations
- Stagger delays

**Parametreler:**
```typescript
initialRotate: -180deg
staggerDelay: 0.08s
hoverScale: 1.1
wiggleRotate: [-5, 5, 0]deg
```

### 6. Testimonials Section (Müşteri Yorumları)
**Efektler:**
- 💬 **3D Slide**: Yorumlar 3D slide ile değişiyor
- 🎈 **Floating Quote**: Tırnak işareti yüzüyor
- ⭐ **Star Animation**: Yıldızlar sırayla beliriyor
- 🔄 **Card Flip**: Kart flip animasyonu

**Teknoloji:**
- `rotateY` for 3D effect
- Infinite loop animations
- AnimatePresence for transitions

**Parametreler:**
```typescript
slideRotateY: 90deg
floatY: -10px
floatDuration: 4s
transitionDuration: 0.6s
```

### 7. CTA Section (Call to Action)
**Efektler:**
- 💥 **Scale Entrance**: Tüm bölüm büyüyerek beliriyor
- 🌀 **Rotating Decorators**: Dekoratif elemanlar sürekli dönüyor
- 📝 **Stagger Text**: Metinler sırayla beliriyor
- 🎯 **Button Glow**: Butonlarda glow efekti

**Teknoloji:**
- Spring animations
- Infinite rotations
- Shadow effects

**Parametreler:**
```typescript
initialScale: 0.8
springStiffness: 100
decoratorRotation: 360deg / 20s
glowIntensity: shadow-brand-red/50
```

## 🛠️ Custom Hooks

### useCountUp
Sayıları animasyonlu şekilde sayar.

```typescript
const { count, countRef } = useCountUp(
  end: number,        // Hedef değer
  duration: 2000,     // Süre (ms)
  start: 0           // Başlangıç değeri
)
```

**Özellikler:**
- Intersection Observer ile tetikleme
- easeOutQuart easing
- Smooth counting

### useParallax
Scroll-based parallax efekti.

```typescript
const offset = useParallax(speed: 0.5)
```

**Özellikler:**
- Scroll position tracking
- Configurable speed
- Performance optimized

## 🎨 Custom Components

### MagneticButton
Mouse'u takip eden buton.

```typescript
<MagneticButton className="...">
  {children}
</MagneticButton>
```

**Özellikler:**
- Mouse position tracking
- Spring physics
- Smooth reset

### RevealText
Metni alt-üst reveal eden component.

```typescript
<RevealText delay={0.2}>
  {text}
</RevealText>
```

**Özellikler:**
- Overflow hidden wrapper
- Slide up animation
- Custom easing

## 📊 Performans Optimizasyonları

### 1. Viewport Once
```typescript
viewport={{ once: true }}
```
Animasyon sadece bir kez çalışır, performans artar.

### 2. Will-Change
```css
.animated-element {
  will-change: transform, opacity;
}
```

### 3. Transform > Position
```typescript
// ✅ İyi
transform: 'translateY(20px)'

// ❌ Kötü
top: '20px'
```

### 4. Throttled Scroll
Scroll event'leri throttle edilmiş.

## 🎯 Animasyon Timing

### Durations
- **Fast**: 0.3s - Hover effects, quick transitions
- **Medium**: 0.6s - Standard animations
- **Slow**: 0.8s - Reveal animations
- **Very Slow**: 2.5s - Counter animations

### Delays
- **Stagger**: 0.1s - 0.15s per item
- **Sequential**: 0.2s - 0.3s between groups
- **Initial**: 0.2s - 0.4s after page load

### Easing
- **Default**: `ease-in-out`
- **Smooth**: `[0.33, 1, 0.68, 1]` (custom cubic-bezier)
- **Bounce**: `type: 'spring'` with stiffness
- **Counter**: easeOutQuart

## 🎨 CSS Animations

### Gradient Animation
```css
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Shimmer
```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

## 🔧 Debugging

### Framer Motion DevTools
```typescript
import { MotionConfig } from 'framer-motion'

<MotionConfig reducedMotion="user">
  {children}
</MotionConfig>
```

### Animation Inspector
Chrome DevTools → More Tools → Animations

### Performance Monitoring
```typescript
const { scrollYProgress } = useScroll()

useEffect(() => {
  console.log('Scroll Progress:', scrollYProgress.get())
}, [scrollYProgress])
```

## 📱 Responsive Considerations

### Mobile
- Reduced animation complexity
- Shorter durations
- Disabled parallax on mobile

### Tablet
- Medium complexity
- Standard durations
- Limited parallax

### Desktop
- Full animations
- All effects enabled
- Smooth parallax

## ♿ Accessibility

### Reduced Motion
```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (prefersReducedMotion) {
  // Disable animations
}
```

### Keyboard Navigation
Tüm interactive elementler keyboard accessible.

### Screen Readers
Animasyonlar screen reader'ları etkilemiyor.

## 🎓 Best Practices

1. ✅ **Always use `viewport={{ once: true }}`** for scroll animations
2. ✅ **Prefer transforms** over position changes
3. ✅ **Use spring animations** for natural feel
4. ✅ **Stagger delays** for sequential animations
5. ✅ **Test on mobile** devices
6. ✅ **Respect reduced motion** preferences
7. ✅ **Keep durations short** (< 1s for most)
8. ✅ **Use easing functions** for smooth motion

## 🚀 Future Enhancements

- [ ] Scroll-triggered video playback
- [ ] Mouse trail effects
- [ ] Particle systems
- [ ] 3D model integration
- [ ] Advanced parallax scenes
- [ ] Morphing shapes
- [ ] Text scramble effects
- [ ] Loading animations

---

**Not:** Tüm animasyonlar performans ve accessibility göz önünde bulundurularak optimize edilmiştir.
