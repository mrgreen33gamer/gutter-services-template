// src/app/layout.tsx
// FlowGuard Gutters — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Yanone_Kaffeesatz, Asap, PT_Sans } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Yanone_Kaffeesatz({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Asap({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = PT_Sans({
  weight: ["400","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.flowguardgutters.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0c4a6e" },
    { media: "(prefers-color-scheme: dark)",  color: "#0c4a6e" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FlowGuard Gutters | Seamless Gutters, Guards & Cleaning — Waco, TX",
    template: "%s | FlowGuard Gutters",
  },
  description:
    "FlowGuard Gutters is a Waco, TX gutter company offering seamless gutters, gutter guards, gutter repair, downspouts & drainage, gutter cleaning, and commercial gutters for Central Texas homes and businesses. Factory-certified installers, bonded & insured.",
  keywords: [
    "FlowGuard Gutters",
    "seamless gutters Waco TX",
    "gutter guards Waco Texas",
    "gutter cleaning Central Texas",
    "gutter repair Waco",
    "downspouts drainage Waco TX",
    "commercial gutters Hewitt TX",
    "gutter company Temple TX",
    "gutter installation Killeen",
  ],
  authors: [{ name: "FlowGuard Gutters", url: BASE_URL }],
  creator: "FlowGuard Gutters",
  publisher: "FlowGuard Gutters",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "FlowGuard Gutters | Seamless Gutters, Guards & Cleaning — Waco, TX",
    description:
      "Waco-based gutter company for seamless gutters, guards, repair, downspouts, cleaning, and commercial systems across Central Texas. Factory-certified & insured.",
    url: BASE_URL,
    siteName: "FlowGuard Gutters",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "FlowGuard Gutters — Waco TX Seamless Gutters & Guards",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowGuard Gutters | Waco TX Seamless Gutters & Guards",
    description:
      "Seamless gutters, guards, repair, downspouts & cleaning for Central Texas. Factory-certified installers — bonded & insured.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "FlowGuard Gutters",
  alternateName: "FlowGuard Gutters Waco",
  description:
    "Residential and commercial gutter services in Waco and Central Texas — seamless gutters, gutter guards, gutter repair, downspouts & drainage, gutter cleaning, and commercial gutters. Factory-certified installers, bonded & insured, Lifetime Seam Warranty + 2-Year Labor.",
  url: BASE_URL,
  telephone: "+12547605500",
  email: "hello@flowguardgutters.com",
  foundingDate: "2013",
  founder: {
    "@type": "Person",
    name: "Priya Nair",
    jobTitle: "Owner & Lead Installer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "900 N Valley Mills Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gutter Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seamless Gutters" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Guards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Downspouts & Drainage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Gutters" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/flowguardgutters",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#0284c7" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0c4a6e",
                }}
              >
                <PulseLoader size={50} color="#0284c7" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
