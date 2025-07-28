import type { CollectionConfig } from 'payload'

export const MediaGridImage: CollectionConfig = {
  slug: 'mediaGridImage',
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
