import type { CollectionConfig } from 'payload'

export const MediaClients: CollectionConfig = {
  slug: 'mediaClients',
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
