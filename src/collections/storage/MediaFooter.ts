import type { CollectionConfig } from 'payload'

export const MediaFooter: CollectionConfig = {
  slug: 'mediaFooter',
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
