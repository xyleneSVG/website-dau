import type { Block } from 'payload'

export const ImageGridCarouselSection: Block = {
  slug: 'imageGridCarouselSection',
  imageURL: "/assets/skeleton/imageGridCarousel.svg",
  interfaceName: 'Image Grid Carousel Section',
  labels: {
    singular: 'Image Grid Carousel Section',
    plural: 'Image Grid Carousel Sections',
  },
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
          name: 'itemImage',
          type: 'upload',
          relationTo: 'mediaImageGridCarousel',
          required: true,
          label: 'Item Image',
        },
      ]
    },
  ]
}