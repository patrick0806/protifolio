import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '../components/header'
import { ContactForm } from '../components/ContactForm'
import { Metadata } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { BackToTop } from '../components/backToTop'
import { Toaster } from '../components/toaster'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Home | Patrick da Silva Nicezi - Desenvolvedor Fullstack',
    template: '%s | Patrick da Silva Nicezi - Desenvolvedor Fullstack',
  },
  description: 'Desenvolvedor Fullstack - NodeJS - NestJS - ReactJS - NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <Header />
        {children}
        <ContactForm />
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
