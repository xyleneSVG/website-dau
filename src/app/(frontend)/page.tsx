import { notFound, redirect } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

// components
import DynamicPage from './_components/dynamicPage'

export default async function HomeRedirectPage() {
  const payload = await getPayload({ config: await configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: {
      pageDefault: {
        equals: true,
      },
    },
    sort: '-createdAt',
    limit: 1,
  })

  const page = result.docs?.[0]
  if (page?.pageKey) {
    return <DynamicPage slug={page?.pageKey} />;
  }

  return notFound();
}