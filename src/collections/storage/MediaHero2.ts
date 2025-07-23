import type { CollectionConfig } from 'payload'

export const MediaHero2: CollectionConfig = {
  slug: 'mediaHero2',
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
