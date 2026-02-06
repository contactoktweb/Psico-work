import { type SchemaTypeDefinition } from 'sanity'
import { globalSettings } from './globalSettings'
import { hero } from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, hero],
}
