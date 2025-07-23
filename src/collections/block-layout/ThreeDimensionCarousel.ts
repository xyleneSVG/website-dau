import type { Block } from 'payload'

export const ThreeDimensionCarouselSection: Block = {
  slug: 'threeDimensionCarouselSection',
  imageURL: '/assets/landing/hero/thumbnail.png',
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
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'mediaThreeDimensionCarousel',
          label: 'Icon',
          required: true,
        },
      ],
      required: true,
      minRows: 3,
      maxRows: 3,
    },
  ],
}
