import type { CollectionConfig } from 'payload'

export const MediaLoopingCarousel: CollectionConfig = {
  slug: 'mediaLoopingCarousel',
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
