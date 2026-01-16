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

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-dark-lighter text-brand-gray-light hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-brand-gray-light text-sm mb-4">{project.description}</p>

                {/* Arrow Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
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
