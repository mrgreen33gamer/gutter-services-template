import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/services/gutter-guards';

export const metadata: Metadata = {
  title: "Gutter Guards Waco TX | Micro-Mesh & Screens | FlowGuard Gutters",
  description: "Gutter guards in Waco and Central Texas. Micro-mesh and screen systems. Free estimates, factory-certified installers.",
  keywords: [
    "gutter guards Waco TX",
    "micro mesh gutter guards",
    "leaf guards Central Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Gutter Guards Waco TX | Micro-Mesh & Screens | FlowGuard Gutters",
    description: "Gutter guards in Waco and Central Texas. Micro-mesh and screen systems. Free estimates, factory-certified installers.",
    url,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Guards Waco TX | Micro-Mesh & Screens | FlowGuard Gutters",
    description: "Gutter guards in Waco and Central Texas. Micro-mesh and screen systems. Free estimates, factory-certified installers.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gutter Guards",
  description: "Gutter guards in Waco and Central Texas. Micro-mesh and screen systems. Free estimates, factory-certified installers.",
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
  serviceType: "Gutter Guards",
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