import type { Block } from 'payload'

export const AboutSection: Block = {
  slug: 'aboutSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'About Section',
  fields: [
    {
      name: 'sectionAboutLogo',
      type: 'upload',
      relationTo: 'mediaAbout',
      label: 'Section Logo',
      required: true
    },
    {
      name: 'sectionAboutTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionAboutContent',
      type: 'richText',
      label: 'Section Content',
      required: true
    }
  ]
}