import type { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Contact Section',
  fields: [
    {
      name: 'sectionContactLabel',
      type: 'text',
      label: 'Section Label',
      required: true
    },
    {
      name: 'sectionContactHeadline',
      type: 'text',
      label: 'Section Headline',
      required: true
    },
    {
      name: 'sectionContactDescription',
      type: 'text',
      label: 'Section Description',
      required: true
    },
    {
      name: 'fieldContactLists',
      type: 'array',
      required: true,
      label: 'Field Contact Lists',
      fields: [
        {
          name: 'fieldLabel',
          type: 'relationship',
          relationTo: 'messageFieldConfiguration',
          required: true,
          label: 'Field Name',
        },
      ]
    },
  ]
}