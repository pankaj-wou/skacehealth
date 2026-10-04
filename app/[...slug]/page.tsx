import { SitePage } from '@/components/site/pages';
import { routePaths, pageInfo } from '@/src/data/pages';
import { notFound } from 'next/navigation';
export const dynamicParams = false;
export function generateStaticParams() {
  // About and Specialities have their own server-rendered routes.
  return routePaths
    .filter((p) => p && p !== 'about' && p !== 'specialities')
    .map((p) => ({ slug: p.split('/') }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const path = (await params).slug.join('/');
  const info = pageInfo(path);
  return {
    title: info.title + ' | SKACE Healthtech',
    description: info.description,
    openGraph: {
      title: info.title + ' | SKACE Healthtech',
      description: info.description,
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const path = (await params).slug.join('/');
  if (!routePaths.includes(path)) notFound();
  return <SitePage path={path} />;
}
