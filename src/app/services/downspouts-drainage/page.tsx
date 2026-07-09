// FlowGuard Gutters — Downspouts & Drainage Service Page
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
  faHome, faBroom, faWater,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {

  const expectations = [
    { icon: faSearch, title: "Water Path Analysis", description: "We track where roof water goes today — and where it should go to protect your foundation and landscaping." },
    { icon: faFileContract, title: "Sized for Texas Rain", description: "Proper downspout count and diameter so gutters do not overflow in heavy storms." },
    { icon: faCheckCircle, title: "Extensions & Underground Options", description: "Above-grade extensions or buried drains — whichever fits the site and HOA rules." },
    { icon: faShieldHalved, title: "Foundation-First Mindset", description: "The goal is simple: get water away from the house, every storm." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Quick Drainage Fixes", description: "Many extension and outlet upgrades finish same day." },
    { icon: faWater, title: "Whole-System Approach", description: "Gutters, downspouts, and grade work together — we do not treat them as separate problems." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Factory-certified crews with full insurance docs available." },
  ];

  const processSteps = [
    { number: 1, title: "Site Walk", description: "Map roof areas, outlets, and pooling spots.", icon: faHeadset },
    { number: 2, title: "Plan Drainage", description: "Recommend outlet count, size, and discharge path.", icon: faSearch },
    { number: 3, title: "Install", description: "Add/relocate downspouts, extensions, or underground lines.", icon: faFileContract },
    { number: 4, title: "Storm Check", description: "Verify flow direction and finish clean-up.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1400, label: "Drainage upgrades completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 96, label: "Customers reporting less pooling", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years solving Central Texas water issues", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest drainage scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway lots.", badge: "" },
    { town: "Temple", benefit: "Bell County drainage upgrades.", badge: "" },
    { town: "China Spring", benefit: "Rural lots with long discharge paths.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Roof area load calculation", us: "✅ Included", others: "❌ Guesswork" },
    { feature: "Foundation-aware discharge", us: "✅ Always", others: "❌ Dump at the wall" },
    { feature: "Flat-rate written quote", us: "✅ Yes", others: "❌ Vague" },
    { feature: "Works with existing gutters", us: "✅ When sound", others: "❌ Replace-only" },
    { feature: "Clean job site", us: "✅ Standard", others: "❌ Hit or miss" },
  ];

  const faq = [
    { question: "How many downspouts do I need?", answer: "Roughly one every 30–40 feet of gutter run, plus extras for large roof areas. We size based on your actual layout." },
    { question: "Can downspouts fix foundation moisture?", answer: "They are a major factor. Moving discharge several feet from the foundation often reduces pooling and splash-back." },
    { question: "Underground drains or extensions?", answer: "Extensions are faster and cheaper; underground is cleaner looking and better for heavy flow. We explain both." },
    { question: "Do you handle French drains?", answer: "We focus on gutter-connected drainage. For deep foundation waterproofing we can coordinate with specialists." },
    { question: "Will this stop gutter overflow?", answer: "If overflow is from too few/small outlets, yes. If from clogs or undersized gutters, we address those too." },
    { question: "Are you insured?", answer: "Yes — factory-certified, bonded, and insured." },
  ];

  const crossServices = [
    { icon: faHome, title: "Seamless Gutters", body: "Pair new gutters with properly sized outlets.", link: "/services/seamless-gutters" },
    { icon: faShieldHalved, title: "Gutter Guards", body: "Keep outlets clear of leaf mats.", link: "/services/gutter-guards" },
    { icon: faWrench, title: "Gutter Repair", body: "Fix sagging runs that dump water mid-span.", link: "/services/gutter-repair" },
    { icon: faBroom, title: "Gutter Cleaning", body: "Clear debris so drainage can work.", link: "/services/gutter-cleaning" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Downspouts & Drainage" },
      ]} />
      <SectionIntro
        title="Downspouts & Drainage in Waco, TX"
        subtitle="Properly sized downspouts, extensions, and drainage paths that move water away from your foundation — flat-rate quotes and factory-certified install."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FlowGuard Drainage" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/downspouts-drainage" title="Drainage Solutions Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Downspouts & Drainage FAQs" /></div>
      <CTABanner
        headline="Ready to Move Water the Right Way?"
        subline="Free estimate. Flat-rate quotes. Call (254) 760-5500."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Your Free Drainage Estimate" cityName="Waco" slug="services/downspouts-drainage" spot="downspouts-drainage-page-form" formVariant={2} />
      </div>
    </main>
  );
}
