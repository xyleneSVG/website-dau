import type { Block } from 'payload'

import { iconPickerField } from '@innovixx/payload-icon-picker-field'
import { customLucideIcon } from '@/admin/_fields/listIcon'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

export const ListWithIconDescSection: Block = {
  slug: 'listWithIconDescSection',
  labels: {
    singular: 'List With Icon and Description Section',
    plural: 'List With Icon and Description Sections',
  },
  imageURL: '/assets/skeleton/listWithIconDescription.svg',
  interfaceName: 'List With Icon and Description Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    colorPickerField({
      name: 'backgroundPageColor',
      label: 'Background Page Color',
      required: false,
      admin: {
        description: 'Choose a color for this background page',
      },
    }),
    {
      name: 'contentLists',
      type: 'array',
      minRows: 1,
      required: true,
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
