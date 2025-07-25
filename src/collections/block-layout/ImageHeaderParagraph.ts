import type { Block } from 'payload'

export const ImageHeaderParagraphSection: Block = {
  slug: 'imageHeaderParagraphSection',
  imageURL: "/assets/skeleton/imageHeaderParagraph.svg",
  interfaceName: 'Image Header Paragraph Section',
  fields: [
    {
      name: 'sectionImage',
      type: 'upload',
      relationTo: 'mediaImageHeaderParagraph',
      label: 'Section Image',
      required: true
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionParagraph',
      type: 'richText',
      label: 'Section Paragraph',
      required: true
    }
  ]
}