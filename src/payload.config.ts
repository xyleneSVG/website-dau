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
import { MediaTechnology } from './collections/storage/MediaTechnology'
import { MediaProducts } from './collections/storage/MediaProducts'
import { MediaClients } from './collections/storage/MediaClients'
import { MediaContact } from './collections/storage/MediaContact'
import { MediaAward } from './collections/storage/MediaAward'
import { MediaAbout } from './collections/storage/MediaAbout'
import { MediaVision } from './collections/storage/MediaVision'
import { MediaLeader } from './collections/storage/MediaLeader'
import { MediaTwoColumnLayout } from './collections/storage/MediaTwoColumnLayout'
import { MediaTwoListWithIllustration } from './collections/storage/MediaTwoListWithIllustration'
import { MediaCardWithImage } from './collections/storage/MediaCardWithImage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
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
    MediaTechnology,
    MediaProducts,
    MediaClients,
    MediaContact,
    MediaAward,
    MediaAbout,
    MediaVision,
    MediaLeader,
    MediaTwoColumnLayout,
    MediaTwoListWithIllustration,
    MediaCardWithImage
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
        mediaTechnology: true,
        mediaServices: true,
        mediaTech: true,
        mediaProducts: true,
        mediaClients: true,
        mediaContact: true,
        mediaAward: true,
        mediaAbout: true,
        mediaVision: true,
        mediaLeader: true,
        mediaTwoColumnLayout: true,
        mediaTwoListWithIllustration: true,
        mediaCardWithImage: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
