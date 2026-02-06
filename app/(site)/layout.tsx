import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'

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

import { marcellus, lato } from '../fonts'
import { client } from "@/sanity/lib/client";
import { GLOBAL_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// ... existing imports

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const globalSettings = await client.fetch(GLOBAL_SETTINGS_QUERY);

    return (
        <html lang="es">
            <body className={`${lato.variable} ${marcellus.variable} font-sans antialiased overflow-x-hidden`}>
                <Header
                    logo={globalSettings?.logo}
                    menuItems={globalSettings?.headerMenuItems}
                />
                {children}
                <Footer
                    logo={globalSettings?.footerLogo}
                    description={globalSettings?.footerDescription}
                    columns={globalSettings?.footerColumns}
                    socialLinks={globalSettings?.socialLinks}
                    copyright={globalSettings?.copyrightText}
                />
                <Analytics />
            </body>
        </html>
    )
}
