// _archetype-library/hero-h-parallax/Component.tsx
//
// Hero H: Layered Parallax — foliage/gravel texture via CSS gradients + optional
// textureSrc image layers. Scroll-linked depth on document.body (scroll container).
// No discrete widget card — full-bleed layered texture behind left-aligned copy.
'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function useBodyScrollY() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const read = () => {
      // document.body is the scroll container in these templates
      const y =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0;
      scrollY.set(y);
    };
    read();
    document.body.addEventListener('scroll', read, { passive: true });
    window.addEventListener('scroll', read, { passive: true });
    return () => {
      document.body.removeEventListener('scroll', read);
      window.removeEventListener('scroll', read);
    };
  }, [scrollY]);

  return scrollY;
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Gutter Company — Since 2013';
const headlineLines = [
  'Seamless Gutters.',
  'Storm-Ready Guards.',
];
const headlineAccent = 'FlowGuard.';
const subheadline = 'Flat-rate pricing. Free on-site estimates. Lifetime Seam Warranty + 2-Year Labor. Serving Waco and Central Texas with factory-certified installers.';
const primaryCta = { label: 'Call (254) 760-5500', href: 'tel:+12547605500' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Free Estimates',
  'No Contracts',
  'Factory-Certified',
  '13+ Yrs Local',
  'Lifetime Seam Warranty',
];
const stats = [
  {
    "value": "6,000+",
    "label": "Installs Completed"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "Lifetime Seam",
    "label": "Labor Warranty"
  },
  {
    "value": "Same-Day",
    "label": "Service Available"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#0284c7';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Overflowing";
const afterLabel = "Clean runoff";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "5\" Seamless", swatch: "#0284c7", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "6\" Commercial", swatch: "#0ea5e9", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Guards", swatch: "#38bdf8", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Downspouts", swatch: "#0369a1", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Fascia Wrap", swatch: "#7dd3fc", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Repair", swatch: "#0c4a6e", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "After FlowGuard, no more waterfall at the corners. Guards actually handle our oak debris.";
const authorName = "Patricia J.";
const authorMeta = "Gutter + guard · Hewitt";
const rating = 5;
const schematicLabel = "FlowGuard schematic";
const gauges = [
  { label: "Homes", value: "3,400+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Color", value: "Matched" },
  { label: "Warranty", value: "Labor" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "FlowGuard";

  const scrollY = useBodyScrollY();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 28, mass: 0.4 });

  const layerFarY = useTransform(smoothY, [0, 500], [0, 90]);
  const layerMidY = useTransform(smoothY, [0, 500], [0, 50]);
  const layerNearY = useTransform(smoothY, [0, 500], [0, 22]);
  const textureY = useTransform(smoothY, [0, 500], [0, 70]);
  const vignetteOpacity = useTransform(smoothY, [0, 300], [0.55, 0.85]);

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Full-bleed layered texture stack */}
      <div className={styles.layers} aria-hidden="true">
        <motion.div
          className={`${styles.layer} ${styles.layerFar}`}
          style={reducedMotion ? undefined : { y: layerFarY }}
        />
        <motion.div
          className={`${styles.layer} ${styles.layerMid}`}
          style={reducedMotion ? undefined : { y: layerMidY }}
        />
        {textureSrc ? (
          <motion.div
            className={`${styles.layer} ${styles.layerTexture}`}
            style={reducedMotion ? undefined : { y: textureY }}
          >
            {/* Decorative texture layer — next/image optional when adapting into a template */}
            <img src={textureSrc} alt={textureAlt} className={styles.textureImg} />
          </motion.div>
        ) : null}
        <motion.div
          className={`${styles.layer} ${styles.layerNear}`}
          style={reducedMotion ? undefined : { y: layerNearY }}
        />
        <motion.div
          className={styles.vignette}
          style={reducedMotion ? undefined : { opacity: vignetteOpacity }}
        />
        <div className={styles.grain} />
      </div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Spacer column preserves grid balance on wide viewports; texture shows through */}
        <div className={styles.depthWell} aria-hidden="true">
          <div className={styles.depthRing} />
          <div className={styles.depthRingOuter} />
        </div>
      </div>
    </section>
  );
}
