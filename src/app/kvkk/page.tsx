'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function KVKKPage() {
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
            KVKK Aydınlatma Metni
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-gray-light"
          >
            Kişisel Verilerin Korunması Kanunu
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
                1. Veri Sorumlusu
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel 
                verileriniz; veri sorumlusu olarak ABM Istanbul tarafından aşağıda açıklanan 
                kapsamda işlenebilecektir.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                2. Kişisel Verilerin Hangi Amaçla İşleneceği
              </h2>
              <p>
                Toplanan kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen 
                kişisel veri işleme şartları ve amaçları kapsamında, iletişim faaliyetlerinin 
                yürütülmesi, müşteri ilişkileri yönetimi, hizmet kalitesinin artırılması ve 
                yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenebilecektir.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
              </h2>
              <p>
                Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi 
                doğrultusunda iş ortaklarımıza, tedarikçilerimize, hissedarlarımıza, 
                kanunen yetkili kamu kurumlarına ve özel kişilere KVKK'nın 8. ve 9. 
                maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde 
                aktarılabilecektir.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              </h2>
              <p>
                Kişisel verileriniz, elektronik ortamda web sitemiz üzerinden, iletişim 
                formları aracılığıyla, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel 
                veri işleme şartları ve amaçları kapsamında toplanmaktadır.
              </p>

              <h2 className="text-2xl font-heading font-bold text-white mb-4 mt-8">
                5. Kişisel Veri Sahibinin KVKK'nın 11. Maddesinde Sayılan Hakları
              </h2>
              <p>Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi aşağıdaki 
              yöntemlerle tarafımıza iletebilirsiniz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp 
                kullanılmadığını öğrenme,</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü 
                kişileri bilme,</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların 
                düzeltilmesini isteme,</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin 
                silinmesini veya yok edilmesini isteme,</li>
                <li>Kişisel verilerinizin düzeltilmesi, silinmesi ya da yok edilmesi halinde 
                bu işlemlerin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini 
                isteme,</li>
                <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz 
                edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara 
                uğramanız hâlinde zararın giderilmesini talep etme.</li>
              </ul>

              <div className="mt-12 p-6 bg-brand-dark-lighter">
                <h3 className="text-xl font-semibold text-white mb-4">İletişim</h3>
                <p className="text-brand-gray-light">
                  KVKK kapsamındaki talepleriniz için:<br />
                  E-posta: info@abmistanbul.com<br />
                  Adres: Muhsin Yazıcıoğlu Cad. No:126, 41026 Şekerpınar, Çayırova, Kocaeli
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
