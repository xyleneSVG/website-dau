'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getDataFooter() {
  const payload = await getPayload({ config: await configPromise })

  const result = await payload.find({
    collection: 'footer',
    where: { active: { equals: true } },
    sort: 'createdAt',
    limit: 1,
  })
  return result.docs[0]
}
