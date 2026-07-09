import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';

export const metadata: Metadata = {
  title: "About FlowGuard Gutters | Waco TX Since 2013",
  description: "FlowGuard Gutters is a Waco-owned gutter and guard company founded in 2013 by Priya Nair. Factory-certified installers, bonded & insured, 6,000+ installs.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About FlowGuard Gutters | Waco TX",
    description: "Locally owned since 2013. Factory-certified gutter and guard installers serving Central Texas.",
    url: `${BASE_URL}/about`,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
