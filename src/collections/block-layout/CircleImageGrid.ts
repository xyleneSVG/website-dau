import type { Block } from 'payload'

export const CircleImageGridSection: Block = {
  slug: 'circleImageGridSection',
  imageURL: "/assets/skeleton/circleImageGrid.svg",
  labels: {
    singular: 'Circle Image Grid Section',
    plural: 'Circle Image Grid Sections',
  },
  interfaceName: 'Circle Image Grid Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'gridLists',
      type: 'array',
      label: 'Grid Lists',
      fields: [
        {
          name: 'itemImage',
          type: 'upload',
          relationTo: 'mediaCircleImageGrid',
          label: 'Item Image',
          required: true
        },
        {
          name: 'itemName',
          type: 'text',
          label: 'Item Name',
          required: true
        },
        {
          name: 'itemDescription',
          type: 'text',
          label: 'Item Description',
          required: true
        },
      ]
    }
  ]
}