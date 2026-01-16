#!/bin/bash

# ABM Istanbul - Basit Deployment Script
# Sadece Next.js container'ı, IP:3000 üzerinden erişim

set -e

echo "🚀 ABM Istanbul - Basit Deployment Başlıyor..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Docker kontrolü
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker kurulu değil. Önce Docker'ı kurun.${NC}"
    exit 1
fi

# Eski container'ı durdur
echo -e "${YELLOW}🛑 Eski container durduruluyor...${NC}"
docker stop abm-istanbul-web 2>/dev/null || true
docker rm abm-istanbul-web 2>/dev/null || true

# Eski image'ı temizle (opsiyonel)
echo -e "${YELLOW}🗑️  Eski image temizleniyor...${NC}"
docker image prune -f

# Yeni image build et
echo -e "${YELLOW}🔨 Docker image build ediliyor...${NC}"
docker build -t abm-istanbul:latest .

# Container'ı başlat
echo -e "${YELLOW}🚀 Container başlatılıyor...${NC}"
docker run -d \
  --name abm-istanbul-web \
  --restart unless-stopped \
  -p 3000:3000 \
  -v $(pwd)/public/images:/app/public/images:ro \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_NAME="ABM Istanbul" \
  abm-istanbul:latest

# Başlamasını bekle
echo -e "${YELLOW}⏳ Container başlaması bekleniyor...${NC}"
sleep 10

# Kontrol et
if docker ps | grep -q abm-istanbul-web; then
    echo -e "${GREEN}✅ Deployment başarılı!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    
    # Server IP'sini al
    SERVER_IP=$(hostname -I | awk '{print $1}')
    
    echo -e "${BLUE}🌐 Uygulama çalışıyor:${NC}"
    echo -e "${GREEN}   Local:   http://localhost:3000${NC}"
    echo -e "${GREEN}   Network: http://${SERVER_IP}:3000${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📊 Logları görmek için:${NC}"
    echo -e "   docker logs -f abm-istanbul-web"
    echo -e "${BLUE}🛑 Durdurmak için:${NC}"
    echo -e "   docker stop abm-istanbul-web"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
else
    echo -e "${RED}❌ Deployment başarısız!${NC}"
    echo -e "${RED}Logları kontrol edin: docker logs abm-istanbul-web${NC}"
    exit 1
fi

# Container bilgilerini göster
echo -e "\n${YELLOW}📦 Container Durumu:${NC}"
docker ps --filter name=abm-istanbul-web --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
