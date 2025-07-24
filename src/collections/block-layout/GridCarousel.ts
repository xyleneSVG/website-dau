import type { Block } from 'payload'

export const GridCarouselSection: Block = {
  slug: 'gridCarouselSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Grid Carousel Section',
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
      required: true,
      label: 'Grid Lists',
      fields: [
        {
          name: 'itemName',
          type: 'text',
          required: true,
          label: 'Item Name',
        },
        {
          name: 'itemImage',
          type: 'upload',
          relationTo: 'groupPage',
          required: true,
          label: 'Item Image',
        },
      ]
    },
  ]
}