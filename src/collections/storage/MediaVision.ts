import type { CollectionConfig } from 'payload'

export const MediaVision: CollectionConfig = {
  slug: 'mediaVision',
  admin: {
    group: 'Storage'
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
