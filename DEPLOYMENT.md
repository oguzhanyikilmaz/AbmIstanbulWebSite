# 🚀 DigitalOcean Deployment Kılavuzu

Bu kılavuz, ABM Istanbul web sitesini DigitalOcean'da Docker ile nasıl deploy edeceğinizi adım adım açıklar.

## 📋 Gereksinimler

- DigitalOcean hesabı
- Ubuntu 22.04 LTS Droplet (minimum 2GB RAM önerilir)
- Domain adı (opsiyonel ama önerilir)
- SSH erişimi

## 🖥️ 1. DigitalOcean Droplet Oluşturma

### Droplet Özellikleri
- **OS**: Ubuntu 22.04 LTS
- **Plan**: Basic ($12/month - 2GB RAM, 1 CPU, 50GB SSD)
- **Datacenter**: Size en yakın bölge
- **SSH Key**: Kendi SSH key'inizi ekleyin

### Droplet Oluşturma
```bash
# DigitalOcean dashboard'dan:
1. Create → Droplets
2. Ubuntu 22.04 LTS seçin
3. Plan seçin (2GB RAM önerilir)
4. SSH key ekleyin
5. Hostname: abm-istanbul
6. Create Droplet
```

## 🔧 2. Sunucu Kurulumu

### SSH ile Bağlanma
```bash
ssh root@your_droplet_ip
```

### Sistem Güncellemesi
```bash
apt update && apt upgrade -y
```

### Docker Kurulumu
```bash
# Docker kurulum scripti
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Docker Compose kurulumu
apt install docker-compose -y

# Docker servisini başlat
systemctl start docker
systemctl enable docker

# Kurulumu kontrol et
docker --version
docker-compose --version
```

### Firewall Ayarları
```bash
# UFW firewall kurulumu
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
ufw status
```

### Kullanıcı Oluşturma (Opsiyonel ama önerilir)
```bash
# Yeni kullanıcı oluştur
adduser deploy
usermod -aG sudo deploy
usermod -aG docker deploy

# SSH key kopyala
rsync --archive --chown=deploy:deploy ~/.ssh /home/deploy

# Kullanıcıya geç
su - deploy
```

## 📦 3. Proje Deployment

### Projeyi Sunucuya Yükleme

#### Yöntem 1: Git ile (Önerilen)
```bash
# Git kurulumu
sudo apt install git -y

# Projeyi klonla
cd /home/deploy
git clone https://github.com/yourusername/abm-istanbul.git
cd abm-istanbul
```

#### Yöntem 2: SCP ile
```bash
# Local makinenizden:
scp -r /path/to/AbmIstanbulWebSite deploy@your_droplet_ip:/home/deploy/abm-istanbul
```

### Environment Variables Ayarlama
```bash
cd /home/deploy/abm-istanbul

# Production environment dosyası oluştur
cp .env.production .env.production.local

# Değerleri düzenle
nano .env.production.local
```

