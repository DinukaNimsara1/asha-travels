import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Asha Travels Content')
    .items([
      S.documentTypeListItem('destination').title('Destinations'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      ...S.documentTypeListItems().filter(
        (listItem) => !['destination', 'testimonial'].includes(listItem.getId() as string)
      ),
    ]);
