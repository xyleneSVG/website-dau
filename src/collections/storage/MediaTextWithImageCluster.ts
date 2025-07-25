import type { CollectionConfig } from 'payload'

export const MediaTextWithImageCluster: CollectionConfig = {
  slug: 'mediaTextWithImageCluster',
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
