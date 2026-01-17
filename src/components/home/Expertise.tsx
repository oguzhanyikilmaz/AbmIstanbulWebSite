'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const expertiseAreas = [
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="48" height="36" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 20L32 4L56 20" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="24" y="36" width="16" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="14" y="28" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="42" y="28" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: 'GAYRİMENKUL YATIRIMLARI',
    description: 'Ticari ve endüstriyel gayrimenkullerde uzun vadeli yatırım ve kiralama modelleri geliştiriyoruz.',
    link: '/hakkimizda',
    linkText: 'Detaylar İçin',
  },
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="24" width="24" height="32" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="36" y="16" width="24" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M28 40H36" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="32" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="10" y="44" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="42" y="24" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="42" y="36" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="42" y="48" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: 'LOJİSTİK OPERASYONLAR',
    description: '42.000 m² depo alanında global markalara operasyonel iş birlikleri ve çözümler sunuyoruz.',
    link: '/hakkimizda',
    linkText: 'Detaylar İçin',
  },
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M32 8V32L48 48" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <path d="M32 16V20" stroke="currentColor" strokeWidth="2" />
        <path d="M32 44V48" stroke="currentColor" strokeWidth="2" />
        <path d="M16 32H20" stroke="currentColor" strokeWidth="2" />
        <path d="M44 32H48" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'ENERJİ & İŞLETME',
    description: 'Akaryakıt istasyonları işletmeciliği ve enerji çözümleriyle sektörde öncü konumdayız.',
    link: '/hakkimizda',
    linkText: 'Detaylar İçin',
  },
]

export default function Expertise() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h6 className="text-white/60 text-sm uppercase tracking-[0.2em]">
            Uzmanlık Alanlarımız
          </h6>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {expertiseAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="text-white/40 group-hover:text-brand-red transition-colors duration-300 mb-6">
                {item.icon}
              </div>
              
              <h4 className="text-white text-lg lg:text-xl font-bold uppercase tracking-wider mb-4">
                {item.title}
              </h4>
              
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.15em] hover:text-brand-red transition-colors duration-300 group/link"
              >
                {item.linkText}
                <svg 
                  className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
