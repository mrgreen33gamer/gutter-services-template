// FlowGuard Gutters — Commercial Gutters Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faTrophy, faChartLine,
  faHome, faWater, faBroom, faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {

  const expectations = [
    { icon: faSearch, title: "Commercial-Grade Scoping", description: "Box gutters, large-capacity K-style, multi-building portfolios — sized for real roof loads." },
    { icon: faFileContract, title: "Package Quotes for Budgets", description: "Written pricing by building or elevation for easy CapEx approval." },
    { icon: faCheckCircle, title: "Schedule-Aware Crews", description: "After-hours and phased work so tenants and customers stay open." },
    { icon: faShieldHalved, title: "COI & Docs Ready", description: "Insurance, W-9, and warranty paperwork for PMs and GCs." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Phased Multi-Building Work", description: "We stage installs around business hours and construction calendars." },
    { icon: faBuilding, title: "Retail, Office & Multi-Unit", description: "Experience with strip centers, offices, and multifamily properties." },
    { icon: faShieldHalved, title: "Factory-Certified · Bonded & Insured", description: "Documentation ready for approved vendor lists." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share building counts, access constraints, and timeline.", icon: faHeadset },
    { number: 2, title: "Site Walk", description: "Measure runs, note dumpster/parking, and photograph conditions.", icon: faSearch },
    { number: 3, title: "Package Quote", description: "Written pricing by unit type or building — easy to approve.", icon: faFileContract },
    { number: 4, title: "Phased Install", description: "Crews execute with daily close-out and warranty docs.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 450, label: "Commercial projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-schedule completion rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest commercial scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Retail and office coverage.", badge: "" },
    { town: "Temple", benefit: "Bell County commercial properties.", badge: "" },
    { town: "Killeen", benefit: "Multi-unit and retail portfolios.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and campuses.", badge: "" },
    { town: "Bellmead", benefit: "Industrial and retail strips.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "COI & vendor docs on request", us: "✅ Fast", others: "❌ Slow" },
    { feature: "After-hours options", us: "✅ Available", others: "❌ Daytime only" },
    { feature: "Package quotes by building", us: "✅ Yes", others: "❌ Lump vague totals" },
    { feature: "Factory-certified crews", us: "✅ All jobs", others: "❌ Sub-heavy" },
    { feature: "Warranty documentation", us: "✅ Included", others: "❌ Missing" },
  ];

  const faq = [
    { question: "Do you work on occupied commercial properties?", answer: "Yes — we plan phases, safety zones, and often after-hours windows so operations continue." },
    { question: "Can you provide COI quickly?", answer: "Yes — insurance certificates and tax docs for approved vendor lists." },
    { question: "Box gutters or commercial K-style?", answer: "Depends on architecture and load. We recommend based on roof design and maintenance access." },
    { question: "Do you handle multi-site portfolios?", answer: "Yes — single point of contact for property management companies across Central Texas." },
    { question: "What is typical lead time?", answer: "Estimates within days; install depends on material and building access. We lock schedules at approval." },
    { question: "Are you bonded and insured?", answer: "Yes — factory-certified installers, bonded and insured." },
  ];

  const crossServices = [
    { icon: faHome, title: "Seamless Gutters", body: "Residential and light commercial seamless systems.", link: "/services/seamless-gutters" },
    { icon: faWater, title: "Downspouts & Drainage", body: "High-capacity outlets for large roofs.", link: "/services/downspouts-drainage" },
    { icon: faBroom, title: "Gutter Cleaning", body: "Scheduled maintenance for portfolios.", link: "/services/gutter-cleaning" },
    { icon: faWrench, title: "Gutter Repair", body: "Storm response for commercial lines.", link: "/services/gutter-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Gutters" },
      ]} />
      <SectionIntro
        title="Commercial Gutters in Waco, TX"
        subtitle="Box gutters, large-capacity systems, and multi-building schedules for property managers and GCs — factory-certified, bonded & insured."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose FlowGuard" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-gutters" title="Commercial Gutters Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Gutter FAQs" /></div>
      <CTABanner
        headline="Let's Scope Your Commercial Project"
        subline="Package quotes. Schedule-aware crews. Call (254) 760-5500."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Request Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Request a Commercial Gutter Quote" cityName="Waco" slug="services/commercial-gutters" spot="commercial-gutters-page-form" formVariant={2} />
      </div>
    </main>
  );
}
