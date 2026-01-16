'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/contact/hero.jpg)' }}
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
            İletişim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-gray-light max-w-3xl mx-auto"
          >
            Projeleriniz için bizimle iletişime geçin
          </motion.p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Bize Ulaşın
              </h2>
              <p className="text-brand-gray-light text-lg mb-12">
                Projeleriniz, iş birliği fırsatları veya sorularınız için bizimle iletişime 
                geçmekten çekinmeyin. Ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red bg-opacity-10 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                    <p className="text-brand-gray-light">
                      Muhsin Yazıcıoğlu Cad.<br />
                      No:126, 41026<br />
                      Şekerpınar, Çayırova<br />
                      Kocaeli, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red bg-opacity-10 flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                    <a
                      href="tel:+902623775555"
                      className="text-brand-gray-light hover:text-white transition-colors duration-300"
                    >
                      +90 (262) 377 55 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red bg-opacity-10 flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                    <a
                      href="mailto:info@abmistanbul.com"
                      className="text-brand-gray-light hover:text-white transition-colors duration-300"
                    >
                      info@abmistanbul.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red bg-opacity-10 flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Çalışma Saatleri</h3>
                    <p className="text-brand-gray-light">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi - Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-brand-dark-lighter p-8 lg:p-12">
                <h3 className="text-2xl font-heading font-bold text-white mb-8">
                  Mesaj Gönderin
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-brand-dark text-white border border-brand-gray border-opacity-20 focus:border-brand-red focus:outline-none transition-colors duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-brand-dark text-white border border-brand-gray border-opacity-20 focus:border-brand-red focus:outline-none transition-colors duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-dark text-white border border-brand-gray border-opacity-20 focus:border-brand-red focus:outline-none transition-colors duration-300"
                      placeholder="+90 (5XX) XXX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-brand-dark text-white border border-brand-gray border-opacity-20 focus:border-brand-red focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="gayrimenkul">Gayrimenkul Yatırımları</option>
                      <option value="lojistik">Lojistik Operasyonlar</option>
                      <option value="enerji">Enerji & İşletme</option>
                      <option value="isbirligi">İş Birliği</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-brand-dark text-white border border-brand-gray border-opacity-20 focus:border-brand-red focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Mesajınızı buraya yazınız..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Gönderiliyor...'
                    ) : (
                      <>
                        Gönder
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-brand-gray-light">
                    * İşaretli alanlar zorunludur. Formunuzu göndererek{' '}
                    <a href="/kvkk" className="text-brand-red hover:underline">
                      KVKK
                    </a>{' '}
                    ve{' '}
                    <a href="/gizlilik" className="text-brand-red hover:underline">
                      Gizlilik Politikası
                    </a>
                    'nı kabul etmiş olursunuz.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-brand-dark-lighter">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.8755!2d29.3654!3d40.8234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ5JzI0LjIiTiAyOcKwMjEnNTUuNCJF!5e0!3m2!1str!2str!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ABM Istanbul Konum"
        />
      </section>
    </>
  )
}
