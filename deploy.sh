#!/bin/bash

# ABM Istanbul - Deployment Script for DigitalOcean
# This script automates the deployment process

set -e

echo "🚀 Starting deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose is not installed. Please install Docker Compose first.${NC}"
    exit 1
fi

# Stop existing containers
echo -e "${YELLOW}🛑 Stopping existing containers...${NC}"
docker-compose down || true

# Remove old images (optional)
echo -e "${YELLOW}🗑️  Removing old images...${NC}"
docker image prune -f

# Build new images
echo -e "${YELLOW}🔨 Building new Docker images...${NC}"
docker-compose build --no-cache

# Start containers
echo -e "${YELLOW}🚀 Starting containers...${NC}"
docker-compose up -d

# Wait for services to be healthy
echo -e "${YELLOW}⏳ Waiting for services to be healthy...${NC}"
sleep 10

# Check if containers are running
if docker-compose ps | grep -q "Up"; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Application is running at: http://localhost:3000${NC}"
    echo -e "${GREEN}📊 Check logs with: docker-compose logs -f${NC}"
else
    echo -e "${RED}❌ Deployment failed. Check logs with: docker-compose logs${NC}"
    exit 1
fi

# Show running containers
echo -e "\n${YELLOW}📦 Running containers:${NC}"
docker-compose ps