`.env.production.local` içeriği:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="ABM Istanbul"
NODE_ENV=production
```

### Görselleri Ekleme
```bash
# Görselleri local'den sunucuya yükle
# Local makinenizden:
scp -r /path/to/images/* deploy@your_droplet_ip:/home/deploy/abm-istanbul/public/images/
```

### Deploy Script'i Çalıştırılabilir Yapma
```bash
chmod +x deploy.sh
```

## 🚀 4. Uygulamayı Başlatma

### Basit Deployment (Sadece Next.js)
```bash
# Docker Compose ile başlat
docker-compose up -d web

# Logları kontrol et
docker-compose logs -f web
```

### Nginx ile Deployment (Önerilen)
```bash
# Nginx konfigürasyonunu düzenle
nano nginx/nginx.conf
# server_name'i kendi domain'iniz ile değiştirin

# SSL sertifikaları için klasör oluştur
mkdir -p nginx/ssl nginx/logs

# Tüm servisleri başlat
./deploy.sh

# Veya manuel:
docker-compose up -d
```

## 🔒 5. SSL Sertifikası (Let's Encrypt)

### Certbot ile SSL Kurulumu
```bash
# Certbot kurulumu
sudo apt install certbot -y

# SSL sertifikası al
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com

# Sertifikaları nginx klasörüne kopyala
sudo cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem nginx/ssl/
sudo cp /etc/letsencrypt/live/yourdomain.com/privkey.pem nginx/ssl/

# İzinleri düzenle
sudo chown deploy:deploy nginx/ssl/*

# Nginx'i yeniden başlat
docker-compose restart nginx
```

### Otomatik Yenileme
```bash
# Crontab düzenle
sudo crontab -e

# Şu satırı ekle (her gün 3:00'da kontrol eder)
0 3 * * * certbot renew --quiet --post-hook "docker-compose -f /home/deploy/abm-istanbul/docker-compose.yml restart nginx"
```

## 🌐 6. Domain Ayarları

### DNS Kayıtları
Domain sağlayıcınızın panelinden:

```
A Record:
Name: @
Value: your_droplet_ip
TTL: 3600

A Record:
Name: www
Value: your_droplet_ip
TTL: 3600
```

### DigitalOcean DNS (Opsiyonel)
```bash
# DigitalOcean dashboard'dan:
1. Networking → Domains
2. Domain ekle
3. A kayıtları oluştur
4. Nameserver'ları domain sağlayıcınızda güncelle
```

## 🔍 7. Kontrol ve İzleme

### Container Durumu
```bash
# Çalışan container'ları göster
docker-compose ps

# Logları izle
docker-compose logs -f

# Belirli bir servisin logları
docker-compose logs -f web
docker-compose logs -f nginx
```

### Sistem Kaynakları
```bash
# CPU ve RAM kullanımı
docker stats

# Disk kullanımı
df -h
```

### Health Check
```bash
# Uygulama çalışıyor mu?
curl http://localhost:3000

# Nginx çalışıyor mu?
curl http://localhost
```

## 🔄 8. Güncelleme ve Bakım

### Kod Güncellemesi
```bash
cd /home/deploy/abm-istanbul

# Git'ten çek (eğer Git kullanıyorsanız)
git pull origin main

# Yeniden deploy et
./deploy.sh
```

### Manuel Güncelleme
```bash
# Container'ları durdur
docker-compose down

# Yeni kodu yükle (SCP ile)

# Yeniden başlat
docker-compose up -d --build
```

### Veritabanı Backup (Eğer eklerseniz)
```bash
# Backup scripti
docker-compose exec db pg_dump -U postgres dbname > backup_$(date +%Y%m%d).sql
```

### Log Temizliği
```bash
# Eski logları temizle
docker system prune -a --volumes -f

# Nginx loglarını temizle
truncate -s 0 nginx/logs/*.log
```

## 🛠️ 9. Sorun Giderme

### Container Başlamıyor
```bash
# Logları kontrol et
docker-compose logs web

# Container'ı yeniden başlat
docker-compose restart web

# Tamamen yeniden oluştur
docker-compose down
docker-compose up -d --build
```

### Port Çakışması
```bash
# Portları kontrol et
sudo netstat -tulpn | grep :3000
sudo netstat -tulpn | grep :80

# Çakışan process'i durdur
sudo kill -9 <PID>
```

### Disk Doldu
```bash
# Docker temizliği
docker system prune -a --volumes -f

# Log dosyalarını temizle
find /var/log -type f -name "*.log" -exec truncate -s 0 {} \;
```

### SSL Hatası
```bash
# Sertifika yollarını kontrol et
ls -la nginx/ssl/

# Nginx konfigürasyonunu test et
docker-compose exec nginx nginx -t

# Nginx'i yeniden yükle
docker-compose restart nginx
```

## 📊 10. Monitoring (Opsiyonel)

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/) (Ücretsiz)
- [Pingdom](https://www.pingdom.com/)

### Server Monitoring
```bash
# Netdata kurulumu (gerçek zamanlı monitoring)
bash <(curl -Ss https://my-netdata.io/kickstart.sh)

# Erişim: http://your_droplet_ip:19999
```

## 🔐 11. Güvenlik

### SSH Güvenliği
```bash
# SSH port değiştir
sudo nano /etc/ssh/sshd_config
# Port 22 → Port 2222

# Root login kapat
# PermitRootLogin no

# SSH'ı yeniden başlat
sudo systemctl restart sshd

# Firewall'u güncelle
sudo ufw allow 2222/tcp
sudo ufw delete allow 22/tcp
```

### Fail2Ban Kurulumu
```bash
# Fail2ban kurulumu
sudo apt install fail2ban -y

# Konfigürasyon
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Başlat
sudo systemctl start fail2ban
sudo systemctl enable fail2ban
```

## 📝 Hızlı Komutlar

```bash
# Başlat
docker-compose up -d

# Durdur
docker-compose down

# Yeniden başlat
docker-compose restart

# Logları izle
docker-compose logs -f

# Yeniden build et
docker-compose up -d --build

# Temizlik
docker system prune -a -f

# Status
docker-compose ps
```

## 🆘 Destek

Sorun yaşarsanız:
1. Logları kontrol edin: `docker-compose logs -f`
2. Container durumunu kontrol edin: `docker-compose ps`
3. Sistem kaynaklarını kontrol edin: `docker stats`

## 📞 İletişim

Teknik destek için: info@abmistanbul.com
