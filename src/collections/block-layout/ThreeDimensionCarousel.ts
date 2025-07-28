import type { Block } from 'payload'

export const ThreeDimensionCarouselSection: Block = {
  slug: 'threeDimensionCarouselSection',
  imageURL: '/assets/skeleton/threeDimensionCarousel.svg',
  labels: {
    singular: '3D Carousel Section',
    plural: '3D Carousel Sections',
  },
  interfaceName: '3D Carousel Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'richText',
      label: 'Section Title',
      required: true
    },
    {
      name: 'carouselItems',
      type: 'array',
      admin: {
        description: 'Carousel items must be 3',
      },
      label: 'Carousel Items',
      fields: [
        {
          name: 'itemTitle',
          type: 'text',
          label: 'Item Title',
          required: true,
        },
        {
          name: 'itemDescription',
          type: 'textarea',
          label: 'Item Description',
          required: true,
        },
        {
          name: 'itemIcon',
          type: 'upload',
          relationTo: 'mediaThreeDimensionCarousel',
          label: 'Item Icon',
          required: true,
        },
      ],
      required: true,
      minRows: 3,
      maxRows: 3,
    },
  ],
}
