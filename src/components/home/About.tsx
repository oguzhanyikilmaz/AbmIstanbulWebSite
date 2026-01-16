'use client'

import { motion } from 'framer-motion'
import { Award, Users, Building2, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const stats = [
  { icon: Award, value: '15', label: 'Yıllık Tecrübe', suffix: '+' },
  { icon: Building2, value: '42.000', label: 'm² Toplam Alan', suffix: '' },
  { icon: Users, value: '2.500', label: 'Mutlu Müşteri', suffix: '+' },
  { icon: TrendingUp, value: '100', label: 'Tamamlanan Proje', suffix: '+' },
]

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/about/abm-building.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-brand-red opacity-20" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">
              Abm Istanbul
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Güçlü Ortaklıklar,<br />Sürdürülebilir Değerler
            </h2>
            <p className="text-brand-gray-light text-lg leading-relaxed mb-6">
              Abm Istanbul, 2001 yılından beri gayrimenkul, yatırım ve enerji alanlarında hizmet 
              vermekte olup, İstanbul-Kocaeli Sanayi Bölgesi'nde alanında lider şirketler ile 
              işbirliği içerisinde çeşitli sektörlerde tercih edilen diğer yardımcı ürün ve 
              hizmetleri sunmaktadır.
            </p>
            <p className="text-brand-gray-light text-lg leading-relaxed mb-8">
              Akaryakıt istasyonumuzun yanı sıra, 42.000 m² büyüklüğündeki lojistik depomuzda 
              DHL SUPPLY CHAIN Taşımacılık ve Ticaret A.Ş ve Türkiye'nin önde gelen lider 
              markalarından Migros Ticaret A.Ş. ile birlikte yatırımlarımız devam etmektedir.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red bg-opacity-10 flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-brand-gray-light">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button href="/hakkimizda" showArrow>
              Daha Fazla Bilgi
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
