import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PSICO WORK | Bienestar Integral y Salud Mental',
  description: 'Psicología Clínica, Organizacional y Gestión del Talento Humano para Personas y Empresas. Servicios de psicoterapia, SST y RRHH en Colombia.',
  keywords: ['psicología', 'salud mental', 'bienestar laboral', 'recursos humanos', 'SST', 'Colombia', 'terapia', 'psicoterapia'],
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
