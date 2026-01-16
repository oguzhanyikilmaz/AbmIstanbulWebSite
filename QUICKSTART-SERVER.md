# ⚡ Hızlı Sunucu Kurulum (5 Dakika)

ABM Istanbul web sitesini sunucunuzda 5 dakikada çalıştırın!

## 🎯 Hedef
- Sadece Docker
- IP:3000 üzerinden erişim
- Mevcut Nginx ile çakışma yok
- Test amaçlı kurulum

## 📋 Gereksinimler
- ✅ DigitalOcean sunucu (zaten var)
- ✅ SSH erişimi
- ⬜ Docker (kuracağız)

## 🚀 Kurulum (5 Adım)

### 1️⃣ SSH ile Bağlan
```bash
ssh root@your_server_ip
```

### 2️⃣ Docker Kur (Eğer yoksa)
```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```

### 3️⃣ Projeyi Yükle
```bash
# Local makinenizden:
cd /Users/oguzhanyikilmaz/Documents/AbmIstanbulWebSite
rsync -avz --exclude 'node_modules' --exclude '.next' . root@your_server_ip:/root/abm-istanbul/
```

### 4️⃣ Port Aç
```bash
# Sunucuda:
ufw allow 3000/tcp
```

### 5️⃣ Deploy Et!
```bash
# Sunucuda:
cd /root/abm-istanbul
chmod +x deploy-simple.sh
./deploy-simple.sh
```

## ✅ Bitti!

Tarayıcınızda açın:
```
http://your_server_ip:3000
```

## 📊 Yararlı Komutlar

```bash
# Logları izle
docker logs -f abm-istanbul-web

# Durdur
docker stop abm-istanbul-web

# Başlat
docker start abm-istanbul-web

# Yeniden başlat
docker restart abm-istanbul-web

# Güncelle
docker stop abm-istanbul-web
docker rm abm-istanbul-web
./deploy-simple.sh
```

## 🔥 Tek Komut Deployment

```bash
# Sunucuda (her şeyi yapar)
cd /root/abm-istanbul && \
docker stop abm-istanbul-web 2>/dev/null || true && \
docker rm abm-istanbul-web 2>/dev/null || true && \
docker build -t abm-istanbul:latest . && \
docker run -d --name abm-istanbul-web --restart unless-stopped \
  -p 3000:3000 \
  -v $(pwd)/public/images:/app/public/images:ro \
  -e NODE_ENV=production \
  abm-istanbul:latest && \
echo "✅ Deployment tamamlandı! http://$(hostname -I | awk '{print $1}'):3000"
```

## 🎨 Görselleri Ekleme

```bash
# Local'den sunucuya
scp -r /path/to/images/* root@your_server_ip:/root/abm-istanbul/public/images/
```

## 🐛 Sorun mu var?

```bash
# Kontrol et
docker ps | grep abm-istanbul
docker logs abm-istanbul-web
netstat -tulpn | grep 3000
```

## 🔄 Güncelleme

```bash
# Local'den yeni dosyaları yükle
rsync -avz --exclude 'node_modules' --exclude '.next' \
  /Users/oguzhanyikilmaz/Documents/AbmIstanbulWebSite/ \
  root@your_server_ip:/root/abm-istanbul/

# Sunucuda yeniden deploy
cd /root/abm-istanbul
./deploy-simple.sh
```

## 📝 Notlar

- ⚠️ Bu test kurulumudur
- ⚠️ HTTP kullanılır (HTTPS yok)
- ⚠️ Port 3000 herkese açık
- ✅ Production için daha sonra Nginx Proxy Manager kullanabilirsiniz

## 🎯 Sonraki Adımlar

1. ✅ Test et: `http://your_ip:3000`
2. ⬜ Görselleri ekle
3. ⬜ İçeriği güncelle
4. ⬜ Nginx Proxy Manager ile domain bağla
5. ⬜ SSL ekle

Detaylı bilgi için: `DEPLOYMENT-SIMPLE.md`
