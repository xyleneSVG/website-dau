// app/(frontend)/_functions/getDataPages.ts
'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getDataPages(path: string) {
  const payload = await getPayload({ config: await configPromise })

  const slug = path.split('/').filter(Boolean)[0] || ''
  const result = await payload.find({
    collection: 'pages',
    where: { pageKey: { equals: slug } },
    sort: 'createdAt',
    limit: 1,
  })

  return result.docs
}
