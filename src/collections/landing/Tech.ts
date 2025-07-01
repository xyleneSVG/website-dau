import type { CollectionConfig } from 'payload'

export const TechsSection: CollectionConfig = {
  slug: 'techsSection',
  admin: {
    useAsTitle: 'techName',
    group: 'Landing Page',
  },
  fields: [
    {
      name: 'techName',
      type: 'text',
      required: true,
      label: 'Technology Name',
      admin: {
        description: 'Name of the technology used',
      },
    },
    {
      name: 'techIcon',
      type: 'upload',
      relationTo: 'mediaTech',
      required: true,
      label: 'Technology Icon',
      admin: {
        description: 'Technology icon used',
      },
    },
  ],
}