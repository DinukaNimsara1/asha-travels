import { client } from './client';
import { urlForImage } from './image';

export interface Destination {
  _id: string;
  title: string;
  slug: string;
  region: string;
  price: number;
  includesVisa: boolean;
  image: string;
  description?: string;
  highlights?: string[];
}

export interface Testimonial {
  _id: string;
  name: string;
  tripType?: string;
  quote: string;
  rating: number;
}

export async function getDestinations(): Promise<Destination[]> {
  try {
    const data = await client.fetch(`
      *[_type == "destination"] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        region,
        price,
        includesVisa,
        image,
        description,
        highlights
      }
    `);
    
    return data.map((item: any) => ({
      ...item,
      image: item.image ? urlForImage(item.image).url() : '/images/destinations/fallback.png'
    }));
  } catch (error) {
    console.error("Error fetching destinations from Sanity:", error);
    return [];
  }
}

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const item = await client.fetch(`
      *[_type == "destination" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        region,
        price,
        includesVisa,
        image,
        description,
        highlights
      }
    `, { slug });
    
    if (!item) return null;
    
    return {
      ...item,
      image: item.image ? urlForImage(item.image).url() : '/images/destinations/fallback.png'
    };
  } catch (error) {
    console.error(`Error fetching destination by slug ${slug}:`, error);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(`
      *[_type == "testimonial"] | order(_createdAt desc) {
        _id,
        name,
        tripType,
        quote,
        rating
      }
    `);
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return [];
  }
}
