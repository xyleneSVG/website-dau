import type { Block } from 'payload'

export const TechnologySection: Block = {
  slug: 'technologySection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Technology Section',
  fields: [
    {
      name: 'sectionTechnologyTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionTechnologySubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: "sectionTechnologyIllustration",
      type: "upload",
      relationTo: "mediaTechnology", 
      label: "Technology Illustration",
      required: true,
    },
    {
      name: 'technologyLists',
      type: 'array',
      required: true,
      label: 'Technology Lists',
      fields: [
        {
          name: 'technologyName',
          type: 'text',
          required: true,
          label: 'Technology Name',
        },
        {
          name: 'technologyIcon',
          type: 'upload',
          relationTo: "mediaTechnology",
          required: true,
          label: 'Technology Icon',
        },
      ]
    },
  ]
}