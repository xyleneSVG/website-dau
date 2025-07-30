'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getDataNavbar() {
  const payload = await getPayload({ config: await configPromise })

  const result = await payload.find({
    collection: 'navbar',
    where: { active: { equals: true } },
    sort: 'createdAt',
    limit: 1,
  })
  console.log(result.docs)
  return result.docs[0]
}
