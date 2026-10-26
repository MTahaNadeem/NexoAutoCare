export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  image?: string;
  priceFrom?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  before: string;
  after: string;
  alt: string;
}

export type GalleryCategory = 'paint' | 'interior' | 'exterior' | 'engine';

export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  text: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  notes: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}
