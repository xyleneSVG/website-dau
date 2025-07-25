import type { CollectionConfig } from 'payload'

export const MediaIllustrationWithTextAndCarousel: CollectionConfig = {
  slug: 'mediaIllustrationWithTextAndCarousel',
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
