// modules
import { APIError, CollectionConfig } from 'payload'

// block
import { HeroSection } from './block-layout/Hero';
import { ServiceSection } from './block-layout/Service';
import { TechnologySection } from './block-layout/Technology';
import { ProductSection } from './block-layout/Product';
import { ClientSection } from './block-layout/Client';
import { ContactSection } from './block-layout/Contact';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageName',
    group: 'Advance Configuration',
  },
  fields: [
    {
      name: "pageName",
      type: 'text',
      label: "Page Name",
      required: true,
      unique: true,
    },
    {
      name: "pageDefault",
      type: 'checkbox',
      label: "Page Default?",
      admin: {
        description: 'Enable if this page will be located at "https:{domain}/" (make sure there is no other page as the default page)'
      },
      required: true
    },
    {
      name: "pageKey",
      type: 'text',
      label: "Page Key",
      admin: {
        readOnly: true
      },
      defaultValue: "Save first to get the key of this page"
    },
    {
      name: "pageSection",
      type: 'blocks',
      blocks: [HeroSection, ServiceSection, TechnologySection, ProductSection, ClientSection, ContactSection],
      validate: (value: unknown) => {
        if (!Array.isArray(value)) return true;

        const blockCounts: Record<string, number> = {};
        const allowedOnlyOnce = [
          'heroSection',
          'serviceSection',
          'technologySection',
          'productSection',
          'clientSection',
          'contactSection'
        ];

        for (const block of value) {
          const type = block.blockType;
          if (allowedOnlyOnce.includes(type)) {
            blockCounts[type] = (blockCounts[type] || 0) + 1;
          }
        }

        const duplicated = Object.entries(blockCounts).find(([_, count]) => count > 1);
        if (duplicated) {
          const [blockType] = duplicated;
          return `${blockType} only once use in this page.`;
        }

        return true;
      },
    }
  ],
  hooks: {
    beforeValidate: [
      async ({ data, req, originalDoc }) => {
        if (data?.pageDefault) {
          const existingDefaultPages = await req.payload.find({
            collection: 'pages',
            where: {
              pageDefault: {
                equals: true,
              },
            },
            depth: 0,
          });
          const alreadyExists = existingDefaultPages.docs.find(doc => doc.id !== originalDoc?.id);
          if (alreadyExists) {
            throw new APIError(`Page "${alreadyExists.pageName}" is already set as default. Only one default page is allowed.`,400,undefined,true);
          }
        }
        if (data?.pageName) {
          const existingPageName = await req.payload.find({
            collection: 'pages',
            where: {
              pageName: {
                equals: data?.pageName,
              },
            },
            depth: 0,
          });
          const alreadyExists = existingPageName.docs.find(doc => doc.id !== originalDoc?.id);
          if (alreadyExists) {
            throw new APIError(`There is already a page with the name "${alreadyExists.pageName}"`,400,undefined,true);
          }
        }
      },
      ({ data }) => {
        if (data?.pageName) {
          const slug = data.pageName
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
          data.pageKey = slug;
        }
        if (Array.isArray(data?.blocks)) {
          data.blocks = data.blocks.map((block) => {
            if (block.blockType === 'heroSection') {
              const greetingArray = block.greetings || [];
              const updatedGreetings = greetingArray.map((g: any) => {
                if (g.hasIncludeImage !== true) {
                  g.imageGreeting = null;
                }
                return g;
              });
              block.greetings = updatedGreetings;
            }
            return block;
          });
        }
      return data;
      }
    ]
  }
}
