import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/services/gutter-repair';

export const metadata: Metadata = {
  title: "Gutter Repair Waco TX | Rehang & Reseal | FlowGuard Gutters",
  description: "Gutter repair in Waco and Central Texas. Rehang, reseal, and section repairs with honest repair-vs-replace advice.",
  keywords: [
    "gutter repair Waco TX",
    "fixing gutters Waco",
    "gutter rehang Central Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Gutter Repair Waco TX | Rehang & Reseal | FlowGuard Gutters",
    description: "Gutter repair in Waco and Central Texas. Rehang, reseal, and section repairs with honest repair-vs-replace advice.",
    url,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Repair Waco TX | Rehang & Reseal | FlowGuard Gutters",
    description: "Gutter repair in Waco and Central Texas. Rehang, reseal, and section repairs with honest repair-vs-replace advice.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gutter Repair",
  description: "Gutter repair in Waco and Central Texas. Rehang, reseal, and section repairs with honest repair-vs-replace advice.",
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
  serviceType: "Gutter Repair",
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