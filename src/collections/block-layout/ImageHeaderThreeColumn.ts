import type { Block } from 'payload'

export const ImageHeaderThreeColumnSection: Block = {
  slug: 'imageHeaderThreeColumnSection',
  imageURL: "/assets/skeleton/imageHeaderThreeColumn.svg",
  labels: {
    singular: 'Image Header With Three Column Section',
    plural: 'Image Header With Three Column Sections',
  },
  interfaceName: 'Image Header Three Column Section',
  fields: [
    {
      name: 'sectionHeaderImage',
      type: 'upload',
      relationTo: 'mediaImageHeaderThreeColumn',
      label: 'Section Header Image',
      required: true
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'gridLists',
      type: 'array',
      label: 'Grid List',
      admin: {
        description: "Add 3 Grid"
      },
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'itemTitle',
          type: 'text',
          label: 'Item Title',
          required: true
        },
        {
          name: 'itemDescription',
          type: 'textarea',
          label: 'Item Description',
          required: true
        },
      ]
    }
  ]
}