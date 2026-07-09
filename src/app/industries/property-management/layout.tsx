import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Gutters & Guards for Property Management | FlowGuard Gutters",
  description: "Multi-unit gutter and guard repair and replacement for property managers in Waco and Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Gutters & Guards for Property Management | FlowGuard Gutters",
    description: "Multi-unit gutter and guard repair and replacement for property managers in Waco and Central Texas.",
    url,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
