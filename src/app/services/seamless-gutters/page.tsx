// FlowGuard Gutters — Seamless Gutters Service Page
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
    { icon: faSearch, title: "Accurate Measurement First", description: "We measure every run and check roof pitch before recommending size and style — no cookie-cutter quotes." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Material, labor, hangers, and haul-away are in the number. No surprise change orders mid-install." },
    { icon: faCheckCircle, title: "On-Site Seamless Forming", description: "Custom-formed runs mean fewer seams, fewer leaks, and a cleaner look along your fascia." },
    { icon: faShieldHalved, title: "Lifetime Seam Warranty + 2-Year Labor", description: "Every seamless install is backed by our Lifetime Seam Warranty plus 2-Year Labor." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Efficient Project Timeline", description: "Most residential seamless installs are completed in a day so your home is protected before the next storm." },
    { icon: faHome, title: "Sized for Your Roof", description: "We help you choose 5\" or 6\" K-style (or commercial box) based on roof area and rainfall." },
    { icon: faShieldHalved, title: "Bonded & Insured Crews", description: "Factory-certified installers with full insurance documentation on request." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We measure runs, note fascia condition, and discuss color and capacity goals.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "You get a flat-rate quote. Once approved, we lock install dates.", icon: faSearch },
    { number: 3, title: "Install Day", description: "Old gutters removed if needed, seamless runs formed on site, hung, sealed, and connected.", icon: faFileContract },
    { number: 4, title: "Walkthrough & Warranty", description: "We walk the job with you and review Lifetime Seam Warranty + 2-Year Labor.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 6000, label: "Seamless systems installed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction on installs", suffix: "%", duration: 2 },
    { icon: faClock, value: 13, label: "Years installing gutters locally", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for seamless installs.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full coverage throughout Hewitt.",                     badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes.",              badge: "" },
    { town: "Temple",       benefit: "Bell County coverage — permit-ready installs.",        badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger homes.",                     badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.",     badge: "" },
  ];

  const comparisonRows = [
    { feature: "Free on-site estimate before quote", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Factory-certified install crews",    us: "✅ All jobs", others: "❌ Varies" },
    { feature: "Flat-rate quote (material + labor)", us: "✅ Written", others: "❌ Hourly + extras" },
    { feature: "Lifetime Seam Warranty",             us: "✅ Every install", others: "❌ Rare" },
    { feature: "2-Year Labor Warranty",              us: "✅ Included", others: "❌ Limited" },
  ];

  const faq = [
    { question: "How much do seamless gutters cost in Waco?", answer: "Most residential projects run $8–$18 per linear foot installed depending on size, hangers, color, and downspouts. Full-home packages are quoted after free estimate." },
    { question: "How long does a seamless gutter install take?", answer: "Many homes are completed in one day depending on linear feet and complexity. We give a realistic schedule at the quote." },
    { question: "5-inch or 6-inch gutters?", answer: "5\" handles many homes well. 6\" is better for large roof areas and heavy Texas downpours. We recommend based on roof square footage and pitch." },
    { question: "Will seamless gutters stop leaks better than sectional?", answer: "Yes — fewer joints means fewer failure points. Proper pitch and hangers still matter as much as the material." },
    { question: "Do you haul away old gutters?", answer: "Yes — removal and disposal are included in our flat-rate install quotes when replacing existing systems." },
    { question: "Are you factory-certified?", answer: "Yes — our installers are factory-certified, bonded, and insured." },
  ];

  const crossServices = [
    { icon: faShieldHalved, title: "Gutter Guards", body: "Keep leaves out while water keeps flowing.", link: "/services/gutter-guards" },
    { icon: faWater, title: "Downspouts & Drainage", body: "Move water away from your foundation.", link: "/services/downspouts-drainage" },
    { icon: faBroom, title: "Gutter Cleaning", body: "Full cleanouts and flush tests.", link: "/services/gutter-cleaning" },
    { icon: faWrench, title: "Gutter Repair", body: "Honest repair when a full replace is not needed.", link: "/services/gutter-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Seamless Gutters" },
      ]} />
      <SectionIntro
        title="Seamless Gutters in Waco, TX"
        subtitle="Custom-formed seamless aluminum gutters sized on site for your roofline — factory-certified install, flat-rate quotes, Lifetime Seam Warranty + 2-Year Labor."
      />
      <TrustBar headline="6,000+ Central Texas installs — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FlowGuard" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/seamless-gutters" title="Seamless Gutters Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Seamless Gutter FAQs" /></div>
      <CTABanner
        headline="Ready to Get Started?"
        subline="Free estimate. Flat-rate quotes. Factory-certified installers. Call (254) 760-5500."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Your Free Seamless Gutter Estimate" cityName="Waco" slug="services/seamless-gutters" spot="seamless-gutters-page-form" formVariant={2} />
      </div>
    </main>
  );
}
