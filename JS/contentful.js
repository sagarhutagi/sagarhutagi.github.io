import { createClient } from 'contentful';

const client = createClient({
  space: '54gt9wkt1tyt',
  accessToken: 'liOQ_Dt7jUkL4Ce8Y_fbWWQqm_8tHoHunbOujFuUUE0',
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
  });
  return entries.items;
}
