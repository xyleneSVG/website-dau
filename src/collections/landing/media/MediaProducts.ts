import type { CollectionConfig } from 'payload'

export const MediaProducts: CollectionConfig = {
  slug: 'mediaProducts',
  admin: {
    group: 'Media Collection'
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
