"use client";
import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faClipboardCheck, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle,
  faClock, faTriangleExclamation, faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const pains = [
    { icon: faClock, problem: "Turnover bottlenecks", consequence: "Clogged or failed gutters delay make-ready and create water complaints." },
    { icon: faTriangleExclamation, problem: "Tenant complaint stacks", consequence: "Overflow, fascia rot, and foundation splash generate recurring work orders." },
    { icon: faDollarSign, problem: "Budget surprises", consequence: "Hourly vendors make CapEx planning difficult across portfolios." },
    { icon: faUsers, problem: "Inconsistent vendors", consequence: "Different crews every time means uneven quality and missing warranty docs." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Schedule-Aware Crews", description: "We plan installs around unit turnover calendars, tenant notice windows, and business hours." },
    { icon: faShieldHalved, title: "Factory-Certified · Bonded & Insured", description: "Documentation ready for owners and property managers." },
    { icon: faUsers, title: "Single Point of Contact", description: "One FlowGuard lead coordinates multi-unit or multi-building work end to end." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share unit counts, access constraints, and timeline.", icon: faHeadset },
    { number: 2, title: "Site Walk", description: "We measure runs and note dumpster, parking, and access needs.", icon: faSearch },
    { number: 3, title: "Package Quote", description: "Written pricing by unit type or building — easy to compare and approve.", icon: faFileContract },
    { number: 4, title: "Phased Install", description: "Crews execute in phases with clean daily close-out and warranty docs.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Do you provide COI and W-9 quickly?", answer: "Yes — insurance and tax docs available on request for approved vendor lists." },
    { question: "Can you work around occupied units?", answer: "Yes — we coordinate notice windows and clean daily close-out." },
    { question: "Do you repair as well as replace?", answer: "Yes — we recommend repair when it is the better value for the asset." },
    { question: "Can you handle multi-site portfolios?", answer: "Yes — one point of contact across Waco, Temple, Killeen, and surrounding markets." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro title="Property Management" subtitle="Turnover-friendly gutter repair, cleaning, and replacement for multi-unit portfolios — clear pricing, tenant-aware scheduling, and documentation PMs need." />
      <TrustBar headline="Factory-certified gutter partner for Central Texas property managers" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Property Management" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Property Management Choose FlowGuard" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Property Management FAQs" />
      </div>
      <CTABanner
        headline="Let's Scope Your Portfolio"
        subline="Call (254) 760-5500 or request a package quote online."
        primaryText="Call (254) 760-5500"
        primaryLink="tel:+12547605500"
        secondaryText="Request Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Property Management Quote" cityName="Waco" slug="industries/property-management" spot="industry-property-management-form" formVariant={2} />
      </div>
    </main>
  );
}
