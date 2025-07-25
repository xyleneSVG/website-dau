import type { CollectionConfig } from 'payload'

export const MediaCircleImageGrid: CollectionConfig = {
  slug: 'mediaCircleImageGrid',
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
