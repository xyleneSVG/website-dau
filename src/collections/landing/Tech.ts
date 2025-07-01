import type { CollectionConfig } from 'payload'

export const TechsSection: CollectionConfig = {
  slug: 'techsSection',
  admin: {
    useAsTitle: 'tech',
    group: 'Landing Page',
  },
  fields: [
    {
      name: 'tech',
      type: 'array',
      label: 'Technology Used',
      labels: {
        singular: 'Tech',
        plural: 'Techs',
      },
      required: true,
      fields: [
        {
          name: 'techName',
          type: 'text',
          required: true,
          label: 'Technology Name',
        },
        {
          name: 'techIcon',
          type: 'upload',
          relationTo: 'mediaTech',
          required: true,
          label: 'Technology Icon',
        },
      ],
      admin: {
        description: 'Tambahkan satu atau lebih teknologi yang digunakan (dianjurkan format icon teknologi adalah SVG)',
      },
    },
  ],
}