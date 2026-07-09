import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.flowguardgutters.com';
const url = BASE_URL + '/blogs/gutter-guards-worth-it-texas-storms';
export const metadata: Metadata = {
  title: "Are Gutter Guards Worth It for Texas Storms? | FlowGuard",
  description: "When micro-mesh and screen gutter guards pay for themselves in Central Texas weather.",
  alternates: { canonical: url },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}