'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CACHE_EXPIRED_5_MIN, client } from '@/lib/redis'

export async function getDataFooter() {
  const payload = await getPayload({ config: await configPromise })

  try {
    const resultRedistCache = await client.get('footerCache')
    if (resultRedistCache) {
      const parsedCache = JSON.parse(resultRedistCache)
      console.log('[Redis] Footer from cache:', parsedCache)
      return parsedCache
    }
  } catch (err) {
    console.error('Redis error (footer get):', err)
  }
  const resultFind = await payload.find({
    collection: 'footer',
    where: { active: { equals: true } },
    sort: '-createdAt',
    limit: 1,
  })
  const footer = resultFind?.docs?.[0]
  if (footer) {
    try {
      await client.set('footerCache', JSON.stringify(footer), { EX: CACHE_EXPIRED_5_MIN })
    } catch (err) {
      console.error('Redis error (footer set):', err)
    }
  }

  return footer ?? null
}
