import { services } from './services';
import { doctors } from './doctors';
import { hospitals } from './hospitals';
export const pages: Record<string, { title: string; description: string }> = {
  about: {
    title: 'Healthcare built around people',
    description:
      'Discover our story, our purpose and the people shaping the next chapter of SKACE Healthtech.',
  },
  network: {
    title: 'Closer to you. Connected for you.',
    description:
      'An integrated hub & spoke network bringing specialist expertise closer to communities.',
  },
  specialities: {
    title: 'Expertise for every stage of life',
    description:
      'Explore the clinical specialities and services of Ace Group of Hospitals.',
  },
  doctors: {
    title: 'Meet our specialists',
    description:
      'Explore the 30 doctors listed on the Ace Group of Hospitals panel.',
  },
  technology: {
    title: 'Healthcare expertise. Technology intelligence.',
    description:
      'Building connections across pre-care, care, post-care and preventive healthcare.',
  },
  investors: {
    title: 'Building a scalable healthcare ecosystem',
    description:
      'Established clinical experience. An integrated network. A connected vision for growth.',
  },
  contact: {
    title: 'Let’s connect',
    description:
      'For care enquiries, partnerships and conversations about the future of healthcare.',
  },
  'book-appointment': {
    title: 'Your next step towards better health',
    description:
      'Explore our appointment request experience. This first version is a demonstration.',
  },
  leadership: {
    title: 'People shaping our purpose',
    description:
      'Our leadership and technology teams bring the SKACE vision to life.',
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description: 'First-version website privacy information.',
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    description: 'Using this demonstration website.',
  },
  'medical-disclaimer': {
    title: 'Medical Disclaimer',
    description: 'Understanding the purpose of our website content.',
  },
};
Object.assign(pages, {
  'patient-services': {
    title: 'Care made easier to navigate',
    description:
      'Preparation, insurance assistance and answers for every step of your visit.',
  },
  careers: {
    title: 'Work with purpose',
    description:
      'Explore illustrative opportunities across healthcare and technology.',
  },
  news: {
    title: 'Stories from a connected vision',
    description: 'Ideas and illustrative updates from the SKACE ecosystem.',
  },
});
Object.assign(pages, {
  appointments: pages['book-appointment'],
  privacy: pages['privacy-policy'],
  terms: pages['terms-and-conditions'],
});
export const routePaths = [
  '',
  ...Object.keys(pages),
  ...news.map((n) => `news/${n.slug}`),
  ...services.map((s) => `specialities/${s.slug}`),
  ...doctors.map((d) => `doctors/${d.slug}`),
  ...hospitals.map((h) => `network/${h.slug}`),
];
export function pageInfo(path: string) {
  return (
    pages[path] ?? {
      title:
        news.find((n) => path === 'news/' + n.slug)?.title ??
        services.find((s) => path === `specialities/${s.slug}`)?.name ??
        doctors.find((d) => path === `doctors/${d.slug}`)?.name ??
        hospitals.find((h) => path === `network/${h.slug}`)?.name ??
        'SKACE Healthtech',
      description: 'Explore care and connections at SKACE Healthtech.',
    }
  );
}
import { news } from './editorial';
