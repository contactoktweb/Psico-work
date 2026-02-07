
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is missing in .env.local')
    process.exit(1)
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-02-06',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

console.log(`🚀 Starting migration script for project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)

async function uploadImage(imageName) {
    const imagePath = path.resolve(__dirname, `../public/images/${imageName}`)
    if (!fs.existsSync(imagePath)) {
        console.warn(`⚠️ Image not found: ${imageName}. Skipping upload.`)
        return null
    }
    // console.log(`Uploading image: ${imageName}...`)
    try {
        const buffer = fs.readFileSync(imagePath)
        const asset = await client.assets.upload('image', buffer, { filename: imageName })
        return asset._id
    } catch (error) {
        console.error(`❌ Failed to upload ${imageName}:`, error.message)
        return null
    }
}

async function seedGlobalSettings() {
    console.log('\n--- Seeding Global Settings ---')

    const logoId = await uploadImage('logo-new.webp') || await uploadImage('logo-new.png')
    const footerLogoId = logoId

    const globalSettings = {
        _id: 'globalSettings',
        _type: 'globalSettings',
        logo: logoId ? { _type: 'image', asset: { _ref: logoId, _type: 'reference' }, alt: 'PSICO WORK Logo' } : undefined,
        headerMenuItems: [
            { _key: 'menu1', _type: 'menuItem', label: "Inicio", sectionId: "inicio" },
            { _key: 'menu2', _type: 'menuItem', label: "Servicios", sectionId: "servicios" },
            { _key: 'menu3', _type: 'menuItem', label: "Empresas", sectionId: "empresas" },
            { _key: 'menu4', _type: 'menuItem', label: "Contacto", sectionId: "contacto" },
        ],
        footerLogo: footerLogoId ? { _type: 'image', asset: { _ref: footerLogoId, _type: 'reference' }, alt: 'PSICO WORK Footer Logo' } : undefined,
        footerDescription: "Bienestar integral y salud mental para personas y empresas. Tu socio estratégico en psicología clínica y organizacional.",
        footerColumns: [
            {
                _key: 'col1',
                _type: 'footerColumn',
                title: "Servicios",
                links: [
                    { _key: 'l1', _type: 'link', label: "Psicoterapia Individual", url: "#servicios" },
                    { _key: 'l2', _type: 'link', label: "Terapia de Pareja", url: "#servicios" },
                    { _key: 'l3', _type: 'link', label: "Terapia Familiar", url: "#servicios" },
                    { _key: 'l4', _type: 'link', label: "Atención Virtual", url: "#servicios" },
                ]
            },
            {
                _key: 'col2',
                _type: 'footerColumn',
                title: "Empresas",
                links: [
                    { _key: 'l5', _type: 'link', label: "Riesgo Psicosocial", url: "#empresas" },
                    { _key: 'l6', _type: 'link', label: "SG-SST", url: "#empresas" },
                    { _key: 'l7', _type: 'link', label: "Talento Humano", url: "#empresas" },
                    { _key: 'l8', _type: 'link', label: "Formación", url: "#empresas" },
                ]
            },
            {
                _key: 'col3',
                _type: 'footerColumn',
                title: "Contacto",
                links: [
                    { _key: 'l9', _type: 'link', label: "Reservar Cita", url: "#contacto" },
                    { _key: 'l10', _type: 'link', label: "PSICO WORK PLUS", url: "#contacto" },

                ]
            }
        ],
        copyrightText: "© 2026 PSICO WORK. Todos los derechos reservados.",
        socialLinks: [
            { _key: 'soc1', _type: 'socialLink', platform: "Facebook", url: "https://www.facebook.com/profile.php?id=61587145687911", iconName: "Facebook" },
            { _key: 'soc2', _type: 'socialLink', platform: "Instagram", url: "https://www.instagram.com/psicowork_sst/", iconName: "Instagram" },
        ],
        contactEmail: "psangievargas@gmail.com",
        phoneNumber: "321 241 1585",
        whatsappNumber: "573212411585", // Derived from contact phone, waiting to confirm if whatsapp button differs
        address: "Bogotá, Colombia"
    }

    try {
        const result = await client.createOrReplace(globalSettings)
        console.log('✅ Global Settings created/updated')
    } catch (err) {
        console.error('❌ Error creating Global Settings:', err.message)
        // console.error(JSON.stringify(err, null, 2))
    }
}

async function seedHero() {
    console.log('\n--- Seeding Hero Section ---')

    const img1 = await uploadImage('hero_soft_wellness.webp')
    const img2 = await uploadImage('hero_corporate_wellness.webp')
    const img3 = await uploadImage('hero_clinical_psychology.webp')

    const carouselAssets = [img1, img2, img3].filter(id => id !== null).map(id => ({
        _key: id,
        _type: 'image',
        asset: { _ref: id, _type: 'reference' }
    }))

    const heroData = {
        _id: 'hero',
        _type: 'hero',
        label: "Salud Mental y Bienestar",
        title: {
            line1: "Bienestar Integral para",
            highlight1: "Personas",
            connector: "&",
            highlight2: "Empresas"
        },
        description: "Psicología Clínica, Organizacional y Gestión del Talento Humano. Transformamos vidas y potenciamos entornos laborales.",
        carouselImages: carouselAssets,
        buttons: [
            { _key: 'btn1', _type: 'button', label: "Nuestros Servicios", url: "#servicios" },
            { _key: 'btn2', _type: 'button', label: "Contactar", url: "#contacto" },
        ]
    }

    try {
        const result = await client.createOrReplace(heroData)
        console.log('✅ Hero Section created/updated')
    } catch (err) {
        console.error('❌ Error creating Hero Section:', err.message)
        // console.error(JSON.stringify(err, null, 2))
    }
}

async function seedCorporateServices() {
    console.log('\n--- Seeding Corporate Services ---')

    const corporateData = {
        _id: 'corporateServices',
        _type: 'corporateServices',
        title: "SST y Recursos Humanos",
        description: "Soluciones integrales para la gestión del talento y el bienestar organizacional, diseñadas para potenciar el rendimiento y la salud de tu equipo.",
        services: [
            { _key: 's1', _type: 'service', title: "Batería Psicosociales", description: "Aplicamos la batería de riesgo psicosocial conforme a la normativa colombiana, permitiendo identificar factores intra y extralaborales que afectan el bienestar y desempeño de los trabajadores, con informes claros y planes de intervención efectivos.", iconName: "ClipboardCheck" },
            { _key: 's2', _type: 'service', title: "Diseño e Implementación del SG-SST", description: "Acompañamos a tu empresa en el diseño, ejecución y mejora del Sistema de Gestión de Seguridad y Salud en el Trabajo, garantizando cumplimiento legal, prevención de riesgos y una cultura organizacional saludable.", iconName: "ShieldCheck" },
            { _key: 's3', _type: 'service', title: "Análisis de Puestos de Trabajo en Riesgo Psicosocial", description: "Brindamos asesoría experta en la estructuración y fortalecimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo, asegurando el cumplimiento normativo y fomentando un entorno laboral seguro y saludable.", iconName: "Search" },
            { _key: 's4', _type: 'service', title: "Evaluación del Riesgo Psicosocial", description: "Realizamos diagnósticos integrales que permiten identificar, medir y priorizar los factores de riesgo psicosocial, generando estrategias de intervención ajustadas a las necesidades reales de la organización.", iconName: "Activity" },
            { _key: 's5', _type: 'service', title: "Programa de Vigilancia Epidemiológica en Riesgo Psicosocial", description: "Diseñamos e implementamos programas de vigilancia que permiten el seguimiento continuo de los factores psicosociales, promoviendo la prevención, el control y la mejora permanente del clima laboral.", iconName: "Eye" },
            { _key: 's6', _type: 'service', title: "Formación Empresarial", description: "Desarrollamos procesos de capacitación en habilidades blandas, liderazgo, comunicación, manejo del estrés y bienestar laboral, fortaleciendo equipos de trabajo más sanos, productivos y comprometidos.", iconName: "GraduationCap" },
            { _key: 's7', _type: 'service', title: "Psicología Ocupacional", description: "Desarrollamos procesos de capacitación en PREVENCION DEL ACOSO LABORAL, habilidades blandas, liderazgo, comunicación, manejo del estrés y bienestar laboral, fortaleciendo equipos de trabajo más sanos, productivos y comprometidos.", iconName: "Brain" },
            { _key: 's8', _type: 'service', title: "Gestión del Talento Humano y Bienestar", description: "Reclutamiento, selección y contratación de empleados en misión para las empresas. ANTECEDENTES JUDICIALES, VISITAS DOMICILIARIAS Y POLÍGRAFO. Realizamos la administración y gestión de los procesos de nómina para las empresas.", iconName: "Users" },
        ]
    }

    try {
        await client.createOrReplace(corporateData)
        console.log('✅ Corporate Services created/updated')
    } catch (err) {
        console.error('❌ Error creating Corporate Services:', err.message)
    }
}

async function seedValueProposition() {
    console.log('\n--- Seeding Value Proposition ---')

    const vpData = {
        _id: 'valueProposition',
        _type: 'valueProposition',
        heading: "¿Buscas equilibrio?",
        description: "Conectamos la salud mental con tus objetivos estratégicos."
    }

    try {
        await client.createOrReplace(vpData)
        console.log('✅ Value Proposition created/updated')
    } catch (err) {
        console.error('❌ Error creating Value Proposition:', err.message)
    }
}

async function seedPsicoWorkPlus() {
    console.log('\n--- Seeding PsicoWorkPlus ---')

    const img1 = await uploadImage('premium_tea.webp')
    const img2 = await uploadImage('formacion_empresarial_new.webp')
    const img3 = await uploadImage('talento_humano_new.webp')
    const img4 = await uploadImage('premium_office.webp')

    const carouselAssets = [img1, img2, img3, img4].filter(id => id !== null).map(id => ({
        _key: id,
        _type: 'image',
        asset: { _ref: id, _type: 'reference' }
    }))

    const pwpData = {
        _id: 'psicoWorkPlus',
        _type: 'psicoWorkPlus',
        tagline: "Premium Service",
        title: "PLUS PSICO WORK",
        subtitle: "Bienestar Integral Empresarial y Personal",
        description: "En PSICO WORK integramos la psicología organizacional con la atención terapéutica individual. No solo evaluamos el riesgo psicosocial en las empresas, sino que acompañamos emocionalmente a sus colaboradores mediante orientación psicológica, intervención clínica breve y seguimiento continuo. Nuestro modelo conecta la salud mental de las personas con los objetivos de la organización, generando entornos laborales más humanos, productivos y sostenibles.",
        button: { label: "Solicitar Información", url: "#contacto" },
        carouselImages: carouselAssets
    }

    try {
        await client.createOrReplace(pwpData)
        console.log('✅ PsicoWorkPlus created/updated')
    } catch (err) {
        console.error('❌ Error creating PsicoWorkPlus:', err.message)
    }
}

async function seedClinicalServices() {
    console.log('\n--- Seeding Clinical Services ---')

    const img1 = await uploadImage('clinical_individual.webp')
    const img2 = await uploadImage('clinical_couple.webp')
    const img3 = await uploadImage('clinical_evaluation.webp')
    const img4 = await uploadImage('premium_teletherapy.webp')

    const clinicalData = {
        _id: 'clinicalServices',
        _type: 'clinicalServices',
        tagline: "Servicios Clínicos",
        title: {
            line1: "Atención Individual",
            highlight: "y Familiar"
        },
        description: "Enfoque terapéutico basado en la evidencia para promover tu bienestar emocional y mental.",
        services: [
            {
                _key: 'cs1',
                _type: 'service',
                title: "Psicoterapia Individual",
                description: "Espacio seguro para abordar ansiedad, depresión y crecimiento personal.",
                iconName: "Brain",
                image: img1 ? { _type: 'image', asset: { _ref: img1, _type: 'reference' } } : undefined
            },
            {
                _key: 'cs2',
                _type: 'service',
                title: "Terapia de Pareja",
                description: "Mejora la comunicación y fortalece el vínculo afectivo.",
                iconName: "Users",
                image: img2 ? { _type: 'image', asset: { _ref: img2, _type: 'reference' } } : undefined
            },
            {
                _key: 'cs3',
                _type: 'service',
                title: "Evaluación Psicológica",
                description: "Diagnóstico preciso y orientación profesional.",
                iconName: "ClipboardCheck",
                image: img3 ? { _type: 'image', asset: { _ref: img3, _type: 'reference' } } : undefined
            },
            {
                _key: 'cs4',
                _type: 'service',
                title: "Atención Virtual",
                description: "Terapia profesional desde la comodidad de tu hogar.",
                iconName: "Video",
                image: img4 ? { _type: 'image', asset: { _ref: img4, _type: 'reference' } } : undefined
            },
        ]
    }

    try {
        await client.createOrReplace(clinicalData)
        console.log('✅ Clinical Services created/updated')
    } catch (err) {
        console.error('❌ Error creating Clinical Services:', err.message)
    }
}

async function seedContact() {
    console.log('\n--- Seeding Contact Section ---')

    const contactData = {
        _id: 'contact',
        _type: 'contact',
        tagline: "Contáctanos",
        title: {
            line1: "Estamos listos para",
            highlight: "escucharte."
        },
        description: "Ya sea para una consulta individual o una propuesta empresarial, agenda tu cita hoy y transformemos el bienestar de tu organización."
    }

    try {
        await client.createOrReplace(contactData)
        console.log('✅ Contact Section created/updated')
    } catch (err) {
        console.error('❌ Error creating Contact Section:', err.message)
    }
}

async function run() {
    await seedGlobalSettings()
    await seedHero()
    await seedCorporateServices()
    await seedValueProposition()
    await seedPsicoWorkPlus()
    await seedClinicalServices()
    await seedContact()
    console.log('\n🎉 Migration complete!')
}

run()
