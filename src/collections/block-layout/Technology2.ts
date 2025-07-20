import type { Block } from 'payload'

export const TechnologySection2: Block = {
  slug: 'technologySection2',
  imageURL: 'public/assets/landing/hero/thumbnail.png',
  labels: {
    singular: 'Technology 2 Section',
    plural: 'Technology 2 Sections',
  },
  interfaceName: 'Technology 2 Section',
  fields: [
    {
      name: 'sectionTechnology2Title',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'technology2Lists',
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
          relationTo: 'mediaTechnology',
          required: true,
          label: 'Technology Icon',
        },
      ],
    },
  ],
}
