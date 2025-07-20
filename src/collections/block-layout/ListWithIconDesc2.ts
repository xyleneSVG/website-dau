import type { Block } from 'payload'

import { iconPickerField } from '@innovixx/payload-icon-picker-field'
import { customLucideIcon } from '@/admin/_fields/listIcon'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

export const ListWithIconDesc2Section: Block = {
  slug: 'listWithIconDesc2Section',
  labels: {
    singular: 'List With Icon and Description 2 Section',
    plural: 'List With Icon and Description 2 Sections',
  },
  imageURL: '/assets/landing/hero/thumbnail.png',
  interfaceName: 'List With Icon and Description 2 Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'sectionIllustration',
      type: 'upload',
      label: 'Section Illustration',
      relationTo: 'mediaListWithIconAndDescription',
      required: true
    },
    {
      name: 'contentLists',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Content Lists',
      fields: [
        iconPickerField({
          name: 'contentIcon',
          label: 'Content Icon',
          required: true,
          icons: customLucideIcon,
        }),
        {
          name: 'contentName',
          type: 'text',
          required: true,
          label: 'Content Name',
        },
        {
          name: 'contentDesc',
          type: 'textarea',
          required: true,
          label: 'Content Description',
        },
      ],
    },
    colorPickerField({
      name: 'iconColor',
      label: 'Icon Color',
      required: false,
      admin: {
        description: 'Choose a color for this icon',
      },
    }),
    colorPickerField({
      name: 'backgroundIconColor',
      label: 'Background Icon Color',
      required: false,
      admin: {
        description: 'Choose a color for this background icon',
      },
    }),
  ],
}
