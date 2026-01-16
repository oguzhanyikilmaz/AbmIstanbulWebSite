'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

type Category = 'Hepsi' | 'Gayrimenkul' | 'Lojistik' | 'Enerji'

const projects = [
  {
    id: 1,
    title: 'KFC',
    category: 'Gayrimenkul',
    image: '/images/projects/kfc.jpg',
    description: 'Restoran işletme projesi',
  },
  {
    id: 2,
    title: 'Shell & Turcas Petrol A.Ş.',
    category: 'Enerji',
    image: '/images/projects/shell.jpg',
    description: 'Akaryakıt istasyonu işletmesi',
  },
  {
    id: 3,
    title: 'Hilton Garden Inn',
    category: 'Gayrimenkul',
    image: '/images/projects/hilton.jpg',
    description: 'Otel yatırım projesi',
  },
  {
    id: 4,
    title: 'DHL Lojistik Hizmetleri A.Ş.',
    category: 'Lojistik',
    image: '/images/projects/dhl.jpg',
    description: '42.000 m² lojistik merkezi',
  },
]

const categories: Category[] = ['Hepsi', 'Gayrimenkul', 'Lojistik', 'Enerji']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('Hepsi')

  const filteredProjects =
    activeCategory === 'Hepsi'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 lg:py-32 bg-brand-dark">
      <Container>
        <SectionHeader
          title="Projelerimiz"
          subtitle="Farklı sektörlerde gerçekleştirdiğimiz başarılı projeler ve iş ortaklıklarımız"
        />

        {/* Category Filter with Magnetic Effect */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/50'
                  : 'bg-brand-dark-lighter text-brand-gray-light hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with Advanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
              style={{ perspective: 1000 }}
            >
              {/* Background Image with Zoom */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-brand-gray-light text-sm mb-4">{project.description}</p>

                {/* Arrow Icon with Animation */}
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center bg-brand-red"
                  initial={{ opacity: 0, x: -20, rotate: -45 }}
                  whileHover={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button href="/galeri" showArrow>
            Tüm Projeleri Görüntüle
          </Button>
        </div>
      </Container>
    </section>
  )
}
