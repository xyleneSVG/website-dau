import type { CollectionConfig } from 'payload';

export const MessageFromGuests: CollectionConfig = {
  slug: 'messageFromGuests',
  admin: {
    useAsTitle: 'messageGuests',
    group: 'Message From Guests',
  },
  fields: [
    {
      name: 'messageGuests',
      type: 'json',
      label: 'Guest Message',
      admin: {
        description: 'This will store guests message based on configured',
      },
    },
  ],
};
