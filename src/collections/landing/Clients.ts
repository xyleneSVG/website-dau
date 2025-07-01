import type { CollectionConfig } from 'payload'

export const ClientsSection: CollectionConfig = {
  slug: 'clientsSection',
  admin: {
    useAsTitle: 'clientName',
    group: 'Landing Page',
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Client Name',
      admin: {
        description: 'Name of the client',
      },
    },
    {
      name: 'clientLogo',
      type: 'upload',
      relationTo: 'mediaClients',
      required: true,
      label: 'Client Logo',
      admin: {
        description: "Client's logo",
      },
    },
  ],
}