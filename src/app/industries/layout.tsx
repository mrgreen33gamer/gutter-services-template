import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';

export const metadata: Metadata = {
  title: "Industries We Serve | Homebuilders, Property Management & Storefronts",
  description: "FlowGuard Gutters serves homebuilders, property management companies, and retail & commercial properties across Central Texas with factory-certified gutter installs.",
  alternates: { canonical: `${BASE_URL}/industries` },
  openGraph: {
    title: "Industries We Serve | FlowGuard Gutters",
    description: "Gutter programs for builders, property managers, and retail & commercial properties.",
    url: `${BASE_URL}/industries`,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
