'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CACHE_EXPIRED_5_MIN, client } from '@/lib/redis' 


export async function getDataPages(path: string) {
  const payload = await getPayload({ config: await configPromise })

  const resultRedistCache = await client.get(`pageCache:${path}`)

  if (resultRedistCache) {
    const parsedCache = JSON.parse(resultRedistCache)
    console.log(parsedCache)
    return parsedCache
  }

  const resultFind = await payload.find({
    collection: 'pages',
    where: { pageKey: { equals: path } },
    sort: 'createdAt',
    limit: 1,
  })

  await client.set(`pageCache:${path}`, JSON.stringify(resultFind.docs), {EX: CACHE_EXPIRED_5_MIN});

  return resultFind.docs
}
