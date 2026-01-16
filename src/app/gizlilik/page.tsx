'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-brand-dark-lighter">
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Gizlilik Politikası
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-gray-light"
          >
            Verilerinizin güvenliği bizim için önemlidir
          </motion.p>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto prose prose-invert prose-lg"
          >
            <div className="text-brand-gray-light space-y-6">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                1. Giriş
              </h2>
              <p>
                ABM Istanbul olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine 
                önem veriyoruz. Bu Gizlilik Politikası, kişisel bilgilerinizin nasıl toplandığını, 
                kullanıldığını ve korunduğunu açıklamaktadır.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                2. Toplanan Bilgiler
              </h2>
              <p>
                Web sitemizi kullanırken aşağıdaki bilgiler toplanabilir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ad, soyad ve iletişim bilgileri</li>
                <li>E-posta adresi ve telefon numarası</li>
                <li>İletişim formu aracılığıyla paylaştığınız bilgiler</li>
                <li>IP adresi ve tarayıcı bilgileri</li>
                <li>Çerezler aracılığıyla toplanan kullanım verileri</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                3. Bilgilerin Kullanımı
              </h2>
              <p>
                Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>İletişim taleplerinize yanıt vermek</li>
                <li>Hizmetlerimiz hakkında bilgi sağlamak</li>
                <li>Web sitesi deneyimini iyileştirmek</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
                <li>İstatistiksel analizler yapmak</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                4. Bilgi Güvenliği
              </h2>
              <p>
                Kişisel bilgilerinizin güvenliğini sağlamak için teknik ve idari önlemler 
                alınmaktadır. Bilgileriniz yetkisiz erişime, kayba veya kötüye kullanıma 
                karşı korunmaktadır.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                5. Çerezler
              </h2>
              <p>
                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site kullanımını analiz 
                etmek için çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri 
                devre dışı bırakabilirsiniz.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                6. Üçüncü Taraf Bağlantıları
              </h2>
              <p>
                Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin 
                gizlilik politikalarından sorumlu değiliz ve bu siteleri ziyaret etmeden önce 
                gizlilik politikalarını incelemenizi öneririz.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                7. Haklarınız
              </h2>
              <p>
                KVKK kapsamında, kişisel verilerinize erişim, düzeltme, silme ve işlemeye 
                itiraz etme haklarına sahipsiniz. Bu haklarınızı kullanmak için bizimle 
                iletişime geçebilirsiniz.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                8. Politika Güncellemeleri
              </h2>
              <p>
                Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada 
                yayınlanacaktır ve yürürlük tarihi belirtilecektir.
              </p>

              <div className="mt-12 p-6 bg-brand-dark-lighter">
                <h3 className="text-xl font-semibold text-white mb-4">İletişim</h3>
                <p className="text-brand-gray-light">
                  Gizlilik politikamız hakkında sorularınız için:<br />
                  E-posta: info@abmistanbul.com<br />
                  Telefon: +90 (262) 377 55 55
                </p>
              </div>

              <p className="text-sm text-brand-gray mt-8">
                Son güncelleme: Ocak 2026
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
