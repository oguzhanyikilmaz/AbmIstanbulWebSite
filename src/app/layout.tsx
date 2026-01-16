import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ABM Istanbul - Gayrimenkul, Lojistik ve Enerji Çözümleri',
  description: 'ABM Istanbul, gayrimenkul yatırımları, lojistik operasyonları ve enerji & işletme hizmetlerinde 15 yıllık tecrübesiyle güçlü ortaklıklar ve sürdürülebilir değerler sunmaktadır.',
  keywords: 'ABM Istanbul, gayrimenkul, lojistik, enerji, DHL, Hilton, Shell, Migros, KFC',
  openGraph: {
    title: 'ABM Istanbul - Gayrimenkul, Lojistik ve Enerji Çözümleri',
    description: 'Güçlü ortaklıklar, sürdürülebilir değerler',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
