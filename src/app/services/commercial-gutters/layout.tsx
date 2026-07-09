import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/services/commercial-gutters';

export const metadata: Metadata = {
  title: "Commercial Gutters Waco TX | Box & Multi-Building | FlowGuard Gutters",
  description: "Commercial gutters in Waco and Central Texas. Box gutters, large-capacity systems, schedule-aware crews for PMs and GCs.",
  keywords: [
    "commercial gutters Waco TX",
    "box gutters Central Texas",
    "commercial gutter installation",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Gutters Waco TX | Box & Multi-Building | FlowGuard Gutters",
    description: "Commercial gutters in Waco and Central Texas. Box gutters, large-capacity systems, schedule-aware crews for PMs and GCs.",
    url,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Gutters Waco TX | Box & Multi-Building | FlowGuard Gutters",
    description: "Commercial gutters in Waco and Central Texas. Box gutters, large-capacity systems, schedule-aware crews for PMs and GCs.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Gutters",
  description: "Commercial gutters in Waco and Central Texas. Box gutters, large-capacity systems, schedule-aware crews for PMs and GCs.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "FlowGuard Gutters",
    url: BASE_URL,
    telephone: "+12547605500",
    address: {
      "@type": "PostalAddress",
      streetAddress: "900 N Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Commercial Gutters",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}