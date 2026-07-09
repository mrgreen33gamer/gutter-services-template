// FlowGuard Gutters — Gutter Cleaning Service Page
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
  faHome, faWater, faBroom,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {

  const expectations = [
    { icon: faSearch, title: "Full-System Cleanout", description: "Gutters, downspouts, and outlets — not just the easy front run." },
    { icon: faFileContract, title: "Flat-Rate Pricing", description: "Know the price before we climb the ladder. No hourly surprises." },
    { icon: faCheckCircle, title: "Flush Test Included", description: "We verify water flows freely after debris removal." },
    { icon: faShieldHalved, title: "Safe, Insured Work", description: "Bonded crews, careful landscaping protection, debris hauled away." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Seasonal Availability", description: "Fall leaf season and spring pollen — we schedule before storms hit." },
    { icon: faBroom, title: "More Than Scooping", description: "We check hangers, seams, and pitch while we are up there." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Factory-certified teams with insurance documentation on request." },
  ];

  const processSteps = [
    { number: 1, title: "Book", description: "Call, text, or form — we schedule a cleanout window.", icon: faHeadset },
    { number: 2, title: "Clean", description: "Remove debris from gutters and clear downspouts.", icon: faSearch },
    { number: 3, title: "Flush & Inspect", description: "Water test and note any repairs needed.", icon: faFileContract },
    { number: 4, title: "Report", description: "Quick walkthrough and optional repair quote if issues found.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 4000, label: "Cleanouts completed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-time appointment rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years cleaning local gutters", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — most flexible cleanout slots.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Regular residential routes.", badge: "" },
    { town: "Woodway", benefit: "Scheduled weekly routes through Woodway.", badge: "" },
    { town: "Temple", benefit: "Bell County cleanout coverage.", badge: "" },
    { town: "China Spring", benefit: "Rural homes with heavy tree cover.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Downspouts cleared, not just troughs", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Flush test after cleaning", us: "✅ Included", others: "❌ Rare" },
    { feature: "Debris hauled away", us: "✅ Yes", others: "❌ Left on lawn" },
    { feature: "Repair notes if needed", us: "✅ Honest report", others: "❌ Silent upsell later" },
    { feature: "Insured ladder work", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "How often should I clean gutters in Central Texas?", answer: "Most homes need 1–2 cleanings per year. Heavy oak or pine coverage may need more — especially after major storms." },
    { question: "How much does gutter cleaning cost in Waco?", answer: "Most single-story homes are a flat rate based on linear feet and access. Multi-story and heavy debris cost more — we quote upfront." },
    { question: "Do you clean with guards installed?", answer: "Yes — we remove or open guards as designed, clean, and reinstall properly." },
    { question: "Will you tell me if I need repairs?", answer: "Yes — we note loose hangers, bad seams, and pitch issues and quote only if you want them fixed." },
    { question: "Same-day cleaning available?", answer: "Often after storms — call (254) 760-5500." },
    { question: "Are you insured?", answer: "Yes — bonded and insured for ladder and roof-edge work." },
  ];

  const crossServices = [
    { icon: faShieldHalved, title: "Gutter Guards", body: "Cut cleaning frequency dramatically.", link: "/services/gutter-guards" },
    { icon: faWrench, title: "Gutter Repair", body: "Fix issues found during cleaning.", link: "/services/gutter-repair" },
    { icon: faHome, title: "Seamless Gutters", body: "Replace failing systems entirely.", link: "/services/seamless-gutters" },
    { icon: faWater, title: "Downspouts & Drainage", body: "Clear outlets and improve discharge.", link: "/services/downspouts-drainage" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Gutter Cleaning" },
      ]} />
      <SectionIntro
        title="Gutter Cleaning in Waco, TX"
        subtitle="Thorough cleanouts, flush tests, and debris haul-away — so your system works when the next Central Texas storm hits."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FlowGuard Cleaning" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/gutter-cleaning" title="Gutter Cleaning Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Gutter Cleaning FAQs" /></div>
      <CTABanner
        headline="Ready for a Clean, Free-Flowing System?"
        subline="Flat-rate cleanouts. Call (254) 760-5500."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Your Gutter Cleaning" cityName="Waco" slug="services/gutter-cleaning" spot="gutter-cleaning-page-form" formVariant={2} />
      </div>
    </main>
  );
}
