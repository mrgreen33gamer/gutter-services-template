// FlowGuard Gutters — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import AboutHero       from "#/PageComponents/AboutHero/AboutHero";
import AboutStory      from "#/PageComponents/AboutStory/AboutStory";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faHome,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2013",
      description: "FlowGuard was founded in Waco by Priya Nair. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust at Your Home",
      description: "Every installer on our team is background-checked, factory-certified, and bonded & insured. Landscaping protected, clean workspace, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full seamless system when a targeted repair or cleaning will do. Our reputation is built on straight talk — and 13 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 6000, label: "Gutter installs and repairs across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                       suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,   label: "Years serving Central Texas families",             suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a free estimate that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Measure Honestly", description: "A FlowGuard specialist measures runs and explains options in plain English — not just the most expensive package.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed.", icon: faHome },
    { number: 4, title: "Install & Warranty", description: "Factory-certified install, clean job site, Lifetime Seam Warranty + 2-Year Labor.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <AboutHero cityName="Waco" />
      <AboutStory cityName="Waco" />

      <SectionIntro
        title="About FlowGuard Gutters"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2013. We install seamless gutters, guards, and drainage solutions at fair prices for the families and businesses we've called neighbors for 13 years."
      />

      <TrustBar headline="6,000+ Central Texas installs — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="13 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Gutter Company — Ready When You Need Us"
        subline="Free on-site estimates. Flat-rate pricing. Lifetime Seam Warranty + 2-Year Labor. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547605500"
        secondaryText="Request Estimate Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
