import { defineField, defineType } from 'sanity'
import { Stethoscope } from 'lucide-react'

export const clinicalServices = defineType({
    name: 'clinicalServices',
    title: 'Servicios Clínicos',
    type: 'document',
    icon: Stethoscope,
    fields: [
        defineField({
            name: 'tagline',
            title: 'Etiqueta Superior',
            type: 'string',
            description: 'Ej: Servicios Clínicos',
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'object',
            fields: [
                defineField({ name: 'line1', type: 'string', title: 'Primera Línea' }),
                defineField({ name: 'highlight', type: 'string', title: 'Texto Destacado (Italic)' }),
            ]
        }),
        defineField({
            name: 'description',
            title: 'Descripción General',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'services',
            title: 'Lista de Servicios',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'service',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Título' }),
                        defineField({ name: 'description', type: 'text', title: 'Descripción', rows: 3 }),
                        defineField({
                            name: 'iconName',
                            type: 'string',
                            title: 'Nombre del Icono',
                            description: 'Nombre exacto del icono de Lucide React'
                        }),
                        defineField({
                            name: 'image',
                            title: 'Imagen del Servicio',
                            type: 'image',
                            options: { hotspot: true }
                        })
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image'
                        }
                    }
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'tagline',
        },
    },
})
