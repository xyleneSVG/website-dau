import type { Block } from 'payload'

export const AwardSection: Block = {
  slug: 'awardSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Award Section',
  fields: [
    {
      name: 'sectionAwardTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionAwardDescription',
      type: 'text',
      label: 'Section Description',
      required: true
    },
    {
      name: 'AwardLists',
      type: 'array',
      required: true,
      label: 'Award Lists',
      fields: [
        {
          name: 'awardImage',
          type: 'upload',
          relationTo: 'mediaAward',
          required: true,
          label: 'Award Image',
        },
        {
          name: 'awardNomination',
          type: 'text',
          required: true,
          label: 'Award Nomination',
        },
        {
          name: 'awardTitle',
          type: 'text',
          required: true,
          label: 'Award Title',
        },
      ]
    },
  ]
}