# 🚀 Basit Deployment Kılavuzu (IP Üzerinden Erişim)

Bu kılavuz, ABM Istanbul web sitesini DigitalOcean sunucunuzda **sadece Docker ile** ve **IP:3000** üzerinden erişilebilir şekilde nasıl kuracağınızı gösterir.

## 📋 Önkoşullar

- ✅ DigitalOcean sunucunuz hazır
- ✅ Sunucuda zaten Nginx ve Nginx Proxy Manager var
- ✅ SSH erişimi var
- ⬜ Docker kurulu olmalı

## 🔧 1. Docker Kurulumu (Eğer yoksa)

```bash
# SSH ile sunucuya bağlan
ssh root@your_server_ip

# Docker kurulumu
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Docker'ı başlat
systemctl start docker
systemctl enable docker

# Kontrol et
docker --version
```

## 📦 2. Projeyi Sunucuya Yükleme

### Yöntem 1: Git ile (Önerilen)
```bash
# Sunucuda
cd /root  # veya istediğiniz bir dizin
git clone https://github.com/yourusername/abm-istanbul.git
cd abm-istanbul
```

### Yöntem 2: SCP ile (Local'den)
```bash
# Local makinenizden
cd /Users/oguzhanyikilmaz/Documents/AbmIstanbulWebSite
scp -r . root@your_server_ip:/root/abm-istanbul
```

### Yöntem 3: Rsync ile (Daha hızlı)
```bash
# Local makinenizden
rsync -avz --exclude 'node_modules' --exclude '.next' \
  /Users/oguzhanyikilmaz/Documents/AbmIstanbulWebSite/ \
  root@your_server_ip:/root/abm-istanbul/
```

## 🎨 3. Görselleri Yükleme (Önemli!)

```bash
# Local makinenizden görselleri yükle
scp -r /path/to/your/images/* root@your_server_ip:/root/abm-istanbul/public/images/

# Veya sunucuda placeholder görseller indir
# (Geçici test için)
```

## 🚀 4. Deployment

### Otomatik Deployment (Önerilen)
```bash
# Sunucuda
cd /root/abm-istanbul

# Script'i çalıştırılabilir yap
chmod +x deploy-simple.sh

# Deploy et!
./deploy-simple.sh
```

### Manuel Deployment
```bash
# Sunucuda
cd /root/abm-istanbul

# Docker image build et
docker build -t abm-istanbul:latest .

# Container'ı başlat
docker run -d \
  --name abm-istanbul-web \
  --restart unless-stopped \
  -p 3000:3000 \
  -v $(pwd)/public/images:/app/public/images:ro \
  -e NODE_ENV=production \
  abm-istanbul:latest

# Logları kontrol et
docker logs -f abm-istanbul-web
```

## 🔥 5. Firewall Ayarları

```bash
# Port 3000'i aç
ufw allow 3000/tcp

# Firewall durumunu kontrol et
ufw status
```

## 🌐 6. Erişim

Tarayıcınızda:
```
http://your_server_ip:3000
```

Örnek:
```
http://165.232.123.45:3000
```

## 🔍 7. Kontrol Komutları

```bash
# Container çalışıyor mu?
docker ps | grep abm-istanbul

# Logları izle
docker logs -f abm-istanbul-web

# Son 100 satır log
docker logs --tail 100 abm-istanbul-web

# Container'a gir (debug için)
docker exec -it abm-istanbul-web sh

# Container durumu
docker stats abm-istanbul-web

# Port dinleniyor mu?
netstat -tulpn | grep :3000
```

## 🔄 8. Güncelleme

```bash
# Container'ı durdur ve sil
docker stop abm-istanbul-web
docker rm abm-istanbul-web

# Yeni kodu çek (Git kullanıyorsanız)
git pull

# Veya yeni dosyaları yükle (SCP ile)
# scp -r ...

# Yeniden deploy et
./deploy-simple.sh
```

## 🛑 9. Durdurma ve Başlatma

```bash
# Durdur
docker stop abm-istanbul-web

# Başlat
docker start abm-istanbul-web

# Yeniden başlat
docker restart abm-istanbul-web

# Tamamen sil
docker stop abm-istanbul-web
docker rm abm-istanbul-web
docker rmi abm-istanbul:latest
```

