import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Gutter & Guard Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | FlowGuard',
  description:
    'FlowGuard Gutters serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, 2-Year Workmanship Warranty.',
  keywords: [
    'gutter and guard service areas Central Texas',
    'electrician Waco TX',
    'electrician Hewitt TX',
    'electrician Killeen TX',
    'electrician Temple TX',
    'FlowGuard Gutters service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Gutter & Guard Service Areas | FlowGuard Gutters — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate gutter and guard repair, panel upgrades, and installation. Same-day service available.',
    url,
    siteName: 'FlowGuard Gutters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter & Guard Service Areas | FlowGuard Gutters — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — factory-certified gutter and guard service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
