import type { Block } from 'payload'

export const ProductSection: Block = {
  slug: 'productSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Product Section',
  fields: [
    {
      name: 'sectionProductTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionProductSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'productLists',
      type: 'array',
      required: true,
      label: 'Product Lists',
      fields: [
        {
          name: "productTitle",
          type: "text",
          label: "Product Title",
          required: true,
        },
        {
          name: "productDisplay",
          type: "upload",
          label: "Product Display",
          relationTo: "mediaProducts",
          required: true,
        }
      ]
    },
  ]
}