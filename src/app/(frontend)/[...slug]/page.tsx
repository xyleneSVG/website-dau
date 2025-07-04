import DynamicPage from "../_components/dynamicPage"

export default function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0] || ''
  return <DynamicPage slug={slug} />
}
