// FlowGuard Gutters — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHome, faShieldHalved, faWrench, faWater, faBroom, faBuilding,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faHome,
      title: "Seamless Gutters",
      body: "Custom-formed seamless aluminum gutters sized on site for your roofline — fewer seams, fewer leaks, cleaner look.",
      link: "/services/seamless-gutters",
    },
    {
      icon: faShieldHalved,
      title: "Gutter Guards",
      body: "Micro-mesh and screen guards that keep leaves and pine needles out while water keeps flowing during Texas storms.",
      link: "/services/gutter-guards",
    },
    {
      icon: faWrench,
      title: "Gutter Repair",
      body: "Rehang, reseal, and replace damaged sections. Honest repair-vs-replace advice before you spend.",
      link: "/services/gutter-repair",
    },
    {
      icon: faWater,
      title: "Downspouts & Drainage",
      body: "Properly sized downspouts, extensions, and underground drainage that move water away from your foundation.",
      link: "/services/downspouts-drainage",
    },
    {
      icon: faBroom,
      title: "Gutter Cleaning",
      body: "Thorough cleanouts, flush tests, and debris haul-away — so your system works when the next storm hits.",
      link: "/services/gutter-cleaning",
    },
    {
      icon: faBuilding,
      title: "Commercial Gutters",
      body: "Box gutters, large-capacity systems, and multi-building schedules for property managers and GCs.",
      link: "/services/commercial-gutters",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 6000, label: "Gutter installs and repairs across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 13,   label: "Years of local gutter experience",                 suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                     suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price after a free on-site estimate. No hourly billing, no surprise add-ons mid-install.",
    },
    {
      icon: faShieldHalved,
      title: "Factory-Certified Installers",
      description: "Every crew is factory-certified, bonded, and insured. We install to manufacturer specs so warranties stay valid.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2013",
      description: "We're not a franchise. FlowGuard was founded in Waco by Priya Nair. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll schedule a free on-site estimate that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Measure & Advise",
      description: "A FlowGuard specialist measures your roofline, checks pitch and drainage, and explains options in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Install & Warranty",
      description: "Factory-certified install, clean job site, Lifetime Seam Warranty + 2-Year Labor on every job.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Guidance",
      description: "We recommend the size, style, and guards that fit your roof and budget — not what's easiest to sell.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Install",
      description: "Landscaping protected, debris hauled away, home left clean. Every single job.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote after measurement. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Manufacturer-Spec Install",
      description: "Proper hangers, pitch, seals, and downspout layout so water leaves your roof the way it should.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available crews in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential coverage. On our regular route.",                      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and custom installs.",           badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                   badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",       badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",            badge: "" },
  ];

  const faq = [
    {
      question: "How much do seamless gutters cost in Waco?",
      answer: "Most residential seamless gutter projects range from $8–$18 per linear foot installed depending on size, material, hangers, and downspouts. Full-home packages are quoted after a free on-site estimate.",
    },
    {
      question: "Do you offer free on-site estimates?",
      answer: "Yes — free on-site estimates and consultations across Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, and Bellmead. Call (254) 760-5500.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most estimates are scheduled within a few days. Install dates for common seamless systems are typically within 1–2 weeks after approval.",
    },
    {
      question: "What gutter services do you offer?",
      answer: "Seamless gutters, gutter guards, gutter repair, downspouts & drainage, gutter cleaning, and commercial gutters.",
    },
    {
      question: "Are your installers certified and insured?",
      answer: "Yes — FlowGuard Gutters uses factory-certified installers who are bonded and insured. Documentation available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — Lifetime Seam Warranty + 2-Year Labor covering workmanship on every install.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <WelcomePage />

      <TrustBar
        headline="Waco's trusted gutter company — factory-certified, insured, and warrantied on every install"
      />

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Gutters Done Right"
          subheading="From seamless installs to guards, repairs, and commercial systems — FlowGuard handles it all."
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} />
      </div>

      <CTABanner
        headline="Ready for Gutters That Actually Protect Your Home?"
        subline="Free on-site estimate. Flat-rate quotes. Factory-certified installers. Lifetime Seam Warranty + 2-Year Labor."
        primaryText="Call (254) 760-5500"
        primaryLink="tel:+12547605500"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Your Free Gutter Estimate" cityName="Waco" slug="home" spot="home-page-form" formVariant={1} />
      </div>
    </main>
  );
}
