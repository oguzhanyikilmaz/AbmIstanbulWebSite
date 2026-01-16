'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-90" />
      </div>

      {/* Content with Scale Animation */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: 'spring',
            stiffness: 100
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Projeleriniz İçin<br />Güçlü Bir Ortak mı Arıyorsunuz?
          </motion.h2>
          <p className="text-xl text-brand-gray-light mb-10 max-w-2xl mx-auto">
            Gayrimenkul, lojistik ve enerji sektörlerinde 15 yıllık tecrübemizle 
            sizlere en iyi hizmeti sunmaya hazırız.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/iletisim" showArrow>
              İletişime Geçin
            </Button>
            <Button href="/hakkimizda" variant="secondary">
              Hakkımızda
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Decorative Elements with Rotation */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 border-2 border-brand-red opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 border-2 border-brand-red opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  )
}
