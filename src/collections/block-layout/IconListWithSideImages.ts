import type { Block } from 'payload'

export const IconListWithSideImagesSection: Block = {
  slug: 'iconListWithSideImagesSection',
  imageURL: '/assets/skeleton/iconListWithSideImages.svg',
  labels: {
    singular: 'Icon List With Side Images Section',
    plural: 'Icon List With Side Images Sections',
  },
  interfaceName: 'Icon List With Side Images Section',
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionIllustrationArray',
      dbName: 'illustrationArray',
      label: 'Section Illustration',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'sectionIllustration',
          type: 'upload',
          label: 'Section Illustration',
          relationTo: 'mediaIconListWithSideImages',
          required: true
        },
      ],
    },
    {
      name: 'sectionContent',
      label: 'Section Content',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'itemImage',
          label: 'Item Image',
          type: 'upload',
          relationTo: 'mediaIconListWithSideImages',
          required: true
        },
        {
          name: 'itemTitle',
          label: 'Item Title',
          type: 'text',
          required: true
        },
        {
          name: 'itemDescription',
          label: 'Item Description',
          type: 'textarea',
          required: true
        }
      ]
    }
  ],
}
