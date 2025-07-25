import type { Block } from 'payload'

import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { iconPickerField } from '@innovixx/payload-icon-picker-field'
import { customLucideIcon } from '@/admin/_fields/listIcon'

export const TwoColumnLayoutSection: Block = {
  slug: 'twoColumnLayoutSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Two Column Layout Section',
  labels: {
    singular: 'Two Column Layout Section',
    plural: 'Two Column Layout Sections',
  },
  fields: [
    {
      name: 'imageLists',
      type: 'array',
      required: true,
      label: 'Two Column Layout Image Lists',
      maxRows: 3,
      minRows: 1,
      fields: [
        {
            name: 'twoColumnLayoutImage',
            type: 'upload',
            relationTo: 'mediaTwoColumnLayout',
            required: true
        },
      ]
    },
    {
      name: 'twoColumnLayoutTitle',
      type: 'text',
      label: 'Section Title',
      required: false
    },
    {
      name: 'twoColumnLayoutSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'twoColumnLayoutDescription',
      type: 'richText',
      label: 'Section Description',
      required: true
    },
    {
      name: 'hasButton',
      type: 'checkbox',
      label: 'Use button?',
      defaultValue: false,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      required: true,
      defaultValue: '',
      admin: {
        condition: (_, siblingData) => siblingData?.hasButton === true,
      },
    },
    iconPickerField({
      name: 'buttonIcon',
      label: 'Button Icon',
      icons: customLucideIcon,
      admin: {
        condition: (_, siblingData) => siblingData?.hasButton === true,
      },
    }),
    {
      name: 'buttonLink',
      type: 'relationship',
      label: 'Button Reference Page',
      required: true,
      relationTo: 'pages',
      admin: {
        condition: (_, siblingData) => siblingData?.hasButton === true,
      },
    },
    colorPickerField({
      name: 'buttonColor',
      label: 'Button Color',
      required: true,
      admin: {
        description: 'Choose a color for this button',
        condition: (_, siblingData) => siblingData?.hasButton === true,
      },
    }),
    {
      name: 'reverseContent',
      type: 'checkbox',
      admin: {
        description: 'Reverse alignment of the content',
      },
      label: 'Reverse Content',
      defaultValue: false,
    },
    {
      name: 'hasBackground',
      type: 'checkbox',
      label: 'Enable background?',
      defaultValue: false,
    },
    colorPickerField({
      name: 'backgroundColor',
      label: 'Background Color',
      required: true,
      admin: {
        description: 'Choose a color for this background page',
        condition: (_, siblingData) => siblingData?.hasBackground === true,
      },
    }),
  ]
}