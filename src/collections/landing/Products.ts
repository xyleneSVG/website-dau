import type { CollectionConfig } from 'payload'

export const ProductsSection: CollectionConfig = {
  slug: 'productsSection',
  admin: {
    useAsTitle: 'productTitle',
    group: 'Landing Page'
  },
  fields: [
    {
      name: "productTitle",
      type: "text",
      label: "Product Title",
      required: true,
      admin: {
        description: 'Title for the Product Name',
      },
    },
    {
      name: "productImage",
      type: "upload",
      relationTo: "mediaProducts",
      required: true,
      admin: {
        description: 'Image preview product'
      }
    }
  ],
}
