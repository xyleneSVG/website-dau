// app/(frontend)/_functions/getDataPages.ts
'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getDataPages(path: string) {
  const payload = await getPayload({ config: await configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: { pageKey: { equals: path } },
    sort: 'createdAt',
    limit: 1,
  })
  console.log("slug "+path)
  console.log(result)
  return result.docs
}
