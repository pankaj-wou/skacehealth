import { Intro } from '@/components/site/pages';
import AboutPage from '@/components/site/about';
import { pageInfo } from '@/src/data/pages';
// A server route keeps the About copy out of the client bundle shared by
// the catch-all pages.
const info = pageInfo('about');
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
      <Intro path="about" />
      <AboutPage />
    </>
  );
}
