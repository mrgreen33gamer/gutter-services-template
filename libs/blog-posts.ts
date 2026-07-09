// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'why-seamless-gutters-beat-sectional',
    title:    'Why Seamless Gutters Beat Sectional Systems in Central Texas',
    excerpt:  'Fewer seams mean fewer leaks. Here is an honest look at seamless vs sectional gutters for Waco heat, storms, and oak-leaf seasons.',
    category: 'Guides',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Seamless gutters vs sectional gutters for Texas homes',
    featured: true,
  },
  {
    slug:     'gutter-guards-worth-it-texas-storms',
    title:    'Are Gutter Guards Worth It for Texas Storms?',
    excerpt:  'Micro-mesh, screens, and brushes each handle debris differently. Learn when guards pay for themselves in Central Texas weather.',
    category: 'Guards',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/seer-rating.jpg',
    imageAlt: 'Gutter guards for Texas storms in Waco TX',
  },
  {
    slug:     'how-often-clean-gutters-central-texas',
    title:    'How Often Should You Clean Gutters in Central Texas?',
    excerpt:  'Oak pollen, pine needles, and sudden downpours set the schedule. A practical cleaning calendar for Waco, Temple, and Killeen homeowners.',
    category: 'Maintenance',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'How often to clean gutters in Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
