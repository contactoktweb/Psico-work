import { defineField, defineType } from 'sanity'
import { Settings, Globe, Menu, Layout, Share2 } from 'lucide-react'

export const globalSettings = defineType({
    name: 'globalSettings',
    title: 'Configuración Global',
    type: 'document',
    icon: Settings,
    groups: [
        {
            name: 'header',
            title: 'Encabezado',
            icon: Layout,
        },
        {
            name: 'footer',
            title: 'Pie de Página',
            icon: Layout,
        },
        {
            name: 'general',
            title: 'General & Contacto',
            icon: Globe,
        },
    ],
    fields: [
        // --- Header Group ---
        defineField({
            name: 'logo',
            title: 'Logo Principal',
            type: 'image',
            options: { hotspot: true },
            group: 'header',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                }
            ]
        }),
        defineField({
            name: 'menuItems',
            title: 'Menú de Navegación',
            type: 'array',
            group: 'header',
            of: [
                {
                    type: 'object',
                    title: 'Item de Menú',
                    icon: Menu,
                    fields: [
                        { name: 'label', type: 'string', title: 'Nombre' },
                        { name: 'sectionId', type: 'string', title: 'ID de Sección (#)' },
                    ],
                    preview: {
                        select: {
                            title: 'label',
                            subtitle: 'sectionId',
                        },
                    },
                },
            ],
        }),

        // --- Footer Group ---
        defineField({
            name: 'footerLogo',
            title: 'Logo Footer',
            type: 'image',
            group: 'footer',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                }
            ]
        }),
        defineField({
            name: 'footerDescription',
            title: 'Descripción Footer',
            type: 'text',
            rows: 3,
            group: 'footer',
        }),
        defineField({
            name: 'footerColumns',
            title: 'Columnas de Enlaces',
            type: 'array',
            group: 'footer',
            of: [
                {
                    type: 'object',
                    title: 'Columna',
                    fields: [
                        { name: 'title', type: 'string', title: 'Título de Columna' },
                        {
                            name: 'links',
                            type: 'array',
                            title: 'Enlaces',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'label', type: 'string', title: 'Texto' },
                                        { name: 'url', type: 'string', title: 'URL o Sección' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'copyrightText',
            title: 'Texto Copyright',
            type: 'string',
            group: 'footer',
        }),

        // --- General/Social Group ---
        defineField({
            name: 'socialLinks',
            title: 'Redes Sociales',
            type: 'array',
            group: 'general',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Plataforma (Facebook, Instagram, etc)' },
                        { name: 'url', type: 'url', title: 'URL Perfil' },
                        {
                            name: 'iconName',
                            type: 'string',
                            title: 'Nombre Icono Lucide (Opcional)',
                            description: 'Nombre exacto del icono de Lucide React (ej: Facebook, Instagram)'
                        }
                    ],
                },
            ],
        }),
        defineField({
            name: 'contactEmail',
            title: 'Email de Contacto',
            type: 'string',
            group: 'general',
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Teléfono',
            type: 'string',
            group: 'general',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'Número WhatsApp',
            type: 'string',
            description: 'Formato internacional (ej: 573001234567)',
            group: 'general',
        }),
        defineField({
            name: 'address',
            title: 'Ubicación Física',
            type: 'text',
            rows: 2,
            group: 'general',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Configuraciones Globales',
            }
        },
    },
})
