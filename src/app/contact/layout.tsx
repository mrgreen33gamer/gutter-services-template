// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact FlowGuard Gutters | Schedule Service in Waco & Central Texas',
  description:
    'Contact FlowGuard Gutters to schedule gutter and guard repair, panel upgrades, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 760-5500.',
  keywords: [
    'contact FlowGuard Gutters',
    'gutter and guard service Waco TX',
    'schedule gutter and guard repair Waco',
    'gutter and guard estimate Central Texas',
    'FlowGuard contact',
    '254-760-5500',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact FlowGuard Gutters | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, Lifetime Seam Warranty + 2-Year Labor, factory-certified installers.',
    url,
    siteName: 'FlowGuard Gutters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FlowGuard Gutters | Waco & Central Texas',
    description: 'Schedule gutter and guard service or get a free estimate. Call (254) 760-5500.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
