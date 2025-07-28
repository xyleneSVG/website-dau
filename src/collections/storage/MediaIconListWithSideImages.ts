import type { CollectionConfig } from 'payload'

export const MediaIconListWithSideImages: CollectionConfig = {
  slug: 'mediaIconListWithSideImages',
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
