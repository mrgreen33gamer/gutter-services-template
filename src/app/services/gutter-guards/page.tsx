// FlowGuard Gutters — Gutter Guards Service Page
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
    { icon: faSearch, title: "Debris Assessment First", description: "We check your tree cover, roof pitch, and existing gutters before recommending micro-mesh, screen, or hybrid guards." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Guards, install, and cleanout (when needed) are in the number — no surprise add-ons." },
    { icon: faCheckCircle, title: "Proper Fit & Secure Fastening", description: "Guards that rattle or gap will fail. We install for a tight fit that still sheds water in storms." },
    { icon: faShieldHalved, title: "Workmanship Warranty", description: "Install labor is covered so you are not left with loose panels after the first wind event." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Install Timeline", description: "Most residential guard projects finish the same day after a thorough cleanout." },
    { icon: faShieldHalved, title: "Built for Texas Debris", description: "Oak leaves, pine needles, and shingle grit — we match the guard style to what actually clogs your system." },
    { icon: faHome, title: "Works With Existing Gutters", description: "If your gutters are sound, we protect them. If not, we tell you before selling guards." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We inspect gutters, downspouts, and surrounding trees.", icon: faHeadset },
    { number: 2, title: "Recommend Guard Type", description: "Micro-mesh, screen, or hybrid — explained in plain English with trade-offs.", icon: faSearch },
    { number: 3, title: "Clean & Install", description: "Full cleanout, then guard install with secure fastening.", icon: faFileContract },
    { number: 4, title: "Water Test & Walkthrough", description: "We confirm flow and show you how to spot issues early.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 2200, label: "Guard systems installed locally", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97, label: "Customers who say clogs dropped", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years protecting Central Texas roofs", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for guards.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway homes.", badge: "" },
    { town: "Temple", benefit: "Bell County service on regular routes.", badge: "" },
    { town: "China Spring", benefit: "Great for oak-heavy rural lots.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Cleanout before guard install", us: "✅ Always", others: "❌ Sometimes skipped" },
    { feature: "Honest repair-first advice", us: "✅ Always", others: "❌ Upsell only" },
    { feature: "Flat-rate pricing", us: "✅ Written", others: "❌ Vague estimates" },
    { feature: "Factory-certified installers", us: "✅ All crews", others: "❌ Varies" },
    { feature: "Storm-season scheduling", us: "✅ Priority slots", others: "❌ Long waits" },
  ];

  const faq = [
    { question: "Do gutter guards really work in Texas?", answer: "Yes — when matched to your debris type and installed correctly. Micro-mesh handles fine needles better; larger screens may suit big leaves. No guard is 100% maintenance-free forever." },
    { question: "Can you install guards on old gutters?", answer: "If the gutters are sound and pitched correctly, yes. If they are failing, we recommend repair or seamless replacement first." },
    { question: "Will guards stop water overflow?", answer: "Guards reduce clogs that cause overflow. Undersized gutters or blocked downspouts can still overflow — we check the whole system." },
    { question: "How much do gutter guards cost?", answer: "Most residential projects range by linear foot and guard type. We provide a flat-rate quote after free estimate." },
    { question: "Do I still need cleaning?", answer: "Occasionally yes — especially pollen season and after major storms. Guards cut frequency dramatically." },
    { question: "Are you insured?", answer: "Yes — factory-certified, bonded, and insured." },
  ];

  const crossServices = [
    { icon: faHome, title: "Seamless Gutters", body: "New seamless systems sized for Texas rain.", link: "/services/seamless-gutters" },
    { icon: faBroom, title: "Gutter Cleaning", body: "Professional cleanouts and flush tests.", link: "/services/gutter-cleaning" },
    { icon: faWater, title: "Downspouts & Drainage", body: "Finish the water path away from the house.", link: "/services/downspouts-drainage" },
    { icon: faWrench, title: "Gutter Repair", body: "Fix sagging runs before adding guards.", link: "/services/gutter-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Gutter Guards" },
      ]} />
      <SectionIntro
        title="Gutter Guards in Waco, TX"
        subtitle="Micro-mesh and screen guards that keep leaves and pine needles out while water keeps flowing — flat-rate quotes, factory-certified install."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FlowGuard Guards" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/gutter-guards" title="Gutter Guards Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Gutter Guard FAQs" /></div>
      <CTABanner
        headline="Ready to Stop Climbing Ladders?"
        subline="Free estimate. Flat-rate quotes. Call (254) 760-5500."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Your Free Gutter Guard Estimate" cityName="Waco" slug="services/gutter-guards" spot="gutter-guards-page-form" formVariant={2} />
      </div>
    </main>
  );
}
