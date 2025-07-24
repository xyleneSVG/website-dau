import type { CollectionConfig } from 'payload'

export const MediaQuadGrid: CollectionConfig = {
  slug: 'mediaQuadGrid',
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
