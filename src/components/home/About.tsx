'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-24 lg:py-36 bg-brand-dark relative overflow-hidden">
      {/* Since Text - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <h5 className="text-white/40 text-sm tracking-[0.3em] uppercase -rotate-90 whitespace-nowrap">
          Since 2004
        </h5>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left - Image with Badge */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/aerial/aerial_1.jpg"
                  alt="ABM Istanbul Tesisleri"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Years Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -right-4 lg:-right-8 bottom-8 lg:bottom-16 bg-brand-red w-32 h-32 lg:w-44 lg:h-44 flex flex-col items-center justify-center text-white z-10"
              >
                <span className="text-4xl lg:text-6xl font-bold leading-none">25</span>
                <span className="text-base lg:text-xl font-light uppercase tracking-wider">Yıllık</span>
                <span className="text-xs lg:text-sm font-light uppercase tracking-wider opacity-80">Tecrübe</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h6 className="text-brand-red text-sm uppercase tracking-[0.2em] font-medium">
                abm istanbul
              </h6>
              
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight uppercase">
                Güçlü Ortaklıklar,<br />
                Sürdürülebilir Değerler
              </h2>
              
              <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                2007'den beri gayrimenkul, yatırım ve enerji alanlarında hizmet veriyoruz. stratejik iş birlikleri ve uzman kadromuzla değer yaratmaya devam ediyoruz.
              </p>
              
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-[0.15em] font-medium border-b border-white/30 pb-1 hover:border-brand-red hover:text-brand-red transition-colors duration-300 group"
              >
                Daha fazla için
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
