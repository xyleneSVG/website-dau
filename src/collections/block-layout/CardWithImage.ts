import { colorPickerField } from '@innovixx/payload-color-picker-field'
import type { Block } from 'payload'

export const CardWithImageSection: Block = {
  slug: 'cardWithImageSection',
  imageURL: '/assets/landing/hero/thumbnail.png',
  interfaceName: 'Card With Image Section',
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionCardArray',
      label: 'Card Array',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'cardThumbnail',
          label: 'Thumbnail',
          type: 'upload',
          relationTo: 'mediaCardWithImage',
          required: true,
        },
        {
          name: 'cardTitle',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'cardDescription',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    colorPickerField({
      name: 'backgroundColor',
      label: 'Background Color',
      required: true,
    }),
  ],
}
