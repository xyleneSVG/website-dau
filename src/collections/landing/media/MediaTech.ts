import type { CollectionConfig } from 'payload'

export const MediaTech: CollectionConfig = {
  slug: 'mediaTech',
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
