import { colorPickerField } from '@innovixx/payload-color-picker-field'
import type { Block } from 'payload'

export const IllustrationWithCarouselSection: Block = {
  slug: 'illustrationWithCarouselSection',
  imageURL: '/assets/skeleton/illustrationWithCarousel.svg',
  labels: {
    singular: 'Illustration With Carousel Section',
    plural: 'Illustration With Carousel Sections',
  },
  interfaceName: 'Illustration With Carousel Section',
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
      name: 'sectionIllustration',
      type: 'upload',
      relationTo: 'mediaIllustrationWithCarousel',
      label: 'Section Illustration',
      required: true,
    },
    {
      name: 'carouselLists',
      type: 'array',
      required: true,
      label: 'Carousel Lists',
      fields: [
        {
          name: 'itemName',
          type: 'text',
          required: true,
          label: 'Item Name',
        },
        {
          name: 'itemIcon',
          type: 'upload',
          relationTo: 'mediaIllustrationWithCarousel',
          required: true,
          label: 'Item Icon',
        },
      ],
    },
    colorPickerField({
      name: 'backgroundColor',
      label: 'Background Color',
      defaultValue: '#ffffff',
    }),
  ],
}
