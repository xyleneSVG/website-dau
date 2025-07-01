import type { CollectionConfig } from 'payload'

export const MediaServices: CollectionConfig = {
  slug: 'mediaServices',
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
