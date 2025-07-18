import { customLucideIcon } from '@/admin/_fields/listIcon'
import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { iconPickerField } from '@innovixx/payload-icon-picker-field'
import type { Block } from 'payload'

export const FaqSection: Block = {
  slug: 'faqSection',
  imageURL: '/assets/landing/hero/thumbnail.png',
  interfaceName: 'FAQ Section',
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
    {
      name: 'sectionFaqArray',
      label: 'FAQ Array',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
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
