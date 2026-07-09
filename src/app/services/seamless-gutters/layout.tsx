import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/services/seamless-gutters';

export const metadata: Metadata = {
  title: "Seamless Gutters Waco TX | Custom-Formed Aluminum | FlowGuard Gutters",
  description: "Seamless gutters in Waco and Central Texas. Custom-formed on site. Free estimates, factory-certified installers, Lifetime Seam Warranty + 2-Year Labor.",
  keywords: [
    "seamless gutters Waco TX",
    "aluminum gutters Waco",
    "gutter installation Central Texas",
    "seamless gutter company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Seamless Gutters Waco TX | Custom-Formed Aluminum | FlowGuard Gutters",
    description: "Seamless gutters in Waco and Central Texas. Custom-formed on site. Free estimates, factory-certified installers, Lifetime Seam Warranty + 2-Year Labor.",
    url,
    siteName: "FlowGuard Gutters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamless Gutters Waco TX | Custom-Formed Aluminum | FlowGuard Gutters",
    description: "Seamless gutters in Waco and Central Texas. Custom-formed on site. Free estimates, factory-certified installers, Lifetime Seam Warranty + 2-Year Labor.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seamless Gutters",
  description: "Seamless gutters in Waco and Central Texas. Custom-formed on site. Free estimates, factory-certified installers, Lifetime Seam Warranty + 2-Year Labor.",
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
  serviceType: "Seamless Gutters",
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