// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { ApiUsers } from './collections/ApiUsers'
import { Photographs } from './collections/NewTopographics/Photographs'
import { Photographers } from './collections/NewTopographics/Photographers'
import { Exhibitions } from './collections/NewTopographics/Exhibitions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  defaultDepth: 1,
  collections: [Users, ApiUsers, Photographs, Photographers, Exhibitions],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    s3Storage({
      disableLocalStorage: true,
      collections: {
        photographs: {
          disablePayloadAccessControl: true,
          generateFileURL: (file) => {
            return `${process.env.R2_URL!}/${file.filename}`
          }
        }
      },
      bucket: process.env.R2_NEWTOPO_BUCKET!,
      config: {
        endpoint: process.env.R2_ENDPOINT!,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID!,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
        },
        region: process.env.R2_REGION!,
      }
    })
  ],
  sharp,
})
