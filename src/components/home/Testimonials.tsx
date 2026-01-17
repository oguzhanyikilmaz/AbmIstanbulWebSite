'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'İsim Soyisim',
    title: 'Direktör at Migros',
    content: 'Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino staveuo at magna akal semperFusce commodo molestie luctus.Lorem ipsum ulicon Dolor tusima olatiup aculis sed semper sit ame.',
  },
  {
    id: 2,
    name: 'İsim Soyisim',
    title: 'Pazarlama Müdürü',
    content: 'Paras stalor ed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie luctus.Lorem ipsum vitalun Dolor tusima olatiup aculis sed semper sit ame.',
  },
]

// İş Ortakları Logoları
const partnersRow1 = [
  { name: 'Archerson', logo: '/images/archerson_logo.avif' },
  { name: 'DHL', logo: '/images/dhl_logo.avif' },
  { name: 'Migros', logo: '/images/migros_logo.avif' },
  { name: 'KFC', logo: '/images/kfc_logo.avif' },
]

const partnersRow2 = [
  { name: 'Hilton', logo: '/images/hilton_logo.avif' },
  { name: 'Shell', logo: '/images/shell_logo.avif' },
  { name: 'Pizza Hut', logo: '/images/pizzahut_logo.avif' },
  { name: 'Kayseri Mutfağı', logo: '/images/kayserimutfagi_logo.avif' },
  { name: 'Köfteci Yusuf', logo: '/images/kofteciyusuf_logo.avif' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* İş Ortakları Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-16">
            İş Ortakları
          </h2>

          {/* First Row - 4 logos */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-16 mb-12">
            {partnersRow1.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center w-[130px] lg:w-[180px] h-[55px] lg:h-[75px] opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={75}
                  className="object-contain w-full h-full brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>

          {/* Second Row - 5 logos */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
            {partnersRow2.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                className="flex items-center justify-center w-[110px] lg:w-[150px] h-[50px] lg:h-[65px] opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={65}
                  className="object-contain w-full h-full brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <div className="pt-20 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl lg:text-4xl font-light text-white">
                +2.500 Mutlu Müşteri
              </h2>
              
              {/* Navigation */}
              <div className="flex mt-8 gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-brand-dark-lighter p-8 relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-brand-red text-5xl font-serif leading-none">
                      "
                    </div>
                    
                    <div className="mb-5">
                      <h4 className="text-white font-medium text-base">
                        <span className="text-brand-red">{testimonial.name}</span>
                        <span className="text-brand-gray text-sm ml-2">/ {testimonial.title}</span>
                      </h4>
                    </div>
                    
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {testimonial.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
