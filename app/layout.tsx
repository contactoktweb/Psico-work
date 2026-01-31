import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'PSICO WORK | Bienestar Integral y Salud Mental',
  description: 'Psicología Clínica, Organizacional y Gestión del Talento Humano para Personas y Empresas. Servicios de psicoterapia, SST y RRHH en Colombia.',
  keywords: ['psicología', 'salud mental', 'bienestar laboral', 'recursos humanos', 'SST', 'Colombia', 'terapia', 'psicoterapia'],
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
