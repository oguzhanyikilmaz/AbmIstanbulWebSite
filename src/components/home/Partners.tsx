'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

const partners = [
  { name: 'Archerson', logo: '/images/partners/archerson.svg' },
  { name: 'DHL', logo: '/images/partners/dhl.svg' },
  { name: 'Migros', logo: '/images/partners/migros.svg' },
  { name: 'KFC', logo: '/images/partners/kfc.svg' },
  { name: 'Hilton', logo: '/images/partners/hilton.svg' },
  { name: 'Shell', logo: '/images/partners/shell.svg' },
  { name: 'Petrol Ofisi', logo: '/images/partners/petrol-ofisi.svg' },
  { name: 'Kayseri Mutfağı', logo: '/images/partners/kayseri-mutfagi.svg' },
  { name: 'Körfez Yusuf', logo: '/images/partners/korfez-yusuf.svg' },
]

export default function Partners() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark-lighter">
      <Container>
        <SectionHeader
          title="İş Ortaklarımız"
          subtitle="Sektörün önde gelen kuruluşları ile güçlü iş birlikleri kurarak, sürdürülebilir başarılar elde ediyoruz."
          centered
        />

        {/* Partners Grid with Wave Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4 }
              }}
              className="flex items-center justify-center p-6 bg-brand-dark hover:bg-opacity-50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-20 flex items-center justify-center">
                {/* Placeholder for partner logo */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="text-white text-opacity-60 group-hover:text-opacity-100 transition-opacity duration-300 font-semibold text-sm">
                    {partner.name}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
