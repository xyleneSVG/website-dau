import type { Block } from 'payload'

export const IllustrationWithTextAndCarouselSection: Block = {
  slug: 'illustrationWithTextAndCarouselSection',
  dbName:'illustrationTextCarousel',
  imageURL: '/assets/skeleton/illustrationWithTextAndCarousel.svg',
  labels: {
    singular: 'Illustration With Text and Carousel Section',
    plural: 'Illustration With Text and Carousel Sections',
  },
  interfaceName: 'Illustration With Text and Carousel Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'text',
      label: 'Section Description',
      required: true,
    },
    {
      name: 'carouselLists',
      type: 'array',
      required: true,
      label: 'Carousel Lists',
      fields: [
        {
          name: 'carouselImage',
          type: 'upload',
          relationTo: 'mediaIllustrationWithTextAndCarousel',
          required: true,
          label: 'Carousel Image',
        },
        {
          name: 'carouselTitle',
          type: 'text',
          required: true,
          label: 'Carousel Title',
        },
        {
          name: 'carouselDescription',
          type: 'text',
          required: true,
          label: 'Carousel Description',
        },
      ],
    },
  ],
}
