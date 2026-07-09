// FlowGuard Gutters — Gutter Repair Service Page
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
    { icon: faSearch, title: "Honest Diagnosis", description: "We find the real cause — loose hangers, bad seams, poor pitch, or damaged sections — before recommending work." },
    { icon: faFileContract, title: "Repair vs Replace Clarity", description: "If a full seamless system is the better value, we say so. If a targeted repair will last, we do that." },
    { icon: faCheckCircle, title: "Solid Fastening & Sealing", description: "Rehang, reseal, and re-pitch done to last through Central Texas storms." },
    { icon: faShieldHalved, title: "Labor Warranty on Repairs", description: "Workmanship on repairs is backed so you are not calling us back for the same leak next month." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Response", description: "Leak and overflow repairs scheduled quickly — especially after storms." },
    { icon: faWrench, title: "Full-System Thinkers", description: "We check downspouts and drainage, not just the obvious drip." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Factory-certified crews with documentation on request." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect", description: "Walk the system, check pitch, seams, hangers, and downspouts.", icon: faHeadset },
    { number: 2, title: "Recommend", description: "Clear repair vs replace options with flat-rate pricing.", icon: faSearch },
    { number: 3, title: "Repair", description: "Rehang, reseal, replace sections, and restore flow.", icon: faFileContract },
    { number: 4, title: "Verify", description: "Water test and walkthrough so you see the fix.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1800, label: "Repair jobs completed locally", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "First-visit fix satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years repairing Central Texas gutters", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest repair scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway homes.", badge: "" },
    { town: "Temple", benefit: "Bell County repair coverage.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage without trip-fee surprises.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Repair-first honesty", us: "✅ Always", others: "❌ Replace-only pitch" },
    { feature: "Flat-rate written pricing", us: "✅ Yes", others: "❌ Hourly surprises" },
    { feature: "Full system inspection", us: "✅ Included", others: "❌ Spot fixes only" },
    { feature: "Water test after repair", us: "✅ Standard", others: "❌ Rare" },
    { feature: "Bonded & insured crews", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Can leaking gutters be repaired?", answer: "Often yes — seams, hangers, and small section damage are common repairs. Severely rusted or poorly pitched systems may need replacement." },
    { question: "Why are my gutters pulling away from the house?", answer: "Usually failed hangers, heavy debris load, or ice/storm stress. We rehang with proper spacing and fasteners." },
    { question: "How much does gutter repair cost in Waco?", answer: "Simple reseals can be low hundreds; multi-section rehangs cost more. We quote flat-rate after inspection." },
    { question: "Same-day repairs available?", answer: "Often yes for urgent overflow and storm damage — call (254) 760-5500." },
    { question: "Do you repair sectional and seamless?", answer: "Yes — both. We also advise when converting to seamless is the smarter long-term fix." },
    { question: "Are you insured?", answer: "Yes — factory-certified, bonded, and insured." },
  ];

  const crossServices = [
    { icon: faHome, title: "Seamless Gutters", body: "When repair is not enough, upgrade to seamless.", link: "/services/seamless-gutters" },
    { icon: faShieldHalved, title: "Gutter Guards", body: "Prevent the clogs that cause future damage.", link: "/services/gutter-guards" },
    { icon: faWater, title: "Downspouts & Drainage", body: "Fix the outlet side of overflow problems.", link: "/services/downspouts-drainage" },
    { icon: faBroom, title: "Gutter Cleaning", body: "Clear debris before it causes more damage.", link: "/services/gutter-cleaning" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Gutter Repair" },
      ]} />
      <SectionIntro
        title="Gutter Repair in Waco, TX"
        subtitle="Rehang, reseal, and section repairs with honest repair-vs-replace advice — flat-rate pricing and factory-certified crews."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FlowGuard Repair" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/gutter-repair" title="Gutter Repair Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Gutter Repair FAQs" /></div>
      <CTABanner
        headline="Need a Leak Fixed Fast?"
        subline="Free inspection estimate. Flat-rate quotes. Call (254) 760-5500."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Your Free Repair Estimate" cityName="Waco" slug="services/gutter-repair" spot="gutter-repair-page-form" formVariant={2} />
      </div>
    </main>
  );
}
