import { Intro } from '@/components/site/pages';
import SpecialitiesPage from '@/components/site/specialities';
import { pageInfo } from '@/src/data/pages';
// A server route keeps the Specialities copy out of the client bundle shared
// by the catch-all pages.
const info = pageInfo('specialities');
export const metadata = {
  title: info.title + ' | SKACE Healthtech',
  description: info.description,
  openGraph: {
    title: info.title + ' | SKACE Healthtech',
    description: info.description,
  },
};
export default function Page() {
  return (
    <>
      <Intro path="specialities" />
      <SpecialitiesPage />
    </>
  );
}
