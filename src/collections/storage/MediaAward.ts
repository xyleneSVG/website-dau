import type { CollectionConfig } from 'payload'

export const MediaAward: CollectionConfig = {
  slug: 'mediaAward',
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
