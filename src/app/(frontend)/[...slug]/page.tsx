import DynamicPage from "../_components/dynamicPage";

interface PageProps {
  params: { slug?: string[] };
}

export default function Page({ params }: PageProps) {
  const slug = params.slug?.join('/') || '';
  return <DynamicPage slug={slug} />;
}