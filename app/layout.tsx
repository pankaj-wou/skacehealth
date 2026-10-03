import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site/shared';
import './globals.css';
export const metadata: Metadata = {
  title: 'SKACE Healthtech | Expert care. Connected by possibility.',
  description:
    'SKACE Healthtech Pvt Ltd — Ace Group of Hospitals. Superspeciality hospitals in Kalyan and Diva, satellite hospitals, micro clinics and specialist care.',
  openGraph: {
    title: 'SKACE Healthtech',
    description: 'Expert care. Connected by possibility.',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="demo-banner">
          Client preview · Company-supplied profiles with illustrative imagery.
          Booking and contact forms are demonstrations.
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SKACE Healthtech — demonstration',
              description: 'Ace Group of Hospitals — client review website',
              url: 'https://skace-healthtech-demo-20260908.surge.sh',
            }),
          }}
        />
      </body>
    </html>
  );
}
