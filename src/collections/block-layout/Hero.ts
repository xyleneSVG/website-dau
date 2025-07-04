import type { Block } from 'payload'

export const HeroSection: Block = {
  slug: 'heroSection',
  imageURL: "public/assets/landing/hero/thumbnail.png",
  interfaceName: 'Hero Section',
  fields: [
    {
      name: 'greetingIllustrationLeft',
      label: "Greeting Illustration Left",
      type: 'upload',
      relationTo: 'mediaHero',
      required: true,
    },
    {
      name: 'greetingIllustrationRight',
      label: "Greeting Illustration Right",
      type: 'upload',
      relationTo: 'mediaHero',
      required: true,
    },
    {
      name: 'greetings',
      type: 'array',
      required: true,
      label: 'Greeting Lists',
      fields: [
        {
          name: 'hasIncludeImage',
          type: 'checkbox',
          label: 'Greetings on hero with image?',
          defaultValue: false,
        },
        {
          name: 'imageGreeting',
          type: 'upload',
          relationTo: 'mediaHero',
          validate: (val: any) => {
            if (!val) {
              return 'Image is required if Greetings on hero with image';
            }
            return true;
          },
          admin: {
            condition: (_, siblingData) => siblingData?.hasIncludeImage === true,
          },
        },
        {
          name: 'textGreeting',
          type: 'text',
          label: 'Text Greeting',
          required: true
        },
      ]
    },
  ]
}