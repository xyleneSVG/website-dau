import type { CollectionConfig } from 'payload'

export const MediaGridCarousel: CollectionConfig = {
  slug: 'mediaGridCarousel',
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
