import { defineField, defineType } from 'sanity'
import { Briefcase } from 'lucide-react'

export const corporateServices = defineType({
    name: 'corporateServices',
    title: 'Servicios Corporativos',
    type: 'document',
    icon: Briefcase,
    fields: [
        defineField({
            name: 'title',
            title: 'Título de la Sección',
            type: 'string',
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
                        defineField({ name: 'title', type: 'string', title: 'Título del Servicio' }),
                        defineField({ name: 'description', type: 'text', title: 'Descripción', rows: 3 }),
                        defineField({
                            name: 'iconName',
                            type: 'string',
                            title: 'Nombre del Icono',
                            description: 'Nombre exacto del icono de Lucide React (ej: ShieldCheck, Users, Brain)'
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'iconName'
                        }
                    }
                }
            ]
        })
    ]
})
