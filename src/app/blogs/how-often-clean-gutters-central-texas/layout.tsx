import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/blogs/how-often-clean-gutters-central-texas';
export const metadata: Metadata = {
  title: "How Often to Clean Gutters in Central Texas | FlowGuard",
  description: "A practical gutter cleaning calendar for Waco, Temple, and Killeen homeowners.",
  alternates: { canonical: url },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}