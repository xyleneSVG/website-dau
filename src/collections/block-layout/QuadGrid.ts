import type { Block } from 'payload'

export const QuadGridSection: Block = {
  slug: 'quadGridSection',
  imageURL: "/assets/landing/hero/thumbnail.png",
  labels: {
    singular: 'Quad Grid Section',
    plural: 'Quad Grid Sections',
  },
  interfaceName: 'Quad Grid Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'gridLists',
      type: 'array',
      required: true,
      label: 'Grid Lists',
      fields: [
        {
          name: "itemTitle",
          type: "text",
          label: "Item Title",
          required: true,
        },
        {
          name: "itemImage",
          type: "upload",
          label: "Item Image",
          relationTo: "mediaQuadGrid",
          required: true,
        }
      ]
    },
  ]
}