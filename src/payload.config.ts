// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'

// Collections Advance Configuration
import { MessageFieldConfiguration } from './collections/messages/MessageFieldConfiguration'

// Collections Message From Guests
import { MessageFromGuests } from './collections/messages/MessageFromGuests'

// Advance Configuration
import { Pages } from './collections/Pages'
import { Navbar } from './collections/Navbar'
import { Footer } from './collections/Footer'

// Storage Collections
import { GroupPage } from './collections/storage/GroupPage'
import { MediaHero } from './collections/storage/MediaHero'
import { MediaServices } from './collections/storage/MediaServices'
import { MediaLoopingCarousel } from './collections/storage/MediaLoopingCarousel'
import { MediaImageWithCarousel } from './collections/storage/MediaImageWithCarousel'
import { MediaQuadGrid } from './collections/storage/MediaQuadGrid'
import { MediaImageGridCarousel } from './collections/storage/MediaImageGridCarousel copy'
import { MediaContact } from './collections/storage/MediaContact'
import { MediaIllustrationWithTextAndCarousel } from './collections/storage/MediaIllustrationWithTextAndCarousel'
import { MediaImageHeaderParagraph } from './collections/storage/MediaImageHeaderParagraph'
import { MediaImageHeaderThreeColumn } from './collections/storage/MediaImageHeaderThreeColumn'
import { MediaCircleImageGrid } from './collections/storage/MediaCircleImageGrid'
import { MediaTextWithImageCluster } from './collections/storage/MediaTextWithImageCluster'
import { MediaTwoListWithIllustration } from './collections/storage/MediaTwoListWithIllustration'
import { MediaCardWithImage } from './collections/storage/MediaCardWithImage'
import { MediaListWithIconAndDescription } from './collections/storage/MediaListWithIconAndDescription'
import { MediaThreeDimensionCarousel } from './collections/storage/MediaThreeDimensionCarousel'
import { MediaLayeredTextOnImage } from './collections/storage/MediaLayeredTextOnImage'
import { MediaIconTextListWithImage } from './collections/storage/MediaIconTextListWithImage'
import { MediaGridImage } from './collections/storage/MediaGridImage'
import { MediaIconListWithSideImages } from './collections/storage/MediaIconListWithSideImages'
import { MediaNavbar } from './collections/storage/MediaNavbar'
import { MediaFooter } from './collections/storage/MediaFooter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig }) => {
        if (collectionConfig?.slug === 'pages') {
          const key = data?.pageKey?.startsWith('/') ? data.pageKey : `${data?.pageKey || ''}`
          return `${process.env.NEXT_PUBLIC_SERVER_URL}${key}`
        }
        if (collectionConfig?.slug === 'navbar') {
          return `${process.env.NEXT_PUBLIC_SERVER_URL}/`
        }
        return process.env.NEXT_PUBLIC_SERVER_URL || ''
      },
      collections: ['pages', 'navbar'],
    },
  },
  collections: [
    Pages,
    Navbar,
    Footer,
    Users,
    MessageFromGuests,
    MessageFieldConfiguration,
    GroupPage,
    MediaHero,
    MediaServices,
    MediaLoopingCarousel,
    MediaImageWithCarousel,
    MediaQuadGrid,
    MediaImageGridCarousel,
    MediaContact,
    MediaIllustrationWithTextAndCarousel,
    MediaImageHeaderParagraph,
    MediaImageHeaderThreeColumn,
    MediaCircleImageGrid,
    MediaTextWithImageCluster,
    MediaTwoListWithIllustration,
    MediaCardWithImage,
    MediaListWithIconAndDescription,
    MediaThreeDimensionCarousel,
    MediaLayeredTextOnImage,
    MediaIconTextListWithImage,
    MediaGridImage,
    MediaIconListWithSideImages,
    MediaNavbar,
    MediaFooter,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: true,
      collections: {
        mediaHero: true,
        mediaServices: true,
        mediaQuadGrid: true,
        mediaImageGridCarousel: true,
        mediaContact: true,
        mediaIllustrationWithTextAndCarousel: true,
        mediaLoopingCarousel: true,
        mediaImageHeaderParagraph: true,
        mediaImageHeaderThreeColumn: true,
        mediaCircleImageGrid: true,
        mediaTextWithImageCluster: true,
        mediaTwoListWithIllustration: true,
        mediaCardWithImage: true,
        mediaListWithIconAndDescription: true,
        mediaIconTextListWithImage: true,
        mediaThreeDimensionCarousel: true,
        mediaLayeredTextOnImage: true,
        mediaGridImage: true,
        mediaIconListWithSideImages: true,
        mediaImageWithCarousel: true,
        mediaNavbar: true,
        mediaFooter: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
