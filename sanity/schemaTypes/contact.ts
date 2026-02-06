import { defineField, defineType } from 'sanity'
import { MessageSquare } from 'lucide-react'

export const contact = defineType({
    name: 'contact',
    title: 'Sección de Contacto',
    type: 'document',
    icon: MessageSquare,
    fields: [
        defineField({
            name: 'tagline',
            title: 'Etiqueta Superior',
            type: 'string',
            description: 'Ej: Contáctanos',
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
            title: 'Descripción',
            type: 'text',
            rows: 3,
            description: 'Texto introductorio antes de la información de contacto.'
        }),
    ],
    preview: {
        select: {
            title: 'tagline',
        },
    },
})
