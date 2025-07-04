import type { Block } from 'payload'

export const ServiceSection: Block = {
  slug: 'serviceSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Service Section',
  fields: [
    {
      name: 'sectionServiceTitle',
      type: 'text',
      label: 'Section Title',
      required: true
    },
    {
      name: 'sectionServiceSubtitle',
      type: 'text',
      label: 'Section Subtitle',
      required: true
    },
    {
      name: 'serviceLists',
      type: 'array',
      required: true,
      label: 'Service Lists',
      fields: [
        {
          name: "serviceListTitle",
          type: "text",
          label: "Service Title",
          required: true,
        },
        {
          name: "serviceListDescription",
          type: "text",
          label: "Service Description",
          required: true,
        },
        {
          name: "serviceListIcon",
          type: "upload",
          relationTo: "mediaServices", 
          label: "Service Icon",
          required: true,
        },
        {
          name: "serviceListPage",
          type: "relationship",
          relationTo: "pages", 
          label: "Service Page",
          admin: {
            description: "Select the page that explains about this service (make sure the page already exists)"
          }
        }
      ]
    },
  ]
}