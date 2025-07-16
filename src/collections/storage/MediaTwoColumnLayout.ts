import type { CollectionConfig } from 'payload'

export const MediaTwoColumnLayout: CollectionConfig = {
  slug: 'mediaTwoColumnLayout',
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
