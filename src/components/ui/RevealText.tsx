'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealTextProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealText({ children, delay = 0, className = '' }: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
