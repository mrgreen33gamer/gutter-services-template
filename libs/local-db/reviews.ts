// libs/local-db/reviews.ts
// Static testimonials for FlowGuard Gutters

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Seamless Gutters',
    text:     "We replaced leaky sectional gutters with seamless aluminum. FlowGuard measured carefully, the crew was clean and on schedule, and the first big rain ran perfectly. Pricing was upfront — no games.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Gutter Guards',
    text:     'Oak leaves used to clog our gutters every fall. FlowGuard installed micro-mesh guards and cleaned everything first. Two storms later — still clear. Highly recommend Priya and the crew.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Downspouts & Drainage',
    text:     'Water was pooling by the foundation. FlowGuard resized downspouts, added extensions, and fixed the pitch. Dry yard after the next storm. Fair price, great result.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Gutter Repair',
    text:     'They rehung a sagging run and resealed joints instead of forcing a full replacement. Honest advice and solid work. Will call them again for the other side of the house.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Gutter Cleaning',
    text:     'After the last storm we needed a full cleanout. FlowGuard flushed every run, checked fasteners, and hauled debris. Fast, professional, and reasonably priced.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Seamless Gutters',
    text:     'Full seamless install on a ranch home with long runs. Perfect seams, color matched, and Lifetime Seam Warranty + 2-Year Labor. They are my go-to gutter company now.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Gutters',
    text:     'We hired FlowGuard for commercial gutters on a retail strip. They coordinated after-hours so tenants stayed open, and the inspector signed off first pass. Professional from start to finish.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Gutter Guards',
    text:     'Pine needles were a nightmare. Factory-certified crew, clean install, and they actually cleaned up better than most remodelers. Guards plus a warranty sold me.',
  },
];

export default reviews;
