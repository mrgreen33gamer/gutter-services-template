import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/blogs/why-seamless-gutters-beat-sectional';
export const metadata: Metadata = {
  title: "Why Seamless Gutters Beat Sectional | FlowGuard",
  description: "Honest comparison of seamless vs sectional gutters for Central Texas heat, storms, and oak-leaf seasons.",
  alternates: { canonical: url },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}