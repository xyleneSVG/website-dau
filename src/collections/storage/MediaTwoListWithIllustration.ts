import type { CollectionConfig } from 'payload'

export const MediaTwoListWithIllustration: CollectionConfig = {
  slug: 'mediaTwoListWithIllustration',
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
