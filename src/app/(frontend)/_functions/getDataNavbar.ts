'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CACHE_EXPIRED_5_MIN, client } from '@/lib/redis'

export async function getDataNavbar() {
  const payload = await getPayload({ config: await configPromise })

  try {
    const resultRedistCache = await client.get('navbarCache')
    if (resultRedistCache) {
      const parsedCache = JSON.parse(resultRedistCache)
      console.log(parsedCache)
      return parsedCache
    }
  } catch (err) {
    console.error('Redis error (navbar get):', err)
  }

  const resultFind = await payload.find({
    collection: 'navbar',
    where: { active: { equals: true } },
    sort: '-createdAt',
    limit: 1,
  })
  const navbar = resultFind?.docs?.[0]
  if (navbar) {
    try {
      await client.set('navbarCache', JSON.stringify(navbar), { EX: CACHE_EXPIRED_5_MIN })
    } catch (err) {
      console.error('Redis error (navbar set):', err)
    }
  }
  return navbar ?? null
}
