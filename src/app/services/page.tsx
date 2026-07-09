// FlowGuard Gutters — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faHome, faShieldHalved, faWrench, faWater, faBroom, faBuilding,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faHome, title: "Seamless Gutters", body: "Custom-formed seamless aluminum gutters sized on site for your roofline — fewer seams, fewer leaks.", link: "/services/seamless-gutters" },
    { icon: faShieldHalved, title: "Gutter Guards", body: "Micro-mesh and screen guards that keep leaves and pine needles out during Texas storms.", link: "/services/gutter-guards" },
    { icon: faWrench, title: "Gutter Repair", body: "Rehang, reseal, and section repairs with honest repair-vs-replace advice.", link: "/services/gutter-repair" },
    { icon: faWater, title: "Downspouts & Drainage", body: "Properly sized downspouts and extensions that move water away from foundations.", link: "/services/downspouts-drainage" },
    { icon: faBroom, title: "Gutter Cleaning", body: "Thorough cleanouts, flush tests, and debris haul-away.", link: "/services/gutter-cleaning" },
    { icon: faBuilding, title: "Commercial Gutters", body: "Box gutters and large-capacity systems for multi-building schedules.", link: "/services/commercial-gutters" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Guidance First", description: "We explain options in plain English — repair vs replace, guards vs cleanouts — not just the most expensive package." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No hourly billing, no surprise add-ons. You approve the price before we start." },
    { icon: faShieldHalved, title: "Factory-Certified Installers", description: "Every installer is factory-certified. Bonded and insured on every job." },
    { icon: faTag, title: "Lifetime Seam Warranty + 2-Year Labor", description: "Seam warranty for life of the product; labor workmanship for two years." },
  ];

  const metrics = [
    { icon: faTrophy, value: 6000, label: "Gutter installs and repairs since 2013", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real FlowGuard team member — not a call center. Free estimates most days." },
    { icon: faShieldHalved, title: "No Contracts, Ever", description: "There's no subscription or service agreement required. You hire us because the work is done right." },
    { icon: faLock, title: "Bonded & Insured", description: "Factory-certified and fully insured. Proof of insurance available on request for builders and PMs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. We'll schedule a free on-site estimate.", icon: faHeadset },
    { number: 2, title: "Measure On-Site", description: "Specialist measures runs and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Install & Warranty", description: "Clean install, debris hauled away, Lifetime Seam Warranty + 2-Year Labor.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay — no hourly billing." },
    { icon: faShieldHalved, title: "Lifetime Seam Warranty + 2-Year Labor", description: "Every install is backed. If our workmanship fails, we fix it." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy with the result? We'll return to make it right." },
    { icon: faLock, title: "Factory-Certified · Bonded & Insured", description: "Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and custom installs.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "Lifetime Seam Warranty + 2-Year Labor", us: "✅ Every install", others: "❌ Rare or none" },
    { feature: "Factory-certified installers", us: "✅ All crews", others: "❌ Not always" },
    { feature: "No service contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Free on-site estimates", us: "✅ Yes", others: "❌ Often charged" },
  ];

  const faq = [
    { question: "How much do gutters cost in Waco?", answer: "Seamless systems typically $8–$18 per linear foot installed. Guards and cleaning are quoted separately. We always provide a flat-rate written quote after free estimate." },
    { question: "Are your installers factory-certified?", answer: "Yes — FlowGuard Gutters uses factory-certified installers who are bonded and insured." },
    { question: "Do you offer free estimates?", answer: "Yes — free on-site estimates and consultations. Call (254) 760-5500." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — Lifetime Seam Warranty + 2-Year Labor." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule a free estimate and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <SectionIntro
        title="Gutter Services in Waco & Central Texas"
        subtitle="Seamless gutters, guards, repair, downspouts, cleaning, and commercial systems — flat-rate quotes and factory-certified installers."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Our Services" subheading="Everything your roof edge needs to manage Texas rain." cards={services} />
      </div>
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Gutter Service FAQs" /></div>
      <CTABanner
        headline="Ready to Protect Your Home?"
        subline="Free estimates. Flat-rate quotes. Lifetime Seam Warranty + 2-Year Labor. Call (254) 760-5500."
        primaryText="Call (254) 760-5500"
        primaryLink="tel:+12547605500"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request a Free Gutter Quote" cityName="Waco" slug="services" spot="services-index-form" formVariant={1} />
      </div>
    </main>
  );
}
