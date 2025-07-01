import type { CollectionConfig } from 'payload'

export const ServicesSection: CollectionConfig = {
  slug: 'servicesSection',
  admin: {
    useAsTitle: 'title',
    group: 'Landing Page'
  },
  fields: [
    {
        name: "title",
        type: "text",
        label: "Service Title",
        required: true,
        admin: {
          description: 'Title for the Data Andalan Utama service',
        },
    },
    {
        name: "description",
        type: "text",
        label: "Service Description",
        required: true,
        admin: {
          description: 'Description for the Data Andalan Utama service',
        },
    },
    {
        name: "url",
        type: "text",
        label: "Service Page Url",
        required: true,
        admin: {
          description: 'Static URL for the Data Andalan Utama service page',
        },
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "mediaServices", 
      label: "Icon Service",
      required: true,
      admin: {
        description: 'Icon for the service',
      },
    }
  ],
}
