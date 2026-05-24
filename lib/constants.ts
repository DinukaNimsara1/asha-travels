export const siteConfig = {
  name: 'Asha Travels',
  description:
    "Sri Lanka's trusted travel partner. Book flights, visa services & travel insurance.",
  url: 'https://ashatravels.lk',
  whatsappNumber: '+94XXXXXXXXX',
  whatsappMessage: "Hi! I'm interested in your travel services.",
  phone: '+94 11 XXX XXXX',
  email: 'info@ashatravels.lk',
  address: '123 Main Street, Colombo 03, Sri Lanka',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  socialLinks: {
    facebook: 'https://facebook.com/ashatravels',
    instagram: 'https://instagram.com/ashatravels',
  },
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128004!2d79.86124197499678!3d6.914682093088716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b5df1c0c5%3A0x8b0e2fbcb1e24f6e!2sColombo%2003!5e0!3m2!1sen!2slk!4v1',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    {
      title: 'Air Ticketing',
      description:
        'Best fares on 50+ airlines to 100+ destinations worldwide. Business, economy, and first-class options.',
      icon: 'Plane',
    },
    {
      title: 'Visa Consultation',
      description:
        'Expert guidance for tourist, business, and student visas. We handle the paperwork, you pack your bags.',
      icon: 'FileCheck',
    },
    {
      title: 'Travel Insurance',
      description:
        'Comprehensive coverage for medical emergencies, trip cancellations, and lost luggage.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Hotel Bookings',
      description:
        'Handpicked hotels and resorts at the best rates. From budget-friendly to five-star luxury.',
      icon: 'Hotel',
    },
    {
      title: 'Holiday Packages',
      description:
        'Curated all-inclusive packages for families, couples, and solo travelers.',
      icon: 'Palmtree',
    },
    {
      title: 'Corporate Travel',
      description:
        'Tailored business travel solutions with priority booking and dedicated support.',
      icon: 'Briefcase',
    },
  ],
  stats: [
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 50000, suffix: '+', label: 'Happy Travelers' },
    { value: 100, suffix: '+', label: 'Destinations' },
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  ],
  airlines: [
    'Qatar Airways',
    'Emirates',
    'SriLankan Airlines',
    'Singapore Airlines',
    'Cathay Pacific',
    'Etihad Airways',
  ],
  destinations: [
    {
      title: 'Singapore',
      slug: 'singapore',
      price: 89000,
      region: 'Asia',
      includesVisa: false,
      image: '/images/destinations/singapore.png',
    },
    {
      title: 'Dubai',
      slug: 'dubai',
      price: 75000,
      region: 'Middle East',
      includesVisa: true,
      image: '/images/destinations/dubai.png',
    },
    {
      title: 'London',
      slug: 'london',
      price: 195000,
      region: 'Europe',
      includesVisa: false,
      image: '/images/destinations/london.png',
    },
    {
      title: 'Maldives',
      slug: 'maldives',
      price: 45000,
      region: 'Maldives',
      includesVisa: true,
      image: '/images/destinations/maldives.png',
    },
    {
      title: 'Bangkok',
      slug: 'bangkok',
      price: 55000,
      region: 'Asia',
      includesVisa: true,
      image: '/images/destinations/bangkok.png',
    },
    {
      title: 'Tokyo',
      slug: 'tokyo',
      price: 145000,
      region: 'Asia',
      includesVisa: false,
      image: '/images/destinations/tokyo.png',
    },
  ],
  testimonials: [
    {
      name: 'Priya Mendis',
      tripType: 'Family Trip to Dubai',
      quote:
        'Asha Travels made our Dubai trip absolutely unforgettable. From visa processing to hotel bookings, everything was seamless.',
      rating: 5,
    },
    {
      name: 'Rashan Fernando',
      tripType: 'Business Trip to Singapore',
      quote:
        'Their corporate travel service is outstanding. Quick turnaround, competitive rates, and the team is always available.',
      rating: 5,
    },
    {
      name: 'Amaya Perera',
      tripType: 'Honeymoon in Maldives',
      quote:
        'The honeymoon package they arranged was beyond our dreams. The overwater villa, the sunset cruise — every detail was perfect.',
      rating: 5,
    },
    {
      name: 'Dinesh Jayawardena',
      tripType: 'Group Tour to London',
      quote:
        'Organized a group tour for 12 people and Asha handled everything brilliantly. Great value for money.',
      rating: 4,
    },
  ],
} as const;

export type NavLink = (typeof siteConfig.navLinks)[number];
export type Service = (typeof siteConfig.services)[number];
export type Destination = (typeof siteConfig.destinations)[number];
export type Testimonial = (typeof siteConfig.testimonials)[number];
export type Stat = (typeof siteConfig.stats)[number];

export function getWhatsAppUrl(message?: string) {
  const msg = message || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
}
