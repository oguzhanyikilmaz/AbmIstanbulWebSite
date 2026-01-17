'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function FullImage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <Image
          src="/images/aerial/aerial_3.jpg"
          alt="ABM Istanbul Tesisleri"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Overlay with Logo */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-5xl lg:text-7xl font-bold text-white">
            abm
          </span>
        </motion.div>
      </div>
    </section>
  )
}
