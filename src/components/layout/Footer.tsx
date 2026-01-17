'use client'

import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Blog', href: '#' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'İletişim', href: '/iletisim' },
]

const companyLinks = [
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
  { name: 'Kariyer', href: '#' },
  { name: 'Blog', href: '#' },
]

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'X', href: '#' },
  { name: 'Linkedin', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark">
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-white">
                  abm<span className="text-brand-red font-light">istanbul</span>
                </span>
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-sm uppercase tracking-wider font-medium mb-6">
                Contact
              </h3>
              <div className="space-y-3 text-white/50 text-sm">
                <p>MAHMURLUEVLER OGB CAD.</p>
                <p>NO:18 JANDAL</p>
                <p>GEBZEKOCAELİ/İSTANBUL</p>
                <p>KOCAELİ / TÜRKİYE</p>
              </div>
            </div>

            {/* ABM Links */}
            <div>
              <h3 className="text-white text-sm uppercase tracking-wider font-medium mb-6">
                ABM
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty column for spacing */}
            <div className="hidden lg:block" />

            {/* Empty column for spacing */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/40 text-sm">
              ©2025 <Link href="/" className="hover:text-white transition-colors">Abmistanbul</Link>. All Rights Reserved
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
