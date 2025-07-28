import { colorPickerField } from '@innovixx/payload-color-picker-field'
import type { Block } from 'payload'

export const TextGridSection: Block = {
  slug: 'textGridSection',
  imageURL: '/assets/skeleton/textGridSection.svg',
  labels: {
    singular: 'Text Grid Section',
    plural: 'Text Grid Sections',
  },
  interfaceName: 'Text Grid Section',
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
    colorPickerField({
      name: 'headerColor',
      label: 'Header Color',
      required: true,
    }),
    {
      name: 'gridArray',
      label: 'Grid Array',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'itemTitle',
          label: 'Item Title',
          type: 'text',
          required: true,
        },
        {
          name: 'itemDescription',
          label: 'Item Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
