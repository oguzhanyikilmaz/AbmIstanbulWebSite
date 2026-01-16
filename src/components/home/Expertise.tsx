'use client'

import { motion } from 'framer-motion'
import { Building2, Truck, Zap } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const expertiseAreas = [
  {
    icon: Building2,
    title: 'Gayrimenkul Yatırımları',
    description:
      'Ticari ve endüstriyel gayrimenkul sektöründe uzun yılların getirdiği tecrübe ile yatırım ve ticari kiralama hizmetleri sunmaktayız.',
    features: [
      'Endüstriyel tesis geliştirme',
      'Ticari gayrimenkul yönetimi',
      'Yatırım danışmanlığı',
    ],
  },
  {
    icon: Truck,
    title: 'Lojistik Operasyonlar',
    description:
      '42.000 m² alanı kapsayan global merkez operasyonel tesisimiz ile lojistik sektörünün önde gelen firmalarına hizmet vermekteyiz.',
    features: [
      'Depolama çözümleri',
      'Dağıtım merkezi yönetimi',
      'Lojistik altyapı geliştirme',
    ],
  },
  {
    icon: Zap,
    title: 'Enerji & İşletme',
    description:
      'Akaryakıt istasyonu işletmeciliği ve enerji sektöründe güvenilir partnerlerimiz ile sürdürülebilir çözümler üretmekteyiz.',
    features: [
      'Akaryakıt istasyonu işletmesi',
      'Enerji verimliliği danışmanlığı',
      'Sürdürülebilir enerji projeleri',
    ],
  },
]

export default function Expertise() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark-lighter">
      <Container>
        <SectionHeader
          title="Uzmanlık Alanlarımız"
          subtitle="Gayrimenkul, lojistik ve enerji sektörlerinde entegre çözümler sunarak, iş ortaklarımıza değer katıyoruz."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-brand-red bg-opacity-10 mb-6">
                  <area.icon className="w-8 h-8 text-brand-red" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-brand-gray-light mb-6 flex-grow">{area.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-brand-gray-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div>
                  <button className="text-brand-red text-sm font-semibold uppercase tracking-wider hover:text-brand-red-dark transition-colors duration-300 group">
                    Detayları Gör
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
