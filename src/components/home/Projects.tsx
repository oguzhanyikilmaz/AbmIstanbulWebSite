'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { id: 'all', name: 'Hepsi' },
  { id: 'gayrimenkul', name: 'Gayrimenkul' },
  { id: 'lojistik', name: 'Lojistik' },
  { id: 'enerji', name: 'Enerji' },
]

const projects = [
  {
    id: 1,
    title: 'KFC',
    category: 'gayrimenkul',
    categoryLabel: 'Gayrimenkul',
    image: '/images/kfc_1.jpg',
  },
  {
    id: 2,
    title: 'Shell & Turcas Petrol A.Ş.',
    category: 'enerji',
    categoryLabel: 'Enerji',
    image: '/images/shell_flag.jpg',
  },
  {
    id: 3,
    title: 'Hilton Garden Inn',
    category: 'gayrimenkul',
    categoryLabel: 'Gayrimenkul',
    image: '/images/hero/project_15.jpg',
  },
  {
    id: 4,
    title: 'DHL Lojistik Hizmetleri A.Ş.',
    category: 'lojistik',
    categoryLabel: 'Lojistik',
    image: '/images/hero/project_20.jpg',
  },
  {
    id: 5,
    title: 'Migros Dağıtım Merkezi',
    category: 'lojistik',
    categoryLabel: 'Lojistik',
    image: '/images/hero/project_25.jpg',
  },
  {
    id: 6,
    title: 'Endüstriyel Tesisler',
    category: 'gayrimenkul',
    categoryLabel: 'Gayrimenkul',
    image: '/images/aerial/aerial_3.jpg',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const sliderRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 lg:mb-0">
              Projelerimiz
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 lg:gap-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                  activeFilter === cat.id 
                    ? 'text-white' 
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Slider */}
      <div className="relative">
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 lg:px-8 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] lg:w-[400px] group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Link href="/galeri" className="block relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark-lighter">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="mt-4">
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <h4 className="text-white text-lg lg:text-xl font-medium mt-1 group-hover:text-brand-red transition-colors duration-300">
                    {project.title}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10 hidden lg:flex"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10 hidden lg:flex"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
