import type { CollectionConfig } from 'payload'

export const MediaImageHeaderThreeColumn: CollectionConfig = {
  slug: 'mediaImageHeaderThreeColumn',
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
