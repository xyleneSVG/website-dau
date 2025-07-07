import type { Block } from 'payload'

export const VisionSection: Block = {
  slug: 'visionSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Vision Section',
  fields: [
    {
      name: 'sectionVisionBanner',
      type: 'upload',
      relationTo: 'mediaVision',
      label: 'Section Banner',
      required: true
    },
    {
      name: 'sectionVisionTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionVisionSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'visionCardLists',
      type: 'array',
      label: 'Vision List',
      admin: {
        description: "Add 3 visions"
      },
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'visionCardTitle',
          type: 'text',
          label: 'Vision Title',
          required: true
        },
        {
          name: 'visionCardDescription',
          type: 'textarea',
          label: 'Vision Description',
          required: true
        },
      ]
    }
  ]
}