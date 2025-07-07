import type { CollectionConfig } from 'payload'

export const MediaAbout: CollectionConfig = {
  slug: 'mediaAbout',
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
