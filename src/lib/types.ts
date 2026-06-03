export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  price?: string;
  moq: string;
  features: string[];
  specifications: Record<string, string>;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  country: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  company: string;
  country: string;
  description: string;
  results: string[];
  image: string;
}
