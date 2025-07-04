import type { Block } from 'payload'

export const ClientSection: Block = {
  slug: 'clientSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Client Section',
  fields: [
    {
      name: 'sectionClientTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'clientLists',
      type: 'array',
      required: true,
      label: 'Client Lists',
      fields: [
        {
          name: 'clientName',
          type: 'text',
          required: true,
          label: 'Client Name',
        },
        {
          name: 'clientLogo',
          type: 'upload',
          relationTo: 'mediaClients',
          required: true,
          label: 'Client Logo',
        },
      ]
    },
  ]
}