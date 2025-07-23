import type { Block } from 'payload'

export const Hero2Section: Block = {
  slug: 'hero2Section',
  imageURL: '/assets/landing/hero/thumbnail.png',
  interfaceName: 'Hero2 Section',
  labels: {
    singular: 'Hero 2 Section',
    plural: 'Hero 2 Sections',
  },
  fields: [
    {
      name: 'sectionTextBold',
      type: 'text',
      label: 'Section Text Bold',
      required: true,
    },
    {
      name: 'sectionTextLight',
      type: 'text',
      label: 'Section Text Light',
      required: true
    },
    {
      name: 'sectionBackground',
      type: 'upload',
      relationTo: 'mediaHero2',
      label: 'Section Background',
      required: true,
    }
  ],
}
