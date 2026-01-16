'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

const slides = [
  {
    id: 1,
    title: 'DHL Lojistik Hizmetleri A.Ş.',
    subtitle: 'Lojistik',
    description: '42.000 m² alanı kapsayan global merkez operasyonel tesisimiz',
    image: '/images/hero/dhl-logistics.jpg',
  },
  {
    id: 2,
    title: 'Shell & Turcas Petrol A.Ş.',
    subtitle: 'Enerji',
    description: 'Enerji sektöründe sürdürülebilir çözümler ve yenilikçi projeler',
    image: '/images/hero/shell-energy.jpg',
  },
  {
    id: 3,
    title: 'Hilton Garden Inn',
    subtitle: 'Gayrimenkul',
    description: 'Prestijli gayrimenkul yatırımları ve geliştirme projeleri',
    image: '/images/hero/hilton-hotel.jpg',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="overlay-dark" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-4xl">
                {/* Slide Counter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-xl font-bold mb-8"
                >
                  {currentSlide + 1}/{slides.length}
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-brand-gray-light mb-10 max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button href="/galeri" showArrow>
                    Projelerimizi Keşfedin
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-red w-8' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Video Play Button (Decorative) */}
      <button
        className="absolute top-1/2 right-12 -translate-y-1/2 w-16 h-16 flex items-center justify-center border-2 border-white rounded-full hover:bg-brand-red hover:border-brand-red transition-all duration-300 z-10 hidden lg:flex"
        aria-label="Play video"
      >
        <Play className="w-6 h-6 text-white ml-1" fill="white" />
      </button>
    </section>
  )
}