## 🐛 10. Sorun Giderme

### Site açılmıyor
```bash
# 1. Container çalışıyor mu?
docker ps | grep abm-istanbul

# 2. Logları kontrol et
docker logs abm-istanbul-web

# 3. Port açık mı?
ufw status | grep 3000

# 4. Port dinleniyor mu?
netstat -tulpn | grep :3000

# 5. Container'ı yeniden başlat
docker restart abm-istanbul-web
```

### Port zaten kullanımda
```bash
# Port 3000'i kullanan process'i bul
sudo lsof -i :3000

# Process'i durdur
sudo kill -9 <PID>

# Veya farklı port kullan
docker run -d \
  --name abm-istanbul-web \
  -p 3001:3000 \
  ...
```

### Görseller görünmüyor
```bash
# Görseller var mı kontrol et
ls -la /root/abm-istanbul/public/images/

# Volume mount kontrolü
docker inspect abm-istanbul-web | grep -A 10 Mounts

# Container'ı yeniden başlat
docker restart abm-istanbul-web
```

### Build hatası
```bash
# Cache'siz build
docker build --no-cache -t abm-istanbul:latest .

# Eski image'ları temizle
docker system prune -a -f

# Tekrar dene
./deploy-simple.sh
```

### Memory/CPU problemi
```bash
# Kaynak kullanımını kontrol et
docker stats abm-istanbul-web

# Sunucu kaynaklarını kontrol et
free -h
df -h
top
```

## 📊 11. Monitoring

```bash
# Gerçek zamanlı loglar
docker logs -f abm-istanbul-web

# Kaynak kullanımı
docker stats abm-istanbul-web

# Container detayları
docker inspect abm-istanbul-web

# Uptime kontrolü
docker ps --filter name=abm-istanbul-web
```

## 🔐 12. Güvenlik Notları

Bu basit kurulumda:
- ⚠️ HTTP kullanılıyor (HTTPS yok)
- ⚠️ Port 3000 herkese açık
- ⚠️ Rate limiting yok

**Öneriler:**
1. Firewall'da sadece güvendiğiniz IP'lere izin verin
2. Daha sonra Nginx Proxy Manager ile HTTPS ekleyin
3. Production'da mutlaka domain + SSL kullanın

```bash
# Sadece belirli IP'ye izin ver
ufw delete allow 3000/tcp
ufw allow from YOUR_IP to any port 3000
```

## 🎯 13. Sonraki Adımlar (Opsiyonel)

### Nginx Proxy Manager ile Entegrasyon
1. Nginx Proxy Manager'da yeni Proxy Host ekle
2. Domain/subdomain belirle
3. Forward Hostname: `localhost` veya container IP
4. Forward Port: `3000`
5. SSL sertifikası ekle (Let's Encrypt)

### Domain Bağlama
```bash
# Nginx Proxy Manager kullanarak
# test.yourdomain.com → localhost:3000
# Otomatik SSL
```

## 📝 Hızlı Referans

```bash
# Deploy
./deploy-simple.sh

# Loglar
docker logs -f abm-istanbul-web

# Durdur
docker stop abm-istanbul-web

# Başlat
docker start abm-istanbul-web

# Güncelle
docker stop abm-istanbul-web && docker rm abm-istanbul-web && ./deploy-simple.sh

# Temizle
docker stop abm-istanbul-web && docker rm abm-istanbul-web && docker rmi abm-istanbul:latest
```

## 🆘 Yardım

Sorun yaşarsanız:
1. `docker logs abm-istanbul-web` ile logları kontrol edin
2. `docker ps` ile container durumunu kontrol edin
3. `ufw status` ile firewall'u kontrol edin
4. `netstat -tulpn | grep 3000` ile port'u kontrol edin

## 📞 İletişim

Teknik destek: info@abmistanbul.com

---

**Not:** Bu basit kurulum test amaçlıdır. Production için `DEPLOYMENT.md` dosyasındaki tam kurulumu kullanın.
