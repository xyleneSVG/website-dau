import type { CollectionConfig } from 'payload'

export const MediaLayeredTextOnImage: CollectionConfig = {
  slug: 'mediaLayeredTextOnImage',
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
