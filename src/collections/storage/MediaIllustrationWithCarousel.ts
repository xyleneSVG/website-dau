import type { CollectionConfig } from 'payload'

export const MediaIllustrationWithCarousel: CollectionConfig = {
  slug: 'mediaIllustrationWithCarousel',
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
