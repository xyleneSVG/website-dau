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
import { Media } from './collections/Media'

import { MediaServices } from './collections/landing/media/MediaServices'
import { MediaTech } from './collections/landing/media/MediaTech'
import { MediaProducts } from './collections/landing/media/MediaProducts'

import { ServicesSection } from './collections/landing/Services'
import { TechsSection } from './collections/landing/Tech'
import { ProductsSection } from './collections/landing/Products'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, MediaServices, MediaTech, MediaProducts, ServicesSection, TechsSection, ProductsSection],
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
        media: true,
        mediaServices: true,
        mediaTech: true,
        mediaProducts: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN
    })
  ],
})
