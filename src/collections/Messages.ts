import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'senderEmail',
    group: 'Message from guests'
  },
  fields: [
    {
      name: 'senderName',
      type: 'text',
      required: true,
      label: 'Sender Name'
    },
    {
      name: 'senderEmail',
      type: 'email',
      required: true,
      label: 'Sender Email'
    },
    {
      name: 'senderPhone',
      type: 'text',
      required: true,
      label: 'Sender Phone'
    },
    {
      name: 'senderCompany',
      type: 'text',
      required: true,
      label: 'Sender Company'
    },
    {
      name: 'senderMessage',
      type: 'text',
      required: true,
      label: 'Sender Message'
    },
    {
      name: 'senderContactedVia',
      type: 'select',
      required: true,
      label: 'Sender can be contacted via',
      options: [
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Phone',
          value: 'phone',
        },
        {
          label: 'Whatsapp',
          value: 'whatsapp',
        },
      ]
    },
  ],
}
