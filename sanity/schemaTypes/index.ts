import { type SchemaTypeDefinition } from 'sanity'
import { globalSettings } from './globalSettings'
import { hero } from './hero'
import { corporateServices } from './corporateServices'
import { valueProposition } from './valueProposition'
import { psicoWorkPlus } from './psicoWorkPlus'
import { clinicalServices } from './clinicalServices'
import { contact } from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, hero, corporateServices, valueProposition, psicoWorkPlus, clinicalServices, contact],
}
