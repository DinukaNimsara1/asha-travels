import { type SchemaTypeDefinition } from 'sanity';
import { destinationType } from './destination';
import { testimonialType } from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destinationType, testimonialType],
};
