import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/industries/retail-commercial';

export const metadata: Metadata = {
  title: "Commercial Storefront Gutters & Guards | FlowGuard Gutters",
  description: "Storefront glass, entry systems, and commercial door installs for Central Texas retail and offices.",
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Storefront Gutters & Guards | FlowGuard Gutters",
    description: "Storefront glass, entry systems, and commercial door installs for Central Texas retail and offices.",
    url,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
