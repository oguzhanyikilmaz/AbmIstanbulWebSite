'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

type Category = 'Hepsi' | 'Gayrimenkul' | 'Lojistik' | 'Enerji'

interface Project {
  id: number
  title: string
  category: string
  client: string
  year: string
  area?: string
  description: string
  image: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'KFC Restoran Projesi',
    category: 'Gayrimenkul',
    client: 'KFC',
    year: '2018',
    area: '450 m²',
    description:
      'Kocaeli bölgesinde modern restoran konsepti ile hizmet veren KFC işletme projesi. Yüksek müşteri trafiğine uygun tasarım ve operasyonel verimlilik.',
    image: '/images/kfc_1.jpg',
    images: ['/images/misc_2.jpg', '/images/misc_1.jpg'],
  },
  {
    id: 2,
    title: 'Shell & Turcas Petrol A.Ş.',
    category: 'Enerji',
    client: 'Shell & Turcas',
    year: '2005',
    area: '2.500 m²',
    description:
      'Modern akaryakıt istasyonu işletmesi. Enerji sektöründe sürdürülebilir çözümler ve yenilikçi hizmet anlayışı ile müşteri memnuniyeti odaklı operasyon.',
    image: '/images/shell_flag.jpg',
    images: ['/images/shell/shell_1.jpg', '/images/shell/shell_2.jpg'],
  },
  {
    id: 3,
    title: 'Hilton Garden Inn',
    category: 'Gayrimenkul',
    client: 'Hilton',
    year: '2014',
    area: '8.000 m²',
    description:
      'Prestijli otel yatırım ve işletme projesi. Uluslararası standartlarda konaklama hizmeti sunan, modern tasarım ve konfor odaklı tesis.',
    image: '/images/hero/project_15.jpg',
    images: ['/images/hero/project_16.jpg', '/images/hero/project_17.jpg'],
  },
  {
    id: 4,
    title: 'DHL Lojistik Hizmetleri A.Ş.',
    category: 'Lojistik',
    client: 'DHL',
    year: '2010',
    area: '42.000 m²',
    description:
      'Global lojistik operasyonlar için tasarlanmış modern depolama ve dağıtım merkezi. Yüksek teknoloji altyapısı ve verimli operasyonel süreçler.',
    image: '/images/hero/project_20.jpg',
    images: ['/images/hero/project_22.jpg', '/images/hero/project_23.jpg'],
  },
  {
    id: 5,
    title: 'Migros Dağıtım Merkezi',
    category: 'Lojistik',
    client: 'Migros',
    year: '2012',
    area: '15.000 m²',
    description:
      'Perakende sektörünün önde gelen markası Migros için modern lojistik altyapı projesi. Soğuk zincir ve genel depolama alanları.',
    image: '/images/hero/project_25.jpg',
    images: ['/images/hero/project_26.jpg', '/images/hero/project_27.jpg'],
  },
  {
    id: 6,
    title: 'Endüstriyel Tesisler',
    category: 'Gayrimenkul',
    client: 'ABM Istanbul',
    year: '2020',
    area: '50.000 m²',
    description:
      'Geniş alan endüstriyel tesisler. Modern altyapı ve teknoloji ile donatılmış, çok amaçlı kullanıma uygun tesisler.',
    image: '/images/aerial/aerial_3.jpg',
    images: ['/images/aerial/aerial_4.jpg', '/images/aerial/aerial_7.jpg'],
  },
  {
    id: 7,
    title: 'Shell Bodrum Tesisleri',
    category: 'Enerji',
    client: 'Shell',
    year: '2019',
    area: '3.000 m²',
    description:
      'Shell akaryakıt istasyonu bodrum kat tesisleri. Modern depolama ve lojistik altyapı.',
    image: '/images/shell/shell_6.jpg',
    images: ['/images/shell/shell_7.jpg', '/images/shell/shell_8.jpg'],
  },
  {
    id: 8,
    title: 'Kombine Tesisler',
    category: 'Lojistik',
    client: 'ABM Istanbul',
    year: '2021',
    area: '60.000 m²',
    description:
      'Shell, DHL ve Hilton projelerini bir arada barındıran kombine tesis kompleksi. Entegre operasyonel yönetim.',
    image: '/images/hero/project.jpg',
    images: ['/images/hero/project_10.jpg', '/images/hero/project_11.jpg'],
  },
]

const categories: Category[] = ['Hepsi', 'Gayrimenkul', 'Lojistik', 'Enerji']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Hepsi')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === 'Hepsi'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/gallery/hero.jpg)' }}
        >
          <div className="overlay-dark" />
        </div>
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
          >
            Projelerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-gray-light max-w-3xl mx-auto"
          >
            Farklı sektörlerde gerçekleştirdiğimiz başarılı projeler
          </motion.p>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-[450px] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray-light text-sm mb-2">{project.client}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-gray-light text-xs">{project.year}</span>
                    {project.area && (
                      <span className="text-brand-gray-light text-xs">{project.area}</span>
                    )}
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-dark-lighter max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-brand-red hover:bg-brand-red-dark transition-colors duration-300"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Project Image */}
            <div
              className="h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedProject.image})` }}
            />

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <span className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4 block">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl font-heading font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-brand-gray border-opacity-20">
                <div>
                  <p className="text-brand-gray text-sm mb-1">Müşteri</p>
                  <p className="text-white font-semibold">{selectedProject.client}</p>
                </div>
                <div>
                  <p className="text-brand-gray text-sm mb-1">Yıl</p>
                  <p className="text-white font-semibold">{selectedProject.year}</p>
                </div>
                {selectedProject.area && (
                  <div>
                    <p className="text-brand-gray text-sm mb-1">Alan</p>
                    <p className="text-white font-semibold">{selectedProject.area}</p>
                  </div>
                )}
              </div>

              <p className="text-brand-gray-light text-lg leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
