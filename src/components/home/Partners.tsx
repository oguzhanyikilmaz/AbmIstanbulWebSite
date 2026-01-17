'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

// İlk satır logoları
const partnersRow1 = [
  { name: 'Archerson', logo: '/images/archerson_logo.avif' },
  { name: 'DHL', logo: '/images/dhl_logo.avif' },
  { name: 'Migros', logo: '/images/migros_logo.avif' },
  { name: 'KFC', logo: '/images/kfc_logo.avif' },
]

// İkinci satır logoları
const partnersRow2 = [
  { name: 'Hilton', logo: '/images/hilton_logo.avif' },
  { name: 'Shell', logo: '/images/shell_logo.avif' },
  { name: 'Pizza Hut', logo: '/images/pizzahut_logo.avif' },
  { name: 'Kayseri Mutfağı', logo: '/images/kayserimutfagi_logo.avif' },
  { name: 'Köfteci Yusuf', logo: '/images/kofteciyusuf_logo.avif' },
]

export default function Partners() {
  return (
    <section className="py-20 lg:py-28 bg-brand-dark">
      <Container>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-white">
            İş Ortakları
          </h2>
        </motion.div>

        {/* First Row - 4 logos */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 mb-12 lg:mb-16">
          {partnersRow1.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex items-center justify-center w-[140px] lg:w-[180px] h-[60px] lg:h-[80px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={80}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Second Row - 5 logos */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-10">
          {partnersRow2.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: (index + 4) * 0.1
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex items-center justify-center w-[120px] lg:w-[150px] h-[50px] lg:h-[70px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={70}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
