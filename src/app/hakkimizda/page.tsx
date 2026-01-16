'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'

const values = [
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'İş ortaklarımıza karşı dürüst ve şeffaf olmak, sözümüzü tutmak en önemli değerimizdir.',
  },
  {
    icon: Award,
    title: 'Kalite',
    description: 'Her projede en yüksek standartları yakalamak ve sürekli iyileştirme anlayışıyla çalışmak.',
  },
  {
    icon: Users,
    title: 'İşbirliği',
    description: 'Güçlü ortaklıklar kurarak, birlikte büyümeyi ve başarıyı hedeflemek.',
  },
  {
    icon: TrendingUp,
    title: 'Sürdürülebilirlik',
    description: 'Çevreye ve topluma değer katan, uzun vadeli sürdürülebilir projeler geliştirmek.',
  },
]

const milestones = [
  { year: '2001', title: 'Kuruluş', description: 'ABM Istanbul faaliyetlerine başladı' },
  { year: '2005', title: 'İlk Büyük Proje', description: 'Shell & Turcas ile ortaklık' },
  { year: '2010', title: 'Lojistik Merkezi', description: '42.000 m² DHL lojistik tesisi' },
  { year: '2015', title: 'Gayrimenkul Yatırımları', description: 'Hilton Garden Inn projesi' },
  { year: '2020', title: 'Dijital Dönüşüm', description: 'Teknoloji altyapısı güçlendirildi' },
  { year: '2026', title: 'Geleceğe Bakış', description: '15+ yıllık tecrübe ile yeni projeler' },
]

const team = [
  {
    name: 'Yönetim Kurulu Başkanı',
    role: 'CEO & Founder',
    image: '/images/team/member-1.jpg',
  },
  {
    name: 'Genel Müdür',
    role: 'General Manager',
    image: '/images/team/member-2.jpg',
  },
  {
    name: 'Mali İşler Direktörü',
    role: 'CFO',
    image: '/images/team/member-3.jpg',
  },
  {
    name: 'Operasyon Direktörü',
    role: 'COO',
    image: '/images/team/member-4.jpg',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/about/hero.jpg)' }}
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
            Hakkımızda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-gray-light max-w-3xl mx-auto"
          >
            2001 yılından beri güçlü ortaklıklar ve sürdürülebilir değerler
          </motion.p>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">
                Hikayemiz
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                15 Yıllık Tecrübe ve Güven
              </h2>
              <div className="space-y-4 text-brand-gray-light text-lg leading-relaxed">
                <p>
                  Abm Istanbul, 2001 yılından beri gayrimenkul, yatırım ve enerji alanlarında 
                  hizmet vermekte olup, İstanbul-Kocaeli Sanayi Bölgesi'nde alanında lider 
                  şirketler ile işbirliği içerisinde çeşitli sektörlerde tercih edilen diğer 
                  yardımcı ürün ve hizmetleri sunmaktadır.
                </p>
                <p>
                  Akaryakıt istasyonumuzun yanı sıra, 42.000 m² büyüklüğündeki lojistik 
                  depomuzda DHL SUPPLY CHAIN Taşımacılık ve Ticaret A.Ş ve Türkiye'nin önde 
                  gelen lider markalarından Migros Ticaret A.Ş. ile birlikte yatırımlarımız 
                  devam etmektedir.
                </p>
                <p>
                  Bunlara ek olarak, 2014 yılından bu yana Hilton Türkiye İşletmecilik A.Ş. 
                  ile de ortaklık yaparak otel işletmeciliği alanında da hizmet vermekteyiz. 
                  Portföyümüzde yer alan diğer yatırımlarımıza büyük bir kıvanç göstermekteyiz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/about/story.jpg)' }}
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 border-4 border-brand-red opacity-20" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-brand-dark-lighter">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-red bg-opacity-10 mb-6">
                  <Eye className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-6">Vizyonumuz</h3>
                <p className="text-brand-gray-light text-lg leading-relaxed">
                  Gayrimenkul, lojistik ve enerji sektörlerinde Türkiye'nin önde gelen 
                  yatırım ve işletme şirketi olmak. Sürdürülebilir büyüme ve yenilikçi 
                  çözümlerle sektörde fark yaratmak.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-red bg-opacity-10 mb-6">
                  <Target className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-6">Misyonumuz</h3>
                <p className="text-brand-gray-light text-lg leading-relaxed">
                  İş ortaklarımıza en yüksek kalitede hizmet sunarak, güçlü ve uzun vadeli 
                  işbirlikleri kurmak. Çevreye ve topluma değer katan, sürdürülebilir projeler 
                  geliştirmek.
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <SectionHeader
            title="Değerlerimiz"
            subtitle="İş yapış şeklimizi ve kararlarımızı yönlendiren temel prensiplerimiz"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-brand-red bg-opacity-10 mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-light">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-brand-dark-lighter">
        <Container>
          <SectionHeader
            title="Yolculuğumuz"
            subtitle="Başlangıcımızdan bugüne önemli kilometre taşlarımız"
            centered
          />

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-brand-red border-opacity-30 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-brand-red rounded-full -translate-x-[9px]" />

                <div className="bg-brand-dark p-6">
                  <span className="text-brand-red text-2xl font-bold font-heading">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-brand-gray-light">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section id="ekip" className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <SectionHeader
            title="Yönetim Ekibimiz"
            subtitle="Deneyimli ve vizyoner liderlerimiz"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 mb-6 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-brand-red text-sm font-medium uppercase tracking-wider">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
