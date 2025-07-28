import type { Block } from 'payload'

export const TextAlignCenterSection: Block = {
  slug: 'textAlignCenterSection',
  imageURL: '/assets/skeleton/textAlignCenter.svg',
  labels: {
    singular: 'Text Align Center Section',
    plural: 'Text Align Center Sections',
  },
  interfaceName: 'Text Align Center Section',
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionDescription',
      label: 'Section Description',
      type: 'textarea',
      required: true,
    },
  ],
}
