import type { Service, GalleryItem, Testimonial, NavLink, Stat } from '@/types';

export const PHONE = '+92 319 6623057';
export const PHONE_CLEAN = '+923196623057';
export const WHATSAPP_BASE = `https://wa.me/${PHONE_CLEAN}`;
export const CITY = 'Faisalabad, Pakistan';
export const BRAND = 'NexoAutoCare';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Book Now', href: '/booking' },
];

export const STATS: Stat[] = [
  { value: '500+', label: 'Cars Detailed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '6+', label: 'Years Experience' },
  { value: '100%', label: 'At Your Doorstep' },
];

export const SERVICES: Service[] = [
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    tagline: 'Erase the damage. Reveal the depth.',
    description:
      'Machine polishing that removes swirl marks, light scratches, and oxidation — restoring the paint to a level it hasn\'t seen since the factory.',
    features: [
      'Single & multi-stage correction',
      'Swirl & scratch removal',
      'Oxidation treatment',
      'Pre-correction decontamination',
    ],
    icon: 'sparkles',
    image: '/images/paint_after.jpg',
    priceFrom: 'PKR 8,000',
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    tagline: 'Years of protection. One session.',
    description:
      'Nano-ceramic technology bonds permanently to your paint, creating a hydrophobic shield against UV, contamination, and daily wear.',
    features: [
      'Professional-grade SiO2 ceramic',
      '2–5 year protection',
      'Hydrophobic self-cleaning surface',
      'UV fade resistance',
    ],
    icon: 'shield',
    image: '/images/wash_after.jpg',
    priceFrom: 'PKR 20,000',
  },
  {
    id: 'interior-detailing',
    title: 'Interior Detailing',
    tagline: 'The cabin should feel as good as it looks.',
    description:
      'Systematic deep-cleaning of every surface — seats, carpets, dashboard, vents, and door panels — using professional steam and extraction.',
    features: [
      'Steam cleaning & extraction',
      'Leather conditioning',
      'Dashboard & trim dressing',
      'Air vent deep clean',
    ],
    icon: 'sofa',
    image: '/images/interior_after.jpg',
    priceFrom: 'PKR 5,000',
  },
  {
    id: 'exterior-wash-polish',
    title: 'Exterior Wash & Polish',
    tagline: 'The standard wash, done properly.',
    description:
      'A thorough hand wash, clay bar decontamination, and hand polish to prep the paint surface and bring back natural gloss.',
    features: [
      'Two-bucket hand wash method',
      'Clay bar decontamination',
      'Hand polish application',
      'Wheel & tire detailing',
    ],
    icon: 'droplets',
    image: '/images/paint_after.jpg',
    priceFrom: 'PKR 3,500',
  },
  {
    id: 'engine-bay-cleaning',
    title: 'Engine Bay Cleaning',
    tagline: 'Clean under the hood. Detect problems early.',
    description:
      'Careful degreasing and detailing of the engine bay — removing built-up grime without compromising electronics or seals.',
    features: [
      'Safe degreasing process',
      'Plastic & rubber dressing',
      'Wiring loom protection',
      'Final inspection detailing',
    ],
    icon: 'wrench',
    priceFrom: 'PKR 4,000',
  },
  {
    id: 'odor-elimination',
    title: 'Odor Elimination',
    tagline: 'Neutralize. Not mask.',
    description:
      'Ozone treatment and deep cabin sanitization that eliminates odors at the source — smoke, food, pet, and mold — not just covers them.',
    features: [
      'Ozone generator treatment',
      'HVAC system sanitization',
      'Carpet & upholstery steam',
      'Antibacterial cabin spray',
    ],
    icon: 'wind',
    priceFrom: 'PKR 3,000',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Paint Correction — Navy Sedan',
    category: 'paint',
    before: '/images/paint_before.jpg',
    after: '/images/paint_after.jpg',
    alt: 'Paint correction before and after on a navy blue sedan',
  },
  {
    id: 'g2',
    title: 'Interior Revival — Subaru Outback',
    category: 'interior',
    before: '/images/interior_before.jpg',
    after: '/images/interior_after.jpg',
    alt: 'Interior detailing before and after',
  },
  {
    id: 'g3',
    title: 'Ceramic Coating — Mercedes GLS',
    category: 'exterior',
    before: '/images/paint_before.jpg',
    after: '/images/wash_after.jpg',
    alt: 'Ceramic coating application on white Mercedes GLS',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Bilal Raza',
    vehicle: 'Honda Civic 2022',
    rating: 5,
    text: 'Booked NexoAutoCare to come to my home for paint correction and a single-stage ceramic coat. They arrived with their full mobile setup, and the finish looks better than when I drove it off the lot. These guys don\'t cut corners.',
  },
  {
    id: 't2',
    name: 'Asma Tariq',
    vehicle: 'Toyota Fortuner',
    rating: 5,
    text: 'Interior was in a terrible state. They detailed it right in my driveway, and it came out looking completely new. The attention to detail in every crevice was impressive — I didn\'t expect that level of thoroughness at home.',
  },
  {
    id: 't3',
    name: 'Usman Khalid',
    vehicle: 'Mercedes C-Class',
    rating: 5,
    text: 'Worth every rupee. Booked an appointment, they arrived at my home on time, communicated throughout, and the result was exactly what was promised. Rare in Faisalabad.',
  },
];
