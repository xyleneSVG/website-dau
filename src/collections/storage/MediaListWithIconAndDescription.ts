import type { CollectionConfig } from 'payload'

export const MediaListWithIconAndDescription: CollectionConfig = {
  slug: 'mediaListWithIconAndDescription',
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
