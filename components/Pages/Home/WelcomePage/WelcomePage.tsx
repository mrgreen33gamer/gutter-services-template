// Gutter Hero — FlowGuard (rain-ready exterior)
// Photographic parallax stage + an authentic gutter-crew photo card replaces the
// layered CSS-gradient texture art. Real imagery, sky-blue detailing, Yanone
// Kaffeesatz headline. Background photo (house at dusk) is already shipped with the
// template; the gutter-cleaning card photo was sourced fresh into
// /public/pages/home/welcome. All hero copy is unchanged.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

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

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — a home exterior at dusk */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-main.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Deep sky-blue scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

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

        {/* Authentic gutter-crew photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/gutter-cleaning.jpg"
              alt="A technician using a pressure washer to flush debris from a home's roof gutter"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Gutter Crew · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Flat-rate, up-front pricing
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Free on-site estimates
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
