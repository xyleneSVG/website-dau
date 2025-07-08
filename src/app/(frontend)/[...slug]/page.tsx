import DynamicPage from "../_components/dynamicPage";

type Params = { slug?: string[] };

interface PageProps {
  params: Promise<Params>;
}

export default async function Page({ params }: PageProps) {
  const { slug: slugArray } = await params; 
  const slug = slugArray ? `/${slugArray.join('/')}` : '/';
  console.log("1: " + slug);
  return <DynamicPage slug={slug} />;
}
