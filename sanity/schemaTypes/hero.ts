import { defineField, defineType } from 'sanity'
import { Layout, Image as ImageIcon, Type, Link } from 'lucide-react'

export const hero = defineType({
    name: 'hero',
    title: 'Sección Hero (Inicio)',
    type: 'document',
    icon: Layout,
    fields: [
        defineField({
            name: 'carouselImages',
            title: 'Imágenes del Carrusel',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (rule) => rule.min(1).error('Debes agregar al menos una imagen para el carrusel.'),
        }),
        defineField({
            name: 'label',
            title: 'Etiqueta Pequeña',
            type: 'string',
            description: 'Texto sobre el título (ej: SALUD MENTAL Y BIENESTAR)',
            icon: Type,
        }),
        defineField({
            name: 'title',
            title: 'Título Principal',
            type: 'object',
            icon: Type,
            fields: [
                defineField({ name: 'line1', type: 'string', title: 'Línea 1 (ej: Bienestar Integral para)' }),
                defineField({ name: 'highlight1', type: 'string', title: 'Resaltado 1 (ej: Personas)' }),
                defineField({ name: 'connector', type: 'string', title: 'Conector (ej: &)' }),
                defineField({ name: 'highlight2', type: 'string', title: 'Resaltado 2 (ej: Empresas)' }),
            ]
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'buttons',
            title: 'Botones',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'button',
                    icon: Link,
                    fields: [
                        defineField({ name: 'label', type: 'string', title: 'Texto del Botón' }),
                        defineField({ name: 'url', type: 'string', title: 'Enlace (URL o #seccion)' }),
                    ],
                },
            ],
            validation: (rule) => rule.max(2).warning('Se recomiendan máximo 2 botones.'),
        }),
    ],
    preview: {
        select: {
            title: 'title.line1',
            media: 'carouselImages.0',
        },
        prepare({ title, media }) {
            return {
                title: 'Sección Hero',
                subtitle: title || 'Configuración del Banner Principal',
                media,
            }
        },
    },
})
