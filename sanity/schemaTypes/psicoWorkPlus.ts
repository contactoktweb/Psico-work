import { defineField, defineType } from 'sanity'
import { Crown } from 'lucide-react'

export const psicoWorkPlus = defineType({
    name: 'psicoWorkPlus',
    title: 'Psico Work Plus (Premium)',
    type: 'document',
    icon: Crown,
    fields: [
        defineField({
            name: 'tagline',
            title: 'Etiqueta Superior',
            type: 'string',
            description: 'Ej: Premium Service',
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'string',
            description: 'Ej: PLUS PSICO WORK',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtítulo',
            type: 'string',
            description: 'Ej: Bienestar Integral Empresarial y Personal',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 5,
        }),
        defineField({
            name: 'button',
            title: 'Botón de Acción',
            type: 'object',
            fields: [
                defineField({ name: 'label', type: 'string', title: 'Texto' }),
                defineField({ name: 'url', type: 'string', title: 'Enlace' }),
            ]
        }),
        defineField({
            name: 'carouselImages',
            title: 'Imágenes del Carrusel',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
        },
    },
})
