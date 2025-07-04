import type { CollectionConfig } from 'payload'

export const MediaTechnology: CollectionConfig = {
  slug: 'mediaTechnology',
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
