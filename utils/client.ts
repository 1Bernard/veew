import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'xiv47f9k',
  dataset: 'production',
  apiVersion: '2022-11-14',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
