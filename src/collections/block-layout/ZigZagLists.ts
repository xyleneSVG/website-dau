import type { Block } from 'payload'

export const ZigZagListSection: Block = {
  slug: 'zigZagListSection',
  imageURL: '/assets/skeleton/zigZagLists.svg',
  labels: {
    singular: 'Zig Zag Lists Section',
    plural: 'Zig Zag Lists Sections',
  },
  interfaceName: 'Zig Zag Lists Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true,
    },
    {
      name: 'contentLists',
      type: 'array',
      required: true,
      label: 'Content Lists',
      fields: [
        {
          name: 'contentListTitle',
          type: 'text',
          label: 'Content Title',
          required: true,
        },
        {
          name: 'contentListDescription',
          type: 'textarea',
          label: 'Content Description',
          required: true,
        },
        {
          name: 'contentListIcon',
          type: 'upload',
          relationTo: 'mediaServices',
          label: 'Content Icon',
          required: true,
        },
        {
          name: 'contentReferencePage',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Content Reference Page',
          admin: {
            description:
              'Select the page that explains about this service (make sure the page already exists)',
          },
        },
      ],
    },
  ],
}
