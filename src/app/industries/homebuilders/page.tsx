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
    { icon: faClock, problem: "Framing-to-close delays", consequence: "Late gutters hold up paint, landscaping, and final inspections." },
    { icon: faTriangleExclamation, problem: "Inconsistent quality across lots", consequence: "Callbacks on leaks and fascia damage hurt reputation." },
    { icon: faDollarSign, problem: "Change-order chaos", consequence: "Vague gutter allowances create budget fights at close." },
    { icon: faUsers, problem: "Unreliable sub availability", consequence: "Crew no-shows stall multiple homes at once." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Spec-Driven Installs", description: "We install to your plan details — color, size, and outlet layout locked before first lot." },
    { icon: faShieldHalved, title: "Factory-Certified · Bonded & Insured", description: "COI and warranty paperwork ready for GC files." },
    { icon: faUsers, title: "Production-Minded Scheduling", description: "We align with your framing, roofing, and paint sequence — not the other way around." },
  ];

  const processSteps = [
    { number: 1, title: "Spec Review", description: "Share plans, elevations, and preferred materials.", icon: faHeadset },
    { number: 2, title: "Lot Walk", description: "Confirm fascia, pitch, and downspout discharges.", icon: faSearch },
    { number: 3, title: "Unit Pricing", description: "Clear per-home or per-elevation pricing for takeoffs.", icon: faFileContract },
    { number: 4, title: "Phase Install", description: "Crews hit ready lots on schedule with clean close-out.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Can you match builder color packages?", answer: "Yes — we stock common colors and can order custom to your exterior packages." },
    { question: "Do you work as a preferred sub?", answer: "Yes — multi-lot and multi-subdivision schedules are our sweet spot." },
    { question: "How fast after roof dry-in?", answer: "We coordinate with your superintendent for the earliest safe install window." },
    { question: "Warranty paperwork for buyers?", answer: "Lifetime Seam Warranty + 2-Year Labor documentation available for closing packets." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Homebuilders" },
      ]} />
      <SectionIntro title="Homebuilders" subtitle="Production-ready seamless gutters and downspouts for new construction — reliable scheduling, consistent quality, and documentation GCs need." />
      <TrustBar headline="Factory-certified gutter partner for Central Texas builders" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Homebuilders" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Builders Choose FlowGuard" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Homebuilder FAQs" />
      </div>
      <CTABanner
        headline="Let's Talk About Your Next Phase"
        subline="Call (254) 760-5500 or request a builder package quote."
        primaryText="Call (254) 760-5500"
        primaryLink="tel:+12547605500"
        secondaryText="Request Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Homebuilder Quote" cityName="Waco" slug="industries/homebuilders" spot="industry-homebuilders-form" formVariant={2} />
      </div>
    </main>
  );
}
