'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Users, Building2, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { useCountUp } from '@/hooks/useCountUp'
import { useRef } from 'react'

const stats = [
  { icon: Award, value: 15, label: 'Yıllık Tecrübe', suffix: '+', format: (n: number) => n.toString() },
  { icon: Building2, value: 42000, label: 'm² Toplam Alan', suffix: '', format: (n: number) => n.toLocaleString('tr-TR') },
  { icon: Users, value: 2500, label: 'Mutlu Müşteri', suffix: '+', format: (n: number) => n.toLocaleString('tr-TR') },
  { icon: TrendingUp, value: 100, label: 'Tamamlanan Proje', suffix: '+', format: (n: number) => n.toString() },
]

function StatCounter({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, countRef } = useCountUp(stat.value, 2500)
  
  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: 0.3 + index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      className="flex items-start space-x-4"
    >
      <motion.div 
        className="w-12 h-12 flex items-center justify-center bg-brand-red bg-opacity-10 flex-shrink-0"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <stat.icon className="w-6 h-6 text-brand-red" />
      </motion.div>
      <div>
        <div className="text-3xl font-bold text-white mb-1">
          {stat.format(count)}
          {stat.suffix}
        </div>
        <div className="text-sm text-brand-gray-light">{stat.label}</div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-brand-dark overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/about/abm-building.jpg)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" />
              </div>
            </motion.div>
            {/* Decorative Element with Rotation */}
            <motion.div 
              style={{ rotate: imageRotate }}
              className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-brand-red opacity-20"
            />
          </motion.div>

          {/* Right: Content with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Abm Istanbul
            </motion.p>
            <div className="overflow-hidden mb-6">
              <motion.h2 
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="text-4xl md:text-5xl font-heading font-bold text-white"
              >
                Güçlü Ortaklıklar,<br />Sürdürülebilir Değerler
              </motion.h2>
            </div>
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

            {/* Stats Grid with Counter Animation */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <StatCounter key={index} stat={stat} index={index} />
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
