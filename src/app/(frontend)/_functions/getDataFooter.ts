'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CACHE_EXPIRED_5_MIN, client } from '@/lib/redis'

export async function getDataFooter() {
  const payload = await getPayload({ config: await configPromise })

  const resultRedistCache = await client.get('footerCache')

  if (resultRedistCache) {
    const parsedCache = JSON.parse(resultRedistCache)
    console.log(parsedCache)
    return parsedCache
  }

  const resultFind = await payload.find({
    collection: 'footer',
    where: { active: { equals: true } },
    sort: 'createdAt',
    limit: 1,
  })
  await client.set('footerCache', JSON.stringify(resultFind.docs[0]), {EX: CACHE_EXPIRED_5_MIN})

  return resultFind.docs[0]
}
