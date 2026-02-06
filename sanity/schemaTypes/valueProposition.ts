import { defineField, defineType } from 'sanity'
import { Sparkles } from 'lucide-react'

export const valueProposition = defineType({
    name: 'valueProposition',
    title: 'Propuesta de Valor',
    type: 'document',
    icon: Sparkles,
    fields: [
        defineField({
            name: 'heading',
            title: 'Encabezado',
            type: 'string',
            description: 'Ej: ¿Buscas equilibrio?',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 3,
            description: 'Ej: Conectamos la salud mental con tus objetivos estratégicos.',
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'description',
        },
    },
})
