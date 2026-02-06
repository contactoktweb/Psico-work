
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

if (!process.env.SANITY_API_TOKEN) {
    process.exit(1)
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-02-06',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function check() {
    const globalSettings = await client.fetch(`*[_type == "globalSettings"][0]`)
    console.log('Global Settings:', globalSettings ? '✅ Found' : '❌ Not Found')

    const hero = await client.fetch(`*[_type == "hero"][0]`)
    console.log('Hero:', hero ? '✅ Found' : '❌ Not Found')

    const corporate = await client.fetch(`*[_type == "corporateServices"][0]`)
    console.log('Corporate Services:', corporate ? '✅ Found' : '❌ Not Found')

    const vp = await client.fetch(`*[_type == "valueProposition"][0]`)
    console.log('Value Proposition:', vp ? '✅ Found' : '❌ Not Found')

    const pwp = await client.fetch(`*[_type == "psicoWorkPlus"][0]`)
    console.log('Psico Work Plus:', pwp ? '✅ Found' : '❌ Not Found')

    const clinical = await client.fetch(`*[_type == "clinicalServices"][0]`)
    console.log('Clinical Services:', clinical ? '✅ Found' : '❌ Not Found')

    const contact = await client.fetch(`*[_type == "contact"][0]`)
    console.log('Contact Section:', contact ? '✅ Found' : '❌ Not Found')
}

check()
