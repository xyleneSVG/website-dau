// modules
import { APIError, CollectionConfig } from 'payload'

// block
import { HeroSection } from './block-layout/Hero'
import { ZigZagListSection } from './block-layout/ZigZagLists'
import { IllustrationWithCarouselSection } from './block-layout/IllustrationWithCarousel'
import { QuadGridSection } from './block-layout/QuadGrid'
import { GridCarouselSection } from './block-layout/GridCarousel'
import { ContactSection } from './block-layout/Contact'
import { IllustrationWithTextAndCarouselSection } from './block-layout/IllustrationWithTextAndCarousel'
import { ImageHeaderParagraphSection } from './block-layout/ImageHeaderParagraph'
import { ImageHeaderThreeColumnSection } from './block-layout/ImageHeaderThreeColumn'
import { CircleImageGridSection } from './block-layout/CircleImageGrid'
import { TextWithImageClusterSection } from './block-layout/TextWithImageCluster'
import { LoopingCarouselSection } from './block-layout/LoopingCarousel'
import { ListWithIconSection } from './block-layout/ListWithIcon'
import { ListWithIconDescSection } from './block-layout/ListWithIconDesc'
import { TwoListWithIllustrationSection } from './block-layout/TwoListWithIllustration'
import { TextGridSection } from './block-layout/TextGridSection'
import { CardWithImageSection } from './block-layout/CardWithImage'
import { IconTextListWithImageSection } from './block-layout/IconTextListWithImage'
import { ThreeDimensionCarouselSection } from './block-layout/ThreeDimensionCarousel'
import { LayeredTextOnImageSection } from './block-layout/LayeredTextOnImage'
import { TextAlignCenterSection } from './block-layout/TextAlignCenter'
import { GridImageSection } from './block-layout/GridImage'
import { IconListWithSideImagesSection } from './block-layout/IconListWithSideImages'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageName',
    group: 'Advance Configuration',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'INSTRUCTION',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'howToUse',
          type: 'ui',
          admin: {
            components: {
              Field: '@/admin/_components/instruction',
            },
          },
        },
      ],
    },
    {
      name: 'pageName',
      type: 'text',
      label: 'Page Name',
      required: true,
      unique: true,
    },
    {
      name: 'pageDefault',
      type: 'checkbox',
      label: 'Page Default?',
      admin: {
        description:
          'Enable if this page will be located at "https:{domain}/" (make sure there is no other page as the default page)',
        condition: (_, siblingData) => !siblingData?.pageGroup,
      },
      defaultValue: false,
    },
    {
      name: 'pageKey',
      type: 'text',
      label: 'Page Key',
      admin: {
        readOnly: true,
      },
      defaultValue: 'Save first to get the key of this page',
    },
    {
      name: 'pageGroup',
      type: 'relationship',
      relationTo: 'groupPage',
      label: 'Page Group',
      admin: {
        description: 'Example: https://{domain}/{Group}/{This Page}',
        condition: (_, siblingData) => siblingData?.pageDefault === false,
      },
    },
    {
      name: 'pageSection',
      type: 'blocks',
      blocks: [
        HeroSection,
        ZigZagListSection,
        IllustrationWithCarouselSection,
        QuadGridSection,
        GridCarouselSection,
        ContactSection,
        IllustrationWithTextAndCarouselSection,
        ImageHeaderParagraphSection,
        ImageHeaderThreeColumnSection,
        CircleImageGridSection,
        TextWithImageClusterSection,
        LoopingCarouselSection,
        ListWithIconSection,
        ListWithIconDescSection,
        TwoListWithIllustrationSection,
        TextGridSection,
        CardWithImageSection,
        IconTextListWithImageSection,
        ThreeDimensionCarouselSection,
        LayeredTextOnImageSection,
        TextAlignCenterSection,
        GridImageSection,
        IconListWithSideImagesSection
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data, req, originalDoc }) => {
        console.log(data)
        if (data?.pageDefault) {
          const existingDefaultPages = await req.payload.find({
            collection: 'pages',
            where: {
              pageDefault: {
                equals: true,
              },
            },
            depth: 0,
          })
          const alreadyExists = existingDefaultPages.docs.find((doc) => doc.id !== originalDoc?.id)
          if (alreadyExists) {
            throw new APIError(
              `Page "${alreadyExists.pageName}" is already set as default. Only one default page is allowed.`,
              400,
              undefined,
              true,
            )
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
          })
          const alreadyExists = existingPageName.docs.find((doc) => doc.id !== originalDoc?.id)
          if (alreadyExists) {
            throw new APIError(
              `There is already a page with the name "${alreadyExists.pageName}"`,
              400,
              undefined,
              true,
            )
          }
        }
        if (data?.pageName) {
          const slug = data.pageName
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim()
          if (data?.pageGroup) {
            const dataPageGroup = await req.payload.findByID({
              collection: 'groupPage',
              id: data?.pageGroup,
            })
            data.pageKey = dataPageGroup?.groupKey + '/' + slug
          } else {
            data.pageKey = '/' + slug
          }
          if (data?.pageGroup !== null) {
            data.pageDefault = false
          }
        }
        if (Array.isArray(data?.pageSection)) {
          data.pageSection = data.pageSection.map((block) => {
            if (block.blockType === 'heroSection') {
              const greetingArray = block.greetings || []
              const updatedGreetings = greetingArray.map((g: any) => {
                if (g.hasIncludeImage !== true) {
                  g.imageGreeting = null
                }
                return g
              })
              block.greetings = updatedGreetings
            }
            return block
          })
        }
        // console.log('BeforeValidate Hook Triggered');
        // console.log(JSON.stringify(data, null, 2));
        return data
      },
    ],
  },
}
