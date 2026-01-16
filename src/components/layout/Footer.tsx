import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark-lighter border-t border-brand-gray border-opacity-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              <span className="text-white">abm</span>
              <span className="text-brand-gray">istanbul</span>
            </h3>
            <p className="text-brand-gray-light text-sm leading-relaxed mb-6">
              Gayrimenkul yatırımları, lojistik operasyonları ve enerji & işletme hizmetlerinde 
              15 yıllık tecrübesiyle güçlü ortaklıklar ve sürdürülebilir değerler sunmaktadır.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              İletişim
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-sm text-brand-gray-light">
                  Muhsin Yazıcıoğlu Cad.<br />
                  No:126, 41026<br />
                  Şekerpınar, Çayırova<br />
                  Kocaeli, Türkiye
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <a
                  href="tel:+902623775555"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  +90 (262) 377 55 55
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                <a
                  href="mailto:info@abmistanbul.com"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  info@abmistanbul.com
                </a>
              </div>
            </div>
          </div>

          {/* ABM */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              ABM
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda#ekip"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  Ekip
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Sosyal Medya
            </h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-brand-dark hover:bg-brand-red transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-brand-dark hover:bg-brand-red transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/kvkk"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  KVKK
                </Link>
              </li>
              <li>
                <Link
                  href="/gizlilik"
                  className="text-sm text-brand-gray-light hover:text-white transition-colors duration-300"
                >
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-gray border-opacity-20">
        <div className="container-custom py-6">
          <p className="text-sm text-brand-gray text-center">
            © {currentYear} <span className="font-semibold">Abmistanbul</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
