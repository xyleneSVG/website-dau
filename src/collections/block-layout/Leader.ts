import type { Block } from 'payload'

export const LeaderSection: Block = {
  slug: 'leaderSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Leader Section',
  fields: [
    {
      name: 'sectionLeaderTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'leaderProfileLists',
      type: 'array',
      label: 'Leader Profile Lists',
      fields: [
        {
          name: 'leaderPhotoProfile',
          type: 'upload',
          relationTo: 'mediaLeader',
          label: 'Photo Profile',
          required: true
        },
        {
          name: 'leaderName',
          type: 'text',
          label: 'Name',
          required: true
        },
        {
          name: 'leaderPosition',
          type: 'text',
          label: 'Leader Position',
          required: true
        },
      ]
    }
  ]
}