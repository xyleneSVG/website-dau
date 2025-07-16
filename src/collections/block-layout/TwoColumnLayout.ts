import type { Block } from 'payload'

import { colorPickerField } from '@innovixx/payload-color-picker-field'
import { iconPickerField } from '@innovixx/payload-icon-picker-field'

export const TwoColumnLayoutSection: Block = {
  slug: 'twoColumnLayoutSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Two Column Layout Section',
  fields: [
    {
      name: 'imageLists',
      type: 'array',
      required: true,
      label: 'Two COlumn Layout Image Lists',
      maxRows: 3,
      minRows: 1,
      fields: [
        {
            name: 'TwoColumnLayoutImage',
            type: 'upload',
            relationTo: 'mediaTwoColumnLayout',
            required: true
        },
      ]
    },
    {
      name: 'TwoColumnLayoutTitle',
      type: 'text',
      label: 'Section Title',
      required: false
    },
    {
      name: 'TwoColumnLayoutSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'TwoColumnLayoutDescription',
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
      icons: {
        phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',
        chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>',
        circleChevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>'
      },
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
      name: 'contentAlign',
      type: 'select',
      options: [
        {label: 'Right', value: 'right'},
        {label: 'Left', value: 'left'},
      ],
      admin: {
        description: 'If select "Right" then the image is on the left and the title, subtitle, description are on the right.'
      },
      label: 'Section Content Align',
      required: true
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