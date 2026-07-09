'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCalendar, faTree, faCloudShowersHeavy, faWrench, faShieldHalved, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "How often should you clean gutters in Central Texas? There is no single number — oak pollen, pine needles, and sudden downpours set the schedule. As a baseline, most Waco-area homes need a thorough cleanout once or twice a year. Heavy tree cover can push that higher. Here is a practical calendar we share with homeowners.",
  },
  {
    type: 'cards',
    heading: 'What Drives Cleaning Frequency',
    cards: [
      { icon: faTree, title: 'Tree species', body: 'Oaks drop leaves and pollen. Pines drop needles that mat and block outlets. Know what hangs over your roof.' },
      { icon: faCloudShowersHeavy, title: 'Storm season', body: 'A single storm can pack months of debris into one run. Inspect after major weather events.' },
      { icon: faCalendar, title: 'Seasonal peaks', body: 'Late fall leaf drop and spring pollen are the two big windows for scheduled cleanings.' },
      { icon: faWrench, title: 'System condition', body: 'Sagging gutters hold standing water and debris longer. Fix pitch problems or clean more often.' },
      { icon: faShieldHalved, title: 'Guards installed', body: 'Quality guards reduce frequency but do not eliminate all maintenance after extreme storms.' },
      { icon: faHouseChimney, title: 'Roof material', body: 'Aging shingles shed grit that settles in troughs — another reason for annual inspections.' },
    ],
  },
  {
    type: 'table',
    heading: 'Simple Cleaning Calendar',
    tableHeaders: ['Home Situation', 'Suggested Cadence', 'Extra Checks'],
    tableRows: [
      ['Few trees, open lot', '1× per year', 'After major storms'],
      ['Moderate oak cover', '2× per year', 'Fall + spring'],
      ['Heavy pine / oak mix', '2–3× per year', 'After storms + fall'],
      ['Guards installed', '1× per year inspect', 'Storm check as needed'],
      ['Commercial flat-adjacent', 'Scheduled quarterly', 'Before peak rain months'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Overflow at the roof edge, plants dying below a downspout, or water marks on siding are early signs you waited too long to clean.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Walk the perimeter after the next rain and note overflow spots',
      'Schedule a professional cleanout before peak storm season',
      'Ask for a flush test — scoops alone miss packed downspouts',
      'Consider guards if you are cleaning more than twice a year',
      'Fix loose hangers when they are found, not after fascia damage',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Clean Gutters in Central Texas?"
        description="Oak pollen, pine needles, and sudden downpours set the schedule. A practical cleaning calendar for Waco, Temple, and Killeen homeowners."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="How often to clean gutters in Central Texas"
        category="Maintenance"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need a Professional Cleanout?"
        body="FlowGuard Gutters offers flat-rate gutter cleaning with flush tests across Waco and Central Texas."
        buttonText="Book a Cleaning"
        buttonHref="/services/gutter-cleaning"
      />
      <NewsletterSignup variant={1} spot="how-often-clean-gutters-blog" />
    </>
  );
}
