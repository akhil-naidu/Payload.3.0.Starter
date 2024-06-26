import { slugField, pathField } from '@/payload/fields'
import type { CollectionConfig } from 'payload/types'
import { blocksField } from '@/payload/fields/blocks'
import { COLLECTION_SLUG_PAGE } from './config'

export const pages: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'path', 'updatedAt', 'createdAt']
  },
  versions: {
    drafts: {
      autosave: false
    },
    maxPerDoc: 10
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    blocksField(),
    slugField(),
    pathField()
  ]
}
