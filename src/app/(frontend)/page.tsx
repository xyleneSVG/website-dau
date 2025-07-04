import { notFound, redirect } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function HomeRedirectPage() {
  const payload = await getPayload({ config: await configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: { pageDefault: { equals: true } },
    sort: 'createdAt',
    limit: 1,
  })

  const defaultPage = result.docs?.[0]
  if (defaultPage?.pageKey) {
    return redirect(`/${defaultPage.pageKey}`)
  }

  return notFound();
}
