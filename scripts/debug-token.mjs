
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ Token missing in env")
    process.exit(1)
}

const token = process.env.SANITY_API_TOKEN
console.log(`Token length: ${token.length}`)
console.log(`Token starts with: ${token.substring(0, 4)}...`)

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-02-06',
    token: token,
    useCdn: false,
})

async function debug() {
    try {
        console.log(`Attemping to connect to project: ${client.config().projectId}, dataset: ${client.config().dataset}`)
        const result = await client.fetch('*[_type == "globalSettings"]')
        console.log("✅ Connection Success! Global Settings found:", result.length)
    } catch (err) {
        console.error("❌ Connection Failed:", err.message)
        if (err.statusCode === 401) {
            console.error("⚠️  401 Unauthorized: Your token is likely invalid or has insufficient permissions.")
        }
    }
}

debug()
