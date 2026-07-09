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
    { icon: faClock, problem: "Storefront downtime risk", consequence: "Overflow and leaks disrupt customers and create slip hazards." },
    { icon: faTriangleExclamation, problem: "Storm damage surprises", consequence: "Undersized commercial systems fail during peak rain events." },
    { icon: faDollarSign, problem: "Unplanned CapEx", consequence: "Emergency repairs cost more than scheduled upgrades." },
    { icon: faUsers, problem: "Vendor coordination headaches", consequence: "Multiple trades and unclear ownership of roof-edge water." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "After-Hours Options", description: "We schedule around open hours so retail stays open and offices stay productive." },
    { icon: faShieldHalved, title: "Factory-Certified · Bonded & Insured", description: "COI ready for landlords, GCs, and corporate vendor portals." },
    { icon: faUsers, title: "One Account Lead", description: "A single FlowGuard contact owns scope, schedule, and close-out docs." },
  ];

  const processSteps = [
    { number: 1, title: "Discovery", description: "Share building type, access limits, and preferred work windows.", icon: faHeadset },
    { number: 2, title: "Survey", description: "Measure commercial runs and evaluate capacity vs roof load.", icon: faSearch },
    { number: 3, title: "Proposal", description: "Written package with phases and optional after-hours pricing.", icon: faFileContract },
    { number: 4, title: "Execute", description: "Install with safety zones, clean daily close-out, and warranties.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Can you work nights or weekends?", answer: "Often yes for retail and office properties — ask when scoping." },
    { question: "Do you handle strip centers?", answer: "Yes — multi-tenant buildings with phased work are common for us." },
    { question: "Box gutters available?", answer: "Yes — commercial box and large-capacity systems depending on architecture." },
    { question: "Insurance documents?", answer: "COI and related vendor paperwork available on request." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Retail & Commercial" },
      ]} />
      <SectionIntro title="Retail & Commercial" subtitle="Commercial gutter systems for retail strips, offices, and mixed-use properties — schedule-aware crews and documentation landlords need." />
      <TrustBar headline="Factory-certified gutter partner for Central Texas commercial properties" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Retail & Commercial" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Commercial Clients Choose FlowGuard" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Retail & Commercial FAQs" />
      </div>
      <CTABanner
        headline="Let's Scope Your Commercial Property"
        subline="Call (254) 760-5500 or request a commercial quote online."
        primaryText="Call (254) 760-5500"
        primaryLink="tel:+12547605500"
        secondaryText="Request Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Retail & Commercial Quote" cityName="Waco" slug="industries/retail-commercial" spot="industry-retail-commercial-form" formVariant={2} />
      </div>
    </main>
  );
}
