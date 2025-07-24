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

// Storage Collections
import { GroupPage } from './collections/storage/GroupPage'
import { MediaHero } from './collections/storage/MediaHero'
import { MediaServices } from './collections/storage/MediaServices'
import { MediaTech } from './collections/storage/MediaTech'
import { MediaIllustrationWithCarousel } from './collections/storage/MediaIllustrationWithCarousel'
import { MediaQuadGrid } from './collections/storage/MediaQuadGrid'
import { MediaClients } from './collections/storage/MediaClients'
import { MediaContact } from './collections/storage/MediaContact'
import { MediaAward } from './collections/storage/MediaAward'
import { MediaAbout } from './collections/storage/MediaAbout'
import { MediaVision } from './collections/storage/MediaVision'
import { MediaLeader } from './collections/storage/MediaLeader'
import { MediaTwoColumnLayout } from './collections/storage/MediaTwoColumnLayout'
import { MediaTwoListWithIllustration } from './collections/storage/MediaTwoListWithIllustration'
import { MediaCardWithImage } from './collections/storage/MediaCardWithImage'
import { MediaListWithIconAndDescription } from './collections/storage/MediaListWithIconAndDescription'
import { MediaThreeDimensionCarousel } from './collections/storage/MediaThreeDimensionCarousel'
import { MediaHero2 } from './collections/storage/MediaHero2'

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
          return `http://localhost:3000${key}`
        }

        return 'http://localhost:3000'
      },
      collections: ['pages'],
    },
  },
  collections: [
    Pages,
    Users,
    MessageFromGuests,
    MessageFieldConfiguration,
    GroupPage,
    MediaHero,
    MediaServices,
    MediaTech,
    MediaIllustrationWithCarousel,
    MediaQuadGrid,
    MediaClients,
    MediaContact,
    MediaAward,
    MediaAbout,
    MediaVision,
    MediaLeader,
    MediaTwoColumnLayout,
    MediaTwoListWithIllustration,
    MediaCardWithImage,
    MediaListWithIconAndDescription,
    MediaThreeDimensionCarousel,
    MediaHero2,
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
        mediaIllustrationWithCarousel: true,
        mediaServices: true,
        mediaTech: true,
        mediaQuadGrid: true,
        mediaClients: true,
        mediaContact: true,
        mediaAward: true,
        mediaAbout: true,
        mediaVision: true,
        mediaLeader: true,
        mediaTwoColumnLayout: true,
        mediaTwoListWithIllustration: true,
        mediaCardWithImage: true,
        mediaListWithIconAndDescription: true,
        mediaThreeDimensionCarousel: true,
        mediaHero2: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
