import type { CollectionConfig } from 'payload'

export const MediaImageGridCarousel: CollectionConfig = {
  slug: 'mediaImageGridCarousel',
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
