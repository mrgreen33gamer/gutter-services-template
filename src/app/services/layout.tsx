import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';

export const metadata: Metadata = {
  title: "Gutter Services Waco TX | Seamless, Guards, Repair & Cleaning",
  description: "Seamless gutters, guards, repair, downspouts, cleaning, and commercial systems in Waco and Central Texas. Factory-certified installers, free estimates.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Gutter & Guard Services | FlowGuard Gutters",
    description: "Full gutter and guard services for Central Texas homes and businesses.",
    url: `${BASE_URL}/services`,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
