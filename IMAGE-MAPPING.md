# 📸 Görsel Eşleştirme Rehberi (Güncellenmiş)

Tüm görseller URL-safe isimlerle yeniden adlandırıldı.

## 📂 Görsel Klasör Yapısı

```
public/images/
├── hero/                    # Hero slider ve proje görselleri
│   ├── project.jpg          # Ana kombine tesis
│   ├── project_1.jpg        # DHL
│   ├── project_2.jpg        # Shell
│   ├── project_3.jpg        # Hilton
│   ├── project_4.jpg - project_31.jpg  # Diğer projeler
├── aerial/                  # Drone çekimleri
│   ├── aerial_1.jpg         # About section ana görsel
│   ├── aerial_2.jpg - aerial_7.jpg  # Diğer drone görselleri
├── shell/                   # Shell projeleri
│   ├── shell_1.jpg - shell_9.jpg  # Shell bodrum görselleri
├── kfc_1.jpg               # KFC ana görsel
├── shell_flag.jpg          # Shell bayrak görseli
├── misc_1.jpg - misc_5.jpg # Diğer görseller
```

## 🏠 Ana Sayfa (Home) Görselleri

### Hero Slider (5 Slide)
| Slide | Görsel | Başlık |
|-------|--------|--------|
| 1 | `/images/hero/project_1.jpg` | DHL LOJİSTİK HİZMETLERİ A.Ş. |
| 2 | `/images/hero/project_2.jpg` | SHELL & TURCAS PETROL A.Ş. |
| 3 | `/images/hero/project_3.jpg` | HİLTON GARDEN INN |
| 4 | `/images/aerial/aerial_5.jpg` | ABM İSTANBUL TESİSLERİ |
| 5 | `/images/aerial/aerial_6.jpg` | ENDÜSTRİYEL ÇÖZÜMLER |

### About Section
| Eleman | Görsel |
|--------|--------|
| Ana Görsel | `/images/aerial/aerial_1.jpg` |
| Badge | 15 YILLIK TECRÜBE (CSS) |

### Projects Section (6 Proje)
| Proje | Görsel |
|-------|--------|
| KFC | `/images/kfc_1.jpg` |
| Shell | `/images/shell_flag.jpg` |
| Hilton | `/images/hero/project_15.jpg` |
| DHL | `/images/hero/project_20.jpg` |
| Migros | `/images/hero/project_25.jpg` |
| Endüstriyel | `/images/aerial/aerial_3.jpg` |

## 📁 Galeri Sayfası (8 Proje)

| Proje | Ana Görsel | Detay 1 | Detay 2 |
|-------|------------|---------|---------|
| KFC | `kfc_1.jpg` | `misc_2.jpg` | `misc_1.jpg` |
| Shell | `shell_flag.jpg` | `shell/shell_1.jpg` | `shell/shell_2.jpg` |
| Hilton | `hero/project_15.jpg` | `hero/project_16.jpg` | `hero/project_17.jpg` |
| DHL | `hero/project_20.jpg` | `hero/project_22.jpg` | `hero/project_23.jpg` |
| Migros | `hero/project_25.jpg` | `hero/project_26.jpg` | `hero/project_27.jpg` |
| Endüstriyel | `aerial/aerial_3.jpg` | `aerial/aerial_4.jpg` | `aerial/aerial_7.jpg` |
| Shell Bodrum | `shell/shell_6.jpg` | `shell/shell_7.jpg` | `shell/shell_8.jpg` |
| Kombine | `hero/project.jpg` | `hero/project_10.jpg` | `hero/project_11.jpg` |

## 🔄 Dosya İsim Dönüşümleri

### Hero Klasörü
```
Shell-DHL-HİTON Foto.jpg → project.jpg
Shell-DHL-HİTON Foto_1.jpg → project_1.jpg
Shell-DHL-HİTON Foto_2.jpg → project_2.jpg
... (31 dosya)
```

### Aerial Klasörü
```
DJI_20251207102544_0059_D kopya.jpg → aerial_1.jpg
DJI_20251207102744_0060_D kopya.jpg → aerial_2.jpg
DJI_20251207103013_0063_D kopya.jpg → aerial_3.jpg
DJI_20251207103301_0067_D kopya.jpg → aerial_4.jpg
DJI_0397.jpg → aerial_5.jpg
DJI_0399.jpg → aerial_6.jpg
DJI_0400.jpg → aerial_7.jpg
```

### Shell Klasörü
```
Shell bodrum kat_4 kopya.jpg → shell_1.jpg
Shell bodrum kat_5 kopya.jpg → shell_2.jpg
Shell bodrum kat_6 kopya.jpg → shell_3.jpg
Shell bodrum kat_7 kopya.jpg → shell_4.jpg
Shell bodrum kat_9 kopya.jpg → shell_5.jpg
Shell bodrum kat_12 kopya.jpg → shell_6.jpg
Shell bodrum kat_13 kopya.jpg → shell_7.jpg
Shell bodrum kat_14 kopya.jpg → shell_8.jpg
Shell bodrum kat_17 kopya.jpg → shell_9.jpg
```

### Ana Klasör
```
Shell- bayrak 29 Ekim.jpg → shell_flag.jpg
Başlıksız-fwe.jpg → misc_1.jpg
QXC2.jpg → kfc_1.jpg
sdw2f.jpg → misc_2.jpg
image00008.jpg → misc_3.jpg
image00010.jpg → misc_4.jpg
image00011.jpg → misc_5.jpg
```

## ✅ Kontrol Listesi

- [x] Tüm dosyalar URL-safe isimlere dönüştürüldü
- [x] Türkçe karakterler kaldırıldı
- [x] Boşluklar kaldırıldı
- [x] Hero.tsx güncellendi
- [x] About.tsx güncellendi
- [x] Projects.tsx güncellendi
- [x] galeri/page.tsx güncellendi

## 🚀 Test

```bash
# Local'de test
npm run dev

# Tarayıcıda kontrol
http://localhost:3000
```

## 📝 Notlar

- Tüm görseller JPG formatında
- URL-safe isimler (Türkçe karakter ve boşluk yok)
- Next.js Image optimizasyonu otomatik çalışır
- WebP dönüşümü Next.js tarafından yapılır

---

**Son Güncelleme**: Ocak 2026
