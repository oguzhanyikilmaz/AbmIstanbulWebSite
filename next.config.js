/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = nextConfig
